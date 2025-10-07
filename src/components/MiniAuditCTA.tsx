import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

const MiniAuditCTA: React.FC = () => {
  const { t } = useLanguage();
  const bullets: string[] = t.cta.audit.bullets;

  return (
    <section className="relative bg-gradient-mini-audit py-24 lg:py-32">
      <div className="mx-auto flex w-full justify-center px-4 sm:px-6 lg:px-8">
        <div className="mini-audit-card group relative w-full max-w-[1100px] overflow-hidden text-white lg:w-4/5">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,128,255,0.18),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(19,158,156,0.22),transparent_65%)]" />
            <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#139E9C]/25 blur-[160px]" />
          </div>

          <div className="relative mx-auto flex flex-col items-center gap-10 px-8 py-12 text-center sm:px-10 sm:py-14 lg:max-w-4xl lg:px-16 lg:py-16">
            <h2 className="text-[clamp(1.75rem,3.8vw,2.75rem)] font-semibold leading-tight text-[#F4F6F8]">
              {t.cta.audit.title}
            </h2>

            <ul className="flex w-full flex-col gap-4 text-left text-base leading-relaxed text-[#C7D0D8] sm:text-lg">
              {bullets.map((item, index) => (
                <li
                  key={index}
                  className="mini-audit-list-item flex items-start gap-3"
                  style={{ animationDelay: `${index * 0.1 + 0.15}s` }}
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[#139E9C] drop-shadow-[0_0_12px_rgba(19,158,156,0.45)]" />
                  <span className="text-[#C7D0D8]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8AE8E6]">
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
