import React, { useEffect, useMemo, useState, useId } from 'react';

const POST_URL =
  'https://c454d84b.sibforms.com/serve/MUIFAH7NOSykJlqeKP4c-jXRt7b-0MCgSB0R8BROAkZEQAbRZUO09B2nZUBGX-BfJqMMUURc1KBYeqGz7QduVv9MMy4fEEABw-5k98uGvJ18IAljU5oid79WFyl5-fBS2v5Ng8XlZEx7u7IZ9Dp6gCdZaTRY9trZH1U_GfpFHWxUpo0yvGpQR3DlmKDky65MJJvyhZoT0t1GbEkE';
const RECAPTCHA_SITE_KEY = '6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-';

const copy = {
  fr: {
    heading: 'Infolettre PME Québec',
    subheading: 'Automatisation et IA pour dirigeants pressés',
    body:
      'Deux fois par mois, recevez des tactiques applicables pour gagner du temps, éviter des erreurs coûteuses et rester conforme à la Loi 25 — sans blabla.',
    emailLabel: 'Adresse courriel professionnelle',
    emailPlaceholder: 'prenom.nom@entreprise.com',
    consentLabel:
      "Je consens à recevoir les communications de The Automated SMB et comprends que je pourrai me désabonner en tout temps.",
    consentNote: 'Vos données sont traitées au Québec et conformes à la Loi 25 et à la LCAP.',
    submit: "Recevoir l'infolettre",
    successTitle: 'Merci! Votre inscription est confirmée.',
    successBody: 'Vérifiez votre boîte de réception pour le courriel de bienvenue.',
    errorTitle: "Oups! Une erreur est survenue.",
    errorBody: 'Veuillez réessayer ou nous écrire à hello@simonparis.ca.'
  },
  en: {
    heading: 'Québec SMB AI Newsletter',
    subheading: 'Automation guidance for owners who move fast',
    body:
      'Every two weeks, receive concise playbooks that save hours, prevent costly mistakes, and keep your team compliant with Law 25 — no fluff.',
    emailLabel: 'Business email address',
    emailPlaceholder: 'firstname.lastname@company.com',
    consentLabel:
      'I consent to receive communications from The Automated SMB and understand I can unsubscribe at any time.',
    consentNote: "Your data is handled in Québec and compliant with Law 25 and Canada's Anti-Spam Legislation.",
    submit: 'Join the newsletter',
    successTitle: "Thanks! You're on the list.",
    successBody: 'Look for the welcome email in your inbox within a few minutes.',
    errorTitle: 'Oops! Something went wrong.',
    errorBody: 'Please try again or email hello@simonparis.ca.'
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
  const emailFieldId = useId();
  const consentFieldId = useId();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setSourceUrl(window.location.href);
  }, []);

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
      script.async = true;
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
      script.async = true;
      script.dataset.recaptcha = 'loader';
      return script;
    });
  }, [lang]);

  const localeValue = useMemo(() => lang, [lang]);

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-slate-100 via-white to-slate-100" />
      <div className="relative mx-auto max-w-[600px] rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-[0_25px_55px_rgba(18,28,45,0.12)] backdrop-blur">
        <header className="mb-10 space-y-4 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">The Automated SMB</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">{t.heading}</h1>
          <p className="text-lg font-medium text-slate-600">{t.subheading}</p>
          <p className="text-base leading-relaxed text-slate-600">{t.body}</p>
        </header>

        <form method="POST" action={POST_URL} className="space-y-6" noValidate>
          <div className="space-y-2">
            <label htmlFor={emailFieldId} className="text-sm font-semibold text-slate-700">
              {t.emailLabel}
            </label>
            <input
              id={emailFieldId}
              name="EMAIL"
              type="email"
              required
              placeholder={t.emailPlaceholder}
              className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base text-slate-900 shadow-sm transition focus:border-[#2280FF] focus:outline-none focus:ring-4 focus:ring-[#2280FF]/20"
            />
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 p-4">
            <input
              id={consentFieldId}
              name="OPT_IN"
              type="checkbox"
              required
              className="mt-1 h-5 w-5 rounded border-slate-300 text-[#2280FF] focus:ring-[#2280FF]"
            />
            <label htmlFor={consentFieldId} className="text-sm leading-relaxed text-slate-600">
              {t.consentLabel}
            </label>
          </div>

          <p className="text-xs text-slate-500">{t.consentNote}</p>

          <div
            aria-live="assertive"
            id="error-message"
            className="hidden rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          />
          <div
            aria-live="polite"
            id="success-message"
            className="hidden rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          />

          <input type="text" name="email_address_check" className="input--hidden" defaultValue="" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="LANGUAGE" value={lang} />
          <input type="hidden" name="locale" value={localeValue} />
          {sourceUrl && <input type="hidden" name="SOURCE_URL" value={sourceUrl} />}

          <div className="g-recaptcha-v3" data-sitekey={RECAPTCHA_SITE_KEY} />

          <button type="submit" className="btn-primary w-full justify-center px-8 py-4 text-base font-semibold">
            {t.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
