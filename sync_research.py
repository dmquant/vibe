#!/usr/bin/env python3
"""
Auto-Update Mechanism for ResearchOS Website
=============================================
Fetches the latest research outputs from the AI Institute API,
converts them to Astro-compatible markdown with frontmatter,
and drops them into src/content/blog/ for automatic inclusion.

Usage:
  python sync_research.py                    # Sync latest daily reports
  python sync_research.py --days 7           # Sync last 7 days
  python sync_research.py --whiteboard-only  # Only sync whiteboard summaries

Can be run as a cron job or GitHub Action for autonomous updates.
"""
import os, sys, json, re, hashlib, argparse
from datetime import datetime, timedelta
from urllib.request import Request, urlopen
from urllib.error import URLError

# ── Config ──────────────────────────────────────────────────────────────────
API_BASE = "https://ai-institute-worker.dmquant.workers.dev"
API_KEY  = os.environ.get("INSTITUTE_API_KEY", "sk_ins_wDo3xIn0N7p5951vdMmRKarwb8r0b6zg")
CONTENT_DIR = os.path.join(os.path.dirname(__file__), "src", "content", "blog")
PUBLIC_DIR  = os.path.join(os.path.dirname(__file__), "public")
MANIFEST    = os.path.join(CONTENT_DIR, "_sync_manifest.json")

def api_get(path):
    """Fetch JSON from the AI Institute API."""
    url = f"{API_BASE}{path}"
    req = Request(url, headers={"X-API-Key": API_KEY})
    try:
        with urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode())
    except (URLError, json.JSONDecodeError) as e:
        print(f"  ⚠ API error for {path}: {e}")
        return None

def slugify(text):
    """Create a URL-safe slug from text."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text[:80].strip('-')

def content_hash(text):
    """Hash content to detect changes."""
    return hashlib.md5(text.encode()).hexdigest()[:12]

def load_manifest():
    """Load the sync manifest tracking previously synced items."""
    if os.path.exists(MANIFEST):
        return json.load(open(MANIFEST))
    return {"synced": {}, "last_sync": None}

def save_manifest(manifest):
    """Save the sync manifest."""
    manifest["last_sync"] = datetime.utcnow().isoformat()
    with open(MANIFEST, "w") as f:
        json.dump(manifest, f, indent=2)

def write_article(slug, title, description, content, pub_date, category="research", lang="en"):
    """Write a markdown file with Astro-compatible frontmatter."""
    os.makedirs(CONTENT_DIR, exist_ok=True)
    
    # Clean the content: remove any existing frontmatter
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            content = parts[2].strip()
    
    # Remove the first H1 if it matches the title (avoid duplication)
    lines = content.split('\n')
    if lines and lines[0].startswith('# '):
        lines = lines[1:]
        content = '\n'.join(lines).strip()
    
    safe_title = title.replace('"', '\\"')
    safe_desc = description.replace('"', '\\"')
    frontmatter = f"""---
title: "{safe_title}"
description: "{safe_desc}"
pubDate: "{pub_date}"
category: "{category}"
lang: "{lang}"
---
"""
    filepath = os.path.join(CONTENT_DIR, f"auto-{slug}.md")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(frontmatter + "\n" + content)
    
    return filepath

# ══════════════════════════════════════════════════════════════════════════════
# Sync Strategies
# ══════════════════════════════════════════════════════════════════════════════

def sync_whiteboard_sessions(manifest, max_items=10):
    """Fetch and sync completed whiteboard session summaries."""
    print("📋 Syncing whiteboard sessions...")
    data = api_get("/api/whiteboard/sessions")
    if not data:
        return 0
    
    sessions = data.get("sessions", [])
    count = 0
    
    for session in sessions[:max_items]:
        board_id = session.get("board_id", "")
        topic = session.get("root_topic", "Untitled Session")
        question = session.get("root_question", "")
        status = session.get("status", "unknown")
        card_count = session.get("card_count", 0)
        
        # Skip if already synced with same card count
        key = f"wb-{board_id}"
        if key in manifest["synced"] and manifest["synced"][key].get("cards") == card_count:
            continue
        
        # Determine language
        has_cjk = bool(re.search(r'[\u4e00-\u9fff]', topic))
        lang = "zh" if has_cjk else "en"
        
        # Build topic EN/ZH
        topic_en = session.get("root_topic_en") or session.get("root_topic", topic)
        question_en = session.get("root_question_en") or question
        
        created = datetime.utcfromtimestamp(session.get("created_at", 0) / 1000)
        pub_date = created.strftime("%Y-%m-%d")
        
        # Construct article content
        root_analyst = session.get("root_analyst_id", "unknown")
        next_analyst = session.get("next_analyst", {})
        
        content = f"""# {topic_en}

