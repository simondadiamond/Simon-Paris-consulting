import React, { useEffect, useMemo, useState, useId } from 'react';

const POST_URL =
  'https://c454d84b.sibforms.com/serve/MUIFAH7NOSykJlqeKP4c-jXRt7b-0MCgSB0R8BROAkZEQAbRZUO09B2nZUBGX-BfJqMMUURc1KBYeqGz7QduVv9MMy4fEEABw-5k98uGvJ18IAljU5oid79WFyl5-fBS2v5Ng8XlZEx7u7IZ9Dp6gCdZaTRY9trZH1U_GfpFHWxUpo0yvGpQR3DlmKDky65MJJvyhZoT0t1GbEkE';
const RECAPTCHA_SITE_KEY = '6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-';

const copy = {
  fr: {
    heading: 'The Automated SMB',
    subheading: 'L’infolettre hebdo pragmatique pour moderniser votre PME',
    body:
      'Chaque semaine, recevez des tactiques concrètes pour gagner du temps, réduire vos coûts et rester conforme à la Loi 25. Des conseils clairs, applicables dès maintenant.',
    emailLabel: 'Adresse courriel',
    emailPlaceholder: 'prenom@entreprise.com',
    consentLabel:
      'Je consens à recevoir les communications de The Automated SMB et je comprends que je peux me désabonner en tout temps.',
    submit: 'Recevoir l’infolettre chaque semaine',
    successTitle: 'Merci! Votre inscription est confirmée.',
    successBody: 'Vérifiez votre boîte de réception pour le courriel de bienvenue.',
    errorTitle: "Oups! Une erreur est survenue.",
    errorBody: 'Veuillez réessayer ou nous écrire à hello@simonparis.ca.',
    trustLine: (
      <>
        Vos données sont protégées. Consultez notre{' '}
        <a
          href="/privacy"
          className="font-semibold text-[#139E9B] transition-colors hover:text-[#2280FF]"
        >
          Politique de confidentialité
        </a>
        .
      </>
    )
  },
  en: {
    heading: 'The Automated SMB',
    subheading: 'Your weekly playbook to modernize your SMB',
    body:
      'Every week, get actionable tactics to save time, cut costs, and stay compliant with Law 25. Clear insights, ready to use immediately.',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@company.com',
    consentLabel:
      'I consent to receive communications from The Automated SMB and understand I can unsubscribe at any time.',
    submit: 'Get the weekly newsletter',
    successTitle: "Thanks! You're on the list.",
    successBody: 'Look for the welcome email in your inbox within a few minutes.',
    errorTitle: 'Oops! Something went wrong.',
    errorBody: 'Please try again or email hello@simonparis.ca.',
    trustLine: (
      <>
        Your data is protected. See our{' '}
        <a
          href="/privacy"
          className="font-semibold text-[#139E9B] transition-colors hover:text-[#2280FF]"
        >
          Privacy Policy
        </a>
        .
      </>
    )
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
    <section className="w-full">
      <div className="mx-auto w-full max-w-[600px] rounded-[10px] bg-white p-8 shadow-[0_32px_80px_rgba(18,28,45,0.12)] ring-1 ring-black/5 sm:p-12">
        <header className="mb-8 space-y-4">
          <h1 className="text-3xl font-semibold text-[#121C2D] md:text-4xl">{t.heading}</h1>
          <p className="text-lg font-medium text-[#1F2937] md:text-xl">{t.subheading}</p>
          <p className="text-base leading-relaxed text-[#4B5563]">{t.body}</p>
        </header>

        <form method="POST" action={POST_URL} className="space-y-6" noValidate>
          <div className="space-y-2">
            <label htmlFor={emailFieldId} className="text-sm font-semibold text-[#1F2937]">
              {t.emailLabel}
            </label>
            <input
              id={emailFieldId}
              name="EMAIL"
              type="email"
              required
              placeholder={t.emailPlaceholder}
              className="w-full rounded-[10px] border border-[#D1D5DB] bg-white px-5 py-3 text-base text-[#121C2D] shadow-sm transition focus:border-[#139E9B] focus:outline-none focus:ring-4 focus:ring-[#139E9B]/20"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id={consentFieldId}
              name="OPT_IN"
              type="checkbox"
              required
              className="mt-1 h-5 w-5 rounded border-[#D1D5DB] text-[#139E9B] focus:ring-[#139E9B]"
            />
            <label htmlFor={consentFieldId} className="text-sm leading-relaxed text-[#4B5563]">
              {t.consentLabel}
            </label>
          </div>

          <div
            aria-live="assertive"
            id="error-message"
            className="hidden rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <p className="font-semibold">{t.errorTitle}</p>
            <p className="mt-1 leading-relaxed">{t.errorBody}</p>
          </div>
          <div
            aria-live="polite"
            id="success-message"
            className="hidden rounded-[8px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          >
            <p className="font-semibold">{t.successTitle}</p>
            <p className="mt-1 leading-relaxed">{t.successBody}</p>
          </div>

          <input type="text" name="email_address_check" className="input--hidden" defaultValue="" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="LANGUAGE" value={lang} />
          <input type="hidden" name="locale" value={localeValue} />
          {sourceUrl && <input type="hidden" name="SOURCE_URL" value={sourceUrl} />}

          <div className="g-recaptcha-v3" data-sitekey={RECAPTCHA_SITE_KEY} style={{ display: 'none' }} />

          <button
            type="submit"
            className="btn-primary w-full text-base font-semibold"
            style={{ textTransform: 'none' }}
          >
            {t.submit}
          </button>
        </form>

        <p className="mt-8 text-sm text-[#6B7280]">{t.trustLine}</p>
      </div>
    </section>
  );
};

export default SignupForm;
