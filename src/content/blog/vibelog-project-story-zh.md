---
title: "ResearchOS 项目故事"
description: "构建ResearchOS背后的完整叙事。"
pubDate: "2026-04-30"
category: "vibelog"
lang: "zh"
---

# 用 Vibe Coding 造一座 AI 研究院

*写给不常写代码、但对 AI 如何把想法一步步变成系统这件事感到好奇的人。*

## 一句想法，最后长成了一座“机构”

这个项目一开始，并不是那种传统的软件立项方式。

没有一份厚厚的需求文档，没有先画完半年路线图，也不是先把所有模块都严格定义好再开工。

它更像是一连串带着野心的对话：

“能不能做一个像真实研究机构一样运转的 AI 股票研究院？”

重点不是一个聊天机器人，也不是一个单纯写报告的工具，而是一整套“研究组织”。

这意味着什么？

意味着要有不同角色的分析师，要有工作流，要能记住历史，要有会话，要有项目，要有内部协作，要有消息和邮箱，要有日报，要有白板式连续研究，要有登录验证，还要能把所有结果归档到云端。

而且还有一个非常关键的约束：系统**不能直接去调用 Gemini、Claude、Codex 的 API**，所有模型能力都要交给统一的 **Agent Route** 来调度。这样，整个系统才不会像一堆零散接口拼出来的工具，而更像一个有“总控中枢”的机构。

所以，这个项目真正经历的，不是“做一个功能”，而是“把一个想象中的研究组织慢慢落地”。

## 如果用非技术语言解释，这个项目到底是什么

从技术上说，它是一个基于 Cloudflare 的 AI 股票研究平台。

但如果换成更容易理解的话，它更像是：

一个把“研究员协作”“机构记忆”“自动化流程”“成果归档”和“对外展示”放到同一个空间里的数字研究院。

可以把它理解成这样：

- **前端页面**：就是人真正看到和操作的界面，像工作台、分析师主页、会话页面、邮箱入口、白板入口等。
- **Worker 后端**：像总调度台，负责接请求、校验权限、启动工作流、写入存储、和 Agent Route 通信。
- **Agent Route**：像模型总控中心，负责会话、项目、工作流，以及到底由哪一种“hand”来执行任务。
- **D1**：像台账，保存结构化数据，例如会话、工作流运行记录、邮箱线程、文件索引等。
- **R2**：像档案室，负责保存生成的报告、研究附件、归档文件、白板成果。
- **KV**：像便利贴墙，用来放临时缓存和快速读取的数据。
- **Vectorize**：像“按语义记忆”的资料库，不是只记住文件名，而是记住一份研究到底在讲什么。

如果你不熟悉这些云服务，可以记一个非常直观的比喻：

- **Worker** 是前台主管。
- **D1** 是账本。
- **R2** 是文件柜。
- **KV** 是便利贴。
- **Vectorize** 是这家机构的“记忆力”。

## 真正厉害的地方，不是某一个功能

这个项目最有意思的地方，不是某一个页面有多漂亮，也不是某一个接口有多复杂。

真正重要的是，它的结构在不断升级。

它最开始只是一个“能跑起来的应用”。

后来慢慢变成了：

- 有角色分工的分析团队，
- 有例行任务的工作系统，
- 有历史沉淀的研究档案，
- 有内部消息流转的协作网络，
- 有争论与跟进机制的连续研究环境。

这正是很多人对 vibe coding 最好奇的部分：为什么一个看上去像“边聊边做”的项目，最后会越长越像一个真正的系统？

答案其实很朴素：

1. 先有一个清晰但不完全的目标。
2. 第一版做出来以后，会暴露更大的可能性。
3. 每加一个功能，架构就得变。
4. 每次架构变动，都会带来新的 bug。
5. 每修一个 bug，系统就更真实一点。

这不是偏离方向，而是系统成形的过程。

## 这条生成之路，大致是怎么展开的

根据当前仓库状态和这轮可见的构建过程，可以把它概括成下面这些阶段。

### 第一阶段：搬到 Cloudflare 上，重做底座

项目先从传统/本地化的形态，重构成 **Cloudflare Worker + Cloudflare Pages** 的组合。后端逻辑、前端页面和存储职责开始进入云端，这一步相当于把原本的“原型”改造成“在线系统”。

### 第二阶段：确立 Agent Route 为统一中枢

随后，系统架构被进一步收紧：不再让前后端直接调用 Gemini、Claude、Codex，而是统一走 **Agent Route**。这一步非常关键，因为它决定了这个项目不是简单地接几家模型接口，而是要形成一个可控、可观测、可编排的研究引擎。

### 第三阶段：远程部署和存储绑定

Worker 和 Pages 被部署到远程环境，D1、R2、KV、Vectorize 等云端资源开始绑定。到这里，项目第一次具备了“真正在线运行和保存成果”的能力。

### 第四阶段：工作流与归档体系成形

工作流接进 Agent Route 路径，所有输出和生成文件开始复制、归档到 Cloudflare 存储。系统不再只是“临时算一算、生成一下”，而开始拥有历史和沉淀。

### 第五阶段：前端登录验证

