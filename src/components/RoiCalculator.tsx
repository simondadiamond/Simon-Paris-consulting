import React, { useEffect, useMemo, useState } from "react";

export type ReplyBucket = ">24h" | "1-24h" | "15-60m" | "5-15m" | "0-5m";

// conservative uplift map in percentage points
const REPLY_UPLIFT_PP: Record<ReplyBucket, number> = {
  ">24h": 6,
  "1-24h": 4,
  "15-60m": 2,
  "5-15m": 1,
  "0-5m": 0.5,
};

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export type Inputs = {
  arpv: number;
  gross_margin_pct: number;
  leads_per_month: number;
  baseline_conv_pct: number;
  reply_time_bucket: ReplyBucket;
  no_show_pct: number;
  appts_per_month: number | null;
  reviews_traffic_uplift_pct: number;
  admin_hours_saved: number;
  staff_hourly_cost: number;
  selected: { speed: boolean; noshow: boolean; reviews: boolean };
};

export type RoiCalcStrings = {
  title: string;
  sub: string;
  customize: string;
  advanced: string;
  headlineEmpty: string;
  ctaBuy: (p: number) => string;
  ctaAudit: string;
  foot: string;
  inputs: { arpv: string; margin: string; leads: string; reply: string };
  packs: { speed: string; noshow: string; reviews: string };
  adv: {
    conv: string;
    noshow: string;
    appts: string;
    reviewUplift: string;
    adminHrs: string;
    staffCost: string;
    month: string;
    recovered: string;
    month1Net: string;
    year1: string;
    year1Net: string;
    roi: string;
  };
};

export type RoiCalcProps = {
  defaults?: Partial<{
    arpv: number;
    gross_margin_pct: number;
    leads_per_month: number;
    baseline_conv_pct: number;
    reply_time_bucket: ReplyBucket;
    no_show_pct: number;
    appts_per_month: number | null;
    reviews_traffic_uplift_pct: number;
    admin_hours_saved: number;
    staff_hourly_cost: number;
    selected: { speed: boolean; noshow: boolean; reviews: boolean };
  }>;
  packPrice?: number;
  bundlePrice?: number;
  strings?: RoiCalcStrings;
  onCalculate?: (payload: {
    totalPrice: number;
    monthlyGP: number;
    paybackWeeks: number;
    adminHours: number;
    month1Net: number;
    year1Net: number;
    year1Roi: number;
  }) => void;
};

export function formatCurrency(n: number): string {
  const num = isFinite(n) ? Math.round(n) : 0;
  return `$${num.toLocaleString()}`;
}

export function formatPercent(n: number): string {
  const num = isFinite(n) ? n : 0;
  return `${(num * 100).toFixed(1)}%`;
}

export function getHeadline(o: {
  totalPrice: number;
  monthlyGP: number;
  adminHours: number;
  paybackWeeks: number;
}) {
  return {
    price: formatCurrency(o.totalPrice),
    monthlyGP: formatCurrency(o.monthlyGP),
    adminHours: o.adminHours.toFixed(0),
    paybackWeeks: o.paybackWeeks.toFixed(1),
  };
}

export const STR_EN: RoiCalcStrings = {
  title: "Estimate your monthly savings",
  sub: "Conservative assumptions with expected month & year‑1 view.",
  customize: "Customize packs",
  advanced: "Advanced details",
  headlineEmpty: "Select at least one pack to estimate savings.",
  ctaBuy: (p) => `Get my pack(s) $${p.toFixed(0)}`,
  ctaAudit: "Get a free audit",
  foot: "Estimates use conservative assumptions; results vary. No personal data is stored.",
  inputs: {
    arpv: "Avg revenue/visit ($)",
    margin: "Gross margin (%)",
    leads: "Leads / month",
    reply: "Avg first response time",
  },
  packs: {
    speed: "Speed‑to‑Lead",
    noshow: "No‑Show reduction",
    reviews: "Reviews engine",
  },
  adv: {
    conv: "Current lead→visit conv (%)",
    noshow: "Current no-show (%)",
    appts: "Appointments / month (optional)",
    reviewUplift: "Traffic uplift from reviews (%)",
    adminHrs: "Admin hours saved / month",
    staffCost: "Staff hourly cost ($/h)",
    month: "This month (expected)",
    recovered: "Recovered GP",
    month1Net: "Net after cost",
    year1: "Year‑1 (expected)",
    year1Net: "Year‑1 net",
    roi: "ROI",
  },
};

