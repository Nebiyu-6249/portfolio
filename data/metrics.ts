// Real, measured evaluation numbers. Every value here is sourced from the
// project's own eval run. These are treated as first-class visual content
// across the site, not buried in prose.

export type Metric = {
  label: string;
  value: number; // numeric value used for count-up and bar width
  display: string; // exact string shown to the reader
  unit?: string;
  // 0..1 fill for a bar, when a bar makes sense for this metric
  fill?: number;
  note?: string;
};

export type MetricGroup = {
  title: string;
  caption?: string;
  metrics: Metric[];
};

// A short, punchy strip for the hero. Diverse on purpose: one retrieval number,
// one guardrail number, one fraud number, one latency number, one test-set count.
export const heroStats: {
  value: string;
  label: string;
  source: string;
}[] = [
  { value: "97.3%", label: "retrieval recall@k", source: "UAE Compliance Copilot" },
  { value: "100%", label: "citation-faithfulness pass", source: "UAE Compliance Copilot" },
  { value: "0.64%", label: "fraud false-positive rate", source: "Fraud Detection" },
  { value: "2.4ms", label: "single-transaction scoring", source: "Fraud Detection" },
  { value: "70", label: "hand-written eval questions", source: "golden test set" },
];

// UAE Compliance Copilot, evaluated against a hand-written 70-question golden set
// (56 in-corpus across VAT / corporate tax / labour, 14 deliberately out-of-corpus).
export const uaeCopilotMetrics: MetricGroup[] = [
  {
    title: "Retrieval",
    caption: "Does the right source come back for the question?",
    metrics: [
      { label: "precision@1", value: 85.7, display: "85.7%", fill: 0.857 },
      { label: "recall@k", value: 97.3, display: "97.3%", fill: 0.973 },
      { label: "hit@3", value: 96.4, display: "96.4%", fill: 0.964 },
    ],
  },
  {
    title: "Citation guardrail",
    caption:
      "A faithfulness check verifies, in code, that every citation traces back to a retrieved chunk.",
    metrics: [
      { label: "guardrail pass rate", value: 100, display: "100%", fill: 1 },
      { label: "hallucinated-citation rate", value: 0, display: "0.0%", fill: 0 },
    ],
  },
  {
    title: "Routing and refusal",
    caption: "Does it refuse when the question falls outside the corpus?",
    metrics: [
      { label: "out-of-corpus refusal accuracy", value: 92.9, display: "92.9%", fill: 0.929 },
      { label: "overall answer-vs-refuse accuracy", value: 95.7, display: "95.7%", fill: 0.957 },
    ],
  },
  {
    title: "Answer quality",
    caption: "Scored on a written rubric.",
    metrics: [
      { label: "answer correctness", value: 4.39, display: "4.39 / 5", unit: "/ 5", fill: 0.878 },
    ],
  },
];

// Fraud Detection, evaluated with a strict time-ordered train/threshold/test split
// (not shuffled, to avoid training on the future).
export const fraudMetrics: MetricGroup[] = [
  {
    title: "Anomaly model",
    caption:
      "Unsupervised autoencoder trained only on normal transactions, on a genuinely rare-event problem (1 fraud in 578 transactions).",
    metrics: [
      {
        label: "PR-AUC",
        value: 0.164,
        display: "0.164",
        note: "vs 0.0013 random-chance baseline on this fraud rate, roughly two orders of magnitude better than chance",
      },
    ],
  },
  {
    title: "Production threshold",
    caption: 'At the "high" risk cutoff used in production.',
    metrics: [
      { label: "recall", value: 69, display: "69%", fill: 0.69 },
      { label: "false-positive rate", value: 0.64, display: "0.64%", fill: 0.0064 },
      { label: "scoring latency", value: 2.4, display: "2.4ms" },
    ],
  },
];

// The dramatic comparison for the fraud project: model vs random chance,
// shown on a log scale because the gap is about 126x.
export const fraudBaseline = {
  model: { label: "Autoencoder PR-AUC", value: 0.164 },
  chance: { label: "Random-chance baseline", value: 0.0013 },
  ratioLabel: "~126x better than chance",
};
