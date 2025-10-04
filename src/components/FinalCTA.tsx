import React from 'react';
import { useLanguage } from '../LanguageProvider';

const FinalCTA: React.FC = () => {
  const { t, lang } = useLanguage();
  const fallbackHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  const ctaHref = t.finalcta?.href ?? fallbackHref;

  return (
    <section className="bg-[#0B1220] py-12 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center space-y-4 text-center md:flex-row md:items-center md:justify-between md:space-y-0 md:text-left">
          <div className="md:max-w-3xl md:pr-8">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">
              {t.finalcta.headline}
            </h2>
            <p className="mt-2 text-base text-white/70">
              {t.finalcta.subtext}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <a
              href={ctaHref}
              className="bg-[#139E9C] text-white hover:bg-[#118C89] px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#139E9C]/40"
            >
              {t.finalcta.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