## Research Question

> {question_en}

## Session Metadata

| Field | Value |
|-------|-------|
| Board ID | `{board_id}` |
| Status | {status} |
| Cards Generated | {card_count} |
| Lead Analyst | {root_analyst} |
| Date | {pub_date} |

## Summary

This whiteboard research session explores: **{topic_en}**

The session was initiated by the **{root_analyst}** and has generated {card_count} research cards through adversarial multi-agent collaboration.

---
*Auto-synced from the AI Institute Whiteboard Pipeline.*
"""
        slug = slugify(f"wb-{topic_en[:60]}-{board_id[:8]}")
        desc = question_en[:200] if question_en else f"Whiteboard session: {topic_en[:100]}"
        
        filepath = write_article(slug, topic_en, desc, content, pub_date, "research", "en")
        manifest["synced"][key] = {"cards": card_count, "file": filepath, "synced_at": datetime.utcnow().isoformat()}
        count += 1
        print(f"  ✓ {topic_en[:60]}...")
    
    return count

def sync_mailbox_threads(manifest, max_items=10):
    """Fetch and sync recent mailbox handoff results."""
    print("📬 Syncing mailbox threads...")
    data = api_get("/api/mailbox")
    if not data:
        return 0
    
    threads = data.get("threads", [])
    count = 0
    
    for thread in threads[:max_items]:
        thread_id = thread.get("thread_id", "")
        subject = thread.get("subject", "Untitled Thread")
        status = thread.get("status", "unknown")
        msg_count = thread.get("message_count", 0)
        
        # Skip incomplete or already synced
        if status != "completed":
            continue
        key = f"mb-{thread_id}"
        if key in manifest["synced"]:
            continue
        
        sender = thread.get("sender", {}).get("name_en", "Unknown")
        recipient = thread.get("recipient", {}).get("name_en", "Unknown")
        body = thread.get("latest_body", "")
        
        created = datetime.utcfromtimestamp(thread.get("created_at", 0) / 1000)
        pub_date = created.strftime("%Y-%m-%d")
        
        # Clean subject
        subject_clean = re.sub(r'^\[auto-handoff\]\s*', '', subject).strip()
        has_cjk = bool(re.search(r'[\u4e00-\u9fff]', subject_clean))
        
        content = f"""## Handoff: {sender} → {recipient}

**Subject:** {subject_clean}

**Status:** {status} ({msg_count} messages)

### Result

{body}

