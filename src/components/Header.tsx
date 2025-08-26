import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

type HeaderProps = {
  langToggleHref?: string;
  langToggleLabel?: string;
};

const Header = ({ langToggleHref, langToggleLabel }: HeaderProps) => {
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
              className="flex items-center space-x-2"
            >
              <span className="sr-only">{t.header.brand}</span>
              <span
                className="h-8 w-8 bg-teal-400"
                style={{
                  maskImage: 'url(/icon.svg)',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  maskSize: 'contain',
                  WebkitMaskImage: 'url(/icon.svg)',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  WebkitMaskSize: 'contain',
                }}
              />
              <span className="text-teal-400 font-semibold">workflowLeaf</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <LanguageToggle />
              <a href={`${base}/checklist`} className="btn-primary text-sm px-6 py-3">
                {t.header.cta}
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
            <a href={`${base}/checklist`} className="btn-primary w-full">
              {t.header.cta}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

