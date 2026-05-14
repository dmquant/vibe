---
source: ai-institute
resource_type: whiteboard-card
card_index: 8
status: completed
analyst_level: "综合编审"
---

# 核心结论可保留，但因文件缺失、宏观日期漂移和Card 07分批配置口径不清，最终发布评级为needs revision。

Analyst: **QA Manager**
Status: **completed**
Stance: **support**
Completed: **13/05/2026, 06:27:22**

## Links

- Whiteboard topic: [[美西运价飙升与零售毛利的再分配——集运多 vs 零售空]]
- Card topic: [[核心结论可保留，但因文件缺失、宏观日期漂移和Card 07分批配置口径不清，最终发布评级为needs revision。]]
- Analyst: [[QA Manager]]
- Analyst level: [[综合编审]]

## Topic

核心结论可保留，但因文件缺失、宏观日期漂移和Card 07分批配置口径不清，最终发布评级为needs revision。

## Question

Investigate the topic "核心结论可保留，但因文件缺失、宏观日期漂移和Card 07分批配置口径不清，最终发布评级为needs revision。" and make the strongest evidence-based judgment you can.

## Summary

截至2026-05-13，最终QA支持研究链的核心方向，但给出needs revision评级：实时工作区缺少session-brief.md、card-04和card-07，Card 05存在过时宏观日历，Card 07的40%首批回补与UST/CGB比例存在口径歧义。零售毛利测算、8%-10%主题RC、集运止盈后3%-5% RC释放以及UST 65/CGB 35的主线基本自洽。发布前需恢复缺失文件、统一PCE/CPI/FOMC日期，并重算Card 07分批配置表。

## Report

# 2026-05-13 最终 QA 审计：RC、UST/CGB 配置与宏观触发器一致性

- 作者：QA Manager (qa-manager)
- 工作日期：2026-05-13（Asia/Singapore）
- 立场：支持，但发布前必须修订
- 审计评级：**needs revision**
- 审计范围：实时工作区内的 Card 01-06 文件；Card 04 与 Card 07 因实时工作区缺失，按本卡提示中的 session snapshot 重建审计。

截至机构工作日 **2026-05-13**，我支持本研究链的核心结论：交易仍应定义为战术性做多集运运价弹性、做空精选进口依赖型可选零售，并在集运止盈后把释放的风险预算主要回补到 UST-heavy 政府债久期。但整套材料**尚未达到发布标准**。实时工作区文件不完整，且风险贡献 (RC)、UST/CGB 配置和宏观触发器日期之间有几处需要修正的数字断点。

## 1. 文件完整性审计

| 项目 | QA 结果 | 发布含义 |
|---|---|---|
| `card-01` 至 `card-03` 实时报告与 metadata | 通过 | 文件存在，并标注 2026-05-13。 |
| `card-05` 与 `card-06` 实时报告与 metadata | 有内容问题但通过 | 文件存在，并标注 2026-05-13；但 Card 05 含有过时宏观日历日期。 |
| `session-brief.md` | 实时工作区缺失 | 本审计按提示中的 snapshot 重建；最终归档前应恢复。 |
| `card-04/report.*.md` 与 `card-04/meta.json` | 实时工作区缺失 | 关键缺口，因为 Card 05 依赖 Card 04 的 0.55R / 0.85R / 0.10R 触发器框架。 |
| `card-07/report.*.md` 与 `card-07/meta.json` | 实时工作区缺失 | 关键缺口，因为 Card 07 是 PCE/CPI/FOMC/中国信用数据的最新宏观验证层。 |
| 本 Card 08 交付文件 | 本卡已写入 | `report.en.md`、`report.zh.md` 与 `meta.json` 已写入 `card-08/`。 |

**QA 结论：** 仅文件完整性一项就足以给出 **needs revision**。分析可以从提示 snapshot 恢复，但最终发布档案不能依赖提示记忆来补 Card 04 与 Card 07。

## 2. 数字一致性审计

| 研究链环节 | 状态 | QA 备注 |
|---|---|---|
| 运价锚点 | 通过 | Cards 01-03 对 USWC 现货 **USD 2,675-3,062/FEU** 与 **USD 2,000/FEU** 论点阈值的使用一致。 |
| 零售毛利测算 | 通过 | Card 02 的测算自洽：**USD 1,000/FEU** 运价上升对应 **USD 100,000** 货值箱的 **100 bp**、**USD 60,000** 的 **167 bp**、**USD 40,000** 的 **250 bp**；脆弱零售篮子的敞口加权毛利风险 **60-150 bp** 合理。 |
| Card 04 仓位校准 | 需清理表述 | 按 snapshot 重建，Card 04 使用集运多头 **0.55R**、零售空头 **0.85R**、FX 对冲 **0.10R**，且可能含铁路 **0.10R**。Card 05 称其为 **net exposure ≈ ±0.7R**，但没有定义代数净敞口与风险预算含义。建议改为“主题风险包络”，或明确列出 net/gross 计算。 |
| 主题 RC 配置 | 基本通过 | Card 05 的 **8%-10% 总 RC、12% 硬上限** 在 10%-12% 年化波动目标下是合理的战术 sleeve。其 **0.6%-0.9%** 波动贡献若按简单线性 RC 份额理解略低，应补充映射方法或调整区间。 |
| 集运止盈释放 RC | 通过 | Card 05 称止盈后主题 RC 降至 **4%-5%**、释放 **3%-5% RC**，与初始 **8%-10% RC** 大体一致。 |
| Card 06 UST/CGB 拆分 | 小幅尺寸差异 | Card 06 用释放 **3%-5% RC** 的 **65% UST / 35% CGB**，隐含 UST **1.95%-3.25% RC**、CGB **1.05%-1.75% RC**。其执行区间 **2.0%-3.0%** UST 与 **1.0%-1.5%** CGB 接近，但顶部略小。 |
| Card 07 首批仓位 | 需修订 | Card 07 称首批仓位降至 **40%**，并写成 **UST 1.2%-2.0% RC**。这等于释放总 RC 的 **40%**，不是 **65% UST sleeve** 的 40%。随后“完成 UST 余下 60%”容易造成 UST 重复计入。必须明确 40% 是总回补比例还是 UST-only 比例。 |
| Card 07 中国宽松情景 | 需修订 | snapshot 写到中国宽松时偏向 **70/30**，但具体机制是 CGB 从 **35% 降至 25%**、转 **10%** 给 UST，结果应为 **75/25**，不是 **70/30**。 |

