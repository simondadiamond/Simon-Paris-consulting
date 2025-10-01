import React, { useEffect, useState } from 'react';
import { Header, Footer } from '../components/Layout';
import { useLanguage } from '../LanguageProvider';
import { translations, type Language } from '../i18n';

const resolveLanguage = (searchParams: URLSearchParams, storageValue: string | null): Extract<Language, 'fr' | 'en'> => {
  const paramLang = searchParams.get('lang');
  if (paramLang === 'fr' || paramLang === 'en') {
    return paramLang;
  }
  if (storageValue === 'fr' || storageValue === 'en') {
    return storageValue;
  }
  return 'en';
};

const NewsletterConfirmation: React.FC = () => {
  const { setLang } = useLanguage();
  const [resolvedLang, setResolvedLang] = useState<Extract<Language, 'fr' | 'en'>>('en');
  const copy = translations[resolvedLang].newsletter.confirmation;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const stored = window.localStorage.getItem('newsletter_lang');
    const lang = resolveLanguage(params, stored);
    setResolvedLang(lang);
    setLang(lang);
    window.localStorage.setItem('newsletter_lang', lang);
  }, [setLang]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = copy.metaTitle;
    let robots = document.head.querySelector<HTMLMetaElement>("meta[name='robots']");
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex';
  }, [copy.metaTitle]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F6FA] text-[var(--text-primary)]">
      <Header
        langToggle={{
          fr: translations.fr.newsletter.meta.canonical,
          en: translations.en.newsletter.meta.canonical
        }}
        forceDarkBackground
        ctaHref={resolvedLang === 'fr' ? '/fr#hero' : '/#hero'}
      />
      <main className="flex flex-1 items-center justify-center px-4 py-24 md:px-6">
        <div className="w-full max-w-[560px] rounded-[16px] bg-white/95 p-10 shadow-[0_28px_72px_rgba(18,28,45,0.12)] ring-1 ring-black/5">
          <h1 className="text-3xl font-semibold text-[#121C2D] md:text-4xl">{copy.heading}</h1>
          <p className="mt-4 text-lg font-semibold text-[#139E9C]">{copy.subheading}</p>
          <p className="mt-6 text-base leading-relaxed text-[#4B5563]">{copy.intro}</p>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-[#4B5563]">
            {copy.checklist.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#139E9C]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a href={copy.ctaHref} className="btn-primary w-full sm:w-auto">
              {copy.ctaLabel}
            </a>
            <p className="text-sm text-[#6B7280] sm:text-right">{copy.support}</p>
          </div>
        </div>
      </main>
      <Footer
        langToggle={{
          fr: translations.fr.newsletter.meta.canonical,
          en: translations.en.newsletter.meta.canonical
        }}
      />
    </div>
  );
};

export default NewsletterConfirmation;
