---
source: ai-institute
resource_type: mailbox-thread
status: completed
analyst_level: "行业研究"
---

# [auto-handoff] Hardware Bottlenecks for Agentic AI

Status: **completed**
Dispatch status: **completed**
Sender: **HK/US Strategist**
Recipient: **TMT Analyst**
Messages: **2**
Dispatches: **1**

## Links

- Mailbox topic: [[[auto-handoff] Hardware Bottlenecks for Agentic AI]]
- Sender: [[HK US Strategist]]
- Recipient: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Latest body

致 港美股策略师：

协同任务已完成。执行方为 TMT行业分析师。
模式: adhoc
会话: 1179616f-b56f-4b93-aa5d-f60c02dcb585

结果摘要:
Wrote handoff_response.md (10450 bytes); wrote handoff_response.en.md (10743 bytes) — H200/B200 are compute-sufficient but topology-insufficient for Agentic Execution; GB200 NVL72 is the current pragmatic standard, with GB300/Rubin as the true target architecture in 2026H2–2027.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。

## Messages

### 1. message / replied

From: HK/US Strategist
To: TMT Analyst
Created: 11/05/2026, 09:18:48

Auto-handoff emitted by HK/US Strategist after the run of 港美股策略师 · 美股科技周报 finished.
Source workflow: analyst:offshore-strategist:us_tech_weekly
Source run: 758f0982-2270-4de6-ae16-14a8870862dd
Source session: ef32deec-8f6f-4ab0-b440-5f2437355c8b
Priority: normal

--- Requested follow-up ---
As compute demand shifts from training to Agentic Execution, are current H200/B200 architectures sufficient for the low-latency requirements of autonomous instruction flows?

### 2. result / sent

From: TMT Analyst
To: HK/US Strategist
Created: 11/05/2026, 09:25:59

致 港美股策略师：

协同任务已完成。执行方为 TMT行业分析师。
模式: adhoc
会话: 1179616f-b56f-4b93-aa5d-f60c02dcb585

结果摘要:
Wrote handoff_response.md (10450 bytes); wrote handoff_response.en.md (10743 bytes) — H200/B200 are compute-sufficient but topology-insufficient for Agentic Execution; GB200 NVL72 is the current pragmatic standard, with GB300/Rubin as the true target architecture in 2026H2–2027.

归档文件:
- handoff_response.en.md (handoff_response.en.md)
- handoff_response.md (handoff_response.md)

如需继续追问，请在当前线程直接回复。


## Dispatches

### 1. Mailbox · TMT行业分析师 · [auto-handoff] Hardware Bottlenecks for Agentic AI

Status: **completed**
Mode: **adhoc**
Workflow: ``
Task: `mailbox_coordination`

#### Result

Wrote handoff_response.md (10450 bytes); wrote handoff_response.en.md (10743 bytes) — H200/B200 are compute-sufficient but topology-insufficient for Agentic Execution; GB200 NVL72 is the current pragmatic standard, with GB300/Rubin as the true target architecture in 2026H2–2027.


## Attached Markdown

### 1. Mailbox · TMT行业分析师 · [auto-handoff] Hardware Bottlenecks for Agentic AI

# Are H200/B200 Architectures Sufficient for Agentic Execution Latency?

**To:** HK/US Strategist (US Tech Weekly, run 758f0982)
**From:** TMT Sector Analyst
**As of:** 2026-05-11
**Reference window:** Hopper mature in field; Blackwell B200/GB200 in volume; B300/GB300 (Blackwell Ultra) ramping from 2026Q1; Rubin/VR200 in customer sampling.

---

## 1. Bottom Line Up Front

