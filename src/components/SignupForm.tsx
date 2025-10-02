import React, { useEffect } from "react";

const SignupFormFr: React.FC = () => {
  useEffect(() => {
    // Fill hidden fields dynamically
    const src = document.getElementById("SOURCE_URL") as HTMLInputElement | null;
    if (src) src.value = window.location.href;

    const lang = document.getElementById("LANGUAGE") as HTMLInputElement | null;
    if (lang) lang.value = "fr";
  }, []);

  return (
    <section className="flex justify-center py-12 px-4">
      <style>{`
        /* Card styling */
        #sib-container.sib-container--large.sib-container--vertical {
          max-width: 540px;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          box-shadow: 0 24px 64px rgba(18,28,45,0.14);
          padding: 24px;
        }
        .sib-form { background: transparent !important; }
        #sib-form h1 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #121c2d;
          margin-bottom: .5rem;
        }
        #sib-form p.subhead {
          font-size: 1.1rem;
          font-weight: 600;
          color: #139e9c;
          margin-bottom: .75rem;
        }
        #sib-form p.copy {
          font-size: .95rem;
          color: #4b5563;
          margin-bottom: 1rem;
        }
        #sib-form .input {
          width: 100%;
          padding: .75rem;
          border: 1px solid #d1d5db;
          border-radius: 10px;
        }
        #sib-form .entry_mcq label {
          display: flex;
          align-items: flex-start;
          gap: .5rem;
          font-size: .95rem;
          color: #4b5563;
        }
        #sib-form .sib-form-block__button {
          width: 100%;
          padding: .9rem;
          border-radius: 10px;
          background: linear-gradient(90deg, #139E9C, #2280FF);
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          border: 0;
        }
        /* Hide hidden fields completely */
        #SOURCE_URL, #LANGUAGE {
          display: none !important;
        }
      `}</style>

      <div className="w-full max-w-[560px]">
        <div
          className="sib-form"
          style={{ textAlign: "center", backgroundColor: "transparent" }}
          dangerouslySetInnerHTML={{
            __html: `
              <div id="sib-form-container" class="sib-form-container">
                <div id="error-message" class="sib-form-message-panel" style="display:none;"></div>
                <div id="success-message" class="sib-form-message-panel" style="display:none;"></div>

                <div id="sib-container" class="sib-container--large sib-container--vertical">
                  <form id="sib-form" method="POST"
                    action="https://c454d84b.sibforms.com/serve/MUIFANWtc_ZXENCFgOE0x25spvjMqZh3YvPPNgc8i-eR71nYany6EABptSdMXFEn3gsK4AvkFnyWenuH7kfxzbpQSkxl-RDoLp9UWYrVVJPUx9pjl2vqasvE-DQIJLOZK3Xr7pWvyv2oOxMXUtCcq1d1FBiw35_LYA6uOpehokL7dT_ylL7HtHehEoDxs7d1P2hEy43TSEaIvXD5"
                    data-type="subscription"
                  >
                    <h1>The Automated SMB</h1>
                    <p class="subhead">L’infolettre pragmatique pour moderniser votre PME</p>
                    <p class="copy">Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.</p>

                    <!-- Hidden Fields -->
                    <input type="text" id="SOURCE_URL" name="SOURCE_URL" value="">
                    <input type="text" id="LANGUAGE" name="LANGUAGE" value="fr">

                    <!-- Email -->
                    <label for="EMAIL" style="display:block; font-weight:600; margin-bottom:0.25rem; color:#121c2d;">
                      Adresse courriel
                    </label>
                    <input class="input" type="email" id="EMAIL" name="EMAIL" placeholder="nom@entreprise.com" required />

                    <!-- Consent -->
                    <div class="sib-optin sib-form-block" data-required="true">
                      <div class="form__entry entry_mcq">
                        <label>
                          <input type="checkbox" class="input_replaced" id="OPT_IN" name="OPT_IN" value="1" required />
                          <span style="font-size:0.9rem; color:#4b5563;">
                            Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.
                          </span>
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
            `,
          }}
        />
      </div>
    </section>
  );
};

export default SignupFormFr;