import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import {
  MessageSquare,
  Clock3,
  CheckCircle,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  FileWarning,
  DollarSign,
  UserX,
  Shield,
  Zap,
  CalendarCheck,
  Star,
  CheckCircle2
} from 'lucide-react';
import { Header, Footer } from './components/Layout';
import PartnerBar from './components/PartnerBar';
import FinalCTA from './components/FinalCTA';
import MiniAuditCTA from './components/MiniAuditCTA';
import FAQ from './components/FAQ';

// Hero Component
const Hero = () => {
  const { t } = useLanguage();
  const taglineParts = t.hero.tagline.includes('•')
    ? t.hero.tagline.split('•').map(part => part.trim()).filter(Boolean)
    : [t.hero.tagline];
  const ctaHref = t.hero.ctaHref ?? 'https://cal.com/simonparis/diagnostic';

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#0E1824] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_60%_10%,#0F2235_0%,#0E1824_70%,#0B1420_100%)] opacity-95" />
      <div className="relative z-10 w-full max-w-[1100px] px-6 text-center md:text-left">
        <div className="mx-auto flex max-w-[700px] flex-col items-center pb-16 text-center md:items-start md:pb-24 md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 md:justify-start">
            {taglineParts.map((part, index) => (
              <React.Fragment key={`${part}-${index}`}>
                {index > 0 && <span className="text-white/30">•</span>}
                <span>{part}</span>
              </React.Fragment>
            ))}
          </div>

          <h1 className="mt-8 text-[clamp(2rem,6vw,4.25rem)] font-semibold leading-[1.1] tracking-tight text-balance">
            {t.hero.h1}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80 text-balance md:text-xl">
            {t.hero.sub}
          </p>

          <a href={ctaHref} className="btn-primary mt-8">
            {t.hero.cta}
          </a>
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

  const iconMap = [UserX, Clock, DollarSign, FileWarning];
  const problems = t.pain.cards.map((p, i) => ({
    ...p,
    icon: iconMap[i] ?? UserX
  }));

  return (
    <section
      id="automations"
      ref={sectionRef}
      className="bg-white py-24 md:py-28 text-[#0E1824]"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div
          className={`flex flex-col gap-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-extrabold md:text-4xl">{t.pain.title}</h2>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 gap-6 transition-all duration-1000 sm:grid-cols-2 md:grid-cols-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#139E9C]/10 text-[#139E9C]">
                <problem.icon className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{problem.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{problem.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={`mt-12 text-base text-gray-600 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t.pain.sub}
        </p>
      </div>
    </section>
  );
};

// Growth Engine Component
const GrowthEngine = () => {
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

  const solutionCards = t.solution.cards.map((card, i) => ({
    ...card,
    icon: [MessageSquare, Clock3, ShieldCheck][i]
  }));

  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(1200px_600px_at_50%_0%,#11283A_0%,#0E1824_90%)] py-28 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-extrabold md:text-4xl">{t.solution.title}</h2>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 gap-8 transition-all duration-1000 sm:grid-cols-2 md:grid-cols-3 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {solutionCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 p-10 text-left shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur-xl transition-transform hover:scale-[1.02]"
            >
              <card.icon className="h-10 w-10 text-[#139E9C]" />
              <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-base text-gray-200">{card.body}</p>
            </div>
          ))}
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
            className="btn-primary"
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
      <a href={newsletterHref} className="btn-primary w-full">
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
        <MiniAuditCTA />
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