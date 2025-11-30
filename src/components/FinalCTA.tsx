import React from 'react';
import { useLanguage } from '../LanguageProvider';

const FinalCTA: React.FC = () => {
  const { t, lang } = useLanguage();
  const fallbackHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  const ctaHref = t.finalcta?.href ?? fallbackHref;

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#050B16] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-[-12rem] h-[22rem] w-[22rem] rounded-full bg-[#2280FF]/20 blur-[140px]" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[#139E9C]/18 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.06),transparent_55%)] mix-blend-screen" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7AD7CF]">
              {t.finalcta.eyebrow}
            </div>
            <div className="space-y-3">
              <h2 className="text-balance text-[clamp(1.9rem,3vw,2.4rem)] font-semibold leading-tight text-white">
                {t.finalcta.headline}
              </h2>
              <p className="text-balance text-base leading-relaxed text-white/75">
                {t.finalcta.subtext}
              </p>
            </div>

            <div className="grid gap-4 text-left sm:grid-cols-2">
              {t.finalcta.highlights.map((item, index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#7AD7CF]">{item.label}</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href={ctaHref}
                className="btn-primary"
              >
                {t.finalcta.cta}
              </a>
              <p className="text-xs text-white/55">{t.finalcta.footerNote}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-lg">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#7AD7CF]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7AD7CF]/20 text-[#7AD7CF]">⚙️</span>
              <span>{t.finalcta.pipeline.title}</span>
            </div>
            <p className="mt-3 text-lg font-semibold text-white">{t.finalcta.pipeline.subtitle}</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {t.finalcta.pipeline.steps.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-[#7AD7CF]">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-white/60">{t.finalcta.pipeline.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