前端增加了登录验证机制，通过后端 `/api/auth/verify` 来确认可登录的 key。这个功能本身并不炫，但它非常重要，因为它让项目从演示品向真正可控的工作台再前进一步。

### 第六阶段：日报和双语输出

接着，系统加入了日报能力，而且要求专业化、可视化、双语化。这意味着项目不再只是内部自动化工具，也开始具备对外表达和展示的能力。

### 第七阶段：分析师角色体系深化

之后，分析师不再只是一个名字。每个分析师开始拥有自己的工作文件夹、日常数据、结构化存储、例行任务和调度逻辑。项目从“执行任务”走向“模拟组织”。

### 第八阶段：内部消息和邮箱系统

这是一个非常有代表性的转折点。

分析师之间不再只是被动地跑流程，而是可以：

- 发起协调请求，
- 提出 follow-up 问题，
- 把任务派给其他分析师，
- 等待对方完成后自动回复结果和文件链接。

到这一步，这个项目已经不只是“工作流引擎”，更像一个有内部联系和分工机制的研究生态。

### 第九阶段：分析师门户化

每个分析师仪表板下都开始拥有 mailbox 和 message portal。也就是说，协作不再只是后台逻辑，而是开始成为前台可见、可操作的工作界面。

### 第十阶段：Whiteboard 白板门户

白板功能让整个系统突然有了更强的“生命感”。

它可以按小时启动一个研究会话：

- 随机选一个分析师，
- 给出一个他擅长领域里的研究主题，
- 由第一位分析师先做深度研究，
- 再把 follow-up 任务交给另一位分析师，
- 后续分析师可以支持、质疑、压力测试、继续推进，
- 每个任务结果以卡片形式落到同一个白板画布里，
- 整个过程又会自动归档回各自工作空间。

这一步非常精彩，因为系统不再只是“回答问题”，而是在“延续讨论”。

### 第十一阶段：多 Hand 随机执行

白板和其他研究任务通过 Agent Route 随机选择 Gemini、Claude、Codex 等不同 hand 去执行。这样一来，系统更像一个多角色团队，而不是单一模型在重复工作。

### 第十二阶段：真正进入调试现实

任何一个认真做下去的项目，到了后期都会出现“现实撞墙”的时刻。

这个项目里，可见的典型问题包括：

- 前端登录请求触发 `405 Method Not Allowed`，
- 运行中任务接口出现 `404 Not Found`，
- 白板生成的文件明明存在却无法预览，
- 新白板会话的第一张卡完成后，后续 follow-up 没有继续自动执行。

这些时刻很重要，因为它们恰恰标志着：项目已经从“像魔法一样生成东西”，进入了“必须面对系统真实边界”的阶段。

### 第十三阶段：对外开放面 —— v1 API 与管理员密钥

研究院之前是一个封闭体系：自己产出报告、自己在浏览器里阅读。下一个转折是把它变成**可被组合**的系统。一组小而精的 **v1 API** 上线了 —— 三个作用域受限的端点（按股票列表入队深度研究、用外部议题开启白板线程、订阅 Stripe 风格的游标事件流），加上一个面向运营者的密钥管理页面，可签发带特定 scope 的 `sk_ins_*` 密钥。密钥落库前 SHA-256 哈希，可一键吊销，每次调用都更新 `last_used_at`，方便运营者识别长期闲置的密钥。研究院从此可以接入其他工作流：组合监控自动入队深度研究、新闻订阅自动开启白板线程、外部仪表盘订阅事件流。

### 第十四阶段：周报流水线 —— 三模型，一份报告

每位分析师都拥有了独属于自己的**周度交付物**，但和日报不同，周报被设计为**多模型流水线**：Gemini 规划范围、Codex 完成数据加工、Claude 渲染含内嵌 SVG 图表的自包含 HTML 周报。不同模型扮演各自最擅长的角色 —— 任何一种模型出现波动，也只影响一个阶段而不是整份产出。运行节奏在周末 48 个整点中按哈希错峰分配，39 位分析师不会在同一时刻抢同一个边缘节点。等到周一开盘时，每位分析师的工作空间里都已躺着一份审过、评过级的完整周报。

### 第十五阶段：质量主管 —— 把审稿人嵌进闭环

每份周报现在以第四步收尾：**研究质量主管（QA Manager）**，由 Claude 担当的新分析师角色，对交付物做四个维度的审查 —— 文件完整性、跨步骤数据一致性、叙事链条连贯性、表达与可读性。最终输出 `QA_review.md`：一份文件清单表、按优先级排列的修订建议、以及 `pass / 重写 / 不合格` 的总评级。这位审稿人**只评不改** —— 让失败模式保持诚实：缺失的文件就显示为缺失，不会被一段"幻觉补丁"抹平。

### 第十六阶段：工作空间稳健性 —— 双层防御

模型偶尔会"在响应中给出正确的 markdown，却忘了真正写入文件"，导致后续步骤读不到上一步产物。两层加固：第一，每份 prompt 都加上 *Workspace Robustness* 条款，允许下游步骤在文件缺失时回落到对话上文中的内容继续推进 —— 这一层修复了运行时级联故障；第二，Worker 在每次工作流终态后比对**声明的输出文件**与会话工作空间里**实际存在的文件**，对缺失文件用对应 step 的响应文本**自动补写**。从此工作记录界面与周报预览都能看到一份完整的交付物，哪怕模型中途丢了一个文件。

