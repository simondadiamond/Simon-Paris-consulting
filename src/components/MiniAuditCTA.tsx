import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

const MiniAuditCTA: React.FC = () => {
  const { t } = useLanguage();
  const bullets: string[] = t.cta.audit.bullets;

  return (
    <section className="relative bg-section-gradient-bottom py-20 lg:py-28">
      <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
        <div className="mini-audit-card group relative overflow-hidden text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,128,255,0.2),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(19,158,156,0.28),transparent_65%)]" />
            <div className="absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#139E9C]/25 blur-[140px]" />
          </div>

          <div className="relative flex flex-col gap-8 px-6 py-8 text-center sm:px-8 sm:py-10 lg:px-14 lg:py-12">
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-tight text-white">
              {t.cta.audit.title}
            </h2>

            <ul className="flex flex-col gap-4 text-left text-base leading-relaxed text-white/85 sm:text-lg">
              {bullets.map((item, index) => (
                <li
                  key={index}
                  className="mini-audit-list-item flex items-start gap-3"
                  style={{ animationDelay: `${index * 0.1 + 0.15}s` }}
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[#139E9C] drop-shadow-[0_0_6px_rgba(19,158,156,0.35)]" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8be9e7]">
                {t.cta.audit.timeline}
              </span>
              <a href={t.hero.cta.href} className="btn-primary btn-primary--audit">
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
