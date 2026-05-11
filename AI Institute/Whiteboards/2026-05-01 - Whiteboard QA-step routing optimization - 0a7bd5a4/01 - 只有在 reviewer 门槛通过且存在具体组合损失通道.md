---
source: ai-institute
resource_type: whiteboard-card
card_index: 1
status: completed
analyst_level: "风控与合规"
---

# 只有在 reviewer 门槛通过且存在具体组合损失通道或尾部风险问题时，QA-step 才应允许路由到 `chief-risk`。

Analyst: **Chief Risk Officer**
Status: **completed**
Stance: **initial**
Completed: **01/05/2026, 02:05:31**

## Links

- Whiteboard topic: [[Whiteboard QA-step routing optimization]]
- Card topic: [[只有在 reviewer 门槛通过且存在具体组合损失通道或尾部风险问题时，QA-step 才应允许路由到 chief-risk 。]]
- Analyst: [[Chief Risk Officer]]
- Analyst level: [[风控与合规]]

## Topic

只有在 reviewer 门槛通过且存在具体组合损失通道或尾部风险问题时，QA-step 才应允许路由到 `chief-risk`。

## Question

Investigate the topic "只有在 reviewer 门槛通过且存在具体组合损失通道或尾部风险问题时，QA-step 才应允许路由到 `chief-risk`。" and make the strongest evidence-based judgment you can.

## Summary

本卡支持在 whiteboard QA-step 路由提示词中加入两层守门规则：先判断 reviewer 是否有资格介入，再判断 `chief-risk` 是否真正符合组合风险、VaR、压力测试、tail risk、流动性、杠杆或 scenario loss 等领域。该规则可防止泛泛的“risk”词汇或早期 QA 场景过度触发 `chief-risk`，并把文件完整性问题导向 `qa-manager`、合规问题导向 `compliance-officer`、早期主线问题导向 primary analyst。

## Report

# 防止过度路由到 `chief-risk` 的条件守门规则

## 来源说明

本卡片生成时，工作区磁盘中未找到被引用的实时文件 `whiteboard/0a7bd5a4-9cf4-4b9b-ba16-66bdcbfcc3b6/session-brief.md` 与 `whiteboard/0a7bd5a4-9cf4-4b9b-ba16-66bdcbfcc3b6/analyst-catalog.json`。因此，本报告根据卡片提示词中的信息重建会话状态：Card `1/8`，当前立场为 `initial`，暂无已完成卡片，当前问题是：“How can we implement a conditional guard in the whiteboard QA-step prompt to prevent over-routing to chief-risk?” [1]

## 核心判断

我支持在 whiteboard QA-step 路由提示词中加入硬性的条件守门规则。该规则应分为两层：

1. **reviewer 资格门槛**：只有当任务明确要求 review/finalization，或前序卡片已经暴露出需要审计、压力测试、合规审查或质量复核的具体脆弱点时，才允许路由到任何 reviewer。
2. **`chief-risk` 领域门槛**：在 reviewer 资格成立的前提下，只有当未解决问题实质上涉及 portfolio risk、VaR、stress tests、tail risk、drawdown、liquidity risk、cross-asset exposure、leverage、concentration 或 scenario loss 时，才路由到 `chief-risk`。[2]

这样可以避免“risk”这类泛化词汇压倒原本的 roster 结构。现有角色指引已经说明：reviewer 只应在出现具体脆弱点或进入定稿节点后使用；一个健康的 10-card 线程通常应包含约 `7-8` 张 primary 卡、`1-2` 张 specialist 卡、以及 `0-1` 张 reviewer 卡。[3]

## 需要控制的失败模式

当前过度路由本质上是一个风险分类的假阳性问题：

| 失败模式 | 发生原因 | 结果 |
|---|---:|---|
| 泛泛出现 “risk” 就路由到 `chief-risk` | 路由器把风险词汇当成充分证据 | reviewer 过早出现，只能给出泛泛提示 |
| Meta-QA 任务路由到 `chief-risk` | QA 与 risk 都带有 reviewer 色彩 | 线程跳过领域主责分析师或 `qa-manager` |
| 第二张卡就升级 reviewer | 路由器没有执行卡片阶段纪律 | 白板在线程展开前失去 primary analyst 的主线推进 |

就本卡而言，`chief-risk` 可用于设计该守门规则，因为缺陷本身是一个路由风险问题。但规则落地后，未来的路由应更保守：`chief-risk` 应是窄范围例外，而不是默认 reviewer。

## 建议插入的提示词

建议在 QA-step 提示词选择 `recommended_next_analyst_id` 之前加入以下片段：

```text
Reviewer routing guard:

Before selecting any reviewer analyst, run the following gate.

1. Determine whether the candidate analyst has role tag [reviewer].
2. If the candidate is a reviewer, reviewer routing is allowed only when at least one condition is true:
   a. The user explicitly asks for review, audit, compliance, risk control, stress testing, VaR, tail-risk review, final pass, or QA grading.
   b. One or more prior cards identify a concrete fragility, contradiction, missing evidence, numeric inconsistency, regulatory issue, portfolio-loss channel, leverage/liquidity issue, or tail-risk scenario that must be tested.
   c. The thread is at a finalization checkpoint where a reviewer is needed to pass/fail the work product.
3. If none of those conditions is true, do not route to a reviewer. Prefer the best-fitting primary analyst; use a specialist only if the next question concretely sits in that specialist's domain.

Additional `chief-risk` guard:

Route to `chief-risk` only if the reviewer gate passes AND the unresolved question is specifically about portfolio risk, stress testing, VaR, tail risk, drawdown, liquidity risk, concentration risk, leverage, cross-asset exposure, scenario loss, or risk-budget breach.

Do not route to `chief-risk` for:
- Generic mentions of "risk" or "uncertainty"
- Early-stage brainstorming without positions, exposures, scenarios, or loss channels
- QA prompt design, file completeness, narrative coherence, or editorial review unless the user explicitly asks the Chief Risk Officer to handle it
- Compliance, disclosure, or regulatory questions better handled by `compliance-officer`
- General macro, sector, strategy, or thematic perspective that belongs to a primary analyst
```

