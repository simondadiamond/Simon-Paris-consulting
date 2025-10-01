// src/components/SignupForm.tsx
import React, { useEffect } from 'react';

const SignupForm: React.FC = () => {
  useEffect(() => {
    // Load Brevo's form scripts when component mounts
    const scriptMain = document.createElement('script');
    scriptMain.src = 'https://sibforms.com/forms/end-form/build/main.js';
    scriptMain.defer = true;
    document.body.appendChild(scriptMain);

    const scriptRecaptcha = document.createElement('script');
    scriptRecaptcha.src =
      'https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=fr';
    scriptRecaptcha.async = true;
    scriptRecaptcha.defer = true;
    document.body.appendChild(scriptRecaptcha);

    return () => {
      document.body.removeChild(scriptMain);
      document.body.removeChild(scriptRecaptcha);
    };
  }, []);

  return (
    <section className="mx-auto max-w-[540px] rounded-xl bg-[#f9fafb] p-8 shadow-xl sm:p-12">
      {/* Brevo form embed */}
      <div className="sib-form text-center" style={{ backgroundColor: '#f9fafb' }}>
        <div id="sib-form-container" className="sib-form-container">
          <div
            id="error-message"
            className="sib-form-message-panel mx-auto w-full max-w-[540px] rounded-md border border-[#ff4949] bg-[#ffeded] p-4 text-left text-sm text-[#661d1d]"
            style={{ display: 'none' }}
          >
            Une erreur est survenue. Veuillez réessayer dans quelques instants.
          </div>

          <div
            id="success-message"
            className="sib-form-message-panel mx-auto w-full max-w-[540px] rounded-md border border-emerald-500 bg-emerald-50 p-4 text-left text-sm text-emerald-700"
            style={{ display: 'none' }}
          >
            Merci! Votre inscription à The Automated SMB est confirmée.
          </div>

          <div
            id="sib-container"
            className="sib-container--large sib-container--vertical mx-auto max-w-[540px] rounded-xl border border-gray-300 bg-white p-6"
          >
            <form
              id="sib-form"
              method="POST"
              action="https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO"
              data-type="subscription"
              className="space-y-6"
            >
              {/* Title */}
              <h1 className="text-2xl font-semibold text-[#121c2d]">The Automated SMB</h1>
              <p className="text-lg font-semibold text-[#139e9b]">
                L’infolettre pragmatique pour moderniser votre PME
              </p>
              <p className="text-sm text-gray-700">
                Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des
                outils IA prêts pour les PME québécoises.
              </p>

              {/* Email field */}
              <div className="text-left">
                <label
                  htmlFor="EMAIL"
                  className="block text-sm font-semibold text-[#121c2d] mb-2"
                >
                  Entrez votre adresse courriel pour recevoir l’infolettre :
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#121c2d] placeholder-gray-400 focus:border-[#139E9C] focus:ring-4 focus:ring-[#139E9C]/20"
                  type="email"
                  id="EMAIL"
                  name="EMAIL"
                  autoComplete="off"
                  placeholder="nom@entreprise.com"
                  required
                />
              </div>

              {/* Opt-in */}
              <div className="flex items-start gap-2 text-left">
                <input
                  type="checkbox"
                  id="OPT_IN"
                  name="OPT_IN"
                  value="1"
                  required
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-[#139E9C] focus:ring-[#139E9C]"
                />
                <label htmlFor="OPT_IN" className="text-sm text-gray-700">
                  Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.
                  <br />
                  <span className="text-xs text-gray-500">Vous pouvez vous désabonner en tout temps.</span>
                </label>
              </div>

              {/* Hidden fields */}
              <input type="text" name="email_address_check" value="" className="hidden" />
              <input type="hidden" name="locale" value="fr" />

              {/* Button */}
              <button
                className="w-full rounded-lg bg-gradient-to-r from-[#139E9C] to-[#2280FF] py-3 font-semibold text-white shadow-md transition hover:opacity-90"
                type="submit"
              >
                Je m’abonne gratuitement
              </button>

              {/* Recaptcha placeholder */}
              <div className="g-recaptcha-v3" data-sitekey="6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-" style={{ display: 'none' }}></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