export const STR_FR: RoiCalcStrings = {
  title: "Calculez vos économies",
  sub: "Hypothèses conservatrices — vue mensuelle et annuelle.",
  customize: "Personnaliser les packs",
  advanced: "Détails avancés",
  headlineEmpty: "Sélectionnez au moins un pack pour estimer les gains.",
  ctaBuy: (p) => `Obtenir mon pack ${p.toFixed(0)} $`,
  ctaAudit: "Obtenir un audit gratuit",
  foot: "Estimations conservatrices; résultats variables. Aucune donnée personnelle n’est stockée.",
  inputs: {
    arpv: "Valeur moyenne / rendez‑vous ($)",
    margin: "Marge brute (%)",
    leads: "Leads / mois",
    reply: "Délai moyen de 1re réponse",
  },
  packs: {
    speed: "Vitesse de réponse",
    noshow: "Moins de no-show",
    reviews: "Moteur d’avis",
  },
  adv: {
    conv: "Taux conv. actuel leads→RDV (%)",
    noshow: "No‑show actuel (%)",
    appts: "RDV / mois (optionnel)",
    reviewUplift: "Hausse trafic via avis (%)",
    adminHrs: "Heures admin économisées / mois",
    staffCost: "Coût horaire du personnel ($/h)",
    month: "Ce mois‑ci (attendu)",
    recovered: "GP récupérée",
    month1Net: "Net après coût",
    year1: "Année 1 (attendu)",
    year1Net: "Année 1 net",
    roi: "ROI",
  },
};

