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
    robots.content = 'noindex, nofollow';
  }, [copy.metaTitle]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F6FA] text-[var(--text-primary)]">
      <Header
        langToggle={{
          fr: translations.fr.newsletter.meta.canonical,
          en: translations.en.newsletter.meta.canonical
        }}
        forceDarkBackground
      />
      <main className="flex flex-1 items-center justify-center px-4 py-24 md:px-6">
        <div className="w-full max-w-[540px] rounded-[12px] bg-white/95 p-10 shadow-[0_28px_72px_rgba(18,28,45,0.12)] ring-1 ring-black/5 sm:p-12">
          <h1 className="section-heading text-[#121C2D] text-balance">{copy.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-[#4B5563]">{copy.body}</p>
          <p className="mt-6 text-sm font-medium text-[#139E9C]">{copy.extra}</p>
          <a href={copy.backHome.href} className="btn-primary mt-10 inline-flex w-full justify-center sm:w-auto">
            {copy.backHome.label}
          </a>
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