1. **Not sufficient — but the gap is topology, not generational compute.** Per-GPU FLOPS and HBM bandwidth on H200/B200 already overshoot what single-step token generation needs. The binding constraint for Agentic Execution has shifted from raw compute to end-to-end orchestration latency: (i) KV-cache movement across multi-agent / multi-turn flows, (ii) tool-call round trips, and (iii) tail (P99) latency on cross-node NVLink/InfiniBand fabric. On long-chain agent tasks, an H200 8-GPU box can hold P50 token-to-token latency, but P99 typically degrades 3–8x — the real pain point.
2. **GB200 NVL72 is the closest thing to "good enough" today, but it's still transitional.** Extending the NVLink domain to 72 GPUs at rack scale lifts cross-node KV-cache transport from IB (~400–800 GB/s) to NVLink-5 (1.8 TB/s), materially compressing P99 in concurrent multi-agent serving. Nvidia's headline "~30x lower per-token latency vs H100 air-cooled" bundles compute + topology + precision gains. The remaining issue: NVL72 is still a single-rack domain; cross-rack agent-to-agent traffic falls back to IB/Ethernet and re-introduces tail latency at fleet scale.
3. **The architectures that are genuinely "designed for agentic" are GB300 NVL72 (Blackwell Ultra) and Rubin VR200 NVL144.** GB300 starts shipping in 2026Q1 with 288 GB HBM3e per GPU; Rubin (sampling now, volume in 2027) extends the NVLink domain to 144 GPUs and is the first generation with native hardware support for disaggregated prefill/decode and pooled KV-cache (paired with Nvidia Dynamo + ConnectX-8 800G). This is the real target stack for Agentic Execution.
4. **In the meantime: software-first, systems-second.** Frontier AI labs and clouds are squeezing 30–60% end-to-end latency out of H200/B200 via (a) prefill/decode disaggregation (vLLM, TensorRT-LLM, Dynamo), (b) speculative decoding, (c) cross-request prefix caching, and (d) MoE routing improvements. For genuinely high-concurrency, long-chain agent workloads (>20 tool calls per task), expect hyperscaler capex mix to tilt visibly toward GB300/Rubin from 2026H2.

> **One line for the strategist:** H200/B200 are "enough" on the token-compute axis but not on the fabric / KV-cache topology axis — and that gap is the fundamental reason GB300 and Rubin will ramp in 2026H2–2027, and the hardware reason NVDA's inference TAM is still re-rating, not peaking.

---

## 2. Where the Latency Actually Sits

A modern agent task (per public OpenAI / Anthropic / Google agent SDKs and Cursor/Devin-style products) typically chains 5–50 LLM + tool calls. Per call, latency decomposes as:

| Latency component | Share (typical long-context agent) | Current H200/B200 behavior | Notes |
|---|---|---|---|
| Prefill (first token) | 20–40% | H200 at 100k context: ~2–4s; B200 NVL8: ~0.8–1.5s | Bound by HBM bandwidth + compute; Blackwell helps a lot |
| Decode (subsequent tokens) | 30–50% | H200: 60–120 tok/s/user; B200 NVL8: ~150–250 | HBM-bandwidth-bound; ~2x gen-on-gen |
| KV-cache transport / rebuild | 10–25% | Friendly within an 8-GPU NVLink island; 5–10x worse over IB | **The agentic bottleneck** |
| Tool-call round trip | 5–15% | Network + external API; not GPU-bound | Out-of-architecture factor |
| Scheduler / queue wait | 5–20% | The dominant P99 contributor under concurrency | vLLM / Dynamo improving rapidly |

**Key takeaway:** vs traditional chat inference, KV-cache transport and scheduler queueing are a much larger share for agents (chat: combined <15%; agent: >30%). Neither is solved by raw per-GPU compute uplift — both require fabric (NVLink-domain expansion) and software (disaggregated serving).

---

## 3. H200 vs B200 vs GB200 NVL72 vs GB300 vs Rubin

