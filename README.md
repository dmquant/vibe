# ResearchOS · Vibe

AI-Powered Multi-Agent Research Platform — Documentation, Deep Research & Analysis.

This repository is both the **source content** and the **Astro-powered website** for the ResearchOS ecosystem, comprising the **Agent Route** (control plane) and **AI Institute** (research platform).

🌐 **Live Site**: _coming soon_

---

## Quick Start

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run sync      # Pull latest AI Institute research
```

## Repository Structure

```
vibe/
├── institute/              # 📖 6-Part Institute Series (source markdown)
│   ├── en/                 #    English versions
│   └── zh-CN/              #    Simplified Chinese versions
├── vibelog/                 # 📝 Illustrated guides, project story, showcases
├── screenshots/             # 📸 App screenshots (Agent Route & AI Institute)
│
├── src/                    # 🚀 Astro website source
│   ├── content/blog/       #    Content collections (auto-generated from above)
│   ├── components/         #    Header, Footer, BaseHead, etc.
│   ├── layouts/            #    BlogPost layout
│   ├── pages/              #    Homepage, blog index, about
│   └── styles/             #    Global dark theme CSS
│
├── public/                 # 📁 Static assets (screenshots, charts)
│   ├── screenshots/        #    Copied from ./screenshots/
│   └── charts/             #    Research data visualizations
│
├── sync_research.py        # 🔄 Auto-update: fetches latest AI Institute research
├── migrate_content.py      # 🔧 Builds Astro content from source markdown
├── astro.config.mjs        # ⚙️ Astro configuration
├── package.json            # 📦 Dependencies
└── .github/workflows/      # 🤖 GitHub Actions for autonomous sync
```

## Content Architecture

### Source Content (human-authored)

| Directory | Description |
|-----------|-------------|
| `institute/en/` | 6-part deep dive series in English |
| `institute/zh-CN/` | 6-part deep dive series in Chinese |
| `vibelog/` | Illustrated introductions, project story, app showcase |
| `screenshots/` | High-quality app screenshots |

### Generated Content (Astro collections)

The `migrate_content.py` script transforms source markdown into Astro content collections at `src/content/blog/`, adding YAML frontmatter with metadata (title, date, category, language).

The `sync_research.py` script autonomously pulls new research from the AI Institute API and creates additional articles prefixed with `auto-`.

### Categories

- **`institute`** — The 6-part documentation series
- **`vibelog`** — Guides, showcases, and illustrated introductions
- **`research`** — Deep data-driven research papers (e.g., AI × Inflation)

---

## Auto-Update Mechanism

The website can autonomously update with new research via:

```bash
# Manual sync
python sync_research.py --max-items 10

# Or via npm
npm run sync
```

A GitHub Actions workflow (`.github/workflows/sync-research.yml`) runs daily at 08:00 UTC to:
1. Fetch latest whiteboard sessions, mailbox threads, and trending topics
2. Create/update markdown articles in `src/content/blog/`
3. Rebuild and commit

---

## 📖 Table of Contents

### The Institute Series (English)
1. [The Big Idea](institute/en/01-the-big-idea.md) — Why a Multi-Agent AI Operating System
2. [How It Works](institute/en/02-how-it-works.md) — Architecture Deep Dive
3. [Infinite Research](institute/en/03-infinite-research.md) — The Application Layer
4. [AI Institute](institute/en/04-ai-institute.md) — The Research Platform
5. [The Build Story](institute/en/05-the-build-story.md) — Ten Days with AI
6. [Looking Forward](institute/en/06-looking-forward.md) — What's Next

### 智研所系列 (简体中文)
1. [核心想法](institute/zh-CN/01-the-big-idea.md)
2. [它如何运作](institute/zh-CN/02-how-it-works.md)
3. [无限研究](institute/zh-CN/03-infinite-research.md)
4. [智研所](institute/zh-CN/04-ai-institute.md)
5. [构建故事](institute/zh-CN/05-the-build-story.md)
6. [展望未来](institute/zh-CN/06-looking-forward.md)

### Guides
- [Illustrated Introduction](vibelog/illustrated-introduction-en.md) / [图文介绍](vibelog/illustrated-introduction-zh.md)
- [Project Story](vibelog/project-story-en.md) / [项目故事](vibelog/project-story-zh.md)
- [App Showcase](vibelog/showcase-apps-en.md) / [应用图赏](vibelog/showcase-apps-zh.md)

---

## Tech Stack

- **[Astro](https://astro.build/)** v6 — Static site generator
- **Vanilla CSS** — Dark terminal/Bloomberg aesthetic
- **Python** — Content migration and API sync scripts
- **GitHub Actions** — Autonomous daily updates

---

Built with ◆ by the ResearchOS team.
