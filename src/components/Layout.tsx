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
  const newsletterHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  const resolvedCtaHref = ctaHref ?? newsletterHref;
  const resolvedCtaLabel = ctaLabel ?? t.header.cta;

  const LanguageToggle = ({ tone = 'desktop' }: { tone?: 'desktop' | 'mobile' }) => {
    const goTo = (targetLang: 'fr' | 'en') => {
      if (lang === targetLang) return;
      setLang(targetLang);
      localStorage.setItem('lang', targetLang);
      const href = targetLang === 'fr' ? langToggle?.fr ?? '/fr' : langToggle?.en ?? '/';
      window.location.href = href;
    };

    const isLight = textClass.includes('#121C2D');
    const isMobile = tone === 'mobile';
    const activeClass = isMobile
      ? 'text-white'
      : isLight
      ? 'text-[#121C2D]'
      : 'text-white';
    const inactiveClass = isMobile
      ? 'text-white/60 hover:text-white'
      : isLight
      ? 'text-[#121C2D]/60 hover:text-[#121C2D]'
      : 'text-white/60 hover:text-white';
    const dividerClass = isMobile
      ? 'text-white/25'
      : isLight
      ? 'text-[#121C2D]/30'
      : 'text-white/30';

    const wrapperClass =
      tone === 'desktop'
        ? 'flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.35em]'
        : 'flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.35em]';

    return (
      <div className={wrapperClass}>
        <button
          type="button"
          aria-pressed={lang === 'fr'}
          onClick={() => goTo('fr')}
          className={`${lang === 'fr' ? activeClass : inactiveClass} transition-colors`}
        >
          FR
        </button>
        <span className={`mx-2 ${dividerClass}`}>|</span>
        <button
          type="button"
          aria-pressed={lang === 'en'}
          onClick={() => goTo('en')}
          className={`${lang === 'en' ? activeClass : inactiveClass} transition-colors`}
        >
          EN
        </button>
      </div>
    );
  };

  const headerBackgroundClass = forceDarkBackground
    ? 'bg-[#0B1320]/95 backdrop-blur-lg'
    : isScrolled
    ? 'bg-[#0B1320]/90 backdrop-blur-lg'
    : 'bg-transparent';

  const headerClassName = `fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-colors duration-300 ${headerBackgroundClass}`;

  return (
    <>
      <header className={headerClassName}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href={lang === 'fr' ? '/fr' : '/'}
            onClick={() => localStorage.setItem('lang', lang)}
            className={`text-xl font-semibold tracking-tight ${resolvedTextClass}`}
          >
            {t.header.brand}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <LanguageToggle />
            <a
              href={resolvedCtaHref}
              className="inline-flex items-center justify-center rounded-full bg-[#139E9C] px-5 py-2 text-sm font-semibold text-[#041820] shadow-sm shadow-[#139E9C]/40 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[#139E9C]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#139E9C]"
            >
              {resolvedCtaLabel}
            </a>
          </div>
          <div className="flex items-center gap-4 md:hidden">
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
          className={`absolute top-0 right-0 h-full w-72 bg-[#0B1320] text-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col gap-8 p-6 pt-24">
            <LanguageToggle tone="mobile" />
            <a
              href={resolvedCtaHref}
              className="inline-flex items-center justify-center rounded-full bg-[#139E9C] px-6 py-3 text-sm font-semibold text-[#041820] shadow-sm shadow-[#139E9C]/40 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[#139E9C]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#139E9C]"
            >
              {resolvedCtaLabel}
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