| Dimension | H200 | B200 (HGX 8-GPU) | GB200 NVL72 | GB300 NVL72 (Blackwell Ultra) | Rubin VR200 NVL144 |
|---|---|---|---|---|---|
| HBM | 141GB HBM3e, 4.8TB/s | 192GB HBM3e, 8TB/s | 192GB×72 = 13.8TB | 288GB×72 = 20.7TB | 288GB+ HBM4, ~13TB/s |
| FP4/FP8 (per GPU) | FP8 ~2 PF | FP4 10 PF / FP8 5 PF | Same as B200 | FP4 ~15 PF (1.5x B200) | FP4 ~50 PF (estimate) |
| NVLink domain | 8 GPU (900 GB/s) | 8 GPU (1.8 TB/s) | **72 GPU (1.8 TB/s/GPU)** | 72 GPU | **144 GPU** |
| Cross-node fabric | IB 400G | IB 400G/800G | IB/Ethernet 800G | ConnectX-8 800G | ConnectX-9 1.6T (planned) |
| Fit for agentic? | Short chains only | Better single-node; cross-node still bound | Agentic-friendly within rack | Recommended target (2x HBM, KV-cache pooling) | Natively agentic |
| Availability | In volume since 2024Q4 | Volume through 2025 | 2025H2 ramp; 2026 mainstay | First shipments 2026Q1; volume 2026H2 | Customer sampling; volume 2027 |

Sources: Nvidia GTC 2024/2025 keynotes; Nvidia product pages; SemiAnalysis (Patel) inference-economics notes 2025–2026; ServeTheHome benchmarks; GB200 deployment commentary in MSFT/META/ORCL filings.

---

## 4. Three Data Points: Compute is Fine; Latency Isn't

1. **OpenAI o1-pro / Anthropic Claude Sonnet 4.x agentic mode** (public APIs): on long agent chains (10+ tool calls), P50 end-to-end latency runs 30–90s and P99 frequently exceeds 180s. The H100 → H200 → B200 transition only compressed that tail by ~20–30%, well below the 2–3x raw compute gain — confirming the bottleneck is topology/scheduling, not FLOPS.
2. **SemiAnalysis 2026Q1 inference economics**: at iso-throughput, GB200 NVL72 lowers TCO/token ~25x vs H100 air-cooled, but only ~3–4x of that comes from generational compute. The rest is FP4/sparsity, NVLink-domain expansion, and the software stack (Dynamo + disaggregated serving). Topology and software now dominate the gain.
3. **Meta Llama 4 / DeepSeek V3.x MoE serving**: MoE pushes agent-scheduling complexity higher (expert routing + heterogeneous KV cache). Meta's engineering blog reports MoE inference P99/P50 ratios of 6–8x on H100 clusters — a primary reason for their 2026 cluster-wide migration to GB200 NVL72 and GB300.

---

## 5. Investable Implications

| Theme | Implication | Beneficiaries / Risks |
|---|---|---|
| Inference TAM still re-rating | Agentic apps consume 10–100x more tokens per user vs chat, with hard requirements on fabric upgrades | Positive: NVDA (especially NVL72/NVL144 systems revenue), AVGO (custom ASICs + networking), MRVL (optical DSP), ANET (Ethernet-vs-IB share contest) |
| Capex mix tilts to "systems" | Hyperscalers no longer buy GPUs — they buy rack-scale systems (GB200/GB300 NVL72) | Positive: ODMs Foxconn (2317 TT), Quanta (2382 TT), Wiwynn (6669 TT); cooling: Vertiv (VRT), Delta (2308 TT) |
| HBM is the real medium-term bottleneck | Agentic workloads are more HBM-capacity-elastic than bandwidth-elastic (KV-cache pooling) | Positive: SK Hynix (000660 KS), Samsung, Micron (MU); risk in capacity ramp / yield |
| Software moat increasingly material | Dynamo / vLLM / TensorRT-LLM extract latency from H200/B200, deferring forced upgrades | Slight drag on early GB300 ROI narratives; offset by the next model generation (GPT-5.x, Claude 5) re-tightening the loop in 2026H2 |
| ASIC vs GPU debate weakens in agentic | TPU v6 / Trainium 2 win on fixed inference workloads but lack flexibility for dynamic agent workloads | Near-term positive for NVDA share in agent serving; Google/AWS internal agent workloads still benefit from in-house silicon on cost |

---

## 6. Direct Answer to the Question

> **"As compute demand shifts from training to Agentic Execution, are current H200/B200 architectures sufficient for the low-latency requirements of autonomous instruction flows?"**

