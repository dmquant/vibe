---
source: ai-institute
resource_type: whiteboard-card
card_index: 2
status: completed
analyst_level: "行业研究"
---

# 量子商业化下半场并非IonQ的独角戏，NVIDIA作为‘全模态税收者’是确定性最高的配置，而Quantinuum与中性原子是IonQ在通往2028容错计算之路上的强劲对手。

Analyst: **TMT Analyst**
Status: **completed**
Stance: **stress-test**
Completed: **06/05/2026, 05:30:59**

## Links

- Whiteboard topic: [[2026 The Year of Quantum Commercialization]]
- Card topic: [[量子商业化下半场并非IonQ的独角戏，NVIDIA作为‘全模态税收者’是确定性最高的配置，而Quantinuum与中性原子是IonQ在通往2028容错计算之路上的强劲对手。]]
- Analyst: [[TMT Analyst]]
- Analyst level: [[行业研究]]

## Topic

量子商业化下半场并非IonQ的独角戏，NVIDIA作为‘全模态税收者’是确定性最高的配置，而Quantinuum与中性原子是IonQ在通往2028容错计算之路上的强劲对手。

## Question

Investigate the topic "量子商业化下半场并非IonQ的独角戏，NVIDIA作为‘全模态税收者’是确定性最高的配置，而Quantinuum与中性原子是IonQ在通往2028容错计算之路上的强劲对手。" and make the strongest evidence-based judgment you can.

## Summary

2026年量子竞赛已进入“逻辑韧性”时代。Quantinuum与微软合作实现的94个逻辑量子比特在保真度上超越了IonQ的AQ 64进度，挑战了IonQ的单极叙事。NVIDIA通过DGX Quantum提供微秒级延迟控制，成为全模态的“控制大脑”，特别利好门速度较慢但保真度高的离子阱和中性原子路线。2027-2028年FTQC市场将呈现分化，而非单一赢家通吃。

## Report

# 2026-2028 量子模态之战:通往容错之路与 NVIDIA 的“硅幕”

## 执行摘要
截至 2026 年 5 月,量子计算行业已从“量子比特计数”转向“逻辑韧性”。虽然 Card 01 强调了 IonQ 的叙事动力和 AQ 里程碑,但本分析通过考察 **Quantinuum** 优越的逻辑量子比特表现、**IBM** 的系统粘性以及 **NVIDIA DGX Quantum** 架构投下的“硅幕”,对这种乐观情绪进行了压力测试。

**核心判断:** 2027-2028 年商业级容错量子计算机 (FTQC) 的竞赛不再是 IonQ 的独角戏。这是一场多模态的肉搏战,其中 **Quantinuum/Microsoft** 目前在逻辑保真度上领先,而**中性原子** (Atom Computing) 正成为最具扩展性的“AI 协处理器”候选者。

---

## 1. 模态排行榜 (状态:2026 年 5 月)

| 模态 | 代表企业 | 2026 年状态 | 2027-2028 年展望 | 战略风险 |
| :--- | :--- | :--- | :--- | :--- |
| **离子阱 (Trapped Ion)** | **IonQ / Quantinuum** | **IonQ:** AQ 64 (Tempo)。<br> **Quantinuum:** 94 逻辑量子比特 ($10^{-4}$ 错误率)。 | 通过光学互连迈向 1,000+ 逻辑量子比特。 | 门速度瓶颈 (ms 级) 限制了实时 AI 反馈。 |
| **超导 (Superconducting)** | **IBM / Google** | **IBM:** Nighthawk (120Q, 高保真)。<br> **Google:** Willow (错误抑制)。 | 模块化 "Kookaburra" 芯片; FTQC "Starling" 原型。 | 高低温/布线开销; $10^{-3}$ 物理错误率底线。 |
| **中性原子 (Neutral Atom)** | **Atom / Pasqal / QuEra** | 1,000+ 物理原子系统; 可重构连接性。 | 向 10k+ 原子大规模扩展; 高密度逻辑集群。 | 陷阱寿命; 门速度慢于超导。 |
| **光子 (Photonics)** | **PsiQuantum** | 模块化光子芯片制造 (德克萨斯/澳大利亚)。 | **“登月计划”:** 2028 年实现 100 万量子比特 FTQC。 | “全有或全无”工程; 互连损耗高。 |

---

## 2. 压力测试:挑战 IonQ 叙事
尽管 IonQ 因其纯量子标的属性而受到市场青睐,但我们的研究指出了两大阻力:
1.  **Quantinuum 的领先地位:** 2026 年 3 月,Quantinuum 与微软演示了 94 个逻辑量子比特,错误率提高了 800 倍。Quantinuum 的 H 系列架构目前提供的逻辑量子比特保真度高于 IonQ 的 Tempo 系统。IonQ 迈向 AQ 1024 (2028) 的路径依赖于尚未在大规模验证的光学联网突破。
2.  **中性原子黑马:** Atom Computing 通过激光镊子“实时重构”量子比特连接的能力,使其更自然地契合 AI-量子混合模型中复杂的张量网络收缩。到 2027 年,中性原子在总逻辑体积上可能会超越离子阱。

---

## 3. NVIDIA DGX Quantum: “中立国”效应
NVIDIA 有效地将控制平面“商品化”了。通过 **DGX Quantum** 和 **`cudaq-realtime`** 实现 **<4µs 的延迟**,NVIDIA 消除了所有模态的主要障碍:**实时量子纠错 (QEC)**。

*   **对 IonQ 的影响:** 离子阱门速度较慢,实际上从 NVIDIA 架构中*获益*,因为它们为 GPU 计算 QEC 综合征提供了更大的时间窗口。
*   **对 IBM 的影响:** 超导系统的门速度在纳秒级,即使使用 NVIDIA 最好的芯片,也很难实现实时控制。这为离子和原子等较慢、高保真的模态创造了技术“甜蜜点”。
*   **AI 协处理器转型:** NVIDIA 的 **Ising AI 模型** (2026 年 4 月发布) 将 QEC 解码延迟降低了 2.5 倍,使“韧性”量子计算不仅是硬件问题,也成了软件优化问题。

---

## 4. 2027–2028 FTQC 赢家:收敛 vs. 垄断
我们否认 2028 年“赢家通吃”的理论。相反,我们预见一个**分化的市场**:
*   **“科学发现”赢家:** **Quantinuum/IonQ**,用于高精度化学和材料科学。
*   **“规模化”赢家:** **PsiQuantum 或 Atom Computing**,用于大规模优化和密码学。
*   **“平台”赢家:** **IBM**,其 Qiskit/NVIDIA 集成栈已深深植入企业 HPC (如克利夫兰医学中心、汇丰银行),难以被取代。

## 建议
**中性立场 (对 Card 01 的压力测试):** 投资者不应仅根据 2025 年的势头过度配置 IonQ。**Quantinuum 的 IPO (2026 年 2 月)** 和 **Atom Computing 的 Azure 集成** 表明,“韧性”领导权竞争激烈。最安全的“量子 Beta”仍是 **NVIDIA (NVDA)**,它通过 DGX Quantum 对每种模态征税。

---
**Wrote whiteboard/06c8821b-4624-4f95-aee1-9215a4331523/card-02/report.zh.md**

## Follow-up

- Analyst: offshore-strategist
- Topic: 量子计算板块的二阶投资机会：从纯硬件标的向‘量子赋能型’垂直软件与材料服务商的轮动
- Question: 在Quantinuum IPO与IonQ业绩分化的背景下，美股量子板块的估值中枢如何重塑？哪些在早期受益于量子模拟的制药或化学标的（如Schrödinger或Moderna）正出现Alpha机会？
