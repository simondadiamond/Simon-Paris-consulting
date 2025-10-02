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
<!-- START - We recommend to place the below code in head tag of your website html  -->
<style>
  @font-face {
    font-display: block;
    font-family: Roboto;
    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 600;
    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 700;
    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
  }

  #sib-container input:-ms-input-placeholder {
    text-align: left;
    font-family: Inter, webFonts;
    color: #f9fafb;
  }

  #sib-container input::placeholder {
    text-align: left;
    font-family: Inter, webFonts;
    color: #f9fafb;
  }

  #sib-container textarea::placeholder {
    text-align: left;
    font-family: Inter, webFonts;
    color: #f9fafb;
  }

  #sib-container a {
    text-decoration: underline;
    color: #2BB2FC;
  }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&amp;&amp;display=swap">
<!--  END - We recommend to place the above code in head tag of your website html -->

<!-- Begin Brevo Form -->
<div class="sib-form" style="text-align: center; background-color: transparent;">
  <div id="sib-form-container" class="sib-form-container">

    <!-- Error -->
    <div id="error-message" class="sib-form-message-panel" 
         style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; 
                color:#661d1d; background-color:#ffeded; border-radius:3px; 
                border-color:#ff4949; max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        Une erreur est survenue. Veuillez réessayer.
      </div>
    </div>

    <!-- Success -->
    <div id="success-message" class="sib-form-message-panel" 
         style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; 
                color:#085229; background-color:#e7faf0; border-radius:3px; 
                border-color:#13ce66; max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        Merci! Votre inscription à The Automated SMB est confirmée.
      </div>
    </div>

    <!-- Container -->
    <div id="sib-container" class="sib-container--large sib-container--vertical" 
         style="text-align:center; background-color:#f9fafb; max-width:540px; 
                border-radius:20px; border:1px solid #c3bebe; padding:20px;">

      <form id="sib-form" method="POST"
        action="https://c454d84b.sibforms.com/serve/MUIFALlJ8VO8pgOD8jArLpeuCcN5UNYC64-IgkEN0iOdrexKiXCf_emlc5-37PtMK10GNjgf_SAieFMwXA9YZTejEi0mw7smWX5OP7m8C2a2tIYbd7suJW6UaYT4jdsbdj7lolGXMOXAWjB50xxdkEDq_QHrgeElIJHaNsxBMuZQLg8xjurxx0LiIhcfHaCl3QQM2IezpsIsaWdz"
        data-type="subscription">

        <!-- Headings -->
        <h1 style="font-size:22px; font-weight:700; color:#121c2d; margin-bottom:8px;">
          The Automated SMB
        </h1>
        <p style="font-size:18px; font-weight:600; color:#139e9c; margin-bottom:8px;">
          L’infolettre pragmatique pour moderniser votre PME
        </p>
        <p style="font-size:14px; color:#4b5563; margin-bottom:16px;">
          Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.
        </p>

        <!-- Email -->
        <label for="EMAIL" style="font-weight:600; display:block; margin-bottom:4px; color:#121c2d;">
          Adresse courriel
        </label>
        <input class="input" type="email" id="EMAIL" name="EMAIL" 
               placeholder="nom@entreprise.com" required
               style="width:100%; padding:10px; border:1px solid #d1d5db; border-radius:8px; margin-bottom:12px;">

        <!-- Consent -->
        <label style="display:flex; align-items:flex-start; gap:6px; font-size:13px; color:#4b5563; margin-bottom:16px;">
          <input type="checkbox" class="input_replaced" id="OPT_IN" name="OPT_IN" value="1" required>
          Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.
        </label>

        <!-- Submit -->
        <button class="sib-form-block__button sib-form-block__button-with-loader"
                type="submit"
                style="width:100%; padding:12px; border-radius:10px; font-weight:600; font-size:16px; 
                       color:#fff; background:linear-gradient(90deg,#139E9C,#2280FF);">
          Je m’abonne gratuitement
        </button>

        <!-- Hidden fields -->
        <input type="hidden" name="LANGUAGE" value="fr">
        <input type="hidden" name="SOURCE_URL" value="https://simonparis.ca/fr/newsletter">
        <input type="text" name="email_address_check" value="" class="input--hidden" style="display:none;">
        <!-- keep Brevo's original locale -->
        <input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>

<!-- Scripts -->
<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
<script src="https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=fr" async defer></script>
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