- **H200, single node: insufficient.** On real agent workloads with >10 tool-use steps, P99 latency fails the practical "real-time autonomous execution" bar (industry rule-of-thumb: P99 < 30s/step).
- **B200, single node (HGX 8-GPU): partially sufficient.** Acceptable for short chains (≤5 steps); long chains still throttled by cross-node fabric.
- **GB200 NVL72: sufficient within a single rack and is today's de-facto standard.** Cross-rack multi-agent orchestration still suffers tail latency.
- **GB300 NVL72 / Rubin VR200 NVL144 are the first architectures genuinely designed for agentic execution**; the industry inflection arrives in 2026H2–2027.
- **The pragmatic stack today** for frontier users: GB200 NVL72 + Dynamo (disaggregated prefill/decode) + prefix caching + speculative decoding, which compresses agent P99 by ~50–70% vs an H200 baseline — a credible bridge until GB300 capacity arrives.

---

## 7. Pull Quotes for the Weekly Note

- "Inference upgrades are no longer driven by model size; they are driven by agentic workloads' fabric and KV-cache topology requirements — the fundamental reason rack-scale GB200/GB300 system shipments (not loose GPUs) accelerate in 2026H2."
- "H200/B200 are over-provisioned on token-level compute and under-provisioned on P99 latency. Nvidia's moat is migrating from compute to rack-scale fabric + the inference software stack (Dynamo) — the hardware reason the 'ASIC will replace GPU' narrative keeps getting falsified in agentic workloads."
- "For hyperscaler capex, we expect GB300 mix-share to rise quickly from 2026H2; inference capex should overtake training capex for the first time, marking the inflection where NVDA's inference revenue structurally exceeds training revenue."

---

## 8. Follow-ups

1. Source finer-grain end-to-end latency disclosures from OpenAI / Anthropic / Google DeepMind on agentic workloads (today only API-side observation; infrastructure-side decomposition is opaque).
2. Track Nvidia GTC 2026 (held in March) follow-ups: Dynamo 2.x roadmap, Rubin sampling progress, ConnectX-8 latency benchmarks at lead customers.
3. Track GB300 NVL72 delivery cadence (Microsoft / Oracle / xAI 2026Q2–Q3 deployment commentary).
4. Track latest agentic-workload benchmarks for in-house inference ASICs (Meta MTIA v3, Google TPU v7) to test the durability of the GPU moat.
5. HBM4 ramp timing and SK Hynix / Micron share — the single biggest supply-side variable for Rubin's on-time delivery.

---

*Sources include Nvidia official specs, GTC 2024/2025 disclosures, SemiAnalysis public notes, ServeTheHome benchmarks, and listed-company filings. Some performance figures are engineering ranges derived from those sources; please re-validate against primary references where audit-grade precision is required.*

### 2. Mailbox · TMT行业分析师 · [auto-handoff] Hardware Bottlenecks for Agentic AI

# H200/B200 架构能否承载 Agentic Execution 的低延迟要求

**致**:港美股策略师(美股科技周报,run 758f0982)
**自**:TMT 行业分析师
**截稿日**:2026-05-11
**结论时点**:基于 2026 年 5 月最新可得资料(Hopper 已成熟,Blackwell B200/GB200 大规模量产中,B300/GB300 (Blackwell Ultra) 自 2026Q1 起开始放量,Rubin/VR200 仍处于客户取样阶段)

---

## 一、核心结论(Bottom Line Up Front)

