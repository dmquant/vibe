#!/usr/bin/env python3
"""
Migrate vibe/ repo content and deep research papers into Astro content collections.
Now runs from within the vibe/ repo root (which IS the Astro project).
"""
import os, shutil, re

CONTENT = "src/content/blog"
PUBLIC = "public"

os.makedirs(CONTENT, exist_ok=True)
os.makedirs(f"{PUBLIC}/screenshots", exist_ok=True)
os.makedirs(f"{PUBLIC}/charts", exist_ok=True)

def add_frontmatter(md_text, title, description, pub_date, category, lang="en"):
    if md_text.startswith("---"):
        return md_text
    fm = f'---\ntitle: "{title}"\ndescription: "{description}"\npubDate: "{pub_date}"\ncategory: "{category}"\nlang: "{lang}"\n---\n\n'
    return fm + md_text

# ── Institute Series (EN) ────────────────────────────────────────────────────
institute_en = [
    ("01-the-big-idea.md",     "The Big Idea — Why a Multi-Agent AI Operating System",
     "Part 1: The philosophical foundation behind ResearchOS.", "2026-04-30"),
    ("02-how-it-works.md",     "How It Works — Architecture Deep Dive",
     "Part 2: Technical architecture of Agent Route and the AI Institute.", "2026-04-30"),
    ("03-infinite-research.md","Infinite Research — The Application Layer",
     "Part 3: How the whiteboard pipeline produces autonomous research.", "2026-04-30"),
    ("04-ai-institute.md",     "AI Institute — The Research Platform",
     "Part 4: Deep dive into the 42-analyst autonomous research ecosystem.", "2026-04-30"),
    ("05-the-build-story.md",  "The Build Story — Ten Days with AI",
     "Part 5: The personal journey of building ResearchOS in 10 days.", "2026-04-30"),
    ("06-looking-forward.md",  "Looking Forward — What's Next",
     "Part 6: Future roadmap and vision for ResearchOS.", "2026-04-30"),
]

for fname, title, desc, date in institute_en:
    src = f"institute/en/{fname}"
    if os.path.exists(src):
        md = open(src, "r").read()
        md = add_frontmatter(md, title, desc, date, "institute", "en")
        md = md.replace("](../screenshots/", "](/screenshots/")
        md = md.replace("](../../screenshots/", "](/screenshots/")
        out = f"{CONTENT}/institute-en-{fname}"
        open(out, "w").write(md)
        print(f"  ✓ {out}")

# ── Institute Series (ZH) ────────────────────────────────────────────────────
institute_zh = [
    ("01-the-big-idea.md",     "核心想法 — 为什么需要多智能体AI操作系统",
     "第一篇：ResearchOS背后的哲学基础。", "2026-04-30"),
    ("02-how-it-works.md",     "它如何运作 — 架构深度解析",
     "第二篇：Agent Route和AI研究院的技术架构。", "2026-04-30"),
    ("03-infinite-research.md","无限研究 — 应用层",
     "第三篇：白板流水线如何产出自主研究。", "2026-04-30"),
    ("04-ai-institute.md",     "智研所 — 研究平台",
     "第四篇：42位分析师自主研究生态系统的深度解析。", "2026-04-30"),
    ("05-the-build-story.md",  "构建故事 — 与AI结伴的十天",
     "第五篇：在10天内构建ResearchOS的个人历程。", "2026-04-30"),
    ("06-looking-forward.md",  "展望未来 — 下一步",
     "第六篇：ResearchOS的未来路线图与愿景。", "2026-04-30"),
]

for fname, title, desc, date in institute_zh:
    src = f"institute/zh-CN/{fname}"
    if os.path.exists(src):
        md = open(src, "r").read()
        md = add_frontmatter(md, title, desc, date, "institute", "zh")
        md = md.replace("](../screenshots/", "](/screenshots/")
        md = md.replace("](../../screenshots/", "](/screenshots/")
        out = f"{CONTENT}/institute-zh-{fname}"
        open(out, "w").write(md)
        print(f"  ✓ {out}")

