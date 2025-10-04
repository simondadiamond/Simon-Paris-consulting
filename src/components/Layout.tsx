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
  const newsletterHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  const resolvedCtaHref = ctaHref ?? newsletterHref;
  const resolvedCtaLabel = ctaLabel ?? t.header.cta;

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
              <a href={resolvedCtaHref} className="btn-primary text-sm px-6 py-3">
                {resolvedCtaLabel}
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
            <a href={resolvedCtaHref} className="btn-primary w-full">
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

