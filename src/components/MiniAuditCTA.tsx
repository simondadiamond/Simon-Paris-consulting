import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

const MiniAuditCTA: React.FC = () => {
  const { t } = useLanguage();
  const bullets: string[] = t.audit.bullets;
  const ctaHref = t.hero.ctaHref ?? 'https://cal.com/simonparis/diagnostic';

  return (
    <section className="relative -mt-16 bg-[radial-gradient(1000px_600px_at_50%_0%,#0C2430_0%,#0B1624_100%)] py-24 md:py-28 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#0F1E2C]/80 p-12 text-center shadow-[0_25px_80px_rgba(19,158,156,0.25)] ring-1 ring-white/10 backdrop-blur-2xl before:absolute before:inset-0 before:rounded-3xl before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] before:content-[''] md:p-16">
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold md:text-3xl">{t.audit.title}</h2>

            <ul className="mx-auto mt-8 max-w-lg space-y-4 text-left text-white/90">
              {bullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#139E9C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#7cdedc]">
              {t.audit.timeline}
            </p>

            <a href={ctaHref} className="btn-primary mt-10">
              {t.audit.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniAuditCTA;
