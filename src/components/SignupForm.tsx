import React, { useEffect, useRef } from "react";

const SIB_STYLES = "https://sibforms.com/forms/end-form/build/sib-styles.css";
const INTER_FONT = "https://fonts.googleapis.com/css2?family=Inter&display=swap";
const BREVO_JS = "https://sibforms.com/forms/end-form/build/main.js";
const RECAPTCHA_SRC = "https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=fr";

const ensureHeadLink = (href: string, attrName: string) => {
  if (!document.querySelector(`link[data-brevo="${attrName}"]`)) {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = href;
    l.setAttribute("data-brevo", attrName);
    document.head.appendChild(l);
  }
};

const loadOnce = (src: string) => {
  const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
  if (existing) return existing;
  const s = document.createElement("script");
  s.src = src;
  s.defer = true;
  document.body.appendChild(s);
  return s;
};

const reloadBrevoMain = () => {
  // Remove any existing Brevo script so it re-initializes on our injected DOM
  document.querySelectorAll(`script[src*="sibforms.com/forms/end-form/build/main.js"]`).forEach(n => n.parentElement?.removeChild(n));
  const s = document.createElement("script");
  s.src = BREVO_JS;
  s.defer = true;
  document.body.appendChild(s);
  return s;
};

const SignupForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1) Ensure CSS in <head>
    ensureHeadLink(SIB_STYLES, "sib-styles");
    ensureHeadLink(INTER_FONT, "inter-font");

    // 2) Global messages Brevo expects (FR)
    (window as any).REQUIRED_CODE_ERROR_MESSAGE = "Veuillez choisir un indicatif.";
    (window as any).LOCALE = "fr";
    (window as any).EMAIL_INVALID_MESSAGE =
      (window as any).SMS_INVALID_MESSAGE =
        "Adresse courriel invalide. Veuillez vérifier le format (ex. nom@entreprise.com ).";
    (window as any).REQUIRED_ERROR_MESSAGE = "Ce champ ne peut pas être laissé vide.";
    (window as any).GENERIC_INVALID_MESSAGE =
      "Adresse courriel invalide. Veuillez vérifier le format (ex. nom@entreprise.com ).";
    (window as any).translation = {
      common: {
        selectedList: "{quantity} list selected",
        selectedLists: "{quantity} lists selected",
        selectedOption: "{quantity} selected",
        selectedOptions: "{quantity} selected",
      },
    };
    (window as any).AUTOHIDE = Boolean(0);

    // 3) Load reCAPTCHA v3 (FR) if missing
    if (!document.querySelector(`script[src^="https://www.google.com/recaptcha/api.js?render="]`)) {
      loadOnce(RECAPTCHA_SRC);
    }

    // 4) After the form is in the DOM, set hidden SOURCE_URL and (re)load Brevo main.js
    const t = setTimeout(() => {
      try {
        const formRoot = containerRef.current;
        if (!formRoot) return;

        // populate SOURCE_URL
        const srcUrlInput = formRoot.querySelector<HTMLInputElement>('#SOURCE_URL, input[name="SOURCE_URL"]');
        if (srcUrlInput) srcUrlInput.value = window.location.href;

        // Ensure LANGUAGE hidden is "fr"
        const langInput = formRoot.querySelector<HTMLInputElement>('#LANGUAGE, input[name="LANGUAGE"]');
        if (langInput) langInput.value = "fr";

        // Re-initialize Brevo on this dynamic DOM
        reloadBrevoMain();
      } catch (e) {
        console.warn("Brevo init error:", e);
      }
    }, 0);

    return () => clearTimeout(t);
  }, []);

  return (
    <section className="flex justify-center py-12 px-4">
      <div ref={containerRef} className="w-full max-w-xl">
        <div
          dangerouslySetInnerHTML={{
            __html: `
<!-- INLINE OVERRIDES ONLY (no structure changes) -->
<style>
  /* Card feel */
  #sib-container {
    max-width: 540px !important;
    border-radius: 16px !important;
    background: #f9fafb !important;
    box-shadow: 0 24px 64px rgba(18,28,45,0.14) !important;
    padding: 24px !important;
    margin: 0 auto !important;
  }
  /* Typography */
  #sib-container h1 {
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif !important;
    font-size: 1.75rem !important;
    font-weight: 600 !important;
    color: #121c2d !important;
    margin: 0 0 8px 0 !important;
  }
  #sib-container p strong {
    color: #139e9c !important;
    font-size: 1.125rem !important;
  }
  #sib-container .sib-text-form-block p {
    color: #4b5563 !important;
  }
  /* Inputs */
  #sib-container input[type="email"],
  #sib-container input[type="text"] {
    border-radius: 10px !important;
    border: 1px solid #d1d5db !important;
    padding: 12px 14px !important;
    font-size: 0.95rem !important;
    width: 100% !important;
    background: #fff !important;
  }
  /* Consent layout */
  #sib-container .entry__choice label {
    display: flex !important;
    gap: 8px !important;
    align-items: flex-start !important;
    color: #4b5563 !important;
    font-size: 0.9rem !important;
  }
  /* Button */
  .sib-form-block__button {
    width: 100% !important;
    border-radius: 10px !important;
    background: linear-gradient(90deg,#139E9C,#2280FF) !important;
    color: #fff !important;
    font-weight: 600 !important;
    font-size: 1rem !important;
    padding: 14px !important;
    transition: opacity .2s ease !important;
  }
  .sib-form-block__button:hover { opacity: .9 !important; }

  /* Hide custom fields cleanly */
  #SOURCE_URL,
  #LANGUAGE,
  .input--hidden {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
  }

  /* Remove any background color Brevo wrapper might add */
  .sib-form {
    background: transparent !important;
  }
</style>

<!-- PASTE YOUR FULL BREVO FRENCH HTML BLOCK BELOW **UNCHANGED** -->
<!-- IMPORTANT: Keep *all* wrapper divs and classes (sib-form, sib-input, form__entry, entry__error, etc.) -->
<!-- Also keep the hidden fields (LANGUAGE, SOURCE_URL, email_address_check). We will set their values after mount. -->

<!-- ▼▼▼ BEGIN: Brevo Full HTML (FR) — PASTE BELOW ▼▼▼ -->

<!-- Begin Brevo Form -->
<div class="sib-form" style="text-align: center;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949; max-width:540px; display:none;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <span class="sib-form-message-panel__inner-text">Une erreur est survenue. Veuillez réessayer dans quelques instants.</span>
      </div>
    </div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66; max-width:540px; display:none;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <span class="sib-form-message-panel__inner-text">Merci! Votre inscription à The Automated SMB est confirmée.</span>
      </div>
    </div>

    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(249,250,251,1); max-width:540px; border-radius:20px; border-width:1px; border-color:#c3bebe; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST"
        action="https://c454d84b.sibforms.com/serve/MUIFANWtc_ZXENCFgOE0x25spvjMqZh3YvPPNgc8i-eR71nYany6EABptSdMXFEn3gsK4AvkFnyWenuH7kfxzbpQSkxl-RDoLp9UWYrVVJPUx9pjl2vqasvE-DQIJLOZK3Xr7pWvyv2oOxMXUtCcq1d1FBiw35_LYA6uOpehokL7dT_ylL7HtHehEoDxs7d1P2hEy43TSEaIvXD5"
        data-type="subscription">

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-size:19px; text-align:center; font-weight:700; font-family:Inter, webFonts; color:#121c2d; background-color:transparent;">
            <h1>The Automated SMB</h1>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-size:19px; text-align:center; font-family:Inter, webFonts; color:#139e9b; background-color:transparent;">
            <div class="sib-text-form-block">
              <p><strong>L’infolettre pragmatique pour moderniser votre PME</strong></p>
            </div>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:Inter, webFonts; color:#121c2d; background-color:transparent;">
            <div class="sib-text-form-block">
              <p>Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.</p>
            </div>
          </div>
        </div>

        <!-- Hidden SOURCE_URL (we will set its value via JS) -->
        <input type="hidden" id="SOURCE_URL" name="SOURCE_URL" value="" />

        <!-- Hidden LANGUAGE (FR) -->
        <input type="hidden" id="LANGUAGE" name="LANGUAGE" value="fr" />

        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight:700; text-align:left; font-size:16px; font-family:Inter, webFonts; color:#121c2d;" for="EMAIL" data-required="*">Entrez votre adresse courriel pour recevoir l’infolettre :</label>
                <div class="entry__field">
                  <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="nom@entreprise.com" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-optin sib-form-block" data-required="true">
            <div class="form__entry entry_mcq">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight:700; text-align:left; font-size:16px; font-family:Inter, webFonts; color:#121c2d;" for="OPT_IN" data-required="*">Opt-in</label>
                <div class="entry__choice">
                  <label>
                    <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                    <span class="checkbox checkbox_tick_positive" style="margin-left:"></span>
                    <span style="font-size:12px; text-align:left; font-family:Helvetica, sans-serif; color:#121c2d;"><p>Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.</p></span>
                  </label>
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
              <label class="entry__specification" style="font-size:12px; text-align:left; font-family:Inter, webFonts; color:#111827;">Vous pouvez vous désabonner en tout temps.</label>
            </div>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="text-align: center">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:center; font-weight:700; font-family:Inter, webFonts; color:#FFFFFF; border-radius:10px; border-width:0px;" form="sib-form" type="submit">
              Je m’abonne gratuitement
            </button>
          </div>
        </div>

        <!-- Honeypot (keep) -->
        <input type="text" name="email_address_check" value="" class="input--hidden">

        <!-- Locale (FR) -->
        <input type="hidden" name="locale" value="fr">
      </form>
    </div>
  </div>
</div>
<!-- End Brevo Form -->

<!-- ▲▲▲ END: Brevo Full HTML (FR) — DO NOT EDIT STRUCTURE ▲▲▲ -->
`,
          }}
        />
      </div>
    </section>
  );
};

export default SignupForm;