export default function RoiCalculator({
  defaults,
  packPrice = 199,
  bundlePrice,
  strings = STR_EN,
  onCalculate,
}: RoiCalcProps) {
  const [state, setState] = useState<Inputs>({
    arpv: defaults?.arpv ?? 130,
    gross_margin_pct: defaults?.gross_margin_pct ?? 60,
    leads_per_month: defaults?.leads_per_month ?? 40,
    baseline_conv_pct: defaults?.baseline_conv_pct ?? 30,
    reply_time_bucket: (defaults?.reply_time_bucket ?? "1-24h") as ReplyBucket,
    no_show_pct: defaults?.no_show_pct ?? 12,
    appts_per_month: defaults?.appts_per_month ?? null,
    reviews_traffic_uplift_pct: defaults?.reviews_traffic_uplift_pct ?? 3,
    admin_hours_saved: defaults?.admin_hours_saved ?? 5,
    staff_hourly_cost: defaults?.staff_hourly_cost ?? 22,
    selected: {
      speed: defaults?.selected?.speed ?? true,
      noshow: defaults?.selected?.noshow ?? true,
      reviews: defaults?.selected?.reviews ?? true,
    },
  });

  const outputs = useMemo(() => {
    const margin = clamp(state.gross_margin_pct, 35, 85) / 100;
    const leads = Math.max(0, state.leads_per_month);
    const conv = clamp(state.baseline_conv_pct, 0, 100) / 100;
    const apptsBase = state.appts_per_month ?? Math.round(leads * conv);
    const arpv = Math.max(0, state.arpv);

    const packs = [
      state.selected.speed,
      state.selected.noshow,
      state.selected.reviews,
    ].filter(Boolean).length;

    const dConvPP = clamp(REPLY_UPLIFT_PP[state.reply_time_bucket], 0, 6) / 100;
    const gpSpeed = state.selected.speed ? leads * dConvPP * arpv * margin : 0;

    const baseNoShowPct = clamp(state.no_show_pct, 0, 100);
    const deltaNSpp = baseNoShowPct * 0.25;
    const gpNoshow = state.selected.noshow
      ? apptsBase * (deltaNSpp / 100) * arpv * margin
      : 0;

    const reviewTraffic = clamp(state.reviews_traffic_uplift_pct ?? 0, 0, 8) / 100;
    const gpReviews = state.selected.reviews
      ? apptsBase * reviewTraffic * arpv * margin
      : 0;

    const adminHours = packs > 0 ? Math.max(0, state.admin_hours_saved) : 0;
    const adminDollars = adminHours * Math.max(0, state.staff_hourly_cost);

    const monthlyGP = gpSpeed + gpNoshow + gpReviews + adminDollars;

    const totalPrice = bundlePrice ?? packPrice * packs;

    const month1Net = monthlyGP - totalPrice;
    const year1Net = monthlyGP * 12 - totalPrice;
    const year1Roi = totalPrice > 0 ? year1Net / totalPrice : 0;
    const paybackWeeks = monthlyGP > 0 ? totalPrice / (monthlyGP / 4.3) : 0;

    return {
      totalPrice,
      monthlyGP,
      paybackWeeks,
      adminHours,
      month1Net,
      year1Net,
      year1Roi,
      gpSpeed,
      gpNoshow,
      gpReviews,
      adminDollars,
      packs,
    };
  }, [state, packPrice, bundlePrice]);

  useEffect(() => {
    onCalculate?.({
      totalPrice: outputs.totalPrice,
      monthlyGP: outputs.monthlyGP,
      paybackWeeks: outputs.paybackWeeks,
      adminHours: outputs.adminHours,
      month1Net: outputs.month1Net,
      year1Net: outputs.year1Net,
      year1Roi: outputs.year1Roi,
    });
  }, [outputs, onCalculate]);

  const [showPacks, setShowPacks] = useState(false);

  const headline =
    outputs.monthlyGP === 0
      ? strings.headlineEmpty
      : `Pay ${formatCurrency(outputs.totalPrice)} once → breakeven in ${outputs.paybackWeeks.toFixed(
          1
        )} weeks, then recover ${formatCurrency(outputs.monthlyGP)}/mo and save ${outputs.adminHours.toFixed(
          0
        )}h/mo.`;

  const showAudit = outputs.monthlyGP < outputs.totalPrice / 4.3;

  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-md font-sans">
      <h3 className="text-lg font-bold" style={{ color: "#131c2d" }}>
        {strings.title}
      </h3>
      <p className="mb-4 text-xs text-gray-500">{strings.sub}</p>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <div>
          <label className="mb-1 block text-xs text-gray-600">{strings.inputs.arpv}</label>
          <Field
            type="number"
            value={state.arpv}
            onChange={(e) => setState((s) => ({ ...s, arpv: Number(e.target.value) }))}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-600">{strings.inputs.margin}</label>
          <Field
            type="number"
            value={state.gross_margin_pct}
            onChange={(e) =>
              setState((s) => ({ ...s, gross_margin_pct: Number(e.target.value) }))
            }
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-600">{strings.inputs.leads}</label>
          <Field
            type="number"
            value={state.leads_per_month}
            onChange={(e) =>
              setState((s) => ({ ...s, leads_per_month: Number(e.target.value) }))
            }
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-600">{strings.inputs.reply}</label>
          <select
            value={state.reply_time_bucket}
            onChange={(e) =>
              setState((s) => ({ ...s, reply_time_bucket: e.target.value as ReplyBucket }))
            }
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e82fa]"
          >
            {Object.keys(REPLY_UPLIFT_PP).map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-2">
        <button
          type="button"
          className="text-xs text-[#1e82fa] underline"
          onClick={() => setShowPacks((v) => !v)}
        >
          {strings.customize}
        </button>
        {showPacks && (
          <div className="mt-2 flex gap-4">
            <label className="flex items-center gap-1 text-xs text-gray-700">
              <input
                type="checkbox"
                checked={state.selected.speed}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    selected: { ...s.selected, speed: e.target.checked },
                  }))
                }
              />
              {strings.packs.speed}
            </label>
            <label className="flex items-center gap-1 text-xs text-gray-700">
              <input
                type="checkbox"
                checked={state.selected.noshow}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    selected: { ...s.selected, noshow: e.target.checked },
                  }))
                }
              />
              {strings.packs.noshow}
            </label>
            <label className="flex items-center gap-1 text-xs text-gray-700">
              <input
                type="checkbox"
                checked={state.selected.reviews}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    selected: { ...s.selected, reviews: e.target.checked },
                  }))
                }
              />
              {strings.packs.reviews}
            </label>
          </div>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-800">{headline}</p>

      <div className="mt-4 text-right">
        <button
          className="rounded-xl px-4 py-2 text-sm font-bold text-white"
          style={{ backgroundColor: showAudit ? "#1c9795" : "#1e82fa" }}
        >
          {showAudit ? strings.ctaAudit : strings.ctaBuy(outputs.totalPrice)}
        </button>
      </div>
      <p className="mt-2 text-[11px] text-gray-400">{strings.foot}</p>

      <details className="mt-4">
        <summary
          className="cursor-pointer text-sm font-semibold"
          style={{ color: "#1c9795" }}
        >
          {strings.advanced}
        </summary>
        <div className="mt-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs text-gray-600">{strings.adv.conv}</label>
              <Field
                type="number"
                value={state.baseline_conv_pct}
                onChange={(e) =>
                  setState((s) => ({ ...s, baseline_conv_pct: Number(e.target.value) }))
                }
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-600">{strings.adv.noshow}</label>
              <Field
                type="number"
                value={state.no_show_pct}
                onChange={(e) =>
                  setState((s) => ({ ...s, no_show_pct: Number(e.target.value) }))
                }
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-600">{strings.adv.appts}</label>
              <Field
                type="number"
                value={state.appts_per_month ?? ""}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    appts_per_month:
                      e.target.value === "" ? null : Number(e.target.value),
                  }))
                }
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-600">{strings.adv.reviewUplift}</label>
              <Field
                type="number"
                value={state.reviews_traffic_uplift_pct}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    reviews_traffic_uplift_pct: Number(e.target.value),
                  }))
                }
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-600">{strings.adv.adminHrs}</label>
              <Field
                type="number"
                value={state.admin_hours_saved}
                onChange={(e) =>
                  setState((s) => ({ ...s, admin_hours_saved: Number(e.target.value) }))
                }
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-600">{strings.adv.staffCost}</label>
              <Field
                type="number"
                value={state.staff_hourly_cost}
                onChange={(e) =>
                  setState((s) => ({ ...s, staff_hourly_cost: Number(e.target.value) }))
                }
              />
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-gray-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
              <span className="rounded-full bg-gray-100 px-2 py-0.5 font-semibold text-gray-700">
                {outputs.packs} × {formatCurrency(packPrice)}
              </span>
              <span>= {formatCurrency(outputs.totalPrice)}</span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
              <Card title={strings.packs.speed} value={outputs.gpSpeed} />
              <Card title={strings.packs.noshow} value={outputs.gpNoshow} />
              <Card title={strings.packs.reviews} value={outputs.gpReviews} />
              <Card title={strings.adv.adminHrs} value={outputs.adminDollars} />
            </div>

            <div className="mt-4">
              <div className="text-xs text-gray-500">{strings.adv.month}</div>
              <div className="mt-1 grid grid-cols-2 gap-2">
                <Stat
                  label={strings.adv.recovered}
                  value={formatCurrency(outputs.monthlyGP)}
                />
                <Stat
                  label={strings.adv.month1Net}
                  value={formatCurrency(outputs.month1Net)}
                />
              </div>

              <div className="mt-4 text-xs text-gray-500">{strings.adv.year1}</div>
              <div className="mt-1 grid grid-cols-2 gap-2">
                <Stat
                  label={strings.adv.year1Net}
                  value={formatCurrency(outputs.year1Net)}
                />
                <Stat
                  label={strings.adv.roi}
                  value={formatPercent(outputs.year1Roi)}
                />
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}

function Field(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e82fa] ${
        props.className ?? ""
      }`}
    />
  );
}

function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="mt-1 text-lg font-extrabold" style={{ color: "#1c9795" }}>
        {formatCurrency(value)}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] text-gray-500">{label}</div>
      <div className="text-sm font-semibold text-gray-800">{value}</div>
    </div>
  );
}