## 最小伪代码

```python
def reviewer_gate(task, prior_cards, candidate):
    if candidate.role_tag != "reviewer":
        return True

    explicit_reviewer_request = task.has_any([
        "review", "audit", "compliance", "risk control", "stress test",
        "VaR", "tail risk", "final pass", "QA grade"
    ])

    concrete_fragility = prior_cards.has_any([
        "contradiction", "missing evidence", "numeric inconsistency",
        "regulatory issue", "portfolio loss channel", "leverage issue",
        "liquidity issue", "tail-risk scenario", "concentration"
    ])

    finalization_checkpoint = task.stage in ["final", "pre-publication", "handoff QA"]

    return explicit_reviewer_request or concrete_fragility or finalization_checkpoint


def chief_risk_gate(task, prior_cards, candidate):
    if candidate.id != "chief-risk":
        return reviewer_gate(task, prior_cards, candidate)

    if not reviewer_gate(task, prior_cards, candidate):
        return False

    chief_risk_domain = task.has_any([
        "portfolio risk", "stress test", "VaR", "tail risk", "drawdown",
        "liquidity risk", "concentration risk", "leverage",
        "cross-asset exposure", "scenario loss", "risk budget"
    ]) or prior_cards.has_any([
        "portfolio loss channel", "tail-risk scenario", "VaR",
        "stress-test fragility", "liquidity gap", "crowded exposure"
    ])

    return chief_risk_domain
```

## 路由示例

| 输入场景 | 正确路由 | 原因 |
|---|---|---|
| “Does this report have missing citations or inconsistent numbers?” | `qa-manager` | reviewer 门槛成立，但领域是 QA 完整性，不是组合尾部风险 |
| “Stress-test this sector allocation under a 15% equity drawdown and CNY shock” | `chief-risk` | reviewer 门槛成立，且领域是压力测试与 scenario loss |
| “What are the risks to the AI theme thesis?” | `thematic-researcher` 或 `tmt-analyst` | 泛化 risk 词汇不足以触发 `chief-risk` |
| “Check whether this trade violates disclosure or restricted-list rules” | `compliance-officer` | reviewer 门槛成立，但领域是合规 |
| “We have no completed cards; choose who should start the topic” | 最匹配的 primary analyst | 早期路由不应从 reviewer 开始 |
| “Portfolio has 40% in crowded high-volatility small caps; estimate VaR and tail loss” | `chief-risk` | 已出现具体 exposure、volatility、VaR 与 tail-loss 通道 |

## 建议的 QA 回归测试

提示词修改后，至少应使用 `8` 个路由用例测试：

1. `chief-risk` 正例：明确要求 VaR 与 stress-test。
2. `chief-risk` 正例：前序卡片指出 leverage 与 liquidity fragility。
3. `chief-risk` 反例：第一张卡只询问泛泛的 “risk factors”。
4. `chief-risk` 反例：QA 文件完整性审计应路由到 `qa-manager`。
5. `chief-risk` 反例：合规披露问题应路由到 `compliance-officer`。
6. reviewer 反例：第一张卡询问行业展望且没有具体脆弱点。
7. specialist 正例：options-flow 问题应路由到 `derivatives-strategist`，而不是 `chief-risk`。
8. primary 正例：AI 行业框架应路由到 `tmt-analyst` 或 `thematic-researcher`。

通过标准：`chief-risk` 只应在用例 `1` 与 `2` 中被选中。本回归集在用例 `3-8` 上的 `chief-risk` 假阳性率应为 `0/6`。

## 操作风险控制

该守门规则应像模型控制阈值一样监控：

| 控制指标 | 目标 |
|---|---:|
| Card `3` 前的 reviewer 占比 | 接近 `0%`，除非用户明确要求 |
| 正常 10-card 白板中的 `chief-risk` 占比 | 通常为 `0-1` 张卡 |
| 回归测试中的 `chief-risk` 假阳性路由 | 反例中为 `0/6` |
| 缺少 handoff rationale role tag 的输出 | `0` 个可接受输出 |

最重要的控制点不只是关键词过滤。路由器必须要求存在未解决的、具体的损失通道，才能选择 `chief-risk`。该损失通道可以来自用户请求，也可以来自前序卡片，但不应从泛泛的不确定性讨论中推断出来。

## 建议交接

无需交接给下一位分析师。本卡可以在写入守门规则后停止，因为当前交付物是提示词控制建议，而不是市场研究链条。如果后续开启实现卡，最合适的 reviewer 是 `qa-manager [reviewer]`，但应等到守门规则已经嵌入、且存在具体提示词产物需要审计之后再调用。

## 参考资料

[1] 卡片提示词，Session Brief Snapshot：Board ID `0a7bd5a4-9cf4-4b9b-ba16-66bdcbfcc3b6`；Card `1/8`；暂无已完成卡片；当前问题是防止过度路由到 `chief-risk`。

[2] 卡片提示词，`chief-risk` 角色定义：Chief Risk Officer 专长为 portfolio risk、stress tests、VaR 与 tail risk。

[3] 卡片提示词，Roster role guidance：reviewer 只应在具体脆弱点或定稿节点后使用；默认 10-card 结构约为 `7-8` 张 primary、`1-2` 张 specialist、`0-1` 张 reviewer。
