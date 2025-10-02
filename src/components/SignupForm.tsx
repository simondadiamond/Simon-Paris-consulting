import React, { useEffect } from "react";

const SignupFormFr: React.FC = () => {
  useEffect(() => {
    // Autofill hidden fields
    const src = document.getElementById("SOURCE_URL") as HTMLInputElement | null;
    if (src) src.value = window.location.href;

    const lang = document.getElementById("LANGUAGE") as HTMLInputElement | null;
    if (lang) lang.value = "fr";
  }, []);

  return (
    <section className="flex justify-center py-12 px-4">
      {/* Style overrides to improve look but keep Brevo functional */}
      <style>{`
        #sib-container {
          max-width: 540px !important;
          border-radius: 16px !important;
          background: #f9fafb !important;
          box-shadow: 0 24px 64px rgba(18,28,45,0.14) !important;
          padding: 24px !important;
        }
        .sib-form { background: transparent !important; }
        #sib-form h1 {
          font-family: Inter, sans-serif !important;
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          color: #121c2d !important;
        }
        #sib-form p strong {
          font-size: 1.1rem !important;
          font-weight: 600 !important;
          color: #139e9c !important;
        }
        .sib-form-block__button {
          width: 100% !important;
          padding: .9rem !important;
          border-radius: 10px !important;
          background: linear-gradient(90deg,#139E9C,#2280FF) !important;
          color: #fff !important;
          font-weight: 600 !important;
          border: none !important;
        }
        #SOURCE_URL, #LANGUAGE { display: none !important; }
      `}</style>

      <div className="w-full max-w-[560px]">
        {/* KEEP Brevo's raw HTML intact */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <div class="sib-form" style="text-align: center;">
                <div id="sib-form-container" class="sib-form-container">
                  <div id="error-message" class="sib-form-message-panel" style="display:none;"></div>
                  <div id="success-message" class="sib-form-message-panel" style="display:none;"></div>
                  <div id="sib-container" class="sib-container--large sib-container--vertical">
                    
                    <form id="sib-form" method="POST"
                      action="https://c454d84b.sibforms.com/serve/MUIFANWtc_ZXENCFgOE0x25spvjMqZh3YvPPNgc8i-eR71nYany6EABptSdMXFEn3gsK4AvkFnyWenuH7kfxzbpQSkxl-RDoLp9UWYrVVJPUx9pjl2vqasvE-DQIJLOZK3Xr7pWvyv2oOxMXUtCcq1d1FBiw35_LYA6uOpehokL7dT_ylL7HtHehEoDxs7d1P2hEy43TSEaIvXD5"
                      data-type="subscription">

                      <h1>The Automated SMB</h1>
                      <p><strong>L’infolettre pragmatique pour moderniser votre PME</strong></p>
                      <p>Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.</p>

                      <!-- Hidden fields -->
                      <input type="text" id="SOURCE_URL" name="SOURCE_URL" value="">
                      <input type="text" id="LANGUAGE" name="LANGUAGE" value="fr">

                      <!-- Email -->
                      <label for="EMAIL">Adresse courriel</label>
                      <input class="input" type="email" id="EMAIL" name="EMAIL" placeholder="nom@entreprise.com" required />

                      <!-- Consent -->
                      <div class="sib-optin sib-form-block" data-required="true">
                        <div class="form__entry entry_mcq">
                          <label>
                            <input type="checkbox" class="input_replaced" id="OPT_IN" name="OPT_IN" value="1" required />
                            <span>Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.</span>
                          </label>
                        </div>
                      </div>

                      <!-- Submit -->
                      <button class="sib-form-block__button sib-form-block__button-with-loader" type="submit">
                        Je m’abonne gratuitement
                      </button>

                      <div class="g-recaptcha-v3" data-sitekey="6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-" style="display:none"></div>
                      <input type="text" name="email_address_check" value="" class="input--hidden" />
                      <input type="hidden" name="locale" value="fr" />
                    </form>
                  </div>
                </div>
              </div>
            `,
          }}
        />
      </div>
    </section>
  );
};

export default SignupFormFr;