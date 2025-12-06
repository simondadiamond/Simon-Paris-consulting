import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageProvider';
import { Menu, X } from 'lucide-react';

type HeaderProps = {
  langToggle?: { fr: string; en: string };
  forceDarkBackground?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

type Lang = 'fr' | 'en';

const getTargetHref = (targetLang: Lang, langToggle?: { fr: string; en: string }) =>
  targetLang === 'fr' ? langToggle?.fr ?? '/fr' : langToggle?.en ?? '/';

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
    {children}
  </span>
);

const LanguageToggle = ({
  tone = 'desktop',
  lang,
  setLang,
  langToggle,
}: {
  tone?: 'desktop' | 'mobile';
  lang: Lang;
  setLang: (lang: Lang) => void;
  langToggle?: { fr: string; en: string };
}) => {
  const toggleLanguage = () => {
    const targetLang = lang === 'fr' ? 'en' : 'fr';
    setLang(targetLang);
    localStorage.setItem('lang', targetLang);
    const href = getTargetHref(targetLang, langToggle);
    window.location.href = href;
  };

  const isMobile = tone === 'mobile';
  const activeClass = isMobile ? 'text-white' : 'text-slate-900';
  const inactiveClass = isMobile ? 'text-white/55' : 'text-slate-500';
  const dividerClass = isMobile ? 'text-white/30' : 'text-slate-400';

  const wrapperClass =
    tone === 'desktop'
      ? 'flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.25em]'
      : 'flex items-center text-[0.8rem] font-semibold uppercase tracking-[0.25em]';

  const nextLang = lang === 'fr' ? 'en' : 'fr';
  const label = nextLang === 'fr' ? 'Switch language to French' : 'Switch language to English';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`${wrapperClass} transition-colors hover:opacity-90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900`}
      aria-label={label}
    >
      <span className={lang === 'fr' ? activeClass : inactiveClass}>FR</span>
      <span className={`mx-[6px] ${dividerClass}`}>|</span>
      <span className={lang === 'en' ? activeClass : inactiveClass}>EN</span>
    </button>
  );
};

export const Header: React.FC<HeaderProps> = ({ langToggle, forceDarkBackground, ctaHref, ctaLabel }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCopy = lang === 'fr'
    ? ['Solutions', 'À propos', 'Projets', 'Tarifs']
    : ['Solutions', 'About', 'Projects', 'Pricing'];

  const navLinks = [
    { label: navCopy[0], href: '#solutions' },
    { label: navCopy[1], href: '#story' },
    { label: navCopy[2], href: '#projects' },
    { label: navCopy[3], href: '#contact' },
  ];

  const headerBackgroundClass = forceDarkBackground
    ? 'bg-slate-900/95 backdrop-blur'
    : isScrolled
    ? 'bg-white/90 backdrop-blur shadow-sm'
    : 'bg-transparent';

  const effectiveCtaHref = ctaHref ?? '#projects';
  const effectiveCtaLabel = ctaLabel ?? (lang === 'fr' ? 'Commencer' : 'Get started');

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBackgroundClass}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-md">
              <div className="h-4 w-[14px] rounded-full bg-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Automation</span>
              <a
                href={lang === 'fr' ? '/fr' : '/'}
                onClick={() => localStorage.setItem('lang', lang)}
                className="text-lg font-semibold text-slate-900"
              >
                {t.header.brand}
              </a>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a href="#login" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              {lang === 'fr' ? 'Connexion' : 'Login'}
            </a>
            <Badge>
              <LanguageToggle lang={lang as Lang} setLang={setLang} langToggle={langToggle} />
            </Badge>
            <a
              href={effectiveCtaHref}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-[1px] hover:shadow-xl"
            >
              {effectiveCtaLabel}
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-md"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-slate-900 text-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col gap-8 p-6 pt-20">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-white/70">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4 text-base font-semibold">
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg bg-white/5 px-3 py-2 transition hover:bg-white/10">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <LanguageToggle tone="mobile" lang={lang as Lang} setLang={setLang} langToggle={langToggle} />
              <a
                href={effectiveCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg"
              >
                {effectiveCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC<{ langToggle?: { fr: string; en: string } }> = ({ langToggle }) => {
  const { t, lang, setLang } = useLanguage();
  const resolvedLangToggle = {
    fr: langToggle?.fr ?? '/fr',
    en: langToggle?.en ?? '/',
  };

  const toggleFooterLanguage = () => {
    const targetLang = lang === 'fr' ? 'en' : 'fr';
    setLang(targetLang as Lang);
    localStorage.setItem('lang', targetLang);
    const href = getTargetHref(targetLang as Lang, resolvedLangToggle);
    window.location.href = href;
  };

  const nextLang = lang === 'fr' ? 'en' : 'fr';
  const label = nextLang === 'fr' ? 'Passer en français' : 'Switch to English';

  return (
    <footer className="bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row">
        <span className="text-white/80">© 2025 {t.header.brand}</span>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="transition hover:text-white">
            {lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
          </a>
          <button
            type="button"
            onClick={toggleFooterLanguage}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white/40"
            aria-label={label}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-white/70">{lang.toUpperCase()}</span>
            <span className="text-white">⇄</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Header;
