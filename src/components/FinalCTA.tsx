import React from 'react';
import { useLanguage } from '../LanguageProvider';

const FinalCTA: React.FC = () => {
  const { t, lang } = useLanguage();
  const fallbackHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  const ctaHref = t.finalcta?.href ?? fallbackHref;

  return (
    <section className="relative mt-16 overflow-hidden border-t border-white/10 bg-[#050B16] text-white lg:mt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-[-12rem] h-[22rem] w-[22rem] rounded-full bg-[#2280FF]/20 blur-[140px]" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[#139E9C]/18 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.06),transparent_55%)] mix-blend-screen" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
        <div className="space-y-3">
          <h2 className="text-balance text-[clamp(1.9rem,3vw,2.4rem)] font-semibold leading-tight text-white">
            {t.finalcta.headline}
          </h2>
          <p className="text-balance text-base leading-relaxed text-white/75">
            {t.finalcta.subtext}
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <a href={ctaHref} className="btn-secondary-light">
            {t.finalcta.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
