---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Weekly Research QA Review — China Auto, 2026-05-04 to 2026-05-08

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Weekly Research QA Review — China Auto, 2026-05-04 to 2026-05-08

**Review date**: 2026-05-10 (anchored on shell `date`)  
**Artifacts under review**: `01_weekly_plan.md` / `01_weekly_plan.en.md` / `02_weekly_research.md` / `02_weekly_research.en.md`  
**Reviewer**: QA Manager

---

## 1. File manifest

| Declared file | Present | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | Yes | 9,108 | Chinese plan, fully structured |
| `01_weekly_plan.en.md` | Yes | 8,986 | English mirror, comparable size |
| `02_weekly_research.md` | Yes | 25,497 | Chinese research draft, all six questions covered |
| `02_weekly_research.en.md` | Yes | 28,139 | English mirror, content aligned |
| `03_charts/` or `03_visuals.md` | No | — | Plan handoff §references it, but step 03 is out of scope for this QA |
| `04_weekly_report.md` / `.en.md` | No | — | Same — writing stage not yet run |

Conclusion: **steps 01–02 deliverables are complete**; no `## ⚠️ Upstream Gaps` section required.

---

## 2. Cross-step consistency

| Data point | Source | Value | Verdict |
|---|---|---|---|
| Coverage window | plan title, research date anchor | `2026-05-04 → 2026-05-08`, shell `2026-05-10` | Consistent |
| ETF tickers (auto / NEV) | plan §3, research §Q6 + V5 | `159512.SZ`, `515030.SS` aligned; plan also lists `159806` which research does not pick up | Minor gap — research should explicitly state why `159806` was dropped |
| BYD April overseas units | research priority §1 row 4, Q4 table, Q2 table | `134,542`, YoY `+70.9%`, ~`41.9%` of total (= 134,542 / 321,123) | Internally consistent; ratio reproduces |
| Lithium carbonate weekly move | research priority §1 row 5, Q5 table | `190,000 → 194,500 RMB/t`, `+2.37%` (= 4,500/190,000) | Arithmetic correct |
| Per-vehicle lithium cost sensitivity | research Q5 prose | `4,500 RMB/t × 40-60 kg = 180-270 RMB/vehicle` | Arithmetic correct, but "~40-60 kg LCE per vehicle" should clarify it assumes a 60-80 kWh pack — readers may otherwise confuse LCE mass with battery capacity |
| SW Auto valuation | research priority §1 row 6, Q6 table | PE-TTM `33.47x`, percentile `61.10%`, as of `2026-04-24` | Internally consistent; staleness vs. `2026-05-08` window close already disclosed in Q6 limitations |
| L3 expansion | plan §1 S4 framed as a "rumour"; research §Q3 + event-verification table mark it "unconfirmed" | Aligned — research correctly refused to promote rumour to fact | Handled well |
| April NEV retail YoY | research priority §1 row 1 and Q1 table | both `-5%` (retail) | Consistent — but the contrast with "EV exports YTD-Apr `+68.1%`" deserves explicit framing so a reader does not misread "record penetration" as "demand expansion" |

No fatal contradictions. The two items needing wording cleanup (LCE units, ETF `159806` drop) are listed under §5 revisions.

---

## 3. Narrative coherence

| Plan question | Research section | Answered? | Note |
|---|---|---|---|
| Q1 demand / penetration / discounts | §Q1 | Yes | Penetration, YoY, and discount all numerical; discount caliber mixing (CPCA promo vs. Dasouche) disclosed in limitations |
| Q2 company alpha (7 NEV start-ups) | §Q2 | Yes | Covers 6 + Zeekr; **Pony.ai / WeRide / Baidu Apollo (Robotaxi, plan item S8) untouched** |
| Q3 intelligent driving (L3 + FSD + compute + LiDAR) | §Q3 | Yes | Correctly handled "no official L3 expansion" and "FSD not widely rolled out"; Mobileye/Aptiv earnings is a value-add |
| Q4 overseas + tariffs | §Q4 | Yes | BYD/Chery/Geely overseas + EU CVD frame in place; Mexico tariff "no new document this week" transparently flagged; **SE-Asia (Thailand/Indonesia) capacity build-out (plan S5) lacks numerical follow-through** |
| Q5 upstream costs | §Q5 | Yes | Lithium, copper, aluminium, nickel, rare earths all covered; rare-earth proxy (REMX) is more indirect than ideal |
| Q6 flows + valuation | §Q6 | Partial | Industry-level Northbound/Stock-Connect weekly net flow not filled, ETF share creations/redemptions not filled — both transparently flagged as "not in public sources" |

