export const directionLabel = (value) => ({
  strengthening: "强化",
  weakening: "走弱",
  conflicting: "分歧",
  stable: "稳定",
})[value] || value || "未标注";

export function createResearchAccess(data) {
  const researchOS = () => data.derivedResearchOS || {};
  const evidenceItems = () => (((researchOS().evidenceRegistry || {}).items) || []);
  const theses = () => (((researchOS().thesisRegistry || {}).theses) || []);
  const risks = () => (((researchOS().riskRegistry || {}).risks) || []);

  return {
    researchOS,
    evidenceItems,
    theses,
    risks,
    evidenceMap: () => new Map(evidenceItems().map((item) => [item.evidence_id, item])),
    thesisMap: () => new Map(theses().map((item) => [item.thesis_id, item])),
    riskMap: () => new Map(risks().map((item) => [item.risk_id, item])),
  };
}
