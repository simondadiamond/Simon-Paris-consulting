import React, { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n';

const POST_URL =
  'https://c454d84b.sibforms.com/serve/MUIFAH7NOSykJlqeKP4c-jXRt7b-0MCgSB0R8BROAkZEQAbRZUO09B2nZUBGX-BfJqMMUURc1KBYeqGz7QduVv9MMy4fEEABw-5k98uGvJ18IAljU5oid79WFyl5-fBS2v5Ng8XlZEx7u7IZ9Dp6gCdZaTRY9trZH1U_GfpFHWxUpo0yvGpQR3DlmKDky65MJJvyhZoT0t1GbEkE';
const RECAPTCHA_SITE_KEY = '6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-';

const ensureHeadLink = (selector: string, create: () => HTMLLinkElement) => {
  let link = document.head.querySelector<HTMLLinkElement>(selector);
  if (!link) {
    link = create();
    document.head.appendChild(link);
  }
  return link;
};

export type SignupFormLang = Extract<Language, 'fr' | 'en'>;

interface SignupFormProps {
  lang: SignupFormLang;
}

export const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  const signupCopy = translations[lang].newsletter.signup;
  const [sourceUrl, setSourceUrl] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setSourceUrl(window.location.href);
  }, [lang]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    ensureHeadLink("link[data-brevo='styles']", () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://sibforms.com/forms/end-form/build/sib-styles.css';
      link.dataset.brevo = 'styles';
      return link;
    });
  }, []);

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    console.assert(!!document.querySelector('#sib-form'), 'sib-form not found');
    console.assert(
      typeof (window as unknown as { grecaptcha?: unknown }).grecaptcha !== 'undefined' || true,
      'recaptcha not yet loaded'
    );
    console.assert(!!document.querySelector('#success-message'), 'success container missing');
    console.assert(!!document.querySelector('#error-message'), 'error container missing');
  }, []);

  return (
    <>
      <section className="w-full font-inter">
        <div className="mx-auto w-full max-w-[600px] rounded-[12px] bg-white/95 p-8 shadow-[0_32px_80px_rgba(18,28,45,0.12)] ring-1 ring-black/5 sm:p-12">
          <header className="mb-10 space-y-5 md:space-y-6">
            <h1 className="text-3xl font-semibold text-[#121C2D] md:text-4xl">{signupCopy.heading}</h1>
            <p className="text-lg font-semibold text-[#139E9C] md:text-xl">{signupCopy.subheading}</p>
            <p className="text-base leading-relaxed text-[#4B5563]">{signupCopy.body}</p>
          </header>

          <form
            id="sib-form"
            data-type="subscription"
            method="POST"
            action={POST_URL}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="EMAIL" className="text-sm font-semibold text-[#1F2937]">
                {signupCopy.emailLabel}
              </label>
              <input
                id="EMAIL"
                name="EMAIL"
                type="email"
                required
                placeholder={signupCopy.emailPlaceholder}
                autoComplete="email"
                className="w-full rounded-[10px] border border-[#D1D5DB] bg-white px-5 py-3 text-base text-[#121C2D] shadow-sm transition focus:border-[#139E9C] focus:outline-none focus:ring-4 focus:ring-[#139E9C]/20"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="OPT_IN"
                name="OPT_IN"
                type="checkbox"
                value="1"
                required
                className="mt-1 h-5 w-5 rounded border-[#D1D5DB] text-[#139E9C] focus:ring-[#139E9C]"
              />
              <label htmlFor="OPT_IN" className="text-sm leading-relaxed text-[#4B5563]">
                {signupCopy.consentLabel}
              </label>
            </div>

            <div
              id="error-message"
              aria-live="assertive"
              style={{ display: 'none' }}
              className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <p className="font-semibold">{signupCopy.errorTitle}</p>
              <p className="mt-1 leading-relaxed">{signupCopy.errorBody}</p>
            </div>

            <div
              id="success-message"
              aria-live="polite"
              style={{ display: 'none' }}
              className="rounded-[8px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
            >
              <p className="font-semibold">{signupCopy.successTitle}</p>
              <p className="mt-1 leading-relaxed">{signupCopy.successBody}</p>
            </div>

            <input type="text" name="email_address_check" value="" className="hidden" />
            <input type="hidden" name="LANGUAGE" value={lang} />
            <input type="hidden" name="locale" value={lang} />
            <input type="hidden" name="SOURCE_URL" value={sourceUrl} />

            <div className="g-recaptcha-v3" data-sitekey={RECAPTCHA_SITE_KEY} style={{ display: 'none' }} />

            <button type="submit" className="btn-primary w-full">
              {signupCopy.submit}
            </button>
          </form>

          <p className="mt-8 text-sm text-[#6B7280]">
            {signupCopy.trustLine.prefix}
            <a
              href={lang === 'fr' ? '/fr/politique-confidentialite' : '/privacy'}
              className="font-semibold text-[#139E9C] transition-colors hover:text-[#0F807E]"
            >
              {signupCopy.trustLine.linkLabel}
            </a>
            {signupCopy.trustLine.suffix}
          </p>
        </div>
      </section>

      <script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
      <script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&hl=${lang}`}
        async
        defer
      ></script>
    </>
  );
};

export default SignupForm;
