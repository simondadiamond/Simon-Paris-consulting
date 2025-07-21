import React, { useState, useEffect, useRef } from 'react';
import { Send, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    painPoint: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [heroInView, setHeroInView] = useState(true);

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
    const heroElement = document.getElementById('hero');
    if (!heroElement) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0 }
    );

    heroObserver.observe(heroElement);
    return () => heroObserver.disconnect();
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
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center card-glass rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 mr-2" style={{ color: '#2280FF' }} />
              <span className="text-sm font-medium text-white">Ready to Transform Your Business?</span>
            </div>
            <h2 className="text-display text-white mb-6">
              Ready to Stop Losing Business and 
              <span style={{ color: '#2ED3CF' }}> Sleep Easy on Compliance</span>?
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
      <div className={`sticky-cta ${heroInView ? 'hidden' : ''}`}>
        <button className="btn-primary w-full text-lg py-4">
          Book Free Demo
        </button>
      </div>
    </>
  );
};

export default FinalCTA;