import React, { useEffect, useMemo, useState } from 'react';

const POST_URL =
  'https://c454d84b.sibforms.com/serve/MUIFAH7NOSykJlqeKP4c-jXRt7b-0MCgSB0R8BROAkZEQAbRZUO09B2nZUBGX-BfJqMMUURc1KBYeqGz7QduVv9MMy4fEEABw-5k98uGvJ18IAljU5oid79WFyl5-fBS2v5Ng8XlZEx7u7IZ9Dp6gCdZaTRY9trZH1U_GfpFHWxUpo0yvGpQR3DlmKDky65MJJvyhZoT0t1GbEkE';
const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

const copy = {
  fr: {
    heading: 'Infolettre PME Québec',
    intro:
      'Recevez des tactiques concrètes d\'automatisation et d\'IA pour les PME québécoises. Un courriel 2x par mois, sans spam.',
    emailLabel: 'Adresse courriel',
    emailPlaceholder: 'nom@entreprise.com',
    consentLabel:
      "J'accepte de recevoir des communications de The Automated SMB et je peux me désabonner en tout temps.",
    submit: "Je m'inscris",
    consentNote: 'Nous respectons la Loi 25 et la Loi anti-pourriel (LCAP).',
    successTitle: 'Merci! Votre inscription est confirmée.',
    successBody: 'Vérifiez vos courriels pour le message de bienvenue.',
    errorTitle: "Oups! Une erreur est survenue.",
    errorBody: 'Veuillez réessayer ou nous écrire à hello@simonparis.ca.',
    toggleLabel: 'Version anglaise',
    toggleHref: '/en/newsletter'
  },
  en: {
    heading: 'Québec SMB AI Newsletter',
    intro:
      'Get bilingual automation playbooks for Québec SMEs. Twice-monthly insights—actionable, no fluff.',
    emailLabel: 'Email address',
    emailPlaceholder: 'name@company.com',
    consentLabel:
      'I agree to receive communications from The Automated SMB and understand I can unsubscribe anytime.',
    submit: 'Subscribe now',
    consentNote: 'Fully compliant with Law 25 and Canada\'s Anti-Spam Legislation.',
    successTitle: 'Thanks! You are on the list.',
    successBody: 'Check your inbox for the welcome email.',
    errorTitle: 'Oops! Something went wrong.',
    errorBody: 'Please try again or email hello@simonparis.ca.',
    toggleLabel: 'Version française',
    toggleHref: '/fr/newsletter'
  }
} as const;

export type SignupFormLang = keyof typeof copy;

interface SignupFormProps {
  lang: SignupFormLang;
}

const ensureHeadLink = (selector: string, create: () => HTMLLinkElement) => {
  let link = document.head.querySelector<HTMLLinkElement>(selector);
  if (!link) {
    link = create();
    document.head.appendChild(link);
  }
  return link;
};

const ensureHeadScript = (selector: string, create: () => HTMLScriptElement) => {
  let script = document.head.querySelector<HTMLScriptElement>(selector);
  if (!script) {
    script = create();
    document.head.appendChild(script);
  }
  return script;
};

export const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  const t = copy[lang];
  const [sourceUrl, setSourceUrl] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setSourceUrl(window.location.href);
  }, []);

  const localeValue = useMemo(() => lang, [lang]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    ensureHeadLink("link[data-brevo='styles']", () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://sibforms.com/forms/end-form/build/sib-styles.css';
      link.dataset.brevo = 'styles';
      return link;
    });

    ensureHeadScript("script[data-brevo='main']", () => {
      const script = document.createElement('script');
      script.src = 'https://sibforms.com/forms/end-form/build/main.js';
      script.defer = true;
      script.dataset.brevo = 'main';
      return script;
    });
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const selector = "script[data-recaptcha='loader']";
    const existing = document.head.querySelector<HTMLScriptElement>(selector);
    const scriptSrc = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&hl=${lang}`;

    if (existing) {
      if (existing.src !== scriptSrc) {
        existing.remove();
      } else {
        return;
      }
    }

    ensureHeadScript(selector, () => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.defer = true;
      script.dataset.recaptcha = 'loader';
      return script;
    });
  }, [lang]);

  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-slate-200">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-[#2280FF]/80 font-semibold">The Automated SMB</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#121C2D]">{t.heading}</h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">{t.intro}</p>
        </div>
        <a
          href={t.toggleHref}
          className="self-center md:self-start inline-flex items-center px-4 py-2 rounded-full border border-[#2280FF] text-[#2280FF] font-medium hover:bg-[#2280FF]/10 transition"
        >
          {t.toggleLabel}
        </a>
      </div>

      <form
        method="POST"
        action={POST_URL}
        className="space-y-6"
        noValidate
      >
        <div className="space-y-2">
          <label htmlFor="newsletter-email" className="block text-sm font-semibold text-[#121C2D]">
            {t.emailLabel}
          </label>
          <input
            id="newsletter-email"
            name="EMAIL"
            type="email"
            required
            placeholder={t.emailPlaceholder}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base focus:border-[#2280FF] focus:ring-2 focus:ring-[#2280FF]/30 transition"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="newsletter-consent"
            name="OPT_IN"
            type="checkbox"
            required
            className="mt-1 h-5 w-5 rounded border-slate-300 text-[#2280FF] focus:ring-[#2280FF]"
          />
          <label htmlFor="newsletter-consent" className="text-sm text-slate-600 leading-relaxed">
            {t.consentLabel}
          </label>
        </div>

        <p className="text-xs text-slate-500">{t.consentNote}</p>

        <div aria-live="assertive" id="error-message" className="hidden rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" />
        <div aria-live="polite" id="success-message" className="hidden rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700" />

        <input type="text" name="email_address_check" className="input--hidden" defaultValue="" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="LANGUAGE" value={lang} />
        <input type="hidden" name="locale" value={localeValue} />
        {sourceUrl && <input type="hidden" name="SOURCE_URL" value={sourceUrl} />}

        <button
          type="submit"
          className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#2280FF] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#2280FF]/30 hover:bg-[#1a64c7] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2280FF]"
        >
          {t.submit}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
