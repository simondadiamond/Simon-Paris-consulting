import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import type { Language } from './i18n';
import {
  MessageSquare,
  CheckCircle,
  ShieldCheck,
  LayoutDashboard,
  CalendarCheck,
  Video,
  Headset,
  ChevronDown,
  ChevronUp,
  Repeat,
  CalendarClock,
  ShieldAlert,
  Link2,
  Shield,
  FlaskConical
} from 'lucide-react';
import { Header, Footer } from './components/Layout';
import PartnerBar from './components/PartnerBar';
import FinalCTA from './components/FinalCTA';
import MiniAuditCTA from './components/MiniAuditCTA';

// Hero Component
const Hero = () => {
  const { t, lang, setLang } = useLanguage();
  const hero = t.hero;
  const subtitleLines = hero.subtitle.split('\n');

  const handleLanguageToggle = (targetLang: Language) => {
    if (targetLang !== lang) {
      setLang(targetLang);
    }
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#121C2D] to-[#0D1627] px-6 text-white sm:px-8"
    >
      <div className="hero-aurora" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)] mix-blend-screen" />

      <div className="absolute top-6 right-6 z-20 flex rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md sm:text-sm">
        <button
          type="button"
          onClick={() => handleLanguageToggle('fr')}
          className={`px-4 py-2 transition ${
            lang === 'fr'
              ? 'bg-white/15 text-white'
              : 'text-white/70 hover:text-white'
          }`}
          aria-pressed={lang === 'fr'}
        >
          FR
        </button>
        <button
          type="button"
          onClick={() => handleLanguageToggle('en')}
          className={`px-4 py-2 transition ${
            lang === 'en'
              ? 'bg-white/15 text-white'
              : 'text-white/70 hover:text-white'
          }`}
          aria-pressed={lang === 'en'}
        >
          EN
        </button>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center py-24 text-center sm:py-28 lg:items-start lg:text-left xl:max-w-6xl">
        <div className="flex max-w-3xl flex-col items-center space-y-6 lg:items-start">
          <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.08] text-white">
            <span className="block text-balance">{hero.headline?.line1 ?? hero.title}</span>
            <span className="block text-balance text-[#13A89E] whitespace-nowrap">
              {hero.headline?.highlight ?? hero.highlight}
            </span>
          </h1>

          <p className="max-w-2xl text-[clamp(1rem,2.2vw,1.4rem)] leading-relaxed text-white/85 line-clamp-3 md:line-clamp-2">
            {subtitleLines.map((line, index) => (
              <React.Fragment key={`${line}-${index}`}>
                {line.trim()}
                {index < subtitleLines.length - 1 && (
                  <>
                    <br className="hidden md:block" />
                    <span className="md:hidden"> </span>
                  </>
                )}
              </React.Fragment>
            ))}
          </p>

          <div className="mt-4 flex w-full max-w-sm flex-col items-center gap-3 sm:max-w-none lg:items-start">
            <a href={hero.cta.href} className="btn-primary hero-cta w-full sm:w-auto">
              {hero.cta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="text-[0.9rem] font-medium text-white/70 transition hover:text-white"
            >
              {hero.secondaryCta.label}
            </a>
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

  const problemIcons = [Repeat, CalendarClock, ShieldAlert, Link2];
  const cards = t.sections.problem.cards.map((card, index) => ({
    ...card,
    icon: problemIcons[index] ?? MessageSquare
  }));

  return (
    <section
      id="automations"
      ref={sectionRef}
      className="relative overflow-hidden pt-[100px] pb-20 lg:pb-[100px]"
      style={{
        backgroundImage:
          'linear-gradient(to top left, rgba(228, 238, 255, 0.6), rgba(230, 250, 255, 0.6) 55%, rgba(255, 255, 255, 0.6))'
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto flex max-w-3xl flex-col text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className="text-4xl font-semibold text-[#121C2D] md:text-5xl"
            dangerouslySetInnerHTML={{ __html: t.sections.problem.heading }}
          />
          {t.sections.problem.subheading && (
            <p className="mt-4 text-base text-[#475467]">
              {t.sections.problem.subheading}
            </p>
          )}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-all duration-300 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } hover:-translate-y-1 hover:scale-[1.015] hover:shadow-xl`}
              style={{ transitionDelay: isVisible ? '0ms' : `${index * 120}ms` }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#139E9C]/10 text-[#139E9C] transition-transform duration-300 group-hover:scale-110">
                <card.icon className="h-7 w-7" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#121C2D]">{card.title}</h3>
                <p className="text-base leading-relaxed text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Proof Lab Component
const ProofLab = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const enableVisibility = () => setIsVisible(true);

    if (window.innerWidth < 768) {
      enableVisibility();
      return;
    }

    if (!('IntersectionObserver' in window)) {
      enableVisibility();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enableVisibility();
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, []);

  const placeholderIcons = [FlaskConical, ShieldCheck, LayoutDashboard, CalendarCheck, Video, Headset];
  const formatHighlight = (value: string) =>
    value.replace(/<highlight>(.*?)<\/highlight>/g, '<span class="text-[#139E9C] font-semibold">$1</span>');

  const headingHtml = formatHighlight(t.proofLab.title);
  const cards = t.proofLab.cards.map((card, index) => ({
    ...card,
    icon: placeholderIcons[index] ?? FlaskConical
  }));

  return (
    <section
      ref={sectionRef}
      id="proof-lab"
      className="relative overflow-hidden bg-section-gradient-bottom py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(34,128,255,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_20%_100%,rgba(19,158,156,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className="text-balance text-3xl font-semibold text-[#121C2D] md:text-4xl"
            dangerouslySetInnerHTML={{ __html: headingHtml }}
          />
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{t.proofLab.subtitle}</p>
        </div>

        <div
          className={`mt-14 grid grid-cols-1 gap-6 transition-all duration-1000 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {cards.map((card, index) => {
            const CardIcon = card.icon;
            const hasImage = card.image && typeof card.image === 'object' && 'src' in card.image;
            const backgroundTone = index % 2 === 0 ? 'bg-white' : 'bg-[#F8FBFB]';

            return (
              <article
                key={card.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/60 shadow-[0_18px_45px_rgba(18,28,45,0.08)] transition-all duration-500 ease-out ${
                  backgroundTone
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:-translate-y-[2px] hover:opacity-95 hover:shadow-[0_24px_60px_rgba(18,28,45,0.18)]`}
                style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  {hasImage && card.image ? (
                    <img
                      src={card.image.src}
                      alt={card.image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#139E9C] via-[#0F6C8C] to-[#121C2D] transition-all duration-500 group-hover:brightness-110">
                      <CardIcon className="h-10 w-10 text-white/85" />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-4 px-6 pb-7 pt-6 md:px-7 md:pt-7">
                  <h3 className="text-[19px] font-semibold text-[#121C2D]">{card.title}</h3>
                  <p
                    className="text-[15px] leading-6 text-slate-700"
                    dangerouslySetInnerHTML={{ __html: formatHighlight(card.desc) }}
                  />
                  <p className="text-[13px] font-medium text-slate-500">{card.status}</p>

                  {card.badges?.length ? (
                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
                      {card.badges.map((badge: string) => (
                        <span
                          key={badge}
                          className="inline-flex items-center rounded-full border border-[#139E9C]/20 bg-white/80 px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-[#139E9C]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
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

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="card-light relative flex h-full flex-col rounded-3xl border border-gray-100 bg-white/90 p-6 md:p-8 shadow-sm transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.015] hover:shadow-xl"
            >
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
  const newsletterHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
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
            <a
              href={
                t.checklist.href.startsWith('/fr') || t.checklist.href.startsWith('/en')
                  ? t.checklist.href
                  : newsletterHref
              }
              className="btn-primary px-8 py-4"
            >
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

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Header />
        <Hero />
        <PartnerBar />
        <ProblemSection />
        <ProofLab />
        <MiniAuditCTA />
        <OfferCards />
      <ROIMath />
      <Checklist />
      <ProofSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
export default App;