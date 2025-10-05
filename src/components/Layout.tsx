import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageProvider';
import { Menu, X } from 'lucide-react';

const getTargetHref = (
  targetLang: 'fr' | 'en',
  langToggle?: { fr: string; en: string }
) => (targetLang === 'fr' ? langToggle?.fr ?? '/fr' : langToggle?.en ?? '/');

export const Header: React.FC<{
  langToggle?: { fr: string; en: string };
  forceDarkBackground?: boolean;
}> = ({ langToggle, forceDarkBackground }) => {
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

  const resolvedTextClass = 'text-white';
  const textClass = resolvedTextClass;
  const LanguageToggle = ({ tone = 'desktop' }: { tone?: 'desktop' | 'mobile' }) => {
    const toggleLanguage = () => {
      const targetLang = lang === 'fr' ? 'en' : 'fr';
      setLang(targetLang);
      localStorage.setItem('lang', targetLang);
      const href = getTargetHref(targetLang, langToggle);
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
      ? 'text-white/55'
      : isLight
      ? 'text-[#121C2D]/55'
      : 'text-white/55';
    const dividerClass = isMobile
      ? 'text-white/30'
      : isLight
      ? 'text-[#121C2D]/35'
      : 'text-white/35';

    const wrapperClass =
      tone === 'desktop'
        ? 'flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.25em]'
        : 'flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.25em]';

    const nextLang = lang === 'fr' ? 'en' : 'fr';
    const label = nextLang === 'fr' ? 'Switch language to French' : 'Switch language to English';

    return (
      <button
        type="button"
        onClick={toggleLanguage}
        className={`${wrapperClass} transition-colors hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
        aria-label={label}
      >
        <span className={lang === 'fr' ? activeClass : inactiveClass}>FR</span>
        <span className={`mx-[6px] ${dividerClass}`}>|</span>
        <span className={lang === 'en' ? activeClass : inactiveClass}>EN</span>
      </button>
    );
  };

  const headerBackgroundClass = forceDarkBackground
    ? 'bg-[#0B1320]/95 backdrop-blur-lg'
    : isPrivacyPage
    ? 'bg-[#0B1320]/95 backdrop-blur-lg shadow-sm'
    : isScrolled
    ? 'bg-[#0B1320]/90 backdrop-blur-lg'
    : 'bg-transparent';

  const headerClassName = `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBackgroundClass}`;

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
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC<{ langToggle?: { fr: string; en: string } }> = ({
  langToggle,
}) => {
  const { t, lang, setLang } = useLanguage();
  const resolvedLangToggle = {
    fr: langToggle?.fr ?? '/fr',
    en: langToggle?.en ?? '/',
  };

  const toggleFooterLanguage = () => {
    const targetLang = lang === 'fr' ? 'en' : 'fr';
    setLang(targetLang);
    localStorage.setItem('lang', targetLang);
    const href = getTargetHref(targetLang, resolvedLangToggle);
    window.location.href = href;
  };

  const nextLang = lang === 'fr' ? 'en' : 'fr';
  const footerLabel = nextLang === 'fr' ? 'Switch language to French' : 'Switch language to English';

  return (
    <footer className="border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto max-w-5xl px-6 py-8 md:py-10">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <div className="text-lg font-medium text-white/80 md:text-xl">{t.header.brand}</div>
            <p className="mt-1 text-xs text-white/60 md:text-sm">{t.footer.tagline}</p>
          </div>

          <address className="text-xs text-white/60 not-italic md:text-right md:text-sm">
            <a
              href={`mailto:${t.footer.contact.email}`}
              className="block font-medium text-white/80 transition hover:text-white"
            >
              {t.footer.contact.emailLabel}: {t.footer.contact.email}
            </a>
            <div className="mt-1">{t.footer.contact.locationLabel}: {t.footer.contact.location}</div>
          </address>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-[11px] text-white/45 md:text-left">
              {t.footer.copyright}
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={lang === 'fr' ? '/fr/politique-confidentialite' : '/privacy'}
                className="text-[11px] uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
              >
                {t.footer.links.privacy}
              </a>

              <button
                type="button"
                onClick={toggleFooterLanguage}
                className="flex items-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white/55 transition hover:text-white focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={footerLabel}
              >
                <span className={lang === 'fr' ? 'text-white' : 'text-white/55'}>FR</span>
                <span className="mx-[6px] text-white/30">|</span>
                <span className={lang === 'en' ? 'text-white' : 'text-white/55'}>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

