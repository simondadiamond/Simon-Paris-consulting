import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import {
  Globe, Menu, X,
  MessageSquare, CalendarX, Receipt, Shield, CheckCircle,
  Zap, CalendarCheck, Star,
  Mail, MapPin, ChevronDown, ChevronUp
} from 'lucide-react';

// Header Component
const Header = ({ langToggleHref, langToggleLabel }: { langToggleHref?: string; langToggleLabel?: string }) => {
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
            <a href={`${base}/checklist`} className="btn-primary w-full">
              {t.header.cta}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// Hero Component
const Hero = () => {
  const { t } = useLanguage();
  const isFR = typeof window !== 'undefined' && window.location.pathname.startsWith('/fr');
  const base = isFR ? '/fr' : '';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#121C2D' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center card-glass rounded-full px-4 py-2 mb-8">
          <span className="text-sm font-medium text-white">{t.hero.eyebrow}</span>
        </div>

        <h1 className="text-hero text-white mb-6 leading-tight tracking-tight">
          <span>{t.hero.h1_part1} </span>
          <span className="accent">{t.hero.h1_accent}</span>
        </h1>

        <p className="text-subhead !text-white/90 max-w-3xl mx-auto mb-4">{t.hero.subhead}</p>
        <p className="text-sm !text-white/70 mb-10">{t.hero.proof}</p>

        <div className="flex justify-center">
          <a
            href={`${base}/checklist`}
            className="btn-primary text-lg px-8 py-4"
            data-event="cta_click"
            data-cta="checklist"
          >
            {t.hero.primaryCta}
          </a>
        </div>

      </div>
    </section>
  );
};

// Partner Bar Component
const PartnerBar = () => {
  const { t } = useLanguage();

  const partners = [
    {
      name: 'Microsoft for Startups',
      logo:
        'https://github.com/simondadiamond/workflowleaf-assets/blob/1ae5d2c4fc3b285cdd60ed5b3c986f0e14a3c4b7/partner-bar/Microsoft%20Startups.png?raw=true'
    },
    {
      name: 'DigitalOcean Hatch',
      logo:
        'https://github.com/simondadiamond/workflowleaf-assets/blob/07e0a1d79616959fc3294b71c06da22e0078914d/partner-bar/hatch.png?raw=true'
    },
    {
      name: 'Stripe',
      logo:
        'https://github.com/simondadiamond/workflowleaf-assets/blob/1ae5d2c4fc3b285cdd60ed5b3c986f0e14a3c4b7/partner-bar/Stripe%20Logo.svg?raw=true'
    },
    {
      name: 'Airtable',
      logo:
        'https://github.com/simondadiamond/workflowleaf-assets/blob/1ae5d2c4fc3b285cdd60ed5b3c986f0e14a3c4b7/partner-bar/Airtable.png?raw=true'
    }
  ];

  const numberOfRepetitions = 6;
  const repeatedPartners = Array(numberOfRepetitions).fill(partners).flat();

  return (
    <section className="py-12" style={{ background: '#F9FAFB' }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold tracking-wider uppercase font-mono mb-8 text-gray-900">
          {t.partners.title}
        </h2>

        <div className="overflow-hidden w-full">
          <div className="flex w-max animate-scroll space-x-24 items-center">
            {repeatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 h-9 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Section Component
const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const problems = t.problems.list.map((p, i) => ({
    ...p,
    icon: [MessageSquare, CalendarX, Receipt, Shield][i]
  }));

  return (
    <section id="automations" ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-display text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: t.problems.title }}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`card-light p-6 md:p-8 text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? '0ms' : `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2280FF]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-[#2280FF]" />
              </div>

              <h3
                className="text-lg lg:text-xl font-semibold text-gray-900 mb-3"
                dangerouslySetInnerHTML={{ __html: problem.title }}
              />

              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                {problem.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center text-gray-700 mt-8"
          dangerouslySetInnerHTML={{ __html: t.problems.note }}
        />
      </div>
    </section>
  );
};

// Growth Engine Component
const GrowthEngine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, lang } = useLanguage();
  const base = lang === 'fr' ? '/fr' : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const gears = t.growth.gears.map((g, i) => ({
    ...g,
    icon: [Zap, CalendarCheck, Star][i]
  }));

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#F9FAFB' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-display text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: t.growth.title }}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {gears.map((gear, index) => (
            <div
              key={index}
              className={`card-light p-6 md:p-8 flex flex-col items-center text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } h-full`}
              style={{ transitionDelay: isVisible ? '0ms' : `${index * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2280FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <gear.icon className="w-8 h-8 text-white" />
              </div>

              <h3
                className="text-xl font-semibold text-gray-900 mb-4 text-center"
                dangerouslySetInnerHTML={{ __html: gear.title }}
              />
              <ul className="text-gray-700 space-y-2 text-left w-full">
                {gear.bullets.map((b: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#139E9B] mr-2 mt-1 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={`${base}/packs`} className="btn-outline text-lg px-10 py-4">{t.growth.cta}</a>
        </div>
      </div>
    </section>
  );
};

// Offer Cards Component
const OfferCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, lang } = useLanguage();
  const base = lang === 'fr' ? '/fr' : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const offers = t.offers.list;

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2
          className={`text-display text-gray-900 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          dangerouslySetInnerHTML={{ __html: t.offers.heading }}
        />

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {offers.map((offer, index) => (
            <div key={index} className="card-light p-6 md:p-8 flex flex-col relative">
              {offer.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-[#2280FF] text-white px-2 py-1 rounded-full">
                  {offer.badge}
                </span>
              )}
              <h3
                className="text-xl font-semibold text-gray-900 mb-2"
                dangerouslySetInnerHTML={{ __html: offer.title }}
              />
              <p className="text-2xl font-bold text-gray-900 mb-4">{offer.price}</p>
              <p className="text-gray-700 mb-6 flex-1">{offer.desc}</p>
              <a href={`${base}${offer.href}`} className="btn-primary mt-auto">{offer.cta}</a>
            </div>
          ))}
        </div>

        <p className="text-gray-700 mt-6">{t.offers.note}</p>
      </div>
    </section>
  );
};

// ROI Math Component
const ROIMath = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#F9FAFB' }}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-display text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: t.roi.title }}
          />
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card-light p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{lang === 'fr' ? 'Sans automatisation' : 'Without automation'}</h3>
            <p className="text-gray-700">{t.roi.without}</p>
          </div>
          <div className="card-light p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{lang === 'fr' ? 'Avec automatisation' : 'With automation'}</h3>
            <p className="text-gray-700">{t.roi.with}</p>
          </div>
        </div>

        <p className="text-gray-700 mt-8">{t.roi.note}</p>
        <p className="text-gray-700 text-xs mt-2">{t.roi.disclaimer}</p>
      </div>
    </section>
  );
};

