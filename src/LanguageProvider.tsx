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
  const navLang = navigator.language || (navigator.languages && navigator.languages[0]);
  if (navLang) {
    const lower = navLang.toLowerCase();
    if (lower.startsWith('fr')) return 'fr';
    if (lower.startsWith('en')) return 'en';
  }
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
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language | null;
    if (stored) {
      setLang(stored);
      return;
    }
    detectLanguage().then(setLang);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