---
*Auto-synced from the AI Institute Mailbox Protocol.*
"""
        slug = slugify(f"mb-{subject_clean[:50]}-{thread_id[:8]}")
        desc = f"Mailbox handoff from {sender} to {recipient}: {subject_clean[:100]}"
        
        filepath = write_article(slug, subject_clean, desc, content, pub_date, "research", "en" if not has_cjk else "zh")
        manifest["synced"][key] = {"file": filepath, "synced_at": datetime.utcnow().isoformat()}
        count += 1
        print(f"  ✓ {subject_clean[:60]}...")
    
    return count

def sync_topic_pool(manifest, max_items=15):
    """Fetch and create a curated 'trending topics' article."""
    print("🔥 Syncing promoted topics...")
    data = api_get("/api/whiteboard/topic-pool?status=promoted")
    if not data:
        return 0
    
    topics = data if isinstance(data, list) else data.get("entries", data.get("topics", []))
    if not topics:
        return 0
    
    # Only update if pool changed
    pool_hash = content_hash(json.dumps([t.get("pool_id") for t in topics[:15]]))
    key = "topic-pool-promoted"
    if key in manifest["synced"] and manifest["synced"][key].get("hash") == pool_hash:
        print("  ─ No changes detected")
        return 0
    
    pub_date = datetime.utcnow().strftime("%Y-%m-%d")
    
    rows = []
    for t in topics[:15]:
        topic_en = t.get("topic_en") or t.get("topic", "")
        score = t.get("score", 0)
        priority = t.get("priority", "")
        analyst = t.get("suggested_analyst_id", "")
        rows.append(f"| {topic_en[:80]} | {score} | {priority} | {analyst} |")
    
    rows_text = "\n".join(rows)
    content = f"""## Current Research Agenda

The AI Institute's Topic Seed Pool curates the most urgent and high-conviction research questions across all analyst domains. Below are the top {len(rows)} promoted topics currently under active investigation.

| Topic | Score | Priority | Assigned Analyst |
|-------|------:|----------|-----------------| 
{rows_text}

---

*Last updated: {pub_date}*
*Auto-synced from the AI Institute Topic Pool.*
"""
    slug = f"trending-topics-{pub_date}"
    filepath = write_article(slug, f"AI Institute: Trending Research Topics ({pub_date})",
                              "The latest promoted research topics from the AI Institute's topic seed pool.",
                              content, pub_date, "research", "en")
    manifest["synced"][key] = {"hash": pool_hash, "file": filepath, "synced_at": datetime.utcnow().isoformat()}
    print(f"  ✓ Trending topics article updated")
    return 1

def sync_vibelog_entries(manifest, max_items=20):
    """Fetch and sync vibelog entries from the new /api/vibelog API."""
    print("📝 Syncing vibelog entries...")

    # Fetch recent entries for both languages
    count = 0
    for lang in ["en", "zh"]:
        data = api_get(f"/api/vibelog?lang={lang}&limit={max_items}")
        if not data:
            continue

        entries = data if isinstance(data, list) else data.get("entries", [])
        for entry in entries:
            slug = entry.get("slug", "")
            if not slug:
                continue

            key = f"vl-{slug}"
            entry_hash = content_hash(json.dumps(entry, sort_keys=True, default=str))
            if key in manifest["synced"] and manifest["synced"][key].get("hash") == entry_hash:
                continue

            # Fetch full markdown content
            md_data = api_get(f"/api/vibelog/{slug}")
            if not md_data:
                continue

            content = md_data.get("content", "")
            meta = md_data.get("entry", {})
            title = meta.get("title", slug.replace("-", " ").title())
            vl_type = meta.get("type", "vibelog")
            pub_date = meta.get("date", datetime.utcnow().strftime("%Y-%m-%d"))
            vl_lang = meta.get("lang", lang)

            desc_text = content[:200].replace("\n", " ").strip()
            if len(desc_text) > 150:
                desc_text = desc_text[:150] + "..."

            filepath = write_article(
                f"vl-{slug}", title, desc_text, content,
                pub_date, "vibelog", vl_lang
            )
            manifest["synced"][key] = {
                "hash": entry_hash,
                "file": filepath,
                "type": vl_type,
                "synced_at": datetime.utcnow().isoformat()
            }
            count += 1
            print(f"  ✓ [{vl_lang}] {title[:60]}...")

    return count


def sync_market_snapshot(manifest):
    """Fetch latest market data and create a daily snapshot article."""
    print("📈 Syncing market data snapshot...")

    # Check data freshness first
    manifest_data = api_get("/api/data/manifest")
    if not manifest_data:
        return 0

    pub_date = datetime.utcnow().strftime("%Y-%m-%d")
    key = f"mkt-{pub_date}"
    if key in manifest["synced"]:
        print("  ─ Today's snapshot already exists")
        return 0

    # Fetch all available topics
    topics = ["oil_prices", "markets_overnight_us", "markets_close_cn",
              "yield_curve_us", "sector_etf_closes_us", "fx_majors"]

    sections = []
    sources_all = []
    for topic in topics:
        data = api_get(f"/api/data/{topic}/latest")
        if not data or data.get("is_stale"):
            continue

        payload = data.get("payload", {})
        work_date = data.get("work_date", pub_date)
        sources = data.get("sources", [])
        sources_all.extend(sources)

        # Format payload as table
        rows = []
        for k, v in payload.items():
            label = k.replace("_", " ").title()
            if isinstance(v, float):
                rows.append(f"| {label} | {v:.4f} |")
            else:
                rows.append(f"| {label} | {v} |")

        rows_text = "\n".join(rows)
        topic_title = topic.replace("_", " ").title()
        section = f"""### {topic_title}
