import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageProvider';
import { Menu, X, Mail, MapPin } from 'lucide-react';

export const Header: React.FC<{
  langToggle?: { fr: string; en: string };
  ctaHref?: string;
  ctaLabel?: string;
  forceDarkBackground?: boolean;
}> = ({ langToggle, ctaHref, ctaLabel, forceDarkBackground }) => {
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

  const resolvedTextClass = forceDarkBackground
    ? 'text-white'
    : !isScrolled && isPrivacyPage
    ? 'text-[#121C2D]'
    : 'text-white';
  const textClass = resolvedTextClass;
  const navLinkHoverClass = forceDarkBackground ? 'hover:text-white' : 'hover:text-[#2280FF]';
  const base = lang === 'fr' ? '/fr' : '';

  const LanguageToggle = ({ className }: { className?: string }) => {
    const otherLang = lang === 'fr' ? 'en' : 'fr';
    const target = lang === 'fr' ? langToggle?.en ?? '/' : langToggle?.fr ?? '/fr';
    const color = className ?? textClass;
    return (
      <button
        aria-label="Switch language"
        onClick={() => {
          setLang(otherLang as 'fr' | 'en');
          localStorage.setItem('lang', otherLang);
          window.location.href = target;
        }}
        className={`px-3 py-1 rounded-full border ${color} border-current hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2280FF]`}
      >
        {otherLang.toUpperCase()}
      </button>
    );
  };

  const headerBackgroundClass = forceDarkBackground
    ? 'bg-[#121C2D]'
    : isScrolled
    ? 'bg-[#121C2D]'
    : 'bg-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${headerBackgroundClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href={lang === 'fr' ? '/fr' : '/'}
              onClick={() => localStorage.setItem('lang', lang)}
              className={`text-2xl font-bold ${resolvedTextClass}`}
            >
              {t.header.brand}
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <LanguageToggle />
              <a
                href={`mailto:${t.header.email}`}
                className={`transition-colors duration-300 font-medium ${resolvedTextClass} ${navLinkHoverClass}`}
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
                  <X className={`w-6 h-6 ${resolvedTextClass}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${resolvedTextClass}`} />
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
            <LanguageToggle className="text-[#121C2D]" />
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

export const Footer: React.FC<{ langToggle?: { fr: string; en: string } }> = ({
  langToggle
}) => {
  const { t, lang, setLang } = useLanguage();

  const LanguageToggle = () => {
    const otherLang = lang === 'fr' ? 'en' : 'fr';
    const target = lang === 'fr' ? langToggle?.en ?? '/' : langToggle?.fr ?? '/fr';
    return (
      <button
        aria-label="Switch language"
        onClick={() => {
          setLang(otherLang as 'fr' | 'en');
          localStorage.setItem('lang', otherLang);
          window.location.href = target;
        }}
        className="px-3 py-1 rounded-full border border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2280FF]"
      >
        {otherLang.toUpperCase()}
      </button>
    );
  };

  return (
    <footer className="relative py-16 bg-[#121C2D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">{t.header.brand}</div>
            <p className="mb-6 leading-relaxed">{t.footer.blurb}</p>
            <LanguageToggle />
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