// Checklist Component
const Checklist = () => {
  const { t, lang } = useLanguage();
  const base = lang === 'fr' ? '/fr' : '';
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="card-light p-6 md:p-8 text-center">
          <div className="inline-flex items-center mb-4 text-sm font-medium text-gray-700">
            <Shield className="w-5 h-5 text-[#139E9B] mr-2" />
            <span>{t.checklist.eyebrow}</span>
          </div>
          <h3
            className="text-headline text-gray-900 mb-4"
            dangerouslySetInnerHTML={{ __html: t.checklist.title }}
          />
          <p className="text-gray-700 mb-6">{t.checklist.sub}</p>
          <ul className="space-y-2 text-left text-gray-700 mb-6">
            {t.checklist.points.map((p: string, i: number) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-4 h-4 text-[#139E9B] mr-2 mt-1 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: p }} />
              </li>
            ))}
          </ul>
          <a href={`${base}${t.checklist.href}`} className="btn-primary px-8 py-4">
            {t.checklist.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

// Proof Section Component
const ProofSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display text-gray-900 mb-6">{t.proof.title}</h2>
        </div>

        <p
          className={`max-w-3xl mx-auto text-center text-gray-700 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {t.proof.bullets.join(' • ')}
        </p>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = t.faq.list;

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-20 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="text-display text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: t.faq.title }}
          />
        </div>
        
        <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {faqs.map((faq, index) => (
            <div key={index} className="card-light overflow-hidden">
              <button
                className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span
                  className="text-lg font-semibold text-gray-900 pr-8"
                  dangerouslySetInnerHTML={{ __html: faq.question }}
                />
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-[#2280FF] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#2280FF] flex-shrink-0" />
                )}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6">
                  <p className="text-gray-700 mb-2">{faq.answer.intro}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {faq.answer.bullets.map((b: string, i: number) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Component
const FinalCTA = () => {
  const { t, lang } = useLanguage();
  const base = lang === 'fr' ? '/fr' : '';

  return (
    <section className="relative py-16 bg-[#121C2D] text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">{t.finalCTA.title}</h2>
        <p className="text-lg text-white/80 mb-8">{t.finalCTA.sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`${base}${t.finalCTA.primaryHref}`} className="btn-primary px-8 py-4">
            {t.finalCTA.primary}
          </a>
          <a href={`${base}${t.finalCTA.secondaryHref}`} className="btn-outline text-lg px-8 py-4">
            {t.finalCTA.secondary}
          </a>
        </div>
      </div>
    </section>
  );
};

const StickyCTA = () => {
  const { t, lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;
  const base = lang === 'fr' ? '/fr' : '';
  return (
    <div className="sticky-cta">
      <a href={`${base}/checklist`} className="btn-primary w-full text-lg py-4">
        {t.stickyCta}
      </a>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const { t, lang } = useLanguage();
  return (
    <footer className="relative py-16 bg-[#121C2D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              {t.header.brand}
            </div>
            <p className="mb-6 leading-relaxed">
              {t.footer.blurb}
            </p>
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
            <p className="mb-4 md:mb-0">
              {t.footer.copyright}
            </p>
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

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PartnerBar />
        <ProblemSection />
        <GrowthEngine />
        <OfferCards />
      <ROIMath />
      <Checklist />
      <ProofSection />
      <FAQ />
      <FinalCTA />
      <StickyCTA />
      <Footer />
    </div>
  );
}
export { Header, Footer };
export default App;