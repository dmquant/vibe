#!/usr/bin/env python3
"""
Convert approved content items into Astro blog posts.
Reads source markdown, injects frontmatter, strips duplicate H1, writes to src/content/blog/.
"""
import os, re, textwrap
from datetime import datetime

BLOG_DIR = os.path.join(os.path.dirname(__file__), "src", "content", "blog")
ROOT = os.path.dirname(os.path.dirname(__file__))  # ResearchOS root

ITEMS = [
    # (source_path_relative_to_ROOT, slug, title, description, category, lang, pub_date)
    (
        "vibe/vibelog/introduction-en.md",
        "vibelog-introduction-en",
        "AI Institute · Complete Introduction",
        "A comprehensive introduction to the AI Stock Research Institute for investors, portfolio managers, and allocators.",
        "vibelog", "en", "2026-04-30"
    ),
    (
        "vibe/vibelog/introduction-zh.md",
        "vibelog-introduction-zh",
        "AI 研究院 · 项目完整介绍",
        "面向投资经理、配置机构、研究负责人的AI股票研究院项目完整导读。",
        "vibelog", "zh", "2026-04-30"
    ),
    (
        "ai-institute-working-paper/AI_Institute_Research_Paper_EN.md",
        "research-institute_paper_en",
        "The AI Institute: A Next-Generation Autonomous Multi-Agent Framework for Financial Research",
        "Comprehensive analysis of the AI Institute's architecture, operational mechanisms, and empirical outcomes based on recent operational data.",
        "research", "en", "2026-05-01"
    ),
    (
        "ai-institute-working-paper/AI_Institute_Research_Paper_ZH.md",
        "research-institute_paper_zh",
        "AI 研究院：下一代金融研究的多智能体协同框架",
        "深入分析AI研究院的架构、运行机制，并基于近期运行数据展示其实证成果。",
        "research", "zh", "2026-05-01"
    ),
    (
        "ai-institute-working-paper/AI_Institute_Ecosystem_Analysis_EN.md",
        "research-ecosystem_analysis_en",
        "Deep Analysis: AI Institute Ecosystem Architecture",
        "Long-term empirical analysis of the AI Institute's multi-agent research framework with structural distribution of research capabilities.",
        "research", "en", "2026-05-02"
    ),
    (
        "ai-institute-working-paper/AI_Institute_Ecosystem_Analysis_ZH.md",
        "research-ecosystem_analysis_zh",
        "深度分析：AI研究院生态系统架构",
        "对AI研究院多智能体研究框架的长期实证分析，可视化研究能力在类别、模型和工作负载上的结构分布。",
        "research", "zh", "2026-05-02"
    ),
    (
        "ai-institute-working-paper/architecture.md",
        "research-architecture_en",
        "AI Institute — Architecture Reference",
        "Complete architecture reference of the AI Institute system: deployment shape, data plane, request plane, and individual subsystems.",
        "research", "en", "2026-05-06"
    ),
    (
        "docs/node_proposal.md",
        "research-node_proposal_en",
        "Industry Chain + Knowledge Graph Proposal",
        "A specification describing the full impact of introducing a chain/KG layer across every part of the AI Institute project.",
        "research", "en", "2026-05-04"
    ),
    (
        "vibe/institute/README.md",
        "institute-en-00-series-index",
        "ResearchOS · An Open Series — Index",
        "A six-part series index introducing ResearchOS, a personal AI orchestration platform, for non-technical readers.",
        "institute", "en", "2026-04-29"
    ),
    (
        "vibe/institute/README.zh-CN.md",
        "institute-zh-00-series-index",
        "ResearchOS · 公开文章系列 — 索引",
        "一套六篇文章系列索引，介绍ResearchOS——一个个人搭建的AI协同平台。",
        "institute", "zh", "2026-04-29"
    ),
]

def convert_item(source_rel, slug, title, description, category, lang, pub_date):
    source_path = os.path.join(ROOT, source_rel)
    if not os.path.exists(source_path):
        print(f"  ⚠ SKIP (not found): {source_rel}")
        return False

    with open(source_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Strip any existing frontmatter
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            content = parts[2].strip()

    # Strip the first H1 line if it exists (title comes from frontmatter)
    lines = content.split("\n")
    if lines and lines[0].startswith("# "):
        lines = lines[1:]
    content = "\n".join(lines).strip()

    # Escape quotes in title/description for YAML
    safe_title = title.replace('"', '\\"')
    safe_desc = description.replace('"', '\\"')

    frontmatter = f'''---
title: "{safe_title}"
description: "{safe_desc}"
pubDate: "{pub_date}"
category: "{category}"
lang: "{lang}"
---
'''

    out_path = os.path.join(BLOG_DIR, f"{slug}.md")
    os.makedirs(BLOG_DIR, exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(frontmatter + "\n" + content + "\n")

    line_count = content.count("\n") + 1
    print(f"  ✅ {slug}.md ({line_count} lines)")
    return True


def main():
    print(f"🔄 Converting {len(ITEMS)} approved items...\n")
    success = 0
    for item in ITEMS:
        if convert_item(*item):
            success += 1

    print(f"\n✅ Done: {success}/{len(ITEMS)} items converted")
    print(f"   Output: {BLOG_DIR}/")
    
    # List final content
    files = sorted(os.listdir(BLOG_DIR))
    md_files = [f for f in files if f.endswith(".md") and not f.startswith("_")]
    print(f"   Total blog posts: {len(md_files)}")


if __name__ == "__main__":
    main()
