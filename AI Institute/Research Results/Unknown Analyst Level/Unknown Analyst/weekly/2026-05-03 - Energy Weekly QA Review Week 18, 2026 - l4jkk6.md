---
source: ai-institute
resource_type: research-result
report_kind: weekly
analyst_level: "Unknown Analyst Level"
content_error: ""
---

# Energy Weekly QA Review (Week 18, 2026)

Kind: **weekly**
Analyst: **(unknown)**

## Links

- Report type: [[weekly]]
- Analyst: [[Unknown Analyst]]
- Analyst level: [[Unknown Analyst Level]]

# Energy Weekly QA Review (Week 18, 2026)

**Reviewer:** QA Manager
**Scope:** Step 01 research plan, Step 02 research draft, Step 03 weekly report (Markdown + HTML)
**Coverage window:** 2026-04-27 to 2026-05-01
**Review date:** 2026-05-03

---

## 1. File manifest

| Declared file | Exists | Bytes | Note |
|---|---|---:|---|
| `01_weekly_plan.md` | Yes | 3,585 | Chinese plan, fully structured |
| `01_weekly_plan.en.md` | Yes | 3,807 | English plan, mirrors Chinese version |
| `02_weekly_research.md` | Yes | 16,966 | Research draft (Chinese) — conclusions-first plus four deep-dive questions |
| `02_weekly_research.en.md` | Yes | 19,038 | English research draft |
| `03_weekly_report.html` | Yes | 50,299 | HTML report with inline SVG/tables |
| `03_weekly_report.md` | Yes | 12,344 | Markdown report, same source as HTML |

**Conclusion:** All upstream artifacts present in the workspace; no file gaps.

---

## 2. Cross-step consistency

| # | Value / fact | Step 01 (plan) | Step 02 (research) | Step 03 (report) | Consistency |
|---|---|---|---|---|---|
| 1 | EIA WPSR gasoline stocks WoW change (week ending 2026-04-24) | **+1.2 mb** (build) | **-6.075 mb** (draw) | -6.075 mb | Plan vs research conflict, explicitly corrected in Step 02; Step 03 inherits the corrected value ✅ |
| 2 | DOE / SPR action (late April) | "Aug–Oct additional 3 mb purchase" | "Week of 2026-04-24: 7.1 mb release; SPR at 397.9 mb" | 397.9 mb; 7.1 mb release | Plan assumption wrong, fixed in Step 02; carried in Step 03 ✅ |
| 3 | EU gas storage fill (end-Apr / 1-May) | **65%** | **32.49%** (GIE 2026-05-01 06:00 CEST) | 32.49% | Plan vs research conflict, fixed in Step 02; carried in Step 03 ✅ |
| 4 | US April NFP release date | "May 1" (Friday) | "2026-05-08" (per BLS schedule) | Listed under next-week watch, 2026-05-08 | Plan assumption wrong, fixed in Step 02; carried in Step 03 ✅ |
| 5 | Brent intraweek peak (date & price) | not given | 2026-04-29 close $118.03/bbl | 2026-04-29 $118.03/bbl (Charts 2 & 5, narrative) | 02 ↔ 03 consistent ✅ |
| 6 | Brent-WTI spread evolution | not given | 11.86 → 6.23; residual safety premium 7.50 → 1.87 | 11.86 → 6.23; 7.50 → 1.87 | 02 ↔ 03 consistent ✅ |
| 7 | China April manufacturing PMI | "end-April PMI" (no numbers) | 50.3; production 51.5; new orders 50.6 | 50.3; production 51.5; new orders 50.6 | 02 ↔ 03 consistent ✅ |
| 8 | Brent–DXY daily return correlation | not given (only suggested a scatter chart) | r = +0.541 | r = +0.541 | 02 ↔ 03 consistent ✅ |

**Conclusion:** Step 01 contained four factual assumptions (gasoline stock direction, SPR action, EU storage fill, NFP release date) that conflict with authoritative sources. Step 02 identified and explicitly corrected all four; Step 03 faithfully inherits the corrected figures. No 02↔03 contradictions on key numbers, dates, or tickers.

---

## 3. Narrative coherence

| Plan question (Step 01) | Answered in research (Step 02) | Carried into report (Step 03) |
|---|---|---|
| Q1: How much "safety premium" remains in Brent? | Yes. Brent-WTI spread method, premium 7.50 → 1.87 USD/bbl | Yes. "Chart 6" + Question 1 deep dive both reflect it |
| Q2: Does the surprise gasoline build signal demand destruction? | Yes. First corrects "build" to "6.075 mb draw", then uses 4-week supplied +1.2% YoY to reject the demand-destruction hypothesis | Yes. Conclusion #2 and Question 2 deep dive aligned |
| Q3: Will the TTF summer-winter spread widen given high storage? | Yes. First corrects the "high storage" premise (actual 32.49%); uses Argus curve to show summer averaging €1.03/MWh above Winter 2026, framed as "low-storage refill" rather than typical refill contango | Yes. Question 3 deep dive + table preserve this finding and explicitly call out "not a traditional refill contango" |
| Q4: What does April PMI imply for post-holiday coal & power load? | Yes. All PMI sub-indices are listed; "moderate recovery, elasticity capped by cost pressure" verdict given | Yes. Conclusion #4 and Question 4 deep dive aligned |