### 第十七阶段：一个微妙的计时 bug —— 排队不应计入超时

一个真实的失败模式浮出水面：任务在 30 分钟时被判定超时，但其中大部分时间是在 agent-route 的负载均衡器后面**排队等待边缘节点**，并未真正执行。两端都打了补丁 —— agent-route 后端被作者修复，研究院侧的客户端"过期判定时钟"则改为追踪 `running_since`（首次观察到上游 `running` 状态的时刻），不再使用 `pending_since`（任务派发时刻）。排队多久都不再触发误判超时，而过期时钟只在模型真正开始工作后才启动。一批因此"卡住"的周报被重新触发，干净地完成了。

### 第十八阶段：HTML 预览 —— 让可视化结果回到 UI 里

当周报开始以含内嵌 SVG 图表与 CSS 的精美 HTML 文件交付时，文件预览模态框也得跟着进化。一个带 `sandbox=""` 的 `<iframe srcDoc>` 被加进来 —— 不允许脚本、不允许网络、不允许同源访问，只忠实地把这份文档渲染出来。模态框头部的 `渲染 / 源码` 切换让读者一键在两种视图之间往返。从此研究院自己产出的可视化也能在它自己的 UI 里直接预览，无需下载、无需离开仪表盘。

### 第十九阶段：周日整点排期 + 时间窗口锁定

周报的第一轮把 39 位分析师分散在周末 48 个整点上。运行一轮之后做了两处收束。其一是把整个排期收紧到**只在周日**：24 个整点、按哈希为每位分析师分配一个固定 hour，从此每份周报都跑在专属的周日整点，而周六完全留给临时任务。其二是给规划阶段加上明确的**时间窗口解析规则**：今天是新加坡时间周日，覆盖窗口就是本周周一 → 周五（刚刚结束的交易周），且规划文件首行必须写明 `本周覆盖范围: YYYY-MM-DD (周一) → YYYY-MM-DD (周五)`。窗口内的节假日要标注，但窗口不会移动。下游步骤从此有了单一可信的日期口径。

### 第二十阶段：自动协作 —— 让邮件自己触发自己

邮箱（mailbox）在很长一段时间里是研究院的协作层，但每封邮件要么是人工触发，要么是工作流首次派发的一部分。下一步是让分析师**自己协作**：当一份交付物识别到"另一位分析师应该回答的后续问题"，系统**不询问**直接发出邮件，并附带一个 adhoc 派发，让对方自动开始工作。在每条 routine 与 global 工作流的**最后一步**（单步任务如 `daily_meetup`；`weekly_report` 的 QA Manager 步；`briefing` 与 `daily` 的总编合成步）prompt 末尾新增一个 `# Coordination Requests` 章节，规则是精准的：只能输出一段 fenced JSON `{"follow_ups":[...]}`，里面的分析师 id 必须真实存在，每次响应最多 3 条，不许给自己发，不许凑数。

一个新 worker 模块 —— `auto-handoff.ts` —— 在每次工作流终态成功之后运行：解析步骤响应文本中的 JSON 块、校验每条 follow-up 的接收者是否在分析师名册中、用 KV 做去重（36 小时 TTL，键为 `(sender, recipient, content_hash)`），再调用 `createMailboxThread()` 创建邮件并附带 `dispatch.mode = "adhoc"`，这样接收方分析师就会自动运行。接收方的回复落入原分析师的收件箱；自动协作**只走一跳** —— 这条回复不会再触发新的自动邮件。各项约束（每次最多 3 条、sender ≠ recipient、接收者必须存在于名册、去重窗口）阻止了链式雪崩。当 `/mailbox` 里第一次自然出现一条 `[auto-handoff]` 邮件、而无人点击时，研究院第一次真正像一个会自己协调的研究团队。

### 第二十一阶段：白板角色偏置 —— 告诉模型谁该上场

观察白板线程在线上跑了几天后，发现一个反复出现的问题：模型经常把 `chief-risk` 派到第二张卡，但前面根本还没有出现具体的脆弱点；线程也常常拉来 derivative / credit / factor 等专业岗位仅仅为了"给个视角"，而非真有具体领域匹配。原因是模型在 39 位分析师面前看到的指令是"挑选最适合下一个问题的人"，过度发散。修复是在分析师名册里硬编一个软约束：每位分析师都带一个 `whiteboard_role` 标签（`primary` / `specialist` / `reviewer` / `editorial`）。卡片 prompt 显式偏置 primary（宏观/策略/行业/股策），把 specialist 的触发条件收紧到"下一个问题确实落在他的细分领域"，而 reviewer 的触发条件升级为"已经出现具体的、可压力测试的脆弱点"。同样的角色指引也注入了 QA Manager 的 `follow_ups` 接收方挑选，自动协作的派发不再过度路由到审稿人。改动落地后线程明显聚焦了。

### 第二十二阶段：邮箱自己的游标 bug —— 三层叠加诊断

