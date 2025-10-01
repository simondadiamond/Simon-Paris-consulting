import React from "react";

type SignupFormLang = "en" | "fr";

interface SignupFormProps {
  lang: SignupFormLang;
}

const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  return (
    <section className="flex justify-center py-12 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-[#f9fafb] p-8 shadow-xl">
        {/* Error Message */}
        <div
          id="error-message"
          className="sib-form-message-panel hidden rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <p>
            {lang === "fr"
              ? "Une erreur est survenue. Veuillez réessayer."
              : "An error occurred. Please try again."}
          </p>
        </div>

        {/* Success Message */}
        <div
          id="success-message"
          className="sib-form-message-panel hidden rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          <p>
            {lang === "fr"
              ? "Merci! Votre inscription est confirmée."
              : "Thanks! Your subscription is confirmed."}
          </p>
        </div>

        {/* Brevo form */}
        <form
          id="sib-form"
          method="POST"
          action="https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO"
          data-type="subscription"
          noValidate
          className="space-y-6"
        >
          <h1 className="text-2xl font-semibold text-[#121c2d]">The Automated SMB</h1>
          <p className="text-lg font-semibold text-[#139e9c]">
            {lang === "fr"
              ? "L’infolettre pragmatique pour moderniser votre PME"
              : "The pragmatic newsletter to modernize your SMB"}
          </p>
          <p className="text-sm text-[#4b5563]">
            {lang === "fr"
              ? "Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises."
              : "Every week: save time, avoid costly mistakes, and discover AI tools ready for Québec SMBs."}
          </p>

          {/* Email */}
          <label
            htmlFor="EMAIL"
            className="block text-sm font-semibold text-[#121c2d]"
          >
            {lang === "fr" ? "Adresse courriel" : "Email address"}
          </label>
          <input
            type="email"
            id="EMAIL"
            name="EMAIL"
            required
            placeholder={
              lang === "fr" ? "nom@entreprise.com" : "name@business.com"
            }
            className="input w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
          />

          {/* Consent */}
          <div className="text-left">
            <label className="flex items-start gap-2 text-sm text-[#4b5563]">
              <input
                type="checkbox"
                id="OPT_IN"
                name="OPT_IN"
                value="1"
                required
                className="input_replaced mt-1"
              />
              {lang === "fr"
                ? "Je consens à recevoir les communications de The Automated SMB et je comprends que je peux me désabonner en tout temps."
                : "I agree to receive communications from The Automated SMB and understand I can unsubscribe at any time."}
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="sib-form-block__button sib-form-block__button-with-loader w-full rounded-lg bg-gradient-to-r from-[#139E9C] to-[#2280FF] py-3 font-semibold text-white transition hover:opacity-90"
          >
            {lang === "fr"
              ? "Recevoir l’infolettre chaque semaine"
              : "Get the weekly newsletter"}
          </button>

          {/* Hidden fields Brevo expects */}
          <input type="hidden" name="locale" value={lang} />
          <input type="hidden" name="LANGUAGE" value={lang} />
          <input type="text" name="email_address_check" value="" className="input--hidden" />
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
