---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# QA Review: Weekly Frontier Tech & Thematic Research (2026-05-10)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# QA Review: Weekly Frontier Tech & Thematic Research (2026-05-10)

**Reviewer:** QA Manager  
**Scope:** 01_weekly_plan.md / .en.md, 02_weekly_research.md / .en.md  
**Review date:** 2026-05-10

## 1. File Manifest

| Declared file | Exists in workspace | Note |
|---|---|---|
| 01_weekly_plan.md | Yes | 3,495 bytes, structurally complete |
| 01_weekly_plan.en.md | Yes | 3,650 bytes, mirrors the Chinese version |
| 02_weekly_research.md | Yes | 19,042 bytes, 5 core questions + market table + visualization data |
| 02_weekly_research.en.md | Yes | 21,623 bytes, mirrors the Chinese version |

All four upstream files are present. No gaps.

## 2. Cross-step Consistency

| Item | Plan (01) statement | Research (02) statement | Verdict |
|---|---|---|---|
| BTC > $80,000 timing | "Broke $80,000 on 2026-05-04" | 2026-05-04 open 78,540.29, close 79,827.91; first close above 80k was 2026-05-05 at 80,927.05 | ⚠️ Contradiction: plan's date is inaccurate; research data is more credible |
| BTC catalyst | "Driven by optimism over CLARITY Act Senate vote progress" | Explicitly: "as of 2026-05-10, no new Senate vote on 2026-05-04 has been verified" | ⚠️ Contradiction: plan's premise unverified; research corrects it appropriately |
| Lilly Q1 revenue | "$19.8B, +56% YoY" | "$19.799B, +56%" | ✅ Consistent |
| Lilly capacity | "$4.5B GLP-1 capacity expansion" | "Lebanon additional $4.5B announced 2026-05-06" | ✅ Consistent |
| Cloudflare layoff | "1,100 people" | ">1,100, ~20%" | ✅ Consistent |
| Hanyuan-2 | "First 200-qubit neutral-atom quantum computer" | "200 qubits, dual-core, <7 kW" | ✅ Consistent |
| Wukong-180 | "Wukong-180 online" | "180 computational + 251 coupling qubits; 2-qubit gate 99.00%" | ✅ Consistent |
| NASA FY2027 | "23% cut" | "-$5.6B / -23% vs FY2026 enacted" | ✅ Consistent |

## 3. Narrative Coherence

- The plan poses 5 core questions; the research answers each in dedicated sections (Cloudflare/Agentic AI, ASTS, CLARITY Act, GLP-1, quantum). No orphan questions.
- Research adds a NASA FY2027 supplementary section that closes the loop on event #6 from the plan.
- Key correction: the plan binds "BTC > $80k" causally to "Senate vote progress." The research, in Q3, explicitly states no Senate vote was verified and reframes BTC moves as "probability pricing" rather than "law-passage pricing." This is a sound rebuttal, but the plan's factual claim was not retroactively flagged — readers consuming only the plan would be misled.
- Market table and per-question chapters cross-reference cleanly (ASTS +6.53%, BTC +2.10%, AMD +26.33%).
- Visualization table 1 substitutes a "legislative status / risk temperature" axis instead of fabricating vote nodes — methodologically transparent and commendable.

## 4. Editorial Quality

1. **Inconsistent unit labels in market table:** BTC volume (206,497,277,366) lacks a unit. Add "USD notional" or split the dimension to prevent readers from misreading it as share count.
2. **GLP-1 comparison table:** Lilly is in USD, Novo in DKK, with no FX conversion. Add a "USD eq." column (DKK 55B ≈ USD ~8B) so CAPEX intensity is comparable side-by-side.
3. **Missing executive summary bullets:** Plan section 1 lists an "Executive Summary"; research opens with a long-sentence "Conclusions First" paragraph. Break it into 3–5 bullets for PM scannability.
4. **Policy chapter heading hierarchy:** NASA FY2027 sits at H2 alongside the 5 main questions, but its weight is supplementary. Keep the H2 but add a "(Supplementary)" tag, or reposition before "Follow-ups," to keep the 5-question spine visually dominant.

## 5. Recommended Revisions

- **[High]** Fix plan 01 line 7: BTC actually closed above $80k for the first time on 2026-05-05, and the Senate vote progression is unverified. Recommend: "BTC tagged the $80k zone this week; regulatory expectations remain the dominant narrative."
- **[High]** In research 02, prepend a footnote to "Conclusions First" flagging that this report corrects two plan-stage facts (BTC breakout date, CLARITY Act Senate vote) so downstream readers don't mix the two artifacts.
- **[Medium]** Add a USD-equivalent column to the GLP-1 CAPEX table for direct Lilly-vs-Novo comparison.
- **[Medium]** Append "USD notional" to BTC/ETH volume in the market table.
- **[Low]** Convert the "Conclusions First" paragraph into 5 bullets aligned to the 5 core questions.
- **[Low]** Subtitle the NASA chapter as "(Policy supplement)" to differentiate it from the five primary questions.

## 6. Overall Grade

**needs-revision**  
Justification: All four files are present, sources are well cited, and the research stage actively corrects upstream errors — but a factual contradiction between the plan and the research on the BTC > $80k catalyst must be reconciled (either by amending the plan or adding a prominent caveat in the research) before the package is fit to present to a PM.

```json
{"follow_ups":[
  {"to":"thematic-researcher","subject":"Verify CLARITY Act Senate progress","question":"As of 2026-05-10, has the Senate Banking Committee scheduled a markup for the CLARITY Act? Please verify whether any new Senate vote or committee action occurred between 2026-05-04 and 2026-05-08 that could justify framing this week's BTC move as legislation-driven, and identify the next observable legislative trigger and its expected timing.","priority":"high"}
]}
```
