import React, { useMemo, useState, useEffect } from "react";

/**
 * ROI Calculator (MVP v1)
 * - Framework: React + TS + Tailwind
 * - No external libs
 * - FR-first with simple i18n map
 * - Copy the styles to match your brand if you’re not already on Tailwind
 */

type ReplyBucket = ">24h" | "1-24h" | "15-60m" | "5-15m" | "0-5m";

type Inputs = {
  arpv: number;                   // average revenue per visit
  gross_margin_pct: number;       // 35-85
  leads_per_month: number;
  baseline_conv_pct: number;      // 0-100
  reply_time_bucket: ReplyBucket; // maps to Δconv pp
  no_show_pct: number;            // 0-100
  appts_per_month?: number | null;
  review_rate_pct: number;        // not used in calc, for transparency
  reviews_traffic_uplift_pct: number; // 0-8
  admin_hours_saved: number;
  staff_hourly_cost: number;
  price: number;
  locale: "fr" | "en";
};

type Breakdown = {
  gp: number;   // gross profit contribution per line
  rev: number;  // revenue basis for transparency/debug
};

type Outputs = {
  speed_to_lead: Breakdown;
  no_show: Breakdown;
  reviews: Breakdown;
  admin_time: { gp: number };
  totals: {
    gp_expected: number;
    gp_pess: number;
    gp_optimistic: number;
    roi_expected: number;   // (gp - price)/price
    payback_weeks: number;  // price / (gp/4.3)
  };
};

// Brand tokens (adjust if needed)
const BRAND = {
  teal: "#1c9795",
  blue: "#1e82fa",
  navy: "#131c2d"
};

