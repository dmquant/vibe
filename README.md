# ResearchOS · Vibe

A bilingual documentation & research site for the **ResearchOS** ecosystem — covering **Agent Route** (orchestration control plane) and **AI Institute** (multi-agent stock research platform).

Built with [Astro](https://astro.build/) · Dark terminal aesthetic · EN / 中文

---

## Quick Start

```bash
npm install
npm run dev       # localhost:4321
npm run build     # Production build
```

## Repository Structure

```
vibe/
├── institute/              # 📖 6-Part Series (source markdown)
│   ├── en/                 #    English
│   └── zh-CN/              #    简体中文
├── vibelog/                 # 📝 Guides, introductions, showcases
│
├── src/                    # 🚀 Astro website
│   ├── content/blog/       #    30 articles (auto-generated from sources)
│   ├── components/         #    Header, Footer, BaseHead
│   ├── layouts/            #    BlogPost layout with bilingual toggle
│   ├── pages/              #    Homepage, articles listing, about
│   └── styles/             #    Global dark theme
│
├── public/                 # 📁 Static assets
│   ├── screenshots/        #    Agent Route & AI Institute screenshots
│   └── charts/             #    Research data visualizations
│
└── .github/workflows/      # 🤖 GitHub Actions (daily sync)
```

> `*.py` and `*.json` files are gitignored — they live locally for dev/build tooling.

## Content — 30 Articles

| Category | EN | ZH | Description |
|----------|:--:|:--:|-------------|
| 📊 Deep Research | 5 | 3 | AI & Inflation, Architecture Reference, Multi-Agent Framework, Ecosystem Analysis, KG Proposal |
| 🏛️ Institute Series | 7 | 7 | 6-part deep dive + series index |
| 📝 Vibelog & Guides | 4 | 4 | Illustrated intro, full introduction, project story, app showcase |

All articles support bilingual switching — each article links to its EN/ZH counterpart.

---

## 📖 Table of Contents

### The Institute Series

| # | English | 中文 |
|---|---------|------|
| 0 | [Series Index](institute/README.md) | [系列索引](institute/README.zh-CN.md) |
| 1 | [The Big Idea](institute/en/01-the-big-idea.md) | [核心想法](institute/zh-CN/01-the-big-idea.md) |
| 2 | [How It Works](institute/en/02-how-it-works.md) | [它如何运作](institute/zh-CN/02-how-it-works.md) |
| 3 | [Infinite Research](institute/en/03-infinite-research.md) | [无限研究](institute/zh-CN/03-infinite-research.md) |
| 4 | [AI Institute](institute/en/04-ai-institute.md) | [智研所](institute/zh-CN/04-ai-institute.md) |
| 5 | [The Build Story](institute/en/05-the-build-story.md) | [构建故事](institute/zh-CN/05-the-build-story.md) |
| 6 | [Looking Forward](institute/en/06-looking-forward.md) | [展望未来](institute/zh-CN/06-looking-forward.md) |

### Guides & Vibelog

| English | 中文 |
|---------|------|
| [Complete Introduction](vibelog/introduction-en.md) | [项目完整介绍](vibelog/introduction-zh.md) |
| [Illustrated Introduction](vibelog/illustrated-introduction-en.md) | [图文并茂介绍](vibelog/illustrated-introduction-zh.md) |
| [Project Story](vibelog/project-story-en.md) | [项目故事](vibelog/project-story-zh.md) |
| [App Showcase](vibelog/showcase-apps-en.md) | [应用视觉图赏](vibelog/showcase-apps-zh.md) |

---

## Tech Stack

- **[Astro](https://astro.build/)** v6 — Static site framework
- **Vanilla CSS** — Dark Bloomberg-terminal aesthetic
- **GitHub Actions** — Autonomous daily content sync

---

Built with ◆ by the ResearchOS team.
