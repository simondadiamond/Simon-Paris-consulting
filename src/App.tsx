import React, { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-xl border-b border-gray-700' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">
                Simon Paris
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center text-sm text-gray-300">
                <Globe className="w-4 h-4 mr-2" />
                <span>EN/FR</span>
              </div>
              <a 
                href="mailto:info@simonparis.ca"
                className="transition-colors duration-300 font-medium text-white hover:text-[#2280FF]"
              >
                info@simonparis.ca
              </a>
              <button className="btn-primary text-sm px-6 py-3">
                Book Demo
              </button>
            </div>

            <button 
              className="md:hidden text-white"
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
        <div className={`absolute top-0 right-0 h-full w-80 bg-gray-900 shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <div className="space-y-6">
              <a 
                href="mailto:info@simonparis.ca"
                className="block text-white hover:text-teal-400 font-medium"
              >
                info@simonparis.ca
              </a>
              <div className="flex items-center text-gray-300">
                <Globe className="w-4 h-4 mr-2" />
                <span>EN/FR</span>
              </div>
              <button className="btn-primary w-full">
                Book Demo
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#121C2D' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center card-glass rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-[#2280FF]" />
            <span className="text-sm font-medium text-white">Bilingual Automation for Québec SMBs</span>
          </div>
          
          <h1 className="text-hero text-white mb-6">
            Stop Losing Business to 
            <span className="title-highlight"> Missed Follow-ups</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-4 max-w-2xl mx-auto">
            Automation for today. AI-ready for tomorrow.
          </p>
          
          <p className="text-subhead max-w-3xl mx-auto mb-12 text-gray-300">
            Automate your follow-ups, reviews & reminders. 100% bilingual & Bill 96 compliant 
            automation for Québec clinics, trades, and wellness businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-primary text-xl px-10 py-5 group">
              <Calendar className="w-6 h-6 mr-3" />
              Book Your Free Demo
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="mailto:info@simonparis.ca"
              className="btn-outline text-lg px-8 py-4 group"
            >
              <Send className="w-5 h-5 mr-2" />
              Quick Question?
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

  const problems = [
    {
      icon: MessageSquare,
      title: "Missed Leads",
      description: "Every hour without follow-up = 60% less chance of conversion",
      impact: "Lost Revenue"
    },
    {
      icon: Clock,
      title: "No-Shows",
      description: "25% of appointments are no-shows without proper reminders",
      impact: "Wasted Time"
    },
    {
      icon: Star,
      title: "Poor Reviews",
      description: "90% of customers never leave reviews unless asked",
      impact: "Invisible Online"
    },
    {
      icon: AlertTriangle,
      title: "Bill 96 Risk",
      description: "Non-compliant communications can result in hefty fines",
      impact: "Legal Exposure"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#121C2D' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display text-white mb-6">
            The Hidden Costs of 
            <span className="title-highlight"> Manual Follow-ups</span>
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-gray-300">
            Every missed follow-up, no-show, and poor review is money walking out the door
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`card-dark p-6 text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2280FF]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-[#2280FF]" />
              </div>
              
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">
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

  const steps = [
    {
      number: "1",
      title: "Free Demo & Audit",
      description: "I'll show you exactly where you're losing money and demo your custom automation live",
      icon: TrendingUp
    },
    {
      number: "2", 
      title: "Custom Setup",
      description: "I build your bilingual automation workflows and ensure 100% Bill 96 compliance",
      icon: Shield
    },
    {
      number: "3",
      title: "Launch & Support",
      description: "Go live with your automation and get ongoing support directly from me",
      icon: Zap
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#121C2D' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display text-white mb-6">
            How It Works: 
            <span className="title-highlight"> Demo First, Pay Later</span>
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-gray-300">
            See your exact automation in action before you commit to anything
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative card-dark p-8 text-center group transition-all duration-700 ${
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
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
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

  const services = [
    {
      icon: Users,
      title: "Missed Lead Rescue",
      description: "Instantly follow up on every inquiry (web, phone, email, DM), in English and French.",
      features: ["Instant response automation", "Bilingual templates", "Multi-channel integration"],
    },
    {
      icon: Clock,
      title: "No-Show & Invoice Chaser",
      description: "Automated reminders for appointments and overdue invoices—clients pay and show up.",
      features: ["Smart reminder sequences", "Payment automation", "Appointment confirmations"],
    },
    {
      icon: Star,
      title: "Review Engine",
      description: "Request, track, and respond to reviews in both languages—boost your reputation and Google ranking.",
      features: ["Automated review requests", "Response management", "Reputation monitoring"],
    },
    {
      icon: Shield,
      title: "Bill 96 Compliance Review",
      description: "Ensure every message, reminder, and review request is 100% legal and ready for audit.",
      features: ["Legal compliance check", "Bilingual verification", "Audit-ready documentation"],
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Demo-first",
      description: "See your process automated before you commit",
    },
    {
      icon: Target,
      title: "Personal Support",
      description: "Expert support—no agency handoff",
    },
    {
      icon: Zap,
      title: "Fast ROI",
      description: "Fast setup, flat pricing, visible ROI",
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: '#121C2D' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center card-glass rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 mr-2 text-[#2280FF]" />
            <span className="text-sm font-medium text-white">Premium Automation Suite</span>
          </div>
          <h2 className="text-display text-white mb-6">
            Automations that 
            <span className="title-highlight"> Pay for Themselves</span>
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-gray-300">
            Transform your business operations with intelligent automation that works 24/7, 
            speaks both languages, and keeps you compliant.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card-dark p-6 group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2280FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-[#2280FF]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card-dark p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
                Why Work With Simon Paris?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-[#2280FF] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <button className="btn-primary px-10 py-4">
                  Start Your Automation Journey
                </button>
                
                <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                  I'm not just solving today's admin headaches—I'm helping Québec businesses get ready for the next wave of AI-driven growth.
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
    <section ref={sectionRef} className="relative py-20 overflow-hidden" style={{ background: '#121C2D' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display text-white mb-6">
            Built for 
            <span className="title-highlight"> Québec SMBs</span>
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-gray-300">
            Every automation is fully demoed before you buy. Book a live walkthrough and see how it works for your business.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card-dark p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 rounded-2xl bg-[#2280FF] flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">
                Bilingual automation, built in Québec for Québec SMBs
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Tested for Bill 96 compliance—so you can sleep easy. Real results, real stories—coming soon.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2280FF] mb-2">100%</div>
                  <div className="text-gray-300">Bill 96 Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2280FF] mb-2">24/7</div>
                  <div className="text-gray-300">Automated Follow-ups</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2280FF] mb-2">EN/FR</div>
                  <div className="text-gray-300">Fully Bilingual</div>
                </div>
              </div>
              
              <button className="btn-primary px-8 py-4">
                See Your Demo
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

  const faqs = [
    {
      question: "How quickly can you set up my automation?",
      answer: "Most setups are completed within 1-2 weeks after our demo call. I handle all the technical work while you focus on running your business."
    },
    {
      question: "Is this really Bill 96 compliant?",
      answer: "Absolutely. Every message template and automation workflow is reviewed for Bill 96 compliance. I provide documentation showing compliance for audit purposes."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "Perfect! That's exactly who this is built for. You don't need to understand the technology—just see the results. I handle all the technical setup and maintenance."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing depends on your specific needs and business size. I offer transparent, flat-rate pricing with no hidden fees. We'll discuss exact costs during your free demo."
    },
    {
      question: "Can you help us with AI adoption or strategy?",
      answer: "Absolutely. I'm always researching the latest AI tools and trends for SMBs. If you want to talk about how AI could help your business, just mention it when you book a demo."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-20 overflow-hidden" style={{ background: '#121C2D' }}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-display text-white mb-6">
            Frequently Asked 
            <span className="title-highlight"> Questions</span>
          </h2>
          <p className="text-subhead text-gray-300">
            Everything you need to know about getting started
          </p>
        </div>
        
        <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {faqs.map((faq, index) => (
            <div key={index} className="card-dark overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white pr-8">
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
                  <p className="text-gray-300 leading-relaxed">
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
      <section ref={sectionRef} className="relative py-20 overflow-hidden" style={{ background: '#121C2D' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center card-glass rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-[#2280FF]" />
              <span className="text-sm font-medium text-white">Ready to Transform Your Business?</span>
            </div>
            <h2 className="text-display text-white mb-6">
              Ready to Stop Losing Business and 
              <span className="title-highlight"> Sleep Easy on Compliance</span>?
            </h2>
            <p className="text-subhead text-gray-300">
              Get your free workflow audit and see exactly where you're losing money
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="card-dark p-8 lg:p-12 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-teal-400/20 focus:border-teal-400 transition-all duration-300 text-lg text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2280FF]/20 focus:border-[#2280FF] transition-all duration-300 text-lg text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-white mb-3">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2280FF]/20 focus:border-[#2280FF] transition-all duration-300 text-lg text-gray-900"
                  >
                    <option value="">Select your business type</option>
                    <option value="clinic">Medical/Dental Clinic</option>
                    <option value="wellness">Wellness/Spa Business</option>
                    <option value="trades">Trades/Contractor</option>
                    <option value="other">Other Service Business</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="painPoint" className="block text-sm font-semibold text-white mb-3">
                    Your Biggest Pain Point
                  </label>
                  <textarea
                    id="painPoint"
                    name="painPoint"
                    rows={4}
                    value={formData.painPoint}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#2280FF]/20 focus:border-[#2280FF] transition-all duration-300 text-lg resize-none text-gray-900"
                    placeholder="What's your biggest challenge with follow-ups, no-shows, or reviews?"
                  />
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full btn-primary text-xl py-6 group"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Your Free 15-Minute Demo
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-600 text-center">
                <p className="text-gray-300 mb-4 text-lg">Or, send a quick question to:</p>
                <a 
                  href="mailto:info@simonparis.ca"
                  className="inline-flex items-center font-semibold text-lg group transition-colors duration-300 text-[#2280FF] hover:text-[#2ED3CF]"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  info@simonparis.ca
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA for mobile */}
      <div className="sticky-cta">
        <button className="btn-primary w-full text-lg py-4">
          Book Free Demo
        </button>
      </div>
    </>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="relative py-16" style={{ background: '#0A0E14' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Simon Paris
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bilingual automation for Québec SMBs. Built for today's needs, ready for tomorrow's AI.
            </p>
            <div className="flex items-center text-gray-400">
              <Globe className="w-4 h-4 mr-2" />
              <span>Serving all of Québec • EN/FR</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lead Follow-up Automation</li>
              <li>Appointment Reminders</li>
              <li>Review Management</li>
              <li>Bill 96 Compliance</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@simonparis.ca"
                className="flex items-center text-gray-400 hover:text-[#2280FF] transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@simonparis.ca
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Québec, Canada
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Simon Paris Consulting. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Curious about the next wave of AI for SMBs? Ask Simon.
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