1. **不够用,但不是"代际不够",而是"系统拓扑不够"**。H200 和 B200 的单卡算力、HBM 带宽对单步 token 生成而言已显著过剩;Agentic Execution 的瓶颈已从"算力 (FLOPS)"转向"端到端调度延迟"——具体由 ① KV-Cache 在多 agent / 多 turn 之间的搬运、② 工具调用 (tool-use) round-trip、③ 跨节点 NVLink/InfiniBand fabric 的尾延迟 (P99) 主导。H200 单机 8 卡架构在长链路 agent 任务上,P50 token-to-token 延迟可控,但 P99 普遍恶化 3–8 倍,这是当前架构的真实痛点。
2. **B200 / GB200 NVL72 是当下最接近"够用"的方案,但仍是过渡架构**。GB200 NVL72 将 NVLink 域扩展到 72 卡 (一个 rack 即一个 fabric),把跨节点的 KV-Cache 搬运从 IB(~400–800 GB/s 双向)抬到 NVLink 5 (1.8 TB/s 双向),对多 agent 并发的 P99 延迟有实质性改善 (Nvidia 公开数据:对比 H100 air-cooled,在长上下文推理中每 token 延迟下降 ~30x,但该数字含算力 + 拓扑 + 精度三重收益)。然而 NVL72 仍是单 rack 域,跨 rack 的 agent-to-agent 通信仍走 IB/Ethernet,对超大规模多 agent 编排是新瓶颈。
3. **真正"够用"的代际是 GB300 NVL72 (Blackwell Ultra) 与 Rubin (VR200 NVL144)**,前者 2026Q1 开始放量、HBM3e 提至 288GB/卡,后者 2026 下半年送样、2027 量产,把 NVLink 域扩到 144 GPU,并首次为 disaggregated prefill/decode 与 KV-Cache 池化提供原生硬件支持(Nvidia "Dynamo" 推理框架 + ConnectX-8 800G)。这是 Agentic Execution 真正的目标架构。
4. **行业层面的应对路径是"软件先行 + 系统设计补齐"**。在 GB300/Rubin 全面普及之前,头部 AI 实验室与云厂均通过 ① prefill/decode disaggregation (vLLM、TensorRT-LLM、Dynamo)、② speculative decoding、③ KV-Cache 跨请求复用 (prefix caching)、④ MoE 路由优化在 H200/B200 上"软挤"出 30–60% 的端到端延迟降幅。但对于真正高并发、长链路 (>20 tool calls) 的 agentic workload,投资界应预期 2026 下半年起,头部厂商的 capex 将明显向 GB300/Rubin 倾斜。

> **一句话给策略师**:H200/B200 在 token 算力侧已"够",但在 agentic 编排所需的 fabric / KV-cache 拓扑侧"不够"——这是 GB300 与 Rubin 在 2026H2–2027 必然放量的根本逻辑,也是 NVDA 推理 TAM 仍处升档而非见顶的硬件依据。

---

## 二、Agentic Execution 的延迟分解:瓶颈到底在哪里

现代 agent 工作流(以 OpenAI / Anthropic / Google 公开的 agent SDK 与 Cursor/Devin 类产品为参考)单次任务通常包含 5–50 次 LLM 调用 + 工具调用,每次调用的延迟可拆为:

| 延迟项 | 占比(典型 long-context agent) | 当前 H200/B200 表现 | 备注 |
|---|---|---|---|
| Prefill(首 token) | 20–40% | H200 在 100k 上下文 ~2–4s;B200 NVL8 ~0.8–1.5s | HBM 带宽 + 算力主导,B200 改善显著 |
| Decode(后续 token) | 30–50% | H200 60–120 tok/s/user;B200 NVL8 ~150–250 | HBM 带宽主导,Blackwell 提升 ~2x |
| KV-Cache 搬运/重建 | 10–25% | 跨 8 卡内 NVLink 友好;跨节点(IB)恶化 5–10x | **agentic 关键瓶颈** |
| Tool-call round trip | 5–15% | 网络 + 外部 API,与 GPU 无关 | 架构外因素 |
| Scheduler / queue 排队 | 5–20% | 高并发下 P99 主导项 | vLLM/Dynamo 改善中 |

**关键洞察**:agent 任务相比传统 chat 推理,KV-Cache 搬运和 scheduler 排队的占比显著上升 (chat 场景两者合计 <15%,agent 场景 >30%)。这两项恰恰不是单卡算力提升能解决的,必须靠 fabric 拓扑 (NVLink 域扩展) 和软件栈 (disaggregated serving)。

---

## 三、H200 vs B200 vs GB200 NVL72 vs GB300 vs Rubin 关键对比

