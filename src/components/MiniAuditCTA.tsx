import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

const MiniAuditCTA: React.FC = () => {
  const { t } = useLanguage();
  const bullets: string[] = t.cta.audit.bullets;

  return (
    <section className="relative -mt-12 py-20 lg:-mt-16 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#0F1620] p-8 sm:p-10 lg:p-12 text-white shadow-[0_40px_80px_-40px_rgba(7,13,22,0.9)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,128,255,0.2),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(19,158,156,0.28),transparent_65%)]" />
            <div className="absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#139E9C]/25 blur-[140px]" />
          </div>

          <div className="relative flex flex-col gap-8 text-center">
            <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-tight text-white">
              {t.cta.audit.title}
            </h2>

            <ul className="flex flex-col gap-4 text-left text-base text-white/85 sm:text-lg">
              {bullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[#4fd5d2]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8be9e7]">
                {t.cta.audit.timeline}
              </span>
              <a href={t.hero.cta.href} className="btn-primary">
                {t.cta.bookAudit}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniAuditCTA;
