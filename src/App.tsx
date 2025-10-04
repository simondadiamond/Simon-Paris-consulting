import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import {
  MessageSquare,
  CalendarX,
  Receipt,
  Shield,
  CheckCircle,
  Zap,
  CalendarCheck,
  Star,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';
import { Header, Footer } from './components/Layout';
import PartnerBar from './components/PartnerBar';

// Hero Component
const Hero = () => {
  const { t } = useLanguage();
  const hero = t.hero;
  const cardBullets = [
    hero.card.bullet1,
    hero.card.bullet2,
    hero.card.bullet3,
    hero.card.bullet4
  ];
  const ctaClasses =
    'inline-flex h-12 items-center justify-center rounded-xl bg-[#139E9C] px-6 font-semibold text-white shadow-md transition hover:bg-[#118C89] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#139E9C]/40';

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#0B1320] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#2280FF]/15 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[#139E9C]/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(19,158,156,0.06),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-28 sm:pb-24 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-16">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm font-medium text-white/70">{hero.tagline}</p>

              <h1 className="text-[clamp(28px,6vw,56px)] font-semibold leading-[1.05] tracking-tight">
                <span className="block">{hero.headline.line1}</span>
                <span className="block text-[#139E9C]">{hero.headline.line2}</span>
                <span className="block">{hero.headline.line3}</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{hero.subtext}</p>
            </div>

            <a href={hero.cta.href} className={`${ctaClasses} w-full sm:w-auto`}>
              {hero.cta.text}
            </a>
          </div>

          <div className="relative lg:ml-auto">
            <div className="absolute -top-6 -right-6 hidden h-24 w-24 rounded-full bg-[#2280FF]/15 blur-3xl lg:block" />
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8 lg:mt-0 lg:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#139E9C]/10" />
              <div className="relative space-y-6">
                <h2 className="text-lg font-semibold text-white">{hero.card.title}</h2>
                <ul className="space-y-4 md:space-y-5">
                  {cardBullets.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/90 md:text-base">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#139E9C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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

// Final CTA Component
const FinalCTA = () => {
  const { t, lang } = useLanguage();
  const base = lang === 'fr' ? '/fr' : '';
  const resolveHref = (path: string) =>
    path.startsWith('/fr') || path.startsWith('/en') ? path : `${base}${path}`;

  return (
    <section className="relative py-16 bg-[#121C2D] text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">{t.finalCTA.title}</h2>
        <p className="text-lg text-white/80 mb-8">{t.finalCTA.sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={resolveHref(t.finalCTA.primaryHref)} className="btn-primary px-8 py-4">
            {t.finalCTA.primary}
          </a>
          <a href={resolveHref(t.finalCTA.secondaryHref)} className="btn-outline text-lg px-8 py-4">
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
  const newsletterHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  return (
    <div className="sticky-cta md:hidden">
      <a href={newsletterHref} className="btn-primary w-full text-lg py-4">
        {t.stickyCta}
      </a>
    </div>
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
export default App;