Overall: **clean plan → research mapping**; the three "orphan" threads (Robotaxi/L4, SE-Asia capacity, industry-level Northbound flows) are all acknowledged in the research draft as either limitations or future tracking items, not silently dropped.

---

## 4. Editorial quality

1. **Priority-conclusion row 5**: "lithium carbonate moved from 190,000 to 194,500 from May 6 to May 8" reads like two time-points. Recommend "across the three trading days May 6–8" to make the range explicit.
2. **Q2 table, Xiaomi row**: rendering YoY/MoM as `>=+4.95%` / `>=+39.93%` looks like a malformed inequality. Use "≥ +4.95% (lower-bound from 30,000)" and reiterate in a footnote that the official disclosure is "over 30,000" so downstream quoters preserve the caveat.
3. **Q5 per-vehicle sensitivity**: "≈40-60 kg LCE per vehicle" should be parenthetically tied to "assumes a 60-80 kWh pack, LFP/NCM blend"; readers unfamiliar with the conversion will conflate LCE mass with battery kWh.
4. **V5 flows table**: three consecutive "not in public sources" rows have low information density. Collapse them into one line ("the following sub-segment weekly flows / share data could not be sourced publicly: NEV-ETF shares, ADAS/LiDAR fund flows, industry-level Northbound") and keep only the rows that have data in the main table.

---

## 5. Recommended revisions (priority descending)

- **[High] LCE vs. battery-capacity unit**: add a parenthetical "(60-80 kWh pack, LFP/NCM blend)" to the Q5 per-vehicle sensitivity so a PM reading the line does not interpret "kg LCE" as "kg of battery".
- **[High] Strengthen the April penetration narrative**: add one sentence in the priority block or Q1 lede stating "domestic retail YoY -5% while EV exports YTD-Apr +68.1% — the industry total is being held up by exports, not by domestic demand". The draft implies it; it needs to be said outright.
- **[Med] Xiaomi row formatting**: change `>=+4.95%` to `≥ +4.95% (lower-bound)` with a footnote.
- **[Med] V5 flows table slim-down**: collapse the missing-data rows.
- **[Med] Close the three plan→research orphans**: append "Robotaxi commercialisation milestones (Pony.ai / WeRide / Baidu Apollo)" and "SE-Asia capacity landings" rows to §Follow-up watchlist so plan items S5 and S8 are explicitly closed.
- **[Low] ETF 159806 drop**: one line in V5 footnote or §limitations explaining why it was dropped.
- **[Low] Valuation timing mismatch**: Q6 valuation is as of `2026-04-24`, two weeks behind the `2026-05-08` window close. Step 04 should re-pull from THS or Wind for May 8; if unavailable, keep current disclosure.

---

## 6. Overall grade

**pass** — sourcing is solid, the plan→research loop closes, and limitations are transparent; the recommended revisions are all polishing-grade and do not block PM use. Step 04 should absorb them when assembling the final report.

---

```json
{"follow_ups":[
  {"to":"auto-analyst","subject":"Close the Robotaxi and SE-Asia capacity orphan threads","question":"Before the 03 visuals + 04 write-up, please add two explicit rows to the §Follow-up watchlist: (1) verifiable Robotaxi commercialisation milestones from Pony.ai / WeRide / Baidu Apollo within the May window, (2) capacity-landing milestones for BYD / Chery / Geely / SAIC in Thailand / Indonesia / Brazil — even a 'no public update this week' line with a checked source is acceptable, but the orphan plan items S5 and S8 should be visibly closed.","priority":"normal"}
]}
```
