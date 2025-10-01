/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, Language, Translation } from './i18n';

interface LangContext {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LangContext>({
  lang: 'en',
  setLang: () => {},
  t: translations.en
});

const detectLanguage = async (): Promise<Language> => {
  if (typeof navigator !== 'undefined') {
    const navLang = navigator.language || (navigator.languages && navigator.languages[0]);
    if (navLang) {
      const lower = navLang.toLowerCase();
      if (lower.startsWith('fr')) return 'fr';
      if (lower.startsWith('en')) return 'en';
    }
  }
  if (typeof fetch === 'function') {
    try {
      const res = await fetch('https://ipapi.co/json/');
      if (res.ok) {
        const data = await res.json();
        if (data && data.region_code === 'QC') {
          return 'fr';
        }
      }
    } catch {
      // ignore network errors
    }
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathLang =
    typeof window !== 'undefined' && window.location.pathname.startsWith('/fr') ? 'fr' : 'en';
  const [lang, setLang] = useState<Language>(pathLang);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const currentPathLang = window.location.pathname.startsWith('/fr') ? 'fr' : null;
    if (currentPathLang) {
      setLang(currentPathLang);
      window.localStorage.setItem('lang', currentPathLang);
      return;
    }
    const stored = window.localStorage.getItem('lang') as Language | null;
    if (stored) {
      setLang(stored);
      return;
    }
    detectLanguage().then(setLang);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
