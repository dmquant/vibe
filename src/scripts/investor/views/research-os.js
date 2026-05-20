import { directionLabel } from "../research-os.js";
import { esc, fmt, metric, sectionHead } from "../utils.js";

function evidenceMiniCard(item, tone = "neutral") {
  if (!item) return "";
  const chainLabels = (item.chains || []).map((chain) => chain.label_zh || chain.label_en).filter(Boolean).slice(0, 3);
  const title = item.source_href ? `<a href="${esc(item.source_href)}">${esc(item.title_zh || item.title_en)}</a>` : esc(item.title_zh || item.title_en);
  return `<article class="evidence-card" style="border-left:4px solid ${tone === "against" ? "var(--red)" : tone === "risk" ? "var(--gold)" : "var(--blue)"}">
    <div class="mini-stats"><span>${esc(item.date || "未标注日期")}</span><span>${esc(item.analyst_name_zh || "")}</span><span>${esc(chainLabels.join(" / "))}</span></div>
    <h3>${title}</h3>
    <p>${esc(item.summary_zh || item.summary_en || "")}</p>
  </article>`;
}

function riskMiniCard(item) {
  if (!item) return "";
  const title = item.report_href ? `<a href="${esc(item.report_href)}">${esc(item.title_zh || item.title_en)}</a>` : esc(item.title_zh || item.title_en);
  return `<article class="risk-card">
    <div class="mini-stats"><span>影响 <strong>${fmt(item.impact)}</strong></span><span>概率 <strong>${fmt(item.probability)}</strong></span><span>${esc(item.trend || "stable")}</span></div>
    <h3>${title}</h3>
    <p>${esc(item.summary_zh || item.summary_en || "")}</p>
  </article>`;
}

export function renderDelta({ app, data, access }) {
  const os = access.researchOS();
  const delta = os.dailyDelta || {};
  if (!os.available) {
    app.innerHTML = `<section class="panel">${sectionHead("今日变化", "尚未生成衍生研究合同。")}<div class="empty">先运行 Research OS 更新流程，再刷新本页。</div></section>`;
    return;
  }
  const ev = access.evidenceMap();
  const th = access.thesisMap();
  const rk = access.riskMap();
  const strengthened = (delta.strengthened_theses || []).map((id) => th.get(id)).filter(Boolean);
  const weakened = (delta.weakened_theses || []).map((id) => th.get(id)).filter(Boolean);
  const newEvidence = (delta.new_evidence || []).map((id) => ev.get(id)).filter(Boolean);
  const risingRisks = (delta.rising_risks || []).map((id) => rk.get(id)).filter(Boolean);
  app.innerHTML = `
    <section class="delta-grid">
      <div class="panel">
        <div class="daily-title">
          <div>
            <div class="eyebrow">Daily Delta · ${esc(delta.date || data.dailyBrief.date || "")}</div>
            <h2>今日变化</h2>
            <p>${esc(delta.summary_zh || "把今日新增证据、主题强化、风险升温和必读报告合并成一个可执行视图。")}</p>
          </div>
          <div class="daily-date">${esc(delta.date || "latest")}</div>
        </div>
        <div class="grid cols-4">
          ${metric("新增证据", (delta.new_evidence || []).length)}
          ${metric("强化主题", strengthened.length, "var(--green)")}
          ${metric("走弱/分歧", weakened.length, "var(--gold)")}
          ${metric("升温风险", risingRisks.length, "var(--red)")}
        </div>
        <div style="margin-top:16px">
          ${sectionHead("主题动量", "先看判断是否被新增证据强化，再看反向风险是否足以改变仓位假设。")}
          <div class="delta-stack">
            ${strengthened.concat(weakened).slice(0, 10).map((item) => `<article class="delta-card">
              <div class="mini-stats"><span class="direction-pill ${esc(item.direction)}">${directionLabel(item.direction)}</span><span>信念 ${fmt(item.conviction)}</span><span>${esc(item.last_updated || "")}</span></div>
              <h3>${esc(item.title_zh || item.title_en)}</h3>
              <p>${esc(item.core_view_zh || item.core_view_en || "")}</p>
              <div class="conviction-meter"><span class="conviction-fill" style="width:${Math.max(4, Math.min(100, Number(item.conviction || 0)))}%"></span></div>
            </article>`).join("") || `<div class="empty">暂无主题动量变化。</div>`}
          </div>
        </div>
      </div>
      <aside class="panel">
        ${sectionHead("必读报告", "由今日简报高分结论继承，点击进入可追溯报告。")}
        <div class="delta-stack">
          ${(delta.must_read_reports || []).slice(0, 8).map((item) => `<article class="delta-card">
            <div class="mini-stats"><span>${esc(item.analyst || "")}</span><span>${esc(item.reason || "")}</span></div>
            <h3>${item.href ? `<a href="${esc(item.href)}">${esc(item.title || "")}</a>` : esc(item.title || "")}</h3>
          </article>`).join("") || `<div class="empty">暂无必读报告。</div>`}
        </div>
        <div style="margin-top:16px">
          ${sectionHead("分析师观点变化", "按今日新增证据密度排序。")}
          <div class="delta-stack">
            ${(delta.analyst_view_changes || []).slice(0, 8).map((item) => `<article class="delta-card">
              <h3>${esc(item.analyst_name || item.analyst_id)}</h3>
              <p>${esc(item.change_zh || item.change_en || "")}</p>
              <div class="mini-stats" style="margin-top:8px">${(item.linked_reports || []).slice(0, 3).map((href, idx) => `<a href="${esc(href)}">报告 ${idx + 1}</a>`).join("")}</div>
            </article>`).join("") || `<div class="empty">暂无分析师变化。</div>`}
          </div>
        </div>
      </aside>
    </section>
    <section class="grid cols-2" style="margin-top:16px">
      <div class="panel">
        ${sectionHead("新增证据", "今日进入证据库的报告结果。")}
        <div class="evidence-list">${newEvidence.slice(0, 10).map((item) => evidenceMiniCard(item)).join("") || `<div class="empty">暂无新增证据。</div>`}</div>
      </div>
      <div class="panel">
        ${sectionHead("风险升温", "按影响与概率排序。")}
        <div class="evidence-list">${risingRisks.slice(0, 10).map(riskMiniCard).join("") || `<div class="empty">暂无升温风险。</div>`}</div>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      ${sectionHead("开放问题", "用于下一轮研究、投委会讨论或深度报告选题。")}
      <ul class="question-list">${(delta.open_questions || []).map((item) => `<li>${esc(item)}</li>`).join("") || `<li>暂无开放问题。</li>`}</ul>
    </section>`;
}

