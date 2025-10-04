import React from 'react';
import { useLanguage } from '../LanguageProvider';

const FinalCTA: React.FC = () => {
  const { t, lang } = useLanguage();
  const fallbackHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  const ctaHref = t.finalcta?.href ?? fallbackHref;

  return (
    <section className="bg-[#0B1220] py-12 md:py-14 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 text-center md:text-left md:max-w-3xl">
          <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
            {t.finalcta.headline}
          </h2>
          <p className="text-base text-white/70">
            {t.finalcta.subtext}
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:items-end">
          <a
            href={ctaHref}
            className="bg-[#139E9C] text-white hover:bg-[#118C89] px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#139E9C]/40"
          >
            {t.finalcta.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
