import React from 'react';
import { useLanguage } from '../LanguageProvider';

const PartnerBar: React.FC = () => {
  const { t } = useLanguage();

  const stack = ['n8n', 'OpenAI', 'Supabase', 'JavaScript', 'REST APIs', 'Airtable', 'C#'];

  return (
    <section className="bg-gradient-to-tr from-[#139E9C]/10 via-[#0B1320] to-[#0B1320] py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
          {t.partners.title}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-200 shadow-[0_1px_12px_rgba(0,0,0,0.15)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBar;