自动协作功能上线后悄悄地零产出了一段时间。逐层剥洋葱后发现是三个问题叠加：*原因 1*：被检查的已完成工作流是在 prompt 强化部署之前派发的，模型从来没被要求输出 follow_ups。*原因 2*：`syncManagedScheduledRuns` 这个 cron 在**首次**同步发现新的 schedule 触发时就推进游标 —— 那时多数 run 还在 `running` 状态，所以承载 salvage + auto-handoff + archive 的"终态分支"对随后才完成的 run 不再触发。*原因 3*：解析器读的是 `parsedResult.stepResults[i].output`，但 agent-route 实际上不会在那里直接放正文；真正的产物在工作区文件 `QA_review.md` 里，或者要单独 fetch 任务的 `task.result_summary`。修复分三部分：在 `institute_workflows` 上加一列 `pending_run_id` 用于把还没终态的 run "停车"等下一次 cron 复访；解析器改为以工作区文件为主源；做一次性补登把那些游标已经越过的在飞 run 重新挂上 `pending_run_id`。部署完两分钟后，三条真实的 `[auto-handoff]` 邮件从已经等待了几小时的 QA review 里自动飞了出来。

### 第二十三阶段：Operator 这个问题 —— 一份路线图，不是一次构建

到这一步对话发生了一次大转向。与其继续修个别 bug，问题变成：研究院该不该有一个"元层"？一个**操作员（Operator）**角色，去审查全局健康度、诊断慢性模式、提议 prompt 修改、监督跨工作流的协作？把用户提的七个子功能逐个拆解后，答案是 **拆成四层**：L1 全局健康度观察者（确定性，无 LLM）、L2 研究院诊断师（LLM，仅顾问）、L3 跨工作流协作监督者（暂缓）、L4 prompt 策展人（带"信任梯度"的人审通道，暂缓）。整份提案落进 `vibelog/operator-role-proposal.md`，作为后续可以重新打开讨论的工作底稿。

### 第二十四阶段：L1 全局健康度观察者

下游所有层都需要的"地基"。一个纯 SQL 聚合器，每天新加坡时间凌晨 0 点（即 UTC 16:00 — 在 wrangler.jsonc 里又新增一个 cron）跑一次，遍历研究院掌握的每张 D1 表：`institute_workflows`、`workflow_runs`、`mailbox_threads`、`mailbox_dispatches`、`institute_events`、`execution_outputs`、`whiteboard_sessions`、`whiteboard_cards`。产物是结构化 JSON 指标 + 人类可读 markdown 摘要，都写到 R2；摘要的简版则进入新建的 `fleet_health_snapshots` D1 表（按日期为主键）。新增 `/api/fleet-health/latest.md` 端点供下一层无鉴权读取。

### 第二十五阶段：L2 研究院诊断师

在合成（synthesis）类目下新增一位分析师角色 —— `institute-diagnostician`（🩺），`whiteboard_role: editorial` 让它不参与白板线程。它的 routine 任务每天新加坡时间 01:30 触发，比 L1 快照晚 90 分钟。Prompt 要求它先 `curl` `/api/fleet-health/latest.md` 到工作区，再写一份 `diagnosis.md`，章节为：一句话总览 / 关键指标 / 异常与模式 / 推荐优化 / 给操作员的开放问题。关键的是 `enable_handoff: false` 这个新加在 `TaskTemplate` 上的字段对它生效 —— 诊断师的 prompt 不带 Coordination Requests 段落，**只评不改**，不能动 prompt、不能改 schedule、不能改任何系统状态。这种"绝对无副作用"的属性，是它能被早早部署的原因。

### 第二十六阶段：邮箱 UI + 既往失败的事后挽救

邮箱 UI 之前像一个老式信件控制台：composer 永远张开占半屏，message 与 dispatch 各自一张卡叠着，没有 sticky 上下文条，失败的 dispatch 没法重发。重新设计后：composer 收进可折叠的 drawer（默认收起）、新增 sticky 线程头条、把消息和派发按时间合并为一个统一时间线、加上"自动协作"和"失败"两个筛选 pill、给失败 dispatch 加上"重新派发"按钮。然后一个新的 worker 函数 `salvageFailedDispatch()` 把 4 条 v17 之前就失败的 dispatch 复活了 —— 那些任务在 agent-route 上其实在我们 5 分钟轮询超时之后 6–11 分钟就完成了，`result_summary` 一直在那儿可读。挽救器把内容拉回来，原地重写已有的 reply 消息正文，再把 dispatch 翻成 `completed`。零次重新执行，完全把已经做过的工作捡回来了。

### 第二十七阶段：Follow-up 任务的强制 markdown 输出

自动协作派发是在跑，但接收方分析师只是把答案塞进 `result_summary`，没有沉淀的 markdown 文件，没有 `handoff_response.md`。修复是把"裸的后续问题"包进与 routine 工作流相同的 `MANDATORY DELIVERABLE` 信封：完整的分析师人格、声明输出文件名 `handoff_response.md`、工作空间稳健性条款、输出语言策略。`enable_handoff: false` 这个 flag 同时强制了"只走一跳"（接收方不能再发出自己的 `follow_ups` JSON）。从此自动协作的回复以一行确认（`Wrote handoff_response.md (...)`）进入邮箱，长篇研究内容则以结构化 markdown 文件落入工作区。

