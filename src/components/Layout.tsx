import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageProvider';
import { Globe, Menu, X, Mail, MapPin } from 'lucide-react';

export const Header: React.FC<{
  langToggleHref?: string;
  langToggleLabel?: string;
  ctaHref?: string;
  ctaLabel?: string;
}> = ({ langToggleHref, langToggleLabel, ctaHref, ctaLabel }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const isPrivacyPage =
    typeof window !== 'undefined' &&
    (window.location.pathname === '/privacy' ||
      window.location.pathname === '/fr/politique-confidentialite');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textClass = !isScrolled && isPrivacyPage ? 'text-[#121C2D]' : 'text-white';
  const base = lang === 'fr' ? '/fr' : '';

  const LanguageToggle = () => {
    const targetLang = lang === 'en' ? 'fr' : 'en';
    const href = targetLang === 'fr' ? '/fr' : '/';
    if (langToggleHref && langToggleLabel) {
      return (
        <a
          href={langToggleHref}
          className={`${textClass} underline decoration-transparent hover:decoration-[#2280FF]`}
          onClick={() => {
            setLang(targetLang);
            localStorage.setItem('lang', targetLang);
          }}
        >
          {langToggleLabel}
        </a>
      );
    }
    return (
      <a
        href={href}
        className={`flex items-center text-sm ${textClass} underline decoration-transparent hover:decoration-[#2280FF]`}
        onClick={() => {
          setLang(targetLang);
          localStorage.setItem('lang', targetLang);
        }}
      >
        <Globe className="w-4 h-4 mr-2" />
        <span>{t.header.languageToggle}</span>
      </a>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-[#121C2D]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href={lang === 'fr' ? '/fr' : '/'}
              onClick={() => localStorage.setItem('lang', lang)}
              className={`text-2xl font-bold ${textClass}`}
            >
              {t.header.brand}
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <LanguageToggle />
              <a
                href={`mailto:${t.header.email}`}
                className={`transition-colors duration-300 font-medium ${textClass} hover:text-[#2280FF]`}
              >
                {t.header.email}
              </a>
              <a href={ctaHref ?? `${base}/checklist`} className="btn-primary text-sm px-6 py-3">
                {ctaLabel ?? t.header.cta}
              </a>
            </div>
            <div className="flex md:hidden items-center space-x-4">
              <LanguageToggle />
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${textClass}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${textClass}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20 space-y-6 text-center">
            {langToggleHref && langToggleLabel ? (
              <a
                href={langToggleHref}
                className="block text-[#121C2D] underline decoration-transparent hover:decoration-[#2280FF]"
                onClick={() => {
                  const targetLang = lang === 'en' ? 'fr' : 'en';
                  setLang(targetLang);
                  localStorage.setItem('lang', targetLang);
                }}
              >
                {langToggleLabel}
              </a>
            ) : (
              <button
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                className="flex items-center justify-center text-[#121C2D] underline decoration-transparent hover:decoration-[#2280FF]"
              >
                <Globe className="w-4 h-4 mr-2" />
                <span>{t.header.languageToggle}</span>
              </button>
            )}
            <a
              href={`mailto:${t.header.email}`}
              className="block text-[#121C2D] hover:text-[#2280FF] font-medium"
            >
              {t.header.email}
            </a>
            <a href={ctaHref ?? `${base}/checklist`} className="btn-primary w-full">
              {ctaLabel ?? t.header.cta}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  return (
    <footer className="relative py-16 bg-[#121C2D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">{t.header.brand}</div>
            <p className="mb-6 leading-relaxed">{t.footer.blurb}</p>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              <span>{t.footer.language}</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2">
              {t.footer.servicesList.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${t.header.email}`}
                className="flex items-center hover:text-[#2280FF] transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t.header.email}
              </a>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {t.footer.location}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">{t.footer.copyright}</p>
            <div className="flex items-center space-x-4 text-sm">
              <a
                href={lang === 'fr' ? '/fr/politique-confidentialite' : '/privacy'}
                className="hover:text-[#2280FF] transition-colors"
              >
                {t.footer.privacy}
              </a>
              <p>{t.footer.curiosity}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