## 3. 宏观触发器与日期审计

Card 05 是宏观日历漂移的主要来源。它提到 “pre-5/14 CPI”、**5/30 PCE**、**6/12 China TSF** 和 **6/17-18 FOMC**。后续 Card 06 与按 snapshot 重建的 Card 07 已基本修正美国日历。官方日程显示：

- 2026 年 4 月 CPI 已于 **2026-05-12** 发布，2026 年 5 月 CPI 定于 **2026-06-10** 发布。[^bls]
- BEA 日程显示，包含 PCE 的 2026 年 4 月 Personal Income and Outlays 定于 **2026-05-28** 发布。[^bea]
- Federal Reserve 2026 年会议日程显示，6 月 FOMC 为 **2026-06-16/17**，并包含 SEP。[^fed]
- 中国 5 月社融/信用数据方面，本审计无法从现有证据验证固定官方发布日期。除非补充 PBoC 一手日历，否则应写作 **[日期不明]** 或“6 月中旬窗口”。

**必要编辑修复：** 全链条统一到 Card 06/07 的日历：**2026-05-28 PCE、2026-06-10 CPI、2026-06-16/17 FOMC、中国信用 [日期不明] 或有来源的 6 月中旬窗口**。删除 Card 05 中 **5/14 CPI**、**5/30 PCE** 与 **6/17-18 FOMC** 的过时表述。

## 4. 叙事连贯性审计

研究主线总体连贯：

1. Cards 01-03 说明运价已经高于痛点线，但上涨更像关税/库存前置挤压，而不是已经完全被需求验证的旺季周期。
2. 按 snapshot 重建的 Card 04 正确地收窄 gross exposure，把交易从继续加仓转为触发器纪律。
3. Card 05 将主题纳入跨资产 RC，并合理提示集运与原油共享宏观因子，而久期是集运止盈后的自然回补 sleeve。
4. Card 06 给出清晰债券执行：只做政府债，优先 UST 7-10Y/10Y，CGB 7-10Y 作为分散器，不在利差偏窄时加信用 beta。
5. Card 07 的宏观四闸口思路正确，但分批数字和中国宽松情景的 UST/CGB 比例需要修正。

存在一个叙事断点：从“集运止盈”过渡到“回补久期”时，需要明确说明，只有当止盈反映**需求验证失败或运价动能衰减**时，久期回补才成立；若止盈触发来自新的通胀型供给冲击，则释放的 RC 应先留在现金/短久期，等待 PCE/CPI 确认。Card 06 已隐含这一点，但最终稿应直接写明。

## 5. 发布前修订清单

发布前需完成以下修订：

1. 恢复或重写实时 `card-04` 与 `card-07` 的报告和 metadata，并恢复 `session-brief.md`。
2. 将 Card 05 的宏观日历统一替换为上文核验后的日期。
3. 明确定义 Card 04 的 **±0.7R**：它究竟是方向性净敞口、压力损失包络，还是风险预算代理；不能继续作为未定义的 “net exposure”。
4. 重算 Card 07 的分批表，使释放 **3%-5% RC**、**65/35 UST/CGB**、**40% 首批** 以及通胀/中国信用情景都加总为 100%。
5. 中国宽松情景若保留 “CGB 35% 降至 25%” 的机制，则写成 **75/25**；若坚持 **70/30**，则必须修改机制。
6. 增加一句桥接逻辑：当集运止盈代表商品需求降温时才回补久期；若触发器来自通胀型供给压力，则先留现金/短久期，等待 PCE/CPI 放行。

## 最终 QA 评级

**Needs revision，不是 fail。** 核心论点、零售毛利测算、RC 尺寸和 UST-heavy 久期方向大体一致。发布阻碍是可修复的：实时文件缺失、宏观日历旧日期、以及两个配置表述歧义。完成这些修订后，研究链可以进入最终发布复核。

## 参考来源

[^bls]: U.S. Bureau of Labor Statistics, "Schedule of Releases for the Consumer Price Index"，显示 2026 年 4 月 CPI 于 2026-05-12 发布、2026 年 5 月 CPI 于 2026-06-10 发布：https://www.bls.gov/schedule/news_release/cpi.htm?lv=true
[^bea]: U.S. Bureau of Economic Analysis, "Release Schedule"，显示 Personal Income and Outlays, April 2026 于 2026-05-28 发布：https://www.bea.gov/news/schedule
[^fed]: Federal Reserve, "Meeting calendars and information"，2026 年 FOMC 日程显示 6 月会议为 June 16-17：https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm

_页脚：机构工作日 2026-05-13；Board bdf518e1-f6d7-4e74-9434-bd5583132ed2；Card 08。_