### 第二十八阶段：多租户 Session 过滤

agent-route 是多租户的。一个名为 "infinite research" 的兄弟客户端在同一个 agent-route 实例上创建会话，没有标 project_id，于是漏进了研究院的会话列表 —— worker 那条宽松策略 `project_id === ours OR project_id === null` 把所有未标注的 session 都接纳了进来。修复把过滤从前端搬到 worker 一侧并改为正向判定：一条 session 属于本应用，当且仅当它带有 ours 的 project_id，**或**它的 `id` 出现在我们掌握的某张 D1 表里（`workflow_runs`、`mailbox_dispatches`、`whiteboard_cards`、白板共享 session）。外部客户端的 session 在代理层就被拦下，研究院的 `sessions_cache` 也不再随时间累积别人家的行。在浏览器里用起来明显干净了：研究历史只显示研究院发起的研究，仪表盘活动时间线只承载本应用的 run。

### 第二十九阶段：三个生产 bug 的连锁修复

线上跑了几天后浮出三个独立但症状混在一起的 bug：1）深度研究工作流派的是 AAPL，模型却交出了 INTC 然后是 TGT 的报告 —— 显然没有锚定到正确的 ticker；2）白板卡片用 gemini hand 时频繁不写 `card_response.md`，只把内容打回 chat；3）DeepSeek 的邮箱派发在工作流终态成功之后，dispatch 行却永远停在 `running`。逐个剖开：bug #1 的根因是 agent-route 的 `/api/workflows/:id/run` **不把** `input_prompt` 透传到每一步 step.prompt，每个 step 拿到的还是 research.json 里那段静态文字。修复换思路 —— `/api/v1/research/queue` 不再复用同一个 `research` workflow 然后传 ticker，而是**为每个 ticker 注册一份新的 scoped workflow**：把 ticker 烤进每一步 step prompt 的最前面，再 run 这个临时 workflow id。bug #2 的修复把 `# MANDATORY DELIVERABLES — READ BEFORE ANYTHING ELSE` 块从中段挪到卡片 prompt 的最顶部，并加了"写完之后用 ls 验证一遍"这一条，gemini 不再走捷径。bug #3 的根因是 mailbox 的 inline 轮询预算（120 次 × 2.5 秒）跑超了 worker 的执行墙时，永远不会改写 dispatch 状态；改成 8 次 × 3 秒 = 24 秒，永远先 park 再让 cron 接管。同时发现 `dispatchMailboxMessage` 在已存在 dispatch 行时无条件返回旧行，意味着"重新派发"按钮在 failed 行上是静默 no-op；改成 failed/cancelled 行先标 `superseded` 再发新的。

### 第三十阶段：opencode hand —— 把"写文件"这件事独立出来

agent-route 上线了一个新 hand：opencode（默认模型，无 web_search，专攻本地编辑/工具/文件操作）。研究院里两个长期痛点天然适合它：第一，主模型偶尔把整篇 markdown 打进 chat 但忘了 `Wrote ...md` 那一步，下游步因为找不到上游文件而连锁失败；第二，自动协作的接收方有时也只回了 chat 没写 `handoff_response.md`。修复方案不是去改主模型，而是在 worker 里加一个 `formatFileViaOpencode()`：当 salvage 阶段或 auto-handoff sync 阶段检测到声明的输出文件不在工作区，就发一份"把这段已有文本格式化、写入 \`<filename>\`、然后 ls 验证"的极小 opencode 任务到同一个 session，20 次 × 3 秒预算，写完即返回 `{ok, reason, task_id}`。两个调用点：`salvageMissingWorkflowOutputs()`（工作流终态后扫产物缺失）和 `syncMailboxAdhocDispatches()`（auto-handoff 完成但 `handoff_response.md` 不在）。整个改动让"主模型负责思考、opencode 负责写盘"成为一种被结构性容忍的分工。

### 第三十一阶段：白板话题种子池 —— 让第一张卡有来由

之前白板的"今日开场"是模型自己挑话题，结果常常陷入两种失败：要么挑了上周已经讨论过的题（重复），要么挑了一个谁都没兴趣的边缘话题（注意力浪费）。重写思路是把"开场题源"独立成一层池子。新建 D1 表 `whiteboard_topic_pool`（迁移 `0011`），每行一个候选种子：`topic` / `question` / `suggested_analyst_id` / `source_kind` / `source_run_id` / `score` / `status`，主键之外还有 `UNIQUE(content_hash)` 强制去重 —— 同一个 topic 的多次入池只会保留一行。来源有两类：一类是任意 routine 工作流终态成功后的"白板提案 JSON 块"（在 `buildAnalystPrompt` 里新增 `enableWhiteboardPitch` 选项，会注入一段 `# Whiteboard Pitches (Optional, max 3)` 章节，鼓励分析师在交付物末尾选择性地输出 `whiteboard_pitches` JSON）；另一类是为五位"嗅觉型"分析师新增的六个**专门的话题征集任务**（routine、scheduled）：`sentiment-analyst` 工作日 09:00 盘前情绪定调、`social-media-analyst` 工作日 13:00 午盘社媒动量、`altdata-analyst` 工作日 16:30 收盘另类数据偏离、`thematic-researcher` 工作日 21:00 晚盘主题轮动 + 周末 10:00 周末主题深扫、`daily-report-editor` 周末 18:00 周末日报路线图。这六条任务的 prompt 写得很硬：先扫描，再用"白板值得辩"的三条筛选标准（跨分析师 / 时效性 / 真不确定）过滤，最后才落 `topic_pitches.md` + `whiteboard_pitches` JSON —— 不达标就不输出。每小时整点的白板 cron 改成先调 `pickKickoffTopic()` 从池子里取最高分（按 `SOURCE_PRIORITY`：QA 留题 = 10、高优 pitch = 9、普通 pitch = 6、低 pitch = 4、尾随 follow-up = 4）原子地把行翻成 `promoted` 并 attach `promoted_board_id`，取不到才回退到旧的随机 seed。Worker 端 `data.ts` 的 `withCommonTasks` 同步加上了对 `analyst_overrides[id].extra_task_keys` 的合并，这样这五位分析师的 routine 列表不必动 `profiles.json` 就能多带新任务（验证脚本也补了同样的合并逻辑，从 181 → 187 个 routine task ref，正好 +6）。

