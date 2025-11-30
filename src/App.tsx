import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import {
  CheckCircle,
  ShieldCheck,
  LayoutDashboard,
  CalendarCheck,
  Video,
  Headset,
  Shield,
  FlaskConical
} from 'lucide-react';
import { Header } from './components/Layout';
import PartnerBar from './components/PartnerBar';
import FinalCTA from './components/FinalCTA';

const gradientTopLeft = 'linear-gradient(to top left, #ebf3fb, #effbfa 55%, #fff)';

// Hero Component
const Hero = () => {
  const { t } = useLanguage();
  const hero = t.hero;
  const subtitleLines = hero.subtitle.split('\n');

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1320] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(34,128,255,0.2),rgba(11,19,32,0)_60%),radial-gradient(120%_120%_at_85%_15%,rgba(19,158,156,0.25),rgba(11,19,32,0)_65%)] opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_50%)] mix-blend-screen" />
        <div className="absolute -left-24 top-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[#2280FF]/18 blur-[140px]" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[#139E9C]/16 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[60rem] px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="hero-headline text-balance font-semibold leading-[1.12] tracking-tight text-white">
            <span className="block">{hero.headline}</span>
          </h1>

          <p className="mt-[1em] text-balance text-[clamp(1rem,2.2vw,1.4rem)] leading-[1.5] text-[rgba(255,255,255,0.85)]">
            {subtitleLines.map((line, index) => (
              <span key={`hero-sub-${index}`} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="mt-[1.5em] flex w-full max-w-xs flex-col items-center gap-3 sm:max-w-sm">
            <a href={hero.cta.href} className="btn-primary hero-cta w-full max-w-xs sm:max-w-none sm:w-auto">
              {hero.cta.label}
            </a>
          </div>
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
    value
      .replace(/<highlight>(.*?)<\/highlight>/g, '<span class="text-[#139E9C] font-semibold">$1</span>')
      .replace(/<mark>(.*?)<\/mark>/g, '<span class="text-[#139E9C] font-semibold">$1</span>');

  const headingHtml = formatHighlight(t.proofLab.title);
  const cards = t.proofLab.cards.map((card, index) => ({
    ...card,
    icon: placeholderIcons[index] ?? FlaskConical
  }));

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-bl from-[#139E9C]/15 via-[#0B1320] to-[#0B1320]"
    >

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className="text-balance text-3xl font-bold text-white md:text-4xl"
            dangerouslySetInnerHTML={{ __html: headingHtml }}
          />
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">{t.proofLab.subtitle}</p>
        </div>

        <div
          className={`mt-14 grid grid-cols-1 gap-6 transition-all duration-1000 sm:grid-cols-2 sm:gap-8 lg:grid-cols-2 lg:gap-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {cards.map((card, index) => {
            const CardIcon = card.icon;
            const hasImage = card.image && typeof card.image === 'object' && 'src' in card.image;
            return (
              <article
                key={card.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-[0_18px_45px_rgba(6,10,25,0.45)] transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } hover:-translate-y-[2px] hover:border-white/20 hover:bg-slate-900/70 hover:opacity-95 hover:shadow-[0_24px_60px_rgba(10,20,45,0.6)]`}
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
                  <h3 className="text-[19px] font-semibold text-white">{card.title}</h3>
                  <p className="text-[15px] leading-6 text-gray-300">
                    <span className="text-[#139E9C] font-semibold">{card.highlight}</span>
                    {` ${card.description}`}
                  </p>
                  <p className="text-[13px] font-medium text-gray-400">{card.footer}</p>
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{ backgroundImage: gradientTopLeft }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2
          className={`section-heading text-gray-900 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--off-white)' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            className="section-heading text-gray-900 mb-6"
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Checklist = () => {
  const { t, lang } = useLanguage();
  const newsletterHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden" style={{ backgroundColor: 'var(--off-white)' }}>
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
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--off-white)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-heading text-gray-900 mb-6">{t.proof.title}</h2>
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

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PartnerBar />
      <ProofLab />
      {/* <OfferCards /> */}
      {/* <ROIMath /> */}
      {/* <Checklist /> */}
      {/* <ProofSection /> */}
      <FinalCTA />
    </div>
  );
}
export default App;
