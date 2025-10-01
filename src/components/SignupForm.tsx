import React, { useEffect } from "react";
import { translations, type Language } from "../i18n";

export type SignupFormLang = Extract<Language, "fr" | "en">;

interface SignupFormProps {
  lang: SignupFormLang;
}

const POST_URL =
  "https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO";

const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  const copy = translations[lang].newsletter;

  useEffect(() => {
    // Ensure Brevo scripts load once
    if (!document.querySelector("script[data-brevo='main']")) {
      const script = document.createElement("script");
      script.defer = true;
      script.src = "https://sibforms.com/forms/end-form/build/main.js";
      script.dataset.brevo = "main";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="mx-auto max-w-[540px] rounded-2xl bg-[#f9fafb] p-8 shadow-[0_32px_80px_rgba(18,28,45,0.12)] sm:p-12">
      <form
        id="sib-form"
        method="POST"
        action={POST_URL}
        data-type="subscription"
        noValidate
        className="space-y-6"
      >
        {/* Title + subtitle */}
        <h1 className="text-center text-2xl font-bold text-[#121C2D]">
          {copy.title}
        </h1>
        <p className="text-center text-lg font-semibold text-[#139E9C]">
          {copy.subtitle}
        </p>
        <p className="text-center text-sm text-[#4B5563]">{copy.body}</p>

        {/* Email input */}
        <div className="space-y-2">
          <label
            htmlFor="EMAIL"
            className="block text-sm font-semibold text-[#121C2D]"
          >
            {copy.emailLabel}
          </label>
          <input
            id="EMAIL"
            name="EMAIL"
            type="email"
            placeholder={copy.emailPlaceholder}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-[#121C2D] focus:border-[#139E9C] focus:outline-none focus:ring-2 focus:ring-[#139E9C]/20"
          />
          <label
            className="entry__error entry__error--primary hidden rounded-md border border-[#ff4949] bg-[#ffeded] px-3 py-2 text-sm text-[#661d1d]"
            htmlFor="EMAIL"
          ></label>
        </div>

        {/* Consent checkbox */}
        <div className="space-y-1">
          <label
            htmlFor="OPT_IN"
            className="block text-sm font-semibold text-[#121C2D]"
          >
            Opt-in*
          </label>
          <label className="flex items-center gap-2 text-sm text-[#4B5563]">
            <input
              type="checkbox"
              id="OPT_IN"
              name="OPT_IN"
              value="1"
              required
              className="h-4 w-4 rounded border-gray-300 text-[#139E9C] focus:ring-[#139E9C]"
            />
            {copy.consent}
          </label>
          <p className="text-xs text-[#6B7280]">{copy.specification}</p>
          <label
            className="entry__error entry__error--primary hidden rounded-md border border-[#ff4949] bg-[#ffeded] px-3 py-2 text-sm text-[#661d1d]"
            htmlFor="OPT_IN"
          ></label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-[#139E9C] to-[#2280FF] py-3 font-semibold text-white transition hover:opacity-90"
        >
          {copy.submit}
        </button>

        {/* ✅ Hidden fields required by Brevo */}
        <input type="hidden" name="LANGUAGE" value={lang} />
        <input type="hidden" name="locale" value={lang} />
        <input
          type="hidden"
          name="SOURCE_URL"
          value={typeof window !== "undefined" ? window.location.href : ""}
        />
        <input
          type="text"
          name="email_address_check"
          value=""
          className="input--hidden"
        />
      </form>
    </section>
  );
};

export default SignupForm;