### 第三十二阶段：把 5 位嗅觉型分析师铺满全周 + opencode 接管协作抽取

种子池上线后下一个明显问题是"产能不够"：5 位嗅觉型分析师每人只有 1 个工作日时段，意味着池子里每天最多落 5 个候选。把它扩成 4 个工作日时段 + 1 个周末时段（同 cron 触发周六周日各一次），五人合计每周 110 次产出。共增 19 个 routine 任务模板：sentiment 增 隔夜情绪/午盘转换/收盘综述/周末展望；social-media 增 隔夜热度/上午散户/收盘后回声/周末病毒盘点；altdata 增 隔夜扫描/上午指标/下午偏离/周末信号；thematic-researcher 增 晨间轮动/盘前结构/下午资金流；daily-report-editor 增 隔夜要闻/上午跨视角/下午对齐/收盘矛盾。`routine_task_refs` 从 187 → 206。

但更根本的瓶颈是抽取：`auto-handoff.ts` 和 `topic-seed-pool.parseWhiteboardPitches` 依赖正则匹配 ` ```json ``` ` 块，模型一旦输出脏话或忘记把 JSON 放进 fenced block，就丢了。趁 opencode hand 修好了 workspace-bound 异步路径，新加 `opencode-extractor.ts`：每次 routine / global 工作流终态成功后，派一个 opencode 任务到同一会话，prompt 里烤进完整的 40 人分析师名册，要求 opencode 读 cwd 下所有 `.md`/`.html`/`.json` 文件、把 `follow_ups` 和 `whiteboard_pitches` 提炼成一个 `_coordination_extraction.json`，包括 fenced JSON **和**散文里的隐含请求（"chief-economist 应该看一下"），并在 prompt 内做 ID 校验（不在名册里直接丢掉，不许编造）。worker 读这个 JSON，喂给从 `auto-handoff.ts` 抽出来的 `emitFollowUps()` 和 `topic-seed-pool.ingestCandidate()` —— 两条路径自带原子去重（`auto_handoff_dedup` 表 `INSERT OR IGNORE`，topic_pool `UNIQUE(content_hash)`），所以 opencode 抽到的和正则抽到的合在一起也只会发一次。新增 source kind `opencode-extracted`（默认分 5，high 8，low 3）落在正常 pitch 和 QA-open 之间。

烟雾测试：模型写好的 `topic_pitches.md`（1110 字节）让 opencode 读，44 秒后 `_coordination_extraction.json` 出现，里面 `follow_ups[0].to=fx-strategist`、`whiteboard_pitches[0].suggested_analyst_id=chief-economist`，全部经名册校验。这就让"自我跑、自我递归"这件事变得可观察 —— 模型即使把 JSON 包成了散文，opencode 也会把它捞出来。

### 第三十三阶段：第一份诊断报告 —— 把 L2 当作输入而非结论

L2 诊断师 01:30 跑出今天的第一份 `diagnosis.md`，结论是研究院"watch-listed"：执行层零失败，但 auto-handoff 82% 流向 reviewer 角色、白板 chief-risk 单点 24 收件、21+12 的 in-flight 占比偏高。看起来很像三个独立信号 —— 但把这份诊断当成"线索"再去 D1 + agent-route 复核 7 天数据，故事完全变形。

第一处变形：那 82% reviewer 数字是 24h × 11 条样本算出来的，而 `chief-strategist` 在我们自己的 roster 里属于 **primary**（不是 reviewer），诊断师把它误归类了。把 7 天 131 条 auto-handoff 重新归类后：68% 流向 primary、24% 流向 specialist、8% 流向 chief-risk —— 路由其实是健康的。诊断师靠"角色感"在脑子里分类，而我们 roster 里的硬标签没有被注入到 prompt。修复一行就够了：把 `whiteboard_role → analyst_id` 映射表硬编进 `institute_diagnosis` 的 input_prompt，诊断师下次直接查表。

