import React, { useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import { Header, Footer } from '../components/Layout';
import { useLanguage } from '../LanguageProvider';

const TITLES = {
  fr: 'Infolettre PME Québec | The Automated SMB',
  en: 'Québec SMB AI Newsletter | The Automated SMB'
};

const CANONICAL = {
  fr: '/fr/newsletter',
  en: '/en/newsletter'
};

const ensureHeadLink = (selector: string, init: () => HTMLLinkElement) => {
  let link = document.head.querySelector<HTMLLinkElement>(selector);
  if (!link) {
    link = init();
    document.head.appendChild(link);
  }
  return link;
};

interface NewsletterPageProps {
  lang: 'fr' | 'en';
}

const NewsletterPage: React.FC<NewsletterPageProps> = ({ lang }) => {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    document.title = TITLES[lang];

    const canonicalHref = `${window.location.origin}${CANONICAL[lang]}`;
    const alternateHref = `${window.location.origin}${CANONICAL[lang === 'fr' ? 'en' : 'fr']}`;

    const canonical = ensureHeadLink("link[rel='canonical']", () => {
      const link = document.createElement('link');
      link.rel = 'canonical';
      return link;
    });
    canonical.href = canonicalHref;

    const frAlt = ensureHeadLink("link[rel='alternate'][hreflang='fr']", () => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = 'fr';
      return link;
    });
    frAlt.href = lang === 'fr' ? canonicalHref : alternateHref;

    const enAlt = ensureHeadLink("link[rel='alternate'][hreflang='en']", () => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = 'en';
      return link;
    });
    enAlt.href = lang === 'en' ? canonicalHref : alternateHref;
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header langToggle={{ fr: CANONICAL.fr, en: CANONICAL.en }} ctaHref={lang === 'fr' ? '/fr#hero' : '/#hero'} />
      <main className="flex-1 pt-32 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <SignupForm lang={lang} />
        </div>
      </main>
      <Footer langToggle={{ fr: CANONICAL.fr, en: CANONICAL.en }} />
    </div>
  );
};

export const NewsletterFR = () => <NewsletterPage lang="fr" />;
export const NewsletterEN = () => <NewsletterPage lang="en" />;

export default NewsletterPage;
