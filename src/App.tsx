import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import { 
  Globe, Menu, X, Send, Calendar, ArrowRight, Sparkles, 
  Users, Clock, Star, Shield, CheckCircle, Zap, Target, Award,
  ChevronDown, ChevronUp, MessageSquare, TrendingUp, AlertTriangle,
  Mail, MapPin
} from 'lucide-react';

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div
                className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {t.header.brand}
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                className={`flex items-center text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              >
                <Globe className="w-4 h-4 mr-2" />
                <span>{t.header.languageToggle}</span>
              </button>
              <a
                href={`mailto:${t.header.email}`}
                className={`transition-colors duration-300 font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-[#2280FF]`}
              >
                {t.header.email}
              </a>
              <button className="btn-primary text-sm px-6 py-3">
                {t.header.bookDemo}
              </button>
            </div>

            <button
              className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
             onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <div className="space-y-6">
              <a
                href={`mailto:${t.header.email}`}
                className="block text-gray-900 hover:text-[#2280FF] font-medium"
              >
                {t.header.email}
              </a>
              <button
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                className="flex items-center text-gray-600 w-full justify-center"
              >
                <Globe className="w-4 h-4 mr-2" />
                <span>{t.header.languageToggle}</span>
              </button>
              <button className="btn-primary w-full">
                {t.header.bookDemo}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#121C2D' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center card-glass rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-[#2280FF]" />
            <span className="text-sm font-medium text-white">{t.hero.tagline}</span>
          </div>
          
          <h1 className="text-hero text-white mb-6">
            {t.hero.heading}
            <span className="text-[#2ED3CF]">{t.hero.highlight}</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-4 max-w-2xl mx-auto">
            {t.hero.sub1}
          </p>
          
          <p className="text-subhead max-w-3xl mx-auto mb-12 text-gray-300">
            {t.hero.sub2}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-primary text-xl px-10 py-5 group">
              <Calendar className="w-6 h-6 mr-3" />
              {t.hero.bookDemo}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
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
    <section className="py-12 border-t border-[#E0E0E0]" style={{ background: '#F9FAFB' }}>
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
    icon: [MessageSquare, Clock, Star, AlertTriangle][i]
  }));

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden border-t border-[#E0E0E0]" style={{ background: '#FFFFFF' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display text-gray-900 mb-6">
            {t.problems.heading}
            <span className="text-[#2ED3CF]">{t.problems.highlight}</span>
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-gray-600">
            {t.problems.subheading}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`card-light p-6 text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2280FF]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-[#2280FF]" />
              </div>
              
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                {problem.description}
              </p>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2280FF]/10 border border-[#2280FF]/20">
                <span className="text-[#2280FF] text-xs font-medium">{problem.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Component
const HowItWorks = () => {
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

  const steps = t.howItWorks.steps.map((s, i) => ({
    ...s,
    icon: [TrendingUp, Shield, Zap][i]
  }));

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden border-t border-[#E0E0E0]" style={{ background: '#F9FAFB' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display text-gray-900 mb-6">
            {t.howItWorks.heading}
            <span className="text-[#2ED3CF]">{t.howItWorks.highlight}</span>
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-gray-600">
            {t.howItWorks.subheading}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative card-light p-8 text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="step-badge mx-auto mb-6">
                {step.number}
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#2280FF] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-[#2280FF]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
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

  const services = t.services.list.map((s, i) => ({
    ...s,
    icon: [Users, Clock, Star, Shield][i]
  }));

  const benefits = t.services.benefits.map((b, i) => ({
    ...b,
    icon: [CheckCircle, Target, Zap][i]
  }));

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden border-t border-[#E0E0E0]" style={{ background: '#FFFFFF' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center card-glass rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 mr-2 text-[#2280FF]" />
            <span className="text-sm font-medium text-gray-900">{t.services.tagline}</span>
          </div>
          <h2 className="text-display text-gray-900 mb-6">
            {t.services.heading}
            <span className="text-[#2ED3CF]">{t.services.highlight}</span>
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-gray-600">
            {t.services.subheading}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card-light p-6 group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2280FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-[#2280FF]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card-light p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
                {t.services.whyTitle}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-[#2280FF] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <button className="btn-primary px-10 py-4">
                  {t.services.startJourney}
                </button>
                
                <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                  {t.services.whyParagraph}
                </p>
              </div>
            </div>
          </div>
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

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden border-t border-[#E0E0E0]" style={{ background: '#F9FAFB' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display text-gray-900 mb-6">
            {t.proof.heading}
            <span className="text-[#2ED3CF]">{t.proof.highlight}</span>
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-gray-600">
            {t.proof.subheading}
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card-light p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 rounded-2xl bg-[#2280FF] flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.proof.calloutHeading}
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.proof.calloutText}
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {t.proof.items.map((label, i) => (
                  <div key={`stat-${i}`} className="text-center">
                    <div className="text-3xl font-bold text-[#2280FF] mb-2">{['100%', '24/7', 'EN/FR'][i]}</div>
                    <div className="text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
              
              <button className="btn-primary px-8 py-4">
                {t.proof.button}
              </button>
            </div>
          </div>
        </div>
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
    <section ref={sectionRef} className="relative py-12 lg:py-20 overflow-hidden border-t border-[#E0E0E0]" style={{ background: '#FFFFFF' }}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display text-gray-900 mb-6">
            {t.faq.heading}
            <span className="text-[#2ED3CF]">{t.faq.highlight}</span>
          </h2>
          <p className="text-subhead text-gray-600">
            {t.faq.subheading}
          </p>
        </div>
        
        <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {faqs.map((faq, index) => (
            <div key={index} className="card-light overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-[#2280FF] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#2280FF] flex-shrink-0" />
                )}
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    painPoint: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);
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

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const checkVisibility = () => {
      const rect = hero.getBoundingClientRect();
      const visible = rect.bottom > 0 && rect.top < window.innerHeight;
      setHeroVisible(visible);
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <section ref={sectionRef} className="relative py-20 overflow-hidden border-t border-[#E0E0E0]" style={{ background: '#F9FAFB' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center card-glass rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-[#2280FF]" />
                <span className="text-sm font-medium text-gray-900">{t.finalCTA.tagline}</span>
              </div>
              <h2 className="text-display text-gray-900 mb-6">
                {t.finalCTA.heading}
                <span className="text-[#2ED3CF]">{t.finalCTA.highlight}</span>
              </h2>
              <p className="text-subhead text-gray-600">
                {t.finalCTA.subheading}
              </p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-[#2280FF]/10 text-[#2280FF] text-sm font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                Bill 96 &amp; Law 25 Compliant – EN/FR Built-In
              </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="card-light p-8 lg:p-12 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                      {t.finalCTA.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-400/20 focus:border-teal-400 transition-all duration-300 text-lg text-gray-900"
                      placeholder={t.finalCTA.namePlaceholder}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                      {t.finalCTA.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2280FF]/20 focus:border-[#2280FF] transition-all duration-300 text-lg text-gray-900"
                      placeholder={t.finalCTA.emailPlaceholder}
                    />
                  </div>
                </div>
                
                <div>
                    <label htmlFor="businessType" className="block text-sm font-semibold text-gray-900 mb-3">
                      {t.finalCTA.businessLabel}
                    </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2280FF]/20 focus:border-[#2280FF] transition-all duration-300 text-lg text-gray-900"
                  >
                    {t.finalCTA.businessOptions.map((o, i) => (
                      <option key={i} value={['', 'clinic', 'wellness', 'trades', 'other'][i]}>{o}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                    <label htmlFor="painPoint" className="block text-sm font-semibold text-gray-900 mb-3">
                      {t.finalCTA.painLabel}
                    </label>
                  <textarea
                    id="painPoint"
                    name="painPoint"
                    rows={4}
                    value={formData.painPoint}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2280FF]/20 focus:border-[#2280FF] transition-all duration-300 text-lg resize-none text-gray-900"
                    placeholder={t.finalCTA.painPlaceholder}
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full btn-primary text-xl py-6 group"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    {t.finalCTA.submit}
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-600 text-center">
                <p className="text-gray-600 mb-4 text-lg">{t.finalCTA.or}</p>
                <a
                  href={`mailto:${t.header.email}`}
                  className="inline-flex items-center font-semibold text-lg group transition-colors duration-300 text-[#2280FF] hover:text-[#2ED3CF]"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  {t.header.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA for mobile */}
      <div className={`sticky-cta md:hidden ${heroVisible ? 'hidden' : 'block'}`}>
        <button className="btn-primary w-full text-lg py-4">
          {t.finalCTA.sticky}
        </button>
      </div>
    </>
  );
};

// Footer Component
const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative py-16 border-t border-[#E0E0E0]" style={{ background: '#121C2D' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              {t.header.brand}
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.footer.blurb}
            </p>
            <div className="flex items-center text-gray-400">
              <Globe className="w-4 h-4 mr-2" />
              <span>{t.footer.language}</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-gray-400">
              {t.footer.servicesList.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.footer.contact}</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${t.header.email}`}
                className="flex items-center text-gray-400 hover:text-[#2280FF] transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t.header.email}
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                {t.footer.location}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t.footer.copyright}
            </p>
            <p className="text-gray-400 text-sm">
              {t.footer.curiosity}
            </p>
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
      <HowItWorks />
      <Services />
      <ProofSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;