export function renderCockpit({ app, access }) {
  const os = access.researchOS();
  if (!os.available) {
    app.innerHTML = `<section class="panel">${sectionHead("证据到结论", "尚未生成衍生研究合同。")}<div class="empty">先运行 Research OS 更新流程，再刷新本页。</div></section>`;
    return;
  }
  const ev = access.evidenceMap();
  const rk = access.riskMap();
  const items = access.theses();
  app.innerHTML = `
    <section class="panel">
      ${sectionHead("证据到结论", `把 ${fmt(os.counts.evidence)} 条证据、${fmt(os.counts.risks)} 条风险和 ${fmt(os.counts.theses)} 个投资假设连接起来。`)}
      <div class="grid cols-4">
        ${metric("证据", os.counts.evidence)}
        ${metric("投资假设", os.counts.theses, "var(--green)")}
        ${metric("风险", os.counts.risks, "var(--red)")}
        ${metric("图谱节点", os.counts.graphNodes, "var(--gold)")}
      </div>
    </section>
    <section class="thesis-list" style="margin-top:16px">
      ${items.map((item) => {
        const score = item.score_explain || {};
        const evidenceFor = (item.evidence_for || []).map((id) => ev.get(id)).filter(Boolean);
        const evidenceAgainst = (item.evidence_against || []).map((id) => ev.get(id)).filter(Boolean);
        const linkedRisks = (item.linked_risks || []).map((id) => rk.get(id)).filter(Boolean);
        return `<article class="panel thesis-card">
          <div class="mini-stats"><span class="direction-pill ${esc(item.direction)}">${directionLabel(item.direction)}</span><span>信念 ${fmt(item.conviction)}</span><span>${esc(item.last_updated || "")}</span></div>
          <h3>${esc(item.title_zh || item.title_en)}</h3>
          <p>${esc(item.core_view_zh || item.core_view_en || "")}</p>
          <div class="conviction-meter"><span class="conviction-fill" style="width:${Math.max(4, Math.min(100, Number(item.conviction || 0)))}%"></span></div>
          <div class="thesis-score">
            <div class="score-chip"><strong>${fmt(score.evidence_for)}</strong><span>支持证据</span></div>
            <div class="score-chip"><strong>${fmt(score.evidence_against)}</strong><span>反向证据</span></div>
            <div class="score-chip"><strong>${fmt(score.analyst_diversity)}</strong><span>分析师覆盖</span></div>
            <div class="score-chip"><strong>${fmt(score.recent_evidence)}</strong><span>今日证据</span></div>
            <div class="score-chip"><strong>${fmt(score.linked_risks)}</strong><span>关联风险</span></div>
          </div>
          <div class="thesis-detail">
            <div>
              <h4>支持证据</h4>
              <div class="evidence-list">${evidenceFor.slice(0, 5).map((evItem) => evidenceMiniCard(evItem)).join("") || `<div class="empty">暂无支持证据。</div>`}</div>
              <h4>反向证据</h4>
              <div class="evidence-list">${evidenceAgainst.slice(0, 4).map((evItem) => evidenceMiniCard(evItem, "against")).join("") || `<div class="empty">暂无反向证据。</div>`}</div>
            </div>
            <aside>
              <h4>关联风险</h4>
              <div class="evidence-list">${linkedRisks.slice(0, 5).map(riskMiniCard).join("") || `<div class="empty">暂无关联风险。</div>`}</div>
              <h4>证伪指标</h4>
              <ul class="question-list">${(item.falsifiers_zh || []).map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
              <h4>跟踪指标</h4>
              <div class="tags">${(item.monitoring_indicators_zh || []).map((line) => `<span class="tag">${esc(line)}</span>`).join("")}</div>
            </aside>
          </div>
        </article>`;
      }).join("") || `<div class="panel empty">暂无投资假设。先运行衍生研究构建流程。</div>`}
    </section>`;
}