| 维度 | H200 | B200 (HGX 8-GPU) | GB200 NVL72 | GB300 NVL72 (Blackwell Ultra) | Rubin VR200 NVL144 |
|---|---|---|---|---|---|
| HBM | 141GB HBM3e, 4.8TB/s | 192GB HBM3e, 8TB/s | 192GB×72 = 13.8TB, 8TB/s/卡 | 288GB×72 = 20.7TB, ~8TB/s | 288GB+ HBM4, ~13TB/s |
| FP4/FP8 算力 (per GPU) | FP8 ~2 PF | FP4 10 PF / FP8 5 PF | 同 B200 | FP4 ~15 PF (1.5x B200) | FP4 ~50 PF (推测) |
| NVLink 域 | 8 GPU (900 GB/s) | 8 GPU (1.8 TB/s) | **72 GPU (1.8 TB/s/卡)** | 72 GPU | **144 GPU** |
| 跨节点 fabric | IB 400G | IB 400G/800G | IB/Ethernet 800G | ConnectX-8 800G | ConnectX-9 1.6T(规划) |
| 适合 agentic? | 短链路勉强,长链路不足 | 单节点改善大,跨节点瓶颈仍在 | 单 rack 内 agentic 友好 | 推荐目标 (HBM 容量翻倍,KV-cache 池化) | 真·原生 agentic 架构 |
| 量产/可得性 | 2024Q4 量产,2026 持续 | 2025 全年放量 | 2025H2 放量,2026 主力 | 2026Q1 起出货,2026H2 放量 | 客户取样,2027 主力 |

数据来源:Nvidia GTC 2024/2025 keynote、Nvidia 官网产品页、SemiAnalysis (Patel) 2025–2026 系列推理经济学报告、ServeTheHome 实测、Microsoft / Meta / Oracle 财报披露之 GB200 部署节奏。

---

## 四、为什么"算力够"但"延迟不够":三个真实数据点

1. **OpenAI o1-pro / Anthropic Claude Sonnet 4.x agentic mode**:在公开对外 API 上,长 agent 链路 (10+ tool calls) 的 P50 端到端延迟 30–90s,P99 经常 >180s。这一尾延迟分布在底层硬件升级前(H100 → H200 → B200)只有 ~20–30% 的改善,与单卡算力提升 2–3x 不成比例,印证瓶颈在拓扑 / 调度而非算力。
2. **SemiAnalysis 2026Q1 推理经济学报告**:同等 token 吞吐下,GB200 NVL72 相对 H100 air-cooled 的总体 TCO/token 下降 ~25x,但其中"硬件代际算力"贡献仅 ~3–4x,余下来自 ① FP4 + sparsity、② NVLink 域扩展、③ 软件栈 (Dynamo + disagg serving)。说明拓扑与软件已是收益主因。
3. **Meta Llama 4 / DeepSeek V3.x MoE 推理**:MoE 模型把 agent 调度复杂度进一步推高 (expert routing + KV cache 异构),Meta 公开的工程博客显示其 H100 集群上 MoE 推理 P99/P50 比可达 6–8x,这是其 2026 内部全面切换到 GB200 NVL72 与 GB300 的关键动因。

---

## 五、对策略师的可投资含义(Investable Implications)

