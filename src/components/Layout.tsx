import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageProvider';
import { Menu, X } from 'lucide-react';

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
  const defaultCtaHref = t.hero.ctaHref ?? 'https://cal.com/simonparis/diagnostic';
  const defaultCtaLabel = t.hero.cta;
  const resolvedCtaHref = ctaHref ?? defaultCtaHref;
  const resolvedCtaLabel = ctaLabel ?? defaultCtaLabel;
  const ctaClasses = 'btn-primary';

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
          <div className="hidden items-center md:flex">
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
            <a href={resolvedCtaHref} className={ctaClasses}>
              {resolvedCtaLabel}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC<{ langToggle?: { fr: string; en: string } }> = ({
  langToggle: _langToggle
}) => {
  const { t } = useLanguage();

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
          <p className="text-center text-[11px] text-white/45 md:text-left">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