**Additional observations:**
- Step 02 added a "Renewables & Policy" sidebar (EPA MATS/GHG) beyond the four core questions; Step 03 retained it — consistent with Section 4 of the plan's report outline.
- The risk panel (red/yellow/green) in Step 03 is logically closed, but the 🟢 label "Strong USD pressuring oil" is mildly ambiguous: it actually means "this single-factor explanation is currently failing, so it's a low-impact risk this week," not "a strong USD itself is low risk." Wording should be sharpened.
- The plan mentioned "OPEC+ ministerial pre-meeting language" but Step 02's next-week tracker did not break it out separately. Step 03 reintroduces it under "2026-05-06 OPEC+ informal communications" in the watch list — no orphan.

**Conclusion:** The plan→research→visualization question chain is intact; no orphan questions or unsupported conclusions. The corrections made in Step 02 to Step 01's factual assumptions are faithfully carried through into Step 03.

---

## 4. Editorial quality

1. **Chart 6 mid-week interpolation needs a sourcing note.** Step 03's Chart 6 ("Brent-WTI spread & residual safety premium") prints ~10.50, ~8.30, ~7.10 for 2026-04-28, 04-29, and 04-30, but Step 02 only gave the Monday and Friday endpoints. Either drop the mid-week values or annotate: "Mid-week spreads are estimates derived from Brent daily closes against WTI daily averages (~ symbol already signals approximation)."
2. **Rewrite the 🟢 USD risk label.** The current "🟢 Low risk · Strong USD pressuring oil" reads ambiguously. Suggest: "🟢 Low risk · The 'strong USD → weak oil' mechanism is *failing this week* (r = +0.541). It will not act as a dominant headwind until the geopolitical shock subsides." This makes "what is low" explicit.
3. **Surface the plan corrections in the executive summary.** The summary already prints the correct numbers but does not flag to the PM that the gasoline stock direction, SPR action, EU storage fill, and NFP release date in the plan were all corrected against EIA/GIE/BLS authoritative sources. One sentence at the end of the summary would help PM reviewers trust the data lineage.
4. **Chart 4 bold-formatting legend.** Chart 4 bolds "2024 (5-year high)" and "2026 (5-year low)". Add "bold = five-year extremum" to the table header so the bolding carries semantic meaning rather than reading as decorative.

---

## 5. Recommended revisions

By priority:

- **[High] Chart 6 mid-week Brent-WTI spread:** add a sourcing note or remove the three mid-week points to prevent readers from treating them as settlement values.
- **[High] Chart 6 / risk panel "USD-oil" green label:** rewrite the wording to prevent misreading.
- **[Medium] Add a plan-correction sentence to the executive summary:** tells the PM the data has been re-aligned with authoritative sources, improving transparency.
- **[Medium] Verify the TTF spot ticker.** Step 03 Chart 1 uses `TTF=F` as the Yahoo ticker, but ICE TTF futures are not directly available on Yahoo Finance under that symbol. Either footnote that the price comes from Argus / Investing.com (not Yahoo `TTF=F`), or replace with a more accurate data-source label.
- **[Low] Chart 4 header note "bold = five-year extremum":** improves typographic consistency.
- **[Low] Next-week watch item "OPEC+ informal communications":** no formal agenda has been announced; annotate as "informal channel chatter, unconfirmed" to manage reader expectations.

---

## 6. Overall grade

**`needs-revision`**

Step 02 research is excellent — it actively identified and corrected four factual errors in the plan (gasoline-stock direction, SPR action, EU storage level, NFP release date), each backed by EIA / GIE / BLS / Argus primary sources. Step 03 visualization faithfully carries the corrected conclusions, with clean structure and numerically consistent figures. However, Chart 6 mid-week interpolations lack a sourcing note, the green USD risk label invites misreading, and the TTF data-source label may be inaccurate. These three items should be patched before the report goes to the PM. The fix is small (≈30 minutes of editing) and does not require redoing any research.

---

```json
{"follow_ups":[
  {"to":"chief-strategist","subject":"Methodology check: Brent residual safety premium","question":"Step 02 estimates a 'residual safety premium' as the excess of the Brent-WTI spread over the 2026-02-27 spot baseline of $4.36/bbl, arriving at $1.87/bbl by Friday. From a strategy-framework standpoint, can the Brent-WTI spread reliably isolate a geopolitical-premium component given current US export-capacity expansion, Cushing inventory dynamics, and quality-spread structural shifts? Would you recommend the next weekly switch to Brent term structure (M1-M3 backwardation/contango) or the Brent-Dubai spread as a cleaner proxy for the geopolitical risk premium?","priority":"normal"}
]}
```
