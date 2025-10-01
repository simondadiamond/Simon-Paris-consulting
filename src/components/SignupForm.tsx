import React, { useEffect } from "react";

const SignupForm: React.FC = () => {
  useEffect(() => {
    // Make sure Brevo script is present (loaded globally in index.html <head>)
    if (!document.querySelector("script[src*='sibforms']")) {
      const script = document.createElement("script");
      script.src = "https://sibforms.com/forms/end-form/build/main.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="flex justify-center py-12 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-[#f9fafb] p-6 shadow-xl">
        <div
          id="brevo-form-wrapper"
          dangerouslySetInnerHTML={{
            __html: `
              <!-- BEGIN Brevo Form -->
              <div class="sib-form" style="text-align: center;">
                <div id="sib-form-container" class="sib-form-container">
                  <div id="sib-container" class="sib-container--large sib-container--vertical">
                    <form id="sib-form" method="POST"
                      action="https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO"
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
                          Je consens à recevoir les communications de The Automated SMB et je comprends que je peux me désabonner en tout temps.
                        </label>
                      </div>

                      <button type="submit"
                        class="sib-form-block__button sib-form-block__button-with-loader w-full rounded-lg bg-gradient-to-r from-[#139E9C] to-[#2280FF] py-3 font-semibold text-white transition hover:opacity-90">
                        Recevoir l’infolettre chaque semaine
                      </button>

                      <input type="hidden" name="locale" value="fr" />
                      <input type="hidden" name="LANGUAGE" value="fr" />
                      <input type="text" name="email_address_check" value="" class="input--hidden" />
                    </form>
                  </div>
                </div>
              </div>
              <!-- END Brevo Form -->
            `,
          }}
        />
      </div>
      <style jsx>{`
        /* Override Brevo’s default container styling */
        #sib-container {
          background: #f9fafb !important;
          border: 1px solid #ddd !important;
          border-radius: 16px !important;
          padding: 1.5rem !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;
        }
        .sib-form-block__button {
          border: none !important;
        }
      `}</style>
    </section>
  );
};

export default SignupForm;