# ── Vibelog articles ──────────────────────────────────────────────────────────
vibelog_files = [
    ("illustrated-introduction-en.md", "Illustrated Introduction to ResearchOS",
     "A comprehensive visual tour of ResearchOS.", "2026-04-30", "en"),
    ("illustrated-introduction-zh.md", "ResearchOS 图文并茂的完整介绍",
     "ResearchOS的全面视觉导览。", "2026-04-30", "zh"),
    ("project-story-en.md", "The ResearchOS Project Story",
     "The complete narrative behind building ResearchOS.", "2026-04-30", "en"),
    ("project-story-zh.md", "ResearchOS 项目故事",
     "构建ResearchOS背后的完整叙事。", "2026-04-30", "zh"),
    ("showcase-apps-en.md", "App Showcase — Agent Route & AI Institute",
     "Visual gallery of the Agent Route and AI Institute interfaces.", "2026-04-30", "en"),
    ("showcase-apps-zh.md", "应用视觉图赏 — Agent Route 与 AI Institute",
     "Agent Route与AI Institute交互界面的精简画廊。", "2026-04-30", "zh"),
]

for fname, title, desc, date, lang in vibelog_files:
    src = f"vibelog/{fname}"
    if os.path.exists(src):
        md = open(src, "r").read()
        md = add_frontmatter(md, title, desc, date, "vibelog", lang)
        md = md.replace("](../screenshots/", "](/screenshots/")
        md = md.replace("](../../screenshots/", "](/screenshots/")
        out = f"{CONTENT}/vibelog-{fname}"
        open(out, "w").write(md)
        print(f"  ✓ {out}")

# ── Deep Research Papers ──────────────────────────────────────────────────────
RESEARCH = "../ai-institute-working-paper"
research_files = [
    ("AI_and_Inflation_EN.md", "The Dual Edges of the Blade: AI as Driver and Mitigator of Global Inflation",
     "Deep research synthesis based on 1,062 reports from the AI Institute.", "2026-05-07", "en"),
    ("AI_and_Inflation_ZH.md", "双刃剑：人工智能作为全球通胀的结构性驱动力与缓和剂",
     "基于AI研究院1,062份报告的深度综合分析。", "2026-05-07", "zh"),
]

for fname, title, desc, date, lang in research_files:
    src = f"{RESEARCH}/{fname}"
    if os.path.exists(src):
        md = open(src, "r").read()
        md = add_frontmatter(md, title, desc, date, "research", lang)
        md = md.replace("](assets/charts/", "](/charts/")
        out = f"{CONTENT}/research-{fname.lower()}"
        open(out, "w").write(md)
        print(f"  ✓ {out}")

# ── Copy static assets ───────────────────────────────────────────────────────
# Screenshots (recursive copy)
for subdir in ["agent_route_app", "ai_institute"]:
    ss_src = f"screenshots/{subdir}"
    ss_dst = f"{PUBLIC}/screenshots/{subdir}"
    if os.path.isdir(ss_src):
        os.makedirs(ss_dst, exist_ok=True)
        for f in os.listdir(ss_src):
            if not f.startswith('.'):
                shutil.copy2(f"{ss_src}/{f}", f"{ss_dst}/{f}")
        print(f"  ✓ Copied screenshots/{subdir}/")

# Charts from research
charts_src = f"{RESEARCH}/assets/charts"
if os.path.isdir(charts_src):
    for f in os.listdir(charts_src):
        if f.endswith('.png'):
            shutil.copy2(f"{charts_src}/{f}", f"{PUBLIC}/charts/{f}")
    print(f"  ✓ Copied research charts")

print(f"\n✅ Migration complete! {len(os.listdir(CONTENT))} content files.")