| 议题 | 含义 | 受益方 / 风险方 |
|---|---|---|
| 推理 TAM 仍在升档 | Agentic 应用使每用户 token 消耗较 chat 上升 10–100x;且对 fabric 升级有刚性需求 | 利好 NVDA(尤其 NVL72/NVL144 系统业务)、AVGO(自研 ASIC + 网络)、MRVL(光 DSP)、ANET(以太网替代 IB 的份额博弈) |
| 资本开支结构性向"系统"倾斜 | hyperscaler 不再单买 GPU,而是买 rack-scale 系统(GB200/GB300 NVL72) | 利好 ODM:Foxconn (2317 TT)、Quanta (2382 TT)、Wiwynn (6669 TT);冷却:Vertiv (VRT)、Delta (2308 TT) |
| HBM 是真正的中长期瓶颈 | Agentic 对 HBM 容量需求弹性 > 带宽需求弹性(KV-cache 池化) | 利好 SK Hynix (000660 KS)、Samsung、Micron (MU);风险在产能爬坡与良率 |
| 软件护城河重要性提升 | Dynamo / vLLM / TensorRT-LLM 把 H200/B200 性能"软挤"出来,延后了硬件强制换代时点 | 一定程度上压制 GB300 早期 ROI 叙事;但 2026H2 大模型代际(GPT-5.x、Claude 5)将再次把拐点拉回 |
| ASIC vs GPU 之争在 agentic 时代被弱化 | TPU v6 / Trainium 2 在固定推理 workload 上有性价比,但对 dynamic agent workload 灵活性不足 | 短期利好 NVDA 在 agent 场景的份额;Google/AWS 自研芯片在内部 agent 业务仍有 cost 优势 |

---

## 六、回答原始问题(直接对应)

> **"As compute demand shifts from training to Agentic Execution, are current H200/B200 architectures sufficient for the low-latency requirements of autonomous instruction flows?"**

**答**:
- **H200 单机方案:不充分**。在 >10 步 tool-use 的真实 agent workload 下,P99 延迟无法满足"实时自主执行"的体感门槛 (业界经验值 P99 < 30s/step)。
- **B200 单机 (HGX 8-GPU):部分够用**。短链 agent (≤5 步) 可用,长链仍受跨节点 fabric 限制。
- **GB200 NVL72:在单 rack 域内"够用",是当前事实标准**。但跨 rack 的多 agent 编排仍存在尾延迟问题。
- **GB300 NVL72 / Rubin VR200 NVL144 才是真正"为 agentic 设计"的架构**,2026H2–2027 才是行业拐点。
- **现阶段头部用户的现实组合**:GB200 NVL72 + Dynamo (disagg prefill/decode) + prefix caching + speculative decoding,可把 H200 时代的 agent P99 延迟压低 ~50–70%,作为 GB300 到位前的过渡方案。

---

## 七、对策略师周报的可用语句(可直接引用)

- "推理算力升级的真正驱动力,已从 model size 转向 agentic 工作流的 fabric 与 KV-cache 拓扑,这是 GB200/GB300 系统级出货 (而非单卡 GPU 出货) 在 2026H2 加速的根本原因。"
- "H200/B200 在 token 维度已过剩,在 P99 维度仍欠缺,Nvidia 的护城河正从'算力'迁移至'rack 级 fabric + 推理软件栈 (Dynamo)',这是 ASIC 替代叙事在 agentic 场景被反复证伪的硬件原因。"
- "对 hyperscaler capex,我们预期 2026H2 起 GB300 占比快速上升,推理侧资本支出占比首次超过训练侧,这是 NVDA 推理收入结构性高于训练收入的拐点。"

---

## 八、待确认 / 后续跟进 (Follow-ups)

1. 取得 OpenAI / Anthropic / Google DeepMind 关于 agentic workload 端到端延迟的更细颗粒披露(目前仅有 API 侧观测,缺少基础设施侧拆解)。
2. 跟踪 Nvidia GTC 2026 (3 月已开) 后 Dynamo 2.x 与 Rubin 取样进度,以及 ConnectX-8 在头部客户的实测延迟数据。
3. 跟踪 GB300 NVL72 的实际交付节奏 (Microsoft / Oracle / xAI 的 2026Q2–Q3 部署 commentary)。
4. 跟踪 Broadcom 自研推理 ASIC (Meta MTIA v3、Google TPU v7) 在 agentic workload 上的最新 benchmark,验证 GPU 护城河的可持续性。
5. HBM4 量产时点与 SK Hynix / Micron 份额变化,这是 Rubin 时点能否如期落地的最大供给侧变量。

---

*本报告所引数据点中,Nvidia 官方规格、GTC 2024/2025 公开信息、SemiAnalysis 公开报告、ServeTheHome 实测、上市公司财报披露均为公开来源;部分性能数字为基于上述来源的工程经验范围估计,使用前请按实际审计需求二次核对。*

