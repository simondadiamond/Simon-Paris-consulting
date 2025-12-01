import React from 'react';
import { useLanguage } from '../LanguageProvider';

const FinalCTA: React.FC = () => {
  const { t, lang } = useLanguage();
  const fallbackHref = lang === 'fr' ? '/fr/newsletter' : '/en/newsletter';
  const ctaHref = t.finalcta?.href ?? fallbackHref;
  const privacyLabel = lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy';

    return (
    <section className="relative overflow-hidden bg-[#0B1320] bg-gradient-to-tl from-[#139E9C]/35 via-[#0B1320] to-[#0B1320] text-white">
      {/* 1. REMOVED THE "BLOBS" DIV BLOCK HERE. 
         Now the section uses ONLY the clean gradient above.
      */}

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-24 lg:pb-16 lg:pt-28">
        <div className="mx-auto flex justify-center">
          <div className="mini-audit-card group relative w-full max-w-4xl overflow-hidden text-white">
            {/* KEEPING THE CARD GRADIENTS YOU LIKE */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,128,255,0.18),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(19,158,156,0.22),transparent_65%)]" />
              <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#139E9C]/25 blur-[160px]" />
            </div>

            <div className="relative mx-auto flex flex-col items-center gap-5 px-7 py-10 text-center sm:px-9 sm:py-12 lg:max-w-4xl lg:px-12 lg:py-14">
              {/* UPDATED TITLE DIRECTLY */}
              <h2 className="text-2xl font-semibold text-[#F4F6F8] md:text-3xl">
                Need a Senior Automation Architect?
              </h2>

              <p className="max-w-3xl text-base leading-relaxed text-[#C7D0D8] sm:text-lg">{t.cta.audit.subtitle}</p>

              <div className="flex flex-col items-center">
                <a href={t.cta.audit.ctaHref} className="btn-primary btn-primary--audit">
                  View Profile on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-14">
          <div className="flex w-full flex-col gap-4 rounded-2xl px-6 py-8 text-center sm:gap-4 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10 md:rounded-[18px] md:px-10 md:py-8 md:text-left">
            <div className="w-full space-y-2 text-center md:max-w-3xl md:text-left">
              <h2 className="text-balance text-[clamp(1.4rem,2vw,1.85rem)] font-semibold leading-tight text-white md:leading-snug">
                Written By Robots
              </h2>
              <p className="text-balance text-base leading-relaxed text-white/75 lg:text-[15px]">
                A weekly digest on AI Operations and technical architecture. Researched by agents, drafted by LLMs, and engineered by Simon Paris.
              </p>
            </div>

            <div className="flex w-full justify-center md:w-auto md:justify-end">
              <a href={ctaHref} className="btn-ghost-dark border border-white/20 bg-transparent px-6 py-2 text-sm text-white hover:bg-white/10">
                Subscribe for Insights
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-sm text-white/70 sm:flex-row sm:justify-between">
          <span className="text-center sm:text-left">© 2024 Simon Paris</span>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a href="/privacy" className="transition hover:text-white">
              {privacyLabel}
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <a
                href="/fr"
                className={`transition hover:text-white ${lang === 'fr' ? 'text-white' : 'text-white/70'}`}
              >
                FR
              </a>
              <span className="text-white/40">|</span>
              <a
                href="/en"
                className={`transition hover:text-white ${lang === 'en' ? 'text-white' : 'text-white/70'}`}
              >
                EN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