// Reply-time uplift map (Δconv percentage points, conservative)
const REPLY_UPLIFT_PP: Record<ReplyBucket, number> = {
  ">24h": 6.0,
  "1-24h": 4.0,
  "15-60m": 2.0,
  "5-15m": 1.0,
  "0-5m": 0.5
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const round2 = (v: number) => Math.round(v * 100) / 100;

function compute(inputs: Inputs): Outputs {
  const margin = clamp(inputs.gross_margin_pct, 35, 85) / 100;
  const leads = Math.max(0, inputs.leads_per_month);
  const conv = clamp(inputs.baseline_conv_pct, 0, 100) / 100;
  const apptsBase = inputs.appts_per_month ?? Math.round(leads * conv);
  const arpv = Math.max(0, inputs.arpv);

  // A) Speed-to-Lead
  const dConvPP = clamp(REPLY_UPLIFT_PP[inputs.reply_time_bucket], 0, 6) / 100;
  const deltaApptsA = leads * dConvPP;
  const revA = deltaApptsA * arpv;
  const gpA = revA * margin;

  // B) No-show reduction (25% relative cut)
  const baseNoShowPct = clamp(inputs.no_show_pct, 0, 100);
  const deltaNSpp = baseNoShowPct * 0.25; // relative 25%
  const deltaApptsB = apptsBase * (deltaNSpp / 100);
  const revB = deltaApptsB * arpv;
  const gpB = revB * margin;

  // C) Reviews small lift from traffic (cap 0-8%)
  const reviewTraffic = clamp(inputs.reviews_traffic_uplift_pct ?? 0, 0, 8) / 100;
  const revC = apptsBase * reviewTraffic * arpv;
  const gpC = revC * margin;

  // D) Admin time
  const timeGp = Math.max(0, inputs.admin_hours_saved) * Math.max(0, inputs.staff_hourly_cost);

  const gpExpected = gpA + gpB + gpC + timeGp;
  const gpPess = gpExpected * 0.6;
  const gpOpt = gpExpected * 1.4;

  const roi = (gpExpected - inputs.price) / Math.max(1, inputs.price);
  const paybackWeeks = inputs.price / Math.max(1, (gpExpected / 4.3));

  return {
    speed_to_lead: { gp: gpA, rev: revA },
    no_show: { gp: gpB, rev: revB },
    reviews: { gp: gpC, rev: revC },
    admin_time: { gp: timeGp },
    totals: {
      gp_expected: gpExpected,
      gp_pess: gpPess,
      gp_optimistic: gpOpt,
      roi_expected: roi,
      payback_weeks: paybackWeeks
    }
  };
}

const STRINGS = {
  fr: {
    title: "Calculez vos économies mensuelles",
    sub: "Estimation prudente • attendue • ambitieuse (marge & hypothèses conservatrices).",
    inputs: {
      arpv: "Valeur moyenne par rendez‑vous ($)",
      margin: "Marge brute (%)",
      leads: "Leads / mois",
      reply: "Temps moyen de 1re réponse",
      conv: "Taux conv. actuel leads→RDV (%)",
      noshow: "Taux de no‑show actuel (%)",
      appts: "RDV / mois (laisser vide pour auto)",
      reviewRate: "% clients laissant un avis",
      reviewUplift: "Hausse trafic due aux avis (%)",
      adminHrs: "Heures admin économisées / mois",
      staffCost: "Coût horaire du personnel ($/h)",
      price: "Prix du pack ($)"
    },
    buckets: {
      ">24h": "> 24 h",
      "1-24h": "1–24 h",
      "15-60m": "15–60 min",
      "5-15m": "5–15 min",
      "0-5m": "0–5 min"
    },
    breakdown: {
      speed: "Vitesse de réponse",
      noshow: "Moins de no‑show",
      reviews: "Avis clients",
      admin: "Temps admin"
    },
    results: {
      monthly: "Économies mensuelles (GP)",
      expected: "Attendu",
      pess: "Prudent",
      opt: "Ambitieux",
      roi: "ROI (attendu)",
      payback: "Remboursement (semaines)"
    },
    cta_buy: "Obtenir mon pack",
    cta_audit: "Obtenir un audit gratuit",
    foot: "Estimations basées sur hypothèses conservatrices; résultats variables. Aucune donnée personnelle n’est stockée."
  },
  en: {
    title: "Estimate your monthly savings",
    sub: "Conservative assumptions with low / expected / high bands.",
    inputs: {
      arpv: "Average revenue per visit ($)",
      margin: "Gross margin (%)",
      leads: "Leads / month",
      reply: "Average first response time",
      conv: "Current lead→visit conversion (%)",
      noshow: "Current no‑show rate (%)",
      appts: "Appointments / month (leave blank to auto)",
      reviewRate: "% of clients leaving a review",
      reviewUplift: "Traffic uplift from reviews (%)",
      adminHrs: "Admin hours saved / month",
      staffCost: "Staff hourly cost ($/h)",
      price: "Pack price ($)"
    },
    buckets: {
      ">24h": "> 24 h",
      "1-24h": "1–24 h",
      "15-60m": "15–60 min",
      "5-15m": "5–15 min",
      "0-5m": "0–5 min"
    },
    breakdown: {
      speed: "Speed-to-lead",
      noshow: "No-show reduction",
      reviews: "Reviews",
      admin: "Admin time"
    },
    results: {
      monthly: "Monthly savings (GP)",
      expected: "Expected",
      pess: "Pessimistic",
      opt: "Optimistic",
      roi: "ROI (expected)",
      payback: "Payback (weeks)"
    },
    cta_buy: "Get my pack",
    cta_audit: "Get a free audit",
    foot: "Estimates use conservative assumptions; results vary. No personal data is stored."
  }
};

const Field = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => (
  <input
    {...props}
    className={`w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[${BRAND.blue}]`}
  />
);

export default function RoiCalculator({
  defaults,
  onChange
}: {
  defaults?: Partial<Inputs>;
  onChange?: (o: Outputs) => void;
}) {
  const [lang, setLang] = useState<"fr" | "en">(defaults?.locale ?? "fr");
  const t = STRINGS[lang];

  const [state, setState] = useState<Inputs>({
    arpv: defaults?.arpv ?? 130,
    gross_margin_pct: defaults?.gross_margin_pct ?? 60,
    leads_per_month: defaults?.leads_per_month ?? 40,
    baseline_conv_pct: defaults?.baseline_conv_pct ?? 30,
    reply_time_bucket: (defaults?.reply_time_bucket ?? "1-24h") as ReplyBucket,
    no_show_pct: defaults?.no_show_pct ?? 12,
    appts_per_month: defaults?.appts_per_month ?? null,
    review_rate_pct: defaults?.review_rate_pct ?? 5,
    reviews_traffic_uplift_pct: defaults?.reviews_traffic_uplift_pct ?? 3,
    admin_hours_saved: defaults?.admin_hours_saved ?? 5,
    staff_hourly_cost: defaults?.staff_hourly_cost ?? 22,
    price: defaults?.price ?? 199,
    locale: lang
  });

  // keep locale in sync
  if (state.locale !== lang) setState(s => ({ ...s, locale: lang }));

  const outputs = useMemo(() => compute(state), [state]);

  useEffect(() => {
    onChange?.(outputs);
  }, [outputs, onChange]);

  const total = outputs.totals.gp_expected;
  const showAudit = total < state.price;

  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold" style={{ color: BRAND.navy }}>
            {t.title}
          </h3>
          <p className="text-xs text-gray-500">{t.sub}</p>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Français"
            onClick={() => setLang("fr")}
            className={`rounded-lg px-3 py-1 text-xs font-semibold ${lang === "fr" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            FR
          </button>
          <button
            aria-label="English"
            onClick={() => setLang("en")}
            className={`rounded-lg px-3 py-1 text-xs font-semibold ${lang === "en" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <div>
          <label className="mb-1 block text-xs text-gray-600">{t.inputs.arpv}</label>
          <Field type="number" value={state.arpv}
                 onChange={e => setState(s => ({ ...s, arpv: Number(e.target.value) }))} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-600">{t.inputs.margin}</label>
          <Field type="number" value={state.gross_margin_pct}
                 onChange={e => setState(s => ({ ...s, gross_margin_pct: Number(e.target.value) }))} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-600">{t.inputs.leads}</label>
          <Field type="number" value={state.leads_per_month}
                 onChange={e => setState(s => ({ ...s, leads_per_month: Number(e.target.value) }))} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-600">{t.inputs.reply}</label>
          <select
            value={state.reply_time_bucket}
            onChange={e => setState(s => ({ ...s, reply_time_bucket: e.target.value as ReplyBucket }))}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2"
          >
            {Object.keys(STRINGS.fr.buckets).map((k) => (
              <option key={k} value={k}>
                {STRINGS[lang].buckets[k as ReplyBucket]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced */}
      <details className="mt-3">
        <summary className="cursor-pointer text-sm font-semibold" style={{ color: BRAND.teal }}>
          Avancé / Advanced
        </summary>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-xs text-gray-600">{t.inputs.conv}</label>
            <Field type="number" value={state.baseline_conv_pct}
                   onChange={e => setState(s => ({ ...s, baseline_conv_pct: Number(e.target.value) }))} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-600">{t.inputs.noshow}</label>
            <Field type="number" value={state.no_show_pct}
                   onChange={e => setState(s => ({ ...s, no_show_pct: Number(e.target.value) }))} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-600">{t.inputs.appts}</label>
            <Field type="number" value={state.appts_per_month ?? ""}
                   onChange={e => setState(s => ({ ...s, appts_per_month: e.target.value === "" ? null : Number(e.target.value) }))} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-600">{t.inputs.reviewRate}</label>
            <Field type="number" value={state.review_rate_pct}
                   onChange={e => setState(s => ({ ...s, review_rate_pct: Number(e.target.value) }))} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-600">{t.inputs.reviewUplift}</label>
            <Field type="number" value={state.reviews_traffic_uplift_pct}
                   onChange={e => setState(s => ({ ...s, reviews_traffic_uplift_pct: Number(e.target.value) }))} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-600">{t.inputs.adminHrs}</label>
            <Field type="number" value={state.admin_hours_saved}
                   onChange={e => setState(s => ({ ...s, admin_hours_saved: Number(e.target.value) }))} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-600">{t.inputs.staffCost}</label>
            <Field type="number" value={state.staff_hourly_cost}
                   onChange={e => setState(s => ({ ...s, staff_hourly_cost: Number(e.target.value) }))} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-600">{t.inputs.price}</label>
            <Field type="number" value={state.price}
                   onChange={e => setState(s => ({ ...s, price: Number(e.target.value) }))} />
          </div>
        </div>
      </details>

      {/* Results */}
      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-4">
        <Card title={t.breakdown.speed} value={outputs.speed_to_lead.gp} color={BRAND.teal} />
        <Card title={t.breakdown.noshow} value={outputs.no_show.gp} color={BRAND.teal} />
        <Card title={t.breakdown.reviews} value={outputs.reviews.gp} color={BRAND.teal} />
        <Card title={t.breakdown.admin} value={outputs.admin_time.gp} color={BRAND.teal} />
      </div>

      <div className="mt-5 rounded-2xl bg-gray-50 p-4">
        <div className="flex flex-wrap items-end gap-6">
          <div>
            <div className="text-xs text-gray-500">{t.results.monthly}</div>
            <div className="mt-1 flex items-baseline gap-3">
              <Pill label={t.results.pess} value={outputs.totals.gp_pess} />
              <Pill label={t.results.expected} value={outputs.totals.gp_expected} emphasized />
              <Pill label={t.results.opt} value={outputs.totals.gp_optimistic} />
            </div>
          </div>
          <div className="ml-auto text-right">
            <div className="text-xs text-gray-500">{t.results.roi}: {round2(outputs.totals.roi_expected * 100)}%</div>
            <div className="text-xs text-gray-500">{t.results.payback}: {round2(outputs.totals.payback_weeks)}</div>
            <button
              className={`mt-2 rounded-xl px-4 py-2 text-sm font-bold text-white`}
              style={{ backgroundColor: showAudit ? BRAND.teal : BRAND.blue }}
              onClick={() => {
                // hook analytics here if needed
                // window.dispatchEvent(new CustomEvent("roi_calc_cta_click", { detail: { inputs: state, outputs } }));
              }}
            >
              {showAudit ? t.cta_audit : t.cta_buy} {showAudit ? "" : `${state.price.toFixed(0)} $`}
            </button>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-gray-400">{t.foot}</p>
      </div>
    </div>
  );
}

function Card({ title, value, color }: { title: string; value: number; color: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="mt-1 text-lg font-extrabold" style={{ color }}>
        {formatCurrency(value)}
      </div>
    </div>
  );
}

function Pill({ label, value, emphasized }: { label: string; value: number; emphasized?: boolean }) {
  return (
    <div
      className={`rounded-full px-3 py-1 text-sm ${emphasized ? "font-extrabold" : "font-semibold"}`}
      style={{ backgroundColor: emphasized ? "rgba(30,130,250,0.10)" : "rgba(19,28,45,0.06)", color: emphasized ? "#1e82fa" : "#131c2d" }}
      aria-label={`${label} ${formatCurrency(value)}`}
    >
      {label}: {formatCurrency(value)}
    </div>
  );
}

function formatCurrency(v: number) {
  const n = isFinite(v) ? v : 0;
  return `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

export type { Outputs };
