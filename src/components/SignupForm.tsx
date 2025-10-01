import React, { useEffect } from "react";
import { translations, type Language } from "../i18n";

export type SignupFormLang = Extract<Language, "fr" | "en">;

interface SignupFormProps {
  lang: SignupFormLang;
}

const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  const copy = translations[lang].newsletter;

  useEffect(() => {
    // Reload Brevo script after mount
    const existing = document.querySelector("script[data-brevo='main']");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://sibforms.com/forms/end-form/build/main.js";
    script.dataset.brevo = "main";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [lang]);

  return (
    <section className="mx-auto max-w-[540px] rounded-2xl bg-[#f9fafb] p-8 shadow-[0_32px_80px_rgba(18,28,45,0.12)] sm:p-12">
      <div
        id="sib-container"
        className="sib-container--large sib-container--vertical"
      >
        <form
          id="sib-form"
          method="POST"
          action="https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO"
          data-type="subscription"
          noValidate={true}
        >
          <h1>{copy.title}</h1>
          <p><strong>{copy.subtitle}</strong></p>
          <p>{copy.body}</p>

          <label htmlFor="EMAIL">{copy.emailLabel}</label>
          <input
            type="email"
            id="EMAIL"
            name="EMAIL"
            placeholder={copy.emailPlaceholder}
            className="input"
            required
          />
          <label
            className="entry__error entry__error--primary"
            htmlFor="EMAIL"
          ></label>

          <div>
            <input
              type="checkbox"
              id="OPT_IN"
              name="OPT_IN"
              value="1"
              className="input_replaced"
              required
            />
            <label htmlFor="OPT_IN">{copy.consent}</label>
            <label
              className="entry__error entry__error--primary"
              htmlFor="OPT_IN"
            ></label>
            <p className="text-xs text-gray-500">{copy.specification}</p>
          </div>

          <button
            type="submit"
            className="sib-form-block__button sib-form-block__button-with-loader w-full rounded-lg bg-gradient-to-r from-[#139E9C] to-[#2280FF] py-3 font-semibold text-white transition hover:opacity-90"
          >
            {copy.submit}
          </button>

          {/* Hidden fields */}
          <input type="hidden" name="LANGUAGE" value={lang} />
          <input type="hidden" name="locale" value={lang} />
          <input
            type="text"
            name="email_address_check"
            value=""
            className="input--hidden"
          />
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