*Data date: {work_date} · Confidence: {data.get('confidence', 'N/A')}*

| Metric | Value |
|--------|-------|
{rows_text}
"""
        sections.append(section)

    if not sections:
        print("  ⚠ No fresh data available")
        return 0

    sections_text = "\n\n".join(sections)
    unique_sources = list(set(sources_all))
    sources_text = "\n".join([f"- {s}" for s in unique_sources[:10]])

    content = f"""## Daily Market Snapshot — {pub_date}

Auto-generated from the AI Institute's verified data layer (`/api/data/*`).
All values sourced from FMP (primary) with Stooq/Sina fallback.

{sections_text}

---

### Data Sources
{sources_text}

*Auto-synced from the AI Institute Data API.*
"""
    filepath = write_article(
        f"market-snapshot-{pub_date}",
        f"Daily Market Snapshot — {pub_date}",
        f"Verified market data across 6 topics for {pub_date}.",
        content, pub_date, "research", "en"
    )
    manifest["synced"][key] = {"file": filepath, "synced_at": datetime.utcnow().isoformat()}
    print(f"  ✓ Market snapshot for {pub_date}")
    return 1


# ══════════════════════════════════════════════════════════════════════════════
# Main
# ══════════════════════════════════════════════════════════════════════════════

def main():
    parser = argparse.ArgumentParser(description="Sync AI Institute research to the Astro website.")
    parser.add_argument("--days", type=int, default=7, help="Number of days to look back")
    parser.add_argument("--whiteboard-only", action="store_true", help="Only sync whiteboards")
    parser.add_argument("--vibelog-only", action="store_true", help="Only sync vibelog entries")
    parser.add_argument("--max-items", type=int, default=10, help="Max items per category")
    parser.add_argument("--dry-run", action="store_true", help="Preview without writing")
    args = parser.parse_args()
    
    print(f"🔄 ResearchOS Auto-Sync — {datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')}")
    print(f"   Looking back {args.days} days, max {args.max_items} items per category\n")
    
    manifest = load_manifest()
    total = 0

    if args.vibelog_only:
        total += sync_vibelog_entries(manifest, args.max_items)
    elif args.whiteboard_only:
        total += sync_whiteboard_sessions(manifest, args.max_items)
    else:
        total += sync_whiteboard_sessions(manifest, args.max_items)
        total += sync_mailbox_threads(manifest, args.max_items)
        total += sync_topic_pool(manifest)
        total += sync_vibelog_entries(manifest, args.max_items)
        total += sync_market_snapshot(manifest)
    
    save_manifest(manifest)
    
    print(f"\n✅ Sync complete: {total} new articles added")
    print(f"   Total tracked items: {len(manifest['synced'])}")
    print(f"   Manifest saved to: {MANIFEST}")
    
    if total > 0:
        print(f"\n💡 Run 'npm run build' to rebuild the site with new content.")

if __name__ == "__main__":
    main()
