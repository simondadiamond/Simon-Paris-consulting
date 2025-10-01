import React, { useEffect } from "react";

type SignupFormLang = "en" | "fr";

interface SignupFormProps {
  lang: SignupFormLang;
}

const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  useEffect(() => {
    // Ensure Brevo’s script is present (already in index.html ideally)
    if (!document.querySelector("script[src*='sibforms']")) {
      const script = document.createElement("script");
      script.src = "https://sibforms.com/forms/end-form/build/main.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Set LOCALE for Brevo validation messages
    (window as any).LOCALE = lang;
  }, [lang]);

  // French version of form
  const formFR = `
    <div class="sib-form" style="text-align:center;">
      <div id="sib-form-container" class="sib-form-container">
        <div id="sib-container" class="sib-container--large sib-container--vertical">
          <form id="sib-form" method="POST"
            action="https://c454d84b.sibforms.com/serve/MUIFABPnId223hP1MfXQhUKTZ-Hrpawb-mUK1I6K6Z23awSphtJWBleirm9cn-eH8BUbLtEd0uEGsyiLCLZGhvgXAyp37m1l4q7dUcHqtCA3BDWXEyncJcmoudjdvwBu4O5eu6JEptiOhjBgQef67s3Om8yQZZPmxI_NR9LWPXnzoWogE-z4RtuEZTvK8wz3y2TtSKqiOtQLpVWQ"
            data-type="subscription">
            
            <h1 class="text-2xl font-semibold text-[#121c2d] mb-2">The Automated SMB</h1>
            <p class="text-lg font-semibold text-[#139e9c] mb-3">
              L’infolettre pragmatique pour moderniser votre PME
            </p>
            <p class="text-sm text-[#4b5563] mb-6">
              Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.
            </p>

            <label for="EMAIL" class="block text-sm font-semibold text-[#121c2d] text-left mb-1">
              Adresse courriel
            </label>
            <input type="email" id="EMAIL" name="EMAIL" required
              placeholder="nom@entreprise.com"
              class="input w-full rounded-lg border border-gray-300 px-4 py-2 mb-4" />

            <div class="text-left mb-6">
              <label class="flex items-start gap-2 text-sm text-[#4b5563]">
                <input type="checkbox" id="OPT_IN" name="OPT_IN" value="1" required class="input_replaced mt-1" />
                Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.
              </label>
            </div>

            <button type="submit"
              class="sib-form-block__button sib-form-block__button-with-loader w-full rounded-lg py-3 font-semibold text-white transition hover:opacity-90">
              Recevoir l’infolettre chaque semaine
            </button>

            <input type="hidden" name="locale" value="fr" />
            <input type="hidden" name="LANGUAGE" value="fr" />
            <input type="text" name="email_address_check" value="" class="input--hidden" />
          </form>
        </div>
      </div>
    </div>
  `;

  // English version of form
  const formEN = `
    <div class="sib-form" style="text-align:center;">
      <div id="sib-form-container" class="sib-form-container">
        <div id="sib-container" class="sib-container--large sib-container--vertical">
          <form id="sib-form" method="POST"
            action="https://c454d84b.sibforms.com/serve/MUIFABPnId223hP1MfXQhUKTZ-Hrpawb-mUK1I6K6Z23awSphtJWBleirm9cn-eH8BUbLtEd0uEGsyiLCLZGhvgXAyp37m1l4q7dUcHqtCA3BDWXEyncJcmoudjdvwBu4O5eu6JEptiOhjBgQef67s3Om8yQZZPmxI_NR9LWPXnzoWogE-z4RtuEZTvK8wz3y2TtSKqiOtQLpVWQ"
            data-type="subscription">
            
            <h1 class="text-2xl font-semibold text-[#121c2d] mb-2">The Automated SMB</h1>
            <p class="text-lg font-semibold text-[#139e9c] mb-3">
              The pragmatic newsletter to modernize your SMB
            </p>
            <p class="text-sm text-[#4b5563] mb-6">
              Every week: save time, avoid costly mistakes, and discover AI tools built for Québec SMBs.
            </p>

            <label for="EMAIL" class="block text-sm font-semibold text-[#121c2d] text-left mb-1">
              Email address
            </label>
            <input type="email" id="EMAIL" name="EMAIL" required
              placeholder="name@business.com"
              class="input w-full rounded-lg border border-gray-300 px-4 py-2 mb-4" />

            <div class="text-left mb-6">
              <label class="flex items-start gap-2 text-sm text-[#4b5563]">
                <input type="checkbox" id="OPT_IN" name="OPT_IN" value="1" required class="input_replaced mt-1" />
                Yes, I want to receive Québec AI Weekly and stay compliant with Law 25.
              </label>
            </div>

            <button type="submit"
              class="sib-form-block__button sib-form-block__button-with-loader w-full rounded-lg py-3 font-semibold text-white transition hover:opacity-90">
              Get the weekly newsletter
            </button>

            <input type="hidden" name="locale" value="en" />
            <input type="hidden" name="LANGUAGE" value="en" />
            <input type="text" name="email_address_check" value="" class="input--hidden" />
          </form>
        </div>
      </div>
    </div>
  `;

  return (
    <section className="flex justify-center py-12 px-4">
      <div
        className="w-full max-w-lg rounded-2xl bg-[#f9fafb] p-8 shadow-xl"
        dangerouslySetInnerHTML={{ __html: lang === "fr" ? formFR : formEN }}
      />
      <style jsx>{`
        #sib-container {
          background: #f9fafb !important;
          border-radius: 16px !important;
          border: 1px solid #ddd !important;
          padding: 1.5rem !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;
        }
        .sib-form-block__button {
          background: linear-gradient(90deg, #139e9c, #2280ff) !important;
          border: none !important;
        }
      `}</style>
    </section>
  );
};

export default SignupForm;