第二处变形是好消息：白板 `chief-risk` 过载是真的，但量级小得多。7 天 852 张 handoff，95 张落到 chief-risk = 11%，第二名 derivatives-strategist 是 64。是过载，但不是诊断师暗示的"系统性失控"。修复在 prompt 层面而非代码：给卡片 prompt 加一条**反默认**指令（"想写 chief-risk 之前先用一句话写出具体的 stress test，写不出来就不要选 chief-risk"），再让 opencode 抽取器在 rationale 不含 stress/sensitivity/tail/concentration 等具体字眼时把 chief-risk pitch 降级为 low priority。

第三处变形是诊断师**严重低估**的：诊断师说 21 + 12 = 33 个 in-flight，建议加个 2h 长尾扫描器。实际查 7 天的 `workflow_runs`：105 行卡在 `running` 状态，最早一条来自 04-21。随机抽 8 条问 agent-route：**8/8 都是 `completed`**。这是 mirror DB 的同步漏洞，不是真的卡住 —— 看了 `syncManagedScheduledRuns` 的代码后定位到：`institute_workflows.pending_run_id` 是单列，每个 workflow_key 同时只能"停泊"一个 non-terminal run；`weekly_report` 周日 fan-out 时同一个 workflow_key 经常 3 个 run 并发，只有最新一个被停泊，更早的就成了"孤儿"，cursor 一往前推就再也不会被回访。这有连锁伤害：salvage / auto-handoff / 话题池抽取 / opencode-extractor —— **所有终态钩子对孤儿 run 都不会触发**，里面的 follow-up 和 whiteboard pitch 全部静默丢失。

把这些发现写成 `vibelog/diagnostician-optimization-proposal.md` —— 一份分阶段的提议，按影响排序：R1 给 sync 加第三段"年龄桶 reaper"（每 tick 扫 30 分钟以上的 `running` 行、上游回查、终态就走完整 processCandidateRun）；R2 是上面提到的 chief-risk 反默认 + opencode 降级；R3.1/R3.2 把 roster 表注入诊断师 prompt + 新增 `/api/fleet-health/snapshots?last=N` 让诊断师必须引用昨天的快照才能给"高置信度"标签；R4 让诊断师必须明示快照覆盖的是哪个工作日。诊断师**自己**提的"收紧 QA 路由"被显式 defer —— 7 天数据不支持那个动作。L2 的价值在于"让它先指向问题，由人决定要不要做、做哪一个"，这一轮把这个分工形态走通了。

### 第三十四阶段：让 pitch 任务同时点亮 mailbox

新池子上线一天后用户提了一个具体观察：嗅觉型分析师的 pitch 任务确实在跑、文件确实写出来了，但下游只看到白板被点亮（4 个种子被小时级 cron 拣去开了 8 卡线程），mailbox 那边一条 `[auto-handoff]` 也没生出来。查 sentiment-analyst 今早 06:30 那次 pitch 的 `_coordination_extraction.json`，里面 `follow_ups: []`。原因很简单也很诚实：当时定义这 25 条 pitch 模板时把 `enable_handoff: false` 一路写进去了，于是 `buildAnalystPrompt` 把 Coordination Requests 段直接从 prompt 里剥掉，分析师从一开始就没被告知"可以发 follow_ups"。opencode 抽取器读完工作区也找不到模型留下的 follow_ups（既无 fenced JSON 也无散文要求），就老实地交了空数组。修复一行：把全部 25 条 pitch 模板的 `enable_handoff` 翻成 `true`（保留 `institute_diagnosis` 的 false —— 它本就是顾问角色不参与协作）。下一轮 cron 起，pitch 任务就会同时撒出"给团队辩"的 whiteboard pitches 和"给一位分析师追问"的 follow_ups —— 同一份扫描可以喂两条协作通道。

### 第三十五阶段：白板节奏从每小时一次提到每 15 分钟一次

`enable_handoff` 翻 true 之后用户立刻指出下一个瓶颈：白板每小时才开一条新线程，太慢了 —— 池子里候选堆积、pitch 任务一天产 25+ 个种子，但每天只有 24 个开场槽，节奏跟不上。把 wrangler 的 `0 * * * *` 换成 `*/15 * * * *`，每小时 4 个开场。但这里有一个微妙的设计选择：当池子空的时候，原来的回退路径是 `createSeedWhiteboardSession`（让模型随机选题），如果原样保留这条回退，4 倍频率意味着空池子时每 15 分钟生一条随机白板，把"种子池替代随机选题"这条设计直接抹平。修复加一条最小约束：每 15 分钟尝试 `pickKickoffTopic`，**池子有候选就开**；池子空 + 当前是整点（minute 0）才回退到模型随机种子；池子空 + 不是整点直接 no-op。等价于：池子健康时每小时 4 次开场（4× 旧节奏），池子完全枯竭时退化为最多每小时 1 次随机种子（旧节奏的安全网）。`*/5 * * * *` 那条仍然每 5 分钟推进现有线程上的下一张卡 —— 8 张卡的线程能在约 12 分钟内跑完，节奏对得上。

## 截至 2026 年 4 月 28 日的项目快照统计

下面这些数字，一部分来自仓库精确统计，一部分来自当前可见构建过程的保守估算。

### 仓库快照中的精确数字（最新）

