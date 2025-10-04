import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';
import type { Translation } from '../i18n';

interface ButtonProps {
  href: string;
  variant?: 'teal';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, variant = 'teal', children }) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses =
    variant === 'teal'
      ? 'bg-[#139E9C] text-white hover:bg-[#118C89] focus:ring-[#139E9C] focus:ring-offset-white'
      : '';

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </a>
  );
};

const getNestedTranslation = (translation: Translation, key: string): string => {
  const value = key.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, translation);

  return typeof value === 'string' ? value : '';
};

const FAQ: React.FC = () => {
  const { t: translation } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const t = useCallback((key: string) => getNestedTranslation(translation, key), [translation]);

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

  const faqItems = useMemo(
    () => [
      { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
      { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
      { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
      { question: t('faq.q4.question'), answer: t('faq.q4.answer') },
      { question: t('faq.q5.question'), answer: t('faq.q5.answer') },
      { question: t('faq.q6.question'), answer: t('faq.q6.answer') }
    ],
    [t]
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">{t('faq.title')}</h2>
        </div>

        <div
          className={`space-y-8 transition-all duration-700 delay-150 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-white/60 bg-white shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="pr-8 text-base font-semibold text-gray-900 md:text-lg">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-6 w-6 text-[#2280FF]" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-[#2280FF]" />
                  )}
                </button>

                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-base leading-relaxed text-gray-700 md:text-lg">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-12 flex flex-col items-center transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="mt-8 text-center text-sm opacity-80">{t('faq.cta.text')}</p>
          <div className="mt-4">
            <Button href="/diagnostic" variant="teal">
              {t('faq.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
