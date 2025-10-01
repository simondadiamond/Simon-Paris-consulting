import React, { useEffect } from "react";

type SignupFormLang = "en" | "fr";

interface SignupFormProps {
  lang: SignupFormLang;
}

const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  useEffect(() => {
    // Remove any existing Brevo script
    document.querySelectorAll("script[src*='sibforms']").forEach(s => s.remove());

    // Re-inject Brevo main.js
    const script = document.createElement("script");
    script.src = "https://sibforms.com/forms/end-form/build/main.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log("✅ Brevo main.js loaded and executed");
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [lang]);

  return (
    <section className="flex justify-center py-12 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-[#f9fafb] p-8 shadow-xl">
        <form
          id="sib-form"
          method="POST"
          action="https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO"
          data-type="subscription"
          noValidate
        >
          {/* Title */}
          <h1 className="mb-2 text-xl font-semibold text-[#121c2d]">
            The Automated SMB
          </h1>
          <p className="mb-3 text-lg font-semibold text-[#139e9c]">
            {lang === "fr"
              ? "L’infolettre pragmatique pour moderniser votre PME"
              : "The pragmatic newsletter to modernize your SMB"}
          </p>
          <p className="mb-6 text-sm text-[#4b5563]">
            {lang === "fr"
              ? "Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises."
              : "Every week: save time, avoid costly mistakes, and discover AI tools ready for Québec SMBs."}
          </p>

          {/* Email input */}
          <label
            htmlFor="EMAIL"
            className="mb-1 block text-sm font-semibold text-[#121c2d]"
          >
            {lang === "fr" ? "Adresse courriel" : "Email address"}
          </label>
          <input
            type="email"
            id="EMAIL"
            name="EMAIL"
            required
            placeholder={lang === "fr" ? "nom@entreprise.com" : "name@business.com"}
            className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[#139e9c] focus:ring-2 focus:ring-[#139e9c]/30"
          />

          {/* Checkbox */}
          <div className="mb-6 text-left">
            <input
              type="checkbox"
              id="OPT_IN"
              name="OPT_IN"
              value="1"
              required
              className="mr-2"
            />
            <label htmlFor="OPT_IN" className="text-sm text-[#4b5563]">
              {lang === "fr"
                ? "Je consens à recevoir les communications de The Automated SMB et je comprends que je peux me désabonner en tout temps."
                : "I agree to receive communications from The Automated SMB and understand I can unsubscribe at any time."}
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-[#139E9C] to-[#2280FF] px-4 py-3 font-semibold text-white transition hover:opacity-90"
          >
            {lang === "fr"
              ? "Recevoir l’infolettre chaque semaine"
              : "Get the weekly newsletter"}
          </button>

          {/* Hidden fields */}
          <input type="hidden" name="locale" value={lang} />
          <input type="hidden" name="LANGUAGE" value={lang} />
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
