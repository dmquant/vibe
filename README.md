# ResearchOS Vibe

## English

ResearchOS Vibe is the public-facing web experience for ResearchOS and AI
Institute. It presents AI-assisted research as an investable, inspectable, and
repeatable operating system: human researchers define questions and judgment
standards; AI analysts continuously gather evidence, produce research outputs,
track thesis changes, and convert dense report graphs into reader-friendly
decision support.

The site is designed for investors, founders, operators, and research teams who
need more than isolated reports. It shows how an AI research organization can
turn daily market information, analyst handoffs, whiteboard threads, mailbox
signals, deep research, and recap dashboards into a living knowledge product.

Vibe is not the private research engine itself. It is the static publishing
layer: a business-facing site and investor console that exposes sanitized AI
Institute outputs without shipping secrets or local source data.

### Product Positioning

AI Institute is a multi-agent research workflow for financial and strategic
decision-making. Its core value is not replacing human researchers, but giving
them a parallel research team that can work continuously, preserve provenance,
and surface decision-relevant signals.

Vibe turns that workflow into a usable product surface:

- A public introduction to ResearchOS and AI Institute.
- A daily investor console for morning briefs, market tape, research-chain
  signals, and risk alerts.
- A searchable report library for AI analyst outputs.
- Deep research pages that retain source context and thesis lineage.
- Critical recap dashboards that compare past views with later evidence and
  market performance.
- Interactive presentation pages for business communication and handover.

### Business Use Cases

| Use case | What Vibe provides |
| --- | --- |
| Investment research | Daily brief dashboards, thesis trackers, analyst reports, deep research pages |
| Research operations | Evidence provenance, analyst handoffs, change radar, recap dashboards |
| Executive communication | Bilingual narratives, presentation routes, visual research summaries |
| Product demonstration | A live static site showing how AI research can become a decision-support product |
| Handover and continuity | Stable routes, generated contracts, and repeatable publishing workflows |

### Key Public Routes

| Route | Business purpose |
| --- | --- |
| `/` | ResearchOS and AI Institute landing experience |
| `/investor/` | AI Institute investor console |
| `/investor/daily/` | Latest daily morning brief dashboard |
| `/investor/reports/[slug]/` | AI analyst report pages and reader reports |
| `/investor/deep-research/[slug]/` | Long-form deep research |
| `/investor/recaps/` | Critical recap dashboards |
| `/graph/` | Research graph and map-style exploration |
| `/presentations/ai-human-research/` | Interactive presentation: AI working in parallel with human researchers |
| `/blog/` | Public articles, project narratives, and generated public posts |

### Operating Model

Vibe is a standalone Astro static site. It can be deployed independently on
Vercel or any static host. Operational data pipelines, private source material,
and API keys are managed separately from this public repository.

The public repository contains only sanitized generated artifacts:

```text
src/generated/investor/
public/investor-assets/
public/investor-data/
public/investor-downloads/
```

Private source data, API keys, and raw AI Institute outputs are not part of this
public repository.

## 简体中文

ResearchOS Vibe 是 ResearchOS 与 AI Institute 的公开网站和投资研究展示台。它展示的不是单篇
AI 报告，而是一套可运行、可追溯、可复盘的 AI 研究操作系统：人类研究员负责提出问题、设定判断标准和做最终决策；AI
分析师持续收集证据、生成研究、跟踪观点变化，并把复杂的内部报告关系重组为更适合人阅读和决策的内容。

这个网站面向投资人、创业者、经营者和研究团队。它回答一个核心问题：当 AI 不再只是聊天工具，而是可以在合适算力、环境和工作流中持续演化的研究伙伴时，金融投资和战略研究应该如何组织？

Vibe 不是私有研究引擎本身，而是公开的静态发布层。它把 AI Institute 中已经清洗过、适合公开展示的研究成果发布出来，同时避免把密钥或本地数据源放入静态网站仓库。

### 产品定位

AI Institute 是一个面向金融与战略决策的多智能体研究工作流。它的价值不是替代人类研究员，而是为人类研究员提供一支可以并行工作的 AI 研究团队：持续读材料、生成证据、保留来源关系、追踪观点漂移，并把结果转化为可以支持投资判断的研究产品。

Vibe 把这套工作流呈现为一个可访问的产品界面：

- ResearchOS 与 AI Institute 的公开业务介绍。
- 面向投资研究的每日晨会简报看板。
- AI 分析师报告库与人类友好的 reader report。
- 保留来源、证据和观点脉络的深度研究页面。
- 对关键主题进行时间线复盘和市场表现对照的 recap dashboard。
- 用于路演、汇报和交接的交互式展示页面。

### 业务场景

| 场景 | Vibe 提供的能力 |
| --- | --- |
| 投资研究 | 每日简报、市场信号、观点追踪、深度研究、风险提示 |
| 研究管理 | 证据来源、分析师交接、变化雷达、复盘仪表盘 |
| 管理层沟通 | 双语叙事、交互式演示、可视化研究摘要 |
| 产品展示 | 一个真实运行的 AI 研究产品前台 |
| 长期交接 | 稳定路由、生成数据契约、可重复发布流程 |

### 关键公开入口

| 路由 | 业务用途 |
| --- | --- |
| `/` | ResearchOS 与 AI Institute 首页 |
| `/investor/` | AI Institute 投资研究台 |
| `/investor/daily/` | 最新晨会简报看板 |
| `/investor/reports/[slug]/` | AI 分析师报告和 reader report |
| `/investor/deep-research/[slug]/` | 长篇深度研究 |
| `/investor/recaps/` | 关键主题复盘仪表盘 |
| `/graph/` | 研究图谱与地图式探索 |
| `/presentations/ai-human-research/` | 交互式中文演示：AI 如何与人类研究员并行 |
| `/blog/` | 公开文章、项目叙事和生成内容 |

### 运营边界

Vibe 是一个可独立部署的 Astro 静态网站。Vercel 构建不需要读取密钥，也不需要解密私有简报。运营数据管线、私有源材料和 API key 不属于这个公开仓库。

可以提交到 Vibe 的是已经清洗过的公开发布物：

```text
src/generated/investor/
public/investor-assets/
public/investor-data/
public/investor-downloads/
```

私有数据、API key 和原始 AI Institute 输出不会进入这个公开仓库。

## Deployment

Use `vibe/` as the Vercel project root.

```text
Install command: npm install
Build command:   npm run build
Output:          dist
Node:            >=22.12.0
```

The production build is intentionally self-contained:

```bash
npm install
npm run dev
npm run build
```

## Technology

- Astro 6 static site framework
- Vanilla CSS with light/dark monochrome theme support
- Leaflet for map-oriented UI
- Static JSON contracts for investor data
- Generated chart, document, and image assets published as static files
