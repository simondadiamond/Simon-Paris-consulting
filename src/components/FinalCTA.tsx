import React from 'react';
import { useLanguage } from '../LanguageProvider';

const FinalCTA: React.FC = () => {
  const { t, lang } = useLanguage();
  const fallbackHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  const ctaHref = t.finalcta?.href ?? fallbackHref;
  const privacyLabel = lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy';

  return (
    <section className="relative overflow-hidden bg-[#050B16] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-14rem] h-[24rem] w-[24rem] rounded-full bg-[#2280FF]/18 blur-[160px]" />
        <div className="absolute bottom-[-12rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#139E9C]/18 blur-[170px]" />
        <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(255,255,255,0.08),transparent_55%)] mix-blend-screen" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-28 lg:pb-16 lg:pt-32">
        <div className="mx-auto flex justify-center">
          <div className="mini-audit-card group relative w-full max-w-4xl overflow-hidden text-white">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,128,255,0.18),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(19,158,156,0.22),transparent_65%)]" />
              <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#139E9C]/25 blur-[160px]" />
            </div>

            <div className="relative mx-auto flex flex-col items-center gap-6 px-8 py-12 text-center sm:px-10 sm:py-14 lg:max-w-4xl lg:px-14 lg:py-16">
              <h2 className="section-heading text-[#F4F6F8]">{t.cta.audit.title}</h2>

              <p className="max-w-3xl text-base leading-relaxed text-[#C7D0D8] sm:text-lg">{t.cta.audit.subtitle}</p>

              <div className="flex flex-col items-center">
                <a href={t.cta.audit.ctaHref} className="btn-primary btn-primary--audit">
                  {t.cta.audit.ctaLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-14 text-center">
          <div className="space-y-3">
            <h2 className="text-balance text-[clamp(1.9rem,3vw,2.4rem)] font-semibold leading-tight text-white">
              {t.finalcta.headline}
            </h2>
            <p className="text-balance text-base leading-relaxed text-white/75">{t.finalcta.subtext}</p>
          </div>
          <div className="mt-8 flex justify-center">
            <a href={ctaHref} className="btn-contrast-dark">
              {t.finalcta.cta}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-sm text-white/70 sm:flex-row sm:justify-between">
          <span className="text-center sm:text-left">© 2024 Simon Paris</span>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a href="/privacy" className="transition hover:text-white">
              {privacyLabel}
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <a
                href="/fr"
                className={`transition hover:text-white ${lang === 'fr' ? 'text-white' : 'text-white/70'}`}
              >
                FR
              </a>
              <span className="text-white/40">|</span>
              <a
                href="/en"
                className={`transition hover:text-white ${lang === 'en' ? 'text-white' : 'text-white/70'}`}
              >
                EN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