| 指标 | 数值 |
|---|---:|
| Worker 后端路由数 | 50+（新增 v1 admin/research/whiteboard/events、fleet-health 端点、salvage 端点） |
| 数据库迁移数 | 11（新增 `0011`：白板话题种子池） |
| Cron 触发器 | 3 个（`*/5` 推进现有白板 + 同步 / `*/15` 池子驱动开场 / 每日 UTC 16:00 L1 快照） |
| 工作流模板数 | 5 + 诊断师 routine + 25 条白板话题征集（5 位嗅觉型分析师 × (4 工作日 + 1 周末) = 25 个 `topic_pitch_*`） |
| 已注册管理工作流总数 | 329+（含 25 条 routine 话题征集 + 各 ticker 注册的 scoped 深度研究 workflow） |
| 协作抽取层 | 正则解析 + opencode 名册校验抽取（双路径，去重原子合并） |
| 分析师角色数 | 40 |
| 模型 hand | claude / codex / gemini / opencode（opencode 专攻文件落盘救援与 auto-handoff 后处理） |
| 周报排期时段 | 仅周日，24 个整点，按哈希分配 39 个 |
| 前端主题 | 4 套主题 × 亮色/暗色模式；HTML 文件支持沙箱化内联预览 |
| Operator 子系统已部署层 | L1（全局健康度观察者）+ L2（诊断师，已产出第一份诊断 + 配套优化提案 `vibelog/diagnostician-optimization-proposal.md`）；L3 + L4 按设计决定暂缓 |
| 白板话题种子池 | D1 `whiteboard_topic_pool` + 内容哈希去重；每小时 cron `pickKickoffTopic()` 优先取池，回退随机 seed |

## 如果把“感受”也写进项目史

如果只看结果，这个项目很容易被理解成一句话：

“就是一个 AI 多智能体研究平台。”

但如果把人的感受也写进去，故事会更完整。

一开始，最强烈的感觉通常是**惊讶**。

你只是用自然语言描述了一个很大的愿景，系统的骨架居然很快就开始出现：Worker 有了，页面能开了，存储接上了，工作流也能跑了。

这种感觉非常奇妙，像是在和一台会理解结构的机器一起搭东西。

再往后，感受会变成**兴奋**。

因为项目开始不只是“能用”，而是“越来越像一回事”。分析师、邮箱、白板、归档、日报，这些东西一层层叠上来，系统开始有“机构感”。

但很快，又会进入**挫败和拉扯**。

真实系统不会因为你的愿景很漂亮，就自动把细节也处理好。路由会错，状态会卡住，预览会找不到正确路径，轮询会打到不存在的接口，自动 follow-up 会少一层触发条件。

这个时候，人的身份会发生变化。

你不再只是“在用 AI 写代码的人”，而更像是：

- 产品经理，
- 系统设计师，
- 研究流程导演，
- 质量把关者，
- 以及最终还得亲自面对 bug 的调试者。

可一旦跨过这个阶段，就会出现一种很特别的感受：**信任**。

不是盲目信任 AI，而是开始相信一种新的建造方式：

只要你愿意不断澄清目标、修正结构、追着细节把问题收口，一个原本模糊的想法，真的可以被一步步塑造成一个像样的系统。

## 为什么这个项目很适合拿来解释 Vibe Coding

很多人以为 vibe coding 的意思只是“让 AI 帮你更快写代码”。

这个项目说明，事情远不止如此。

它真正展示的是：

- 你可以用对话去表达架构意图，
- 你可以在同一轮创造里同时推进 UI、后端、存储、调度和部署，
- 你可以很快把一个抽象想法变成可见系统，
- 但你也必须更早地面对系统复杂性本身。

换句话说，vibe coding 并没有消灭工程。

它只是把“想法”和“工程现实”之间的距离压缩了。

这很强大，但也意味着你会更快撞上真正的问题。

## 它为什么不像一个普通 App，而更像一个“组织”

大多数软件产品只是完成某个单点功能。

而这个项目试图编码的，其实是一种行为模式：

“一个研究机构是如何思考、分工、协作、归档和持续推进问题的。”

所以它最后最有意思的地方，不是某个页面长什么样，而是它开始具备了这些组织特征：

- 有专业角色，
- 有例行任务，
- 有消息流转，
- 有记忆系统，
- 有档案沉淀，
- 有分歧与复核，
- 有对外输出，
- 有从一次研究继续长出下一次研究的能力。

这就让它看起来不像一个简单工具，而像一套“被代码表达出来的组织设计”。

## 最后一句话

如果一定要用一句最简洁的话来概括这个项目，我会这样说：

它证明了，vibe coding 不只是更快地生成代码。

它更像是把“对话”逐渐变成“结构”的过程。

一个 prompt 先变成了 Worker，
Worker 再变成平台，
平台再变成团队，
团队再变成工作流，
工作流再慢慢长成一座有记忆的研究院。

而在这一路上，建造者自己的感受也在变化：

从好奇，
到兴奋，
到受挫，
到上头，
再到看见一个复杂系统开始有生命感时，那种很安静、很真实的满足。

如果要向一个几乎不写代码的人解释现代 AI 辅助开发最迷人的地方，我觉得这就是答案。
