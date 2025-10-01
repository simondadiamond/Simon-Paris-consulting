import React, { useEffect, useRef } from "react";

const SIB_STYLES_HREF = "https://sibforms.com/forms/end-form/build/sib-styles.css";
const BREVO_MAIN_SRC = "https://sibforms.com/forms/end-form/build/main.js";
const RECAPTCHA_SRC =
  "https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=en";

/**
 * Utility: ensure a single <link> exists in <head> for a given href
 */
function ensureHeadLink(href: string, attr: Record<string, string> = {}) {
  const key = `[data-href="${href}"]`;
  let link = document.head.querySelector<HTMLLinkElement>(`link${key}`);
  if (!link) {
    link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.setAttribute("data-href", href);
    Object.entries(attr).forEach(([k, v]) => link!.setAttribute(k, v));
    document.head.appendChild(link);
  }
  return link;
}

/**
 * Utility: (re)load a script after DOM content is present
 * Removes previous instances to force re-init when needed.
 */
function reloadScript(src: string, attrs: Record<string, string> = {}) {
  // Remove any existing copies so we can re-run Brevo init
  document
    .querySelectorAll(`script[src="${src}"], script[data-src="${src}"]`)
    .forEach((el) => el.parentElement?.removeChild(el));

  const s = document.createElement("script");
  s.src = src;
  s.defer = true;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.body.appendChild(s);
  return s;
}

const SignupForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1) Inject EXACT Brevo HTML (structure & classes untouched)
    const html = `
<!-- Begin Brevo Form -->
<div class="sib-form" style="text-align: center; background-color: #121c2d;">
  <div id="sib-form-container" class="sib-form-container">
    <!-- Error panel (Brevo expects this ID) -->
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949; max-width:540px; display:none;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"/>
        </svg>
        <span class="sib-form-message-panel__inner-text">
          Une erreur est survenue. Veuillez réessayer dans quelques instants.
        </span>
      </div>
    </div>

    <!-- Success panel (Brevo expects this ID) -->
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66; max-width:540px; display:none;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"/>
        </svg>
        <span class="sib-form-message-panel__inner-text">
          Merci! Votre inscription à The Automated SMB est confirmée.
        </span>
      </div>
    </div>

    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(249,250,251,1); max-width:540px; border-radius:20px; border-width:1px; border-color:#c3bebe; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST"
        action="https://c454d84b.sibforms.com/serve/MUIFABPnId223hP1MfXQhUKTZ-Hrpawb-mUK1I6K6Z23awSphtJWBleirm9cn-eH8BUbLtEd0uEGsyiLCLZGhvgXAyp37m1l4q7dUcHqtCA3BDWXEyncJcmoudjdvwBu4O5eu6JEptiOhjBgQef67s3Om8yQZZPmxI_NR9LWPXnzoWogE-z4RtuEZTvK8wz3y2TtSKqiOtQLpVWQ"
        data-type="subscription">

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-size:19px; text-align:center; font-weight:700; font-family:Inter, webFonts; color:#121c2d; background-color:transparent; text-align:center">
            <h1>The Automated SMB</h1>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-size:19px; text-align:center; font-family:Inter, webFonts; color:#139e9b; background-color:transparent; text-align:center">
            <div class="sib-text-form-block">
              <p><strong>L’infolettre pragmatique pour moderniser votre PME</strong></p>
            </div>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:Inter, webFonts; color:#121c2d; background-color:transparent; text-align:left">
            <div class="sib-text-form-block">
              <p>Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.</p>
            </div>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight:700; text-align:left; font-size:16px; font-family:Inter, webFonts; color:#121c2d;" for="EMAIL" data-required="*">
                  Entrez votre adresse courriel pour recevoir l’infolettre :
                </label>
                <div class="entry__field">
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="nom@entreprise.com" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-optin sib-form-block" data-required="true">
            <div class="form__entry entry_mcq">
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:700; text-align:left; font-size:16px; font-family:Inter, webFonts; color:#121c2d;" for="OPT_IN" data-required="*">Opt-in</label>
                <div class="entry__choice">
                  <label>
                    <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                    <span class="checkbox checkbox_tick_positive"></span>
                    <span style="font-size:12px; text-align:left; font-family:Helvetica, sans-serif; color:#121c2d;">
                      <p>Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.</p>
                    </span>
                  </label>
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
              <label class="entry__specification" style="font-size:12px; text-align:left; font-family:Inter, webFonts; color:#111827;">
                Vous pouvez vous désabonner en tout temps.
              </label>
            </div>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-size:1px; text-align:left; font-family:Inter, webFonts; color:#121c2d; background-color:transparent; text-align:left">
            <div class="sib-text-form-block"><p><br></p></div>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="text-align: center">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:center; font-weight:700; font-family:Inter, webFonts; color:#FFFFFF; background-color:#0473d0; border-radius:10px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style="vertical-align:middle; margin-right:6px; height:14px; width:14px;">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"/>
              </svg>
              Je m’abonne gratuitement
            </button>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="g-recaptcha-v3" data-sitekey="6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-" style="display: none"></div>
        </div>

        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="fr">
      </form>
    </div>
  </div>
</div>
<!-- End Brevo Form -->
    `;
    if (containerRef.current) {
      containerRef.current.innerHTML = html;
    }

    // 2) Ensure Brevo CSS exists
    ensureHeadLink(SIB_STYLES_HREF, { "data-brevo": "styles" });
    // (Inter font is optional; your site likely has it already)

    // 3) Set Brevo globals BEFORE loading main.js (they read these on init)
    (window as any).REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
    (window as any).LOCALE = "fr"; // change to "en" on EN page
    (window as any).EMAIL_INVALID_MESSAGE = (window as any).SMS_INVALID_MESSAGE =
      "Adresse courriel invalide. Veuillez vérifier le format (ex. nom@entreprise.com ).";
    (window as any).REQUIRED_ERROR_MESSAGE = "Ce champ ne peut pas être laissé vide. ";
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

    // 4) Ensure reCAPTCHA is present (ok if it already exists)
    if (!document.querySelector(`script[src^="https://www.google.com/recaptcha/api.js"]`)) {
      reloadScript(RECAPTCHA_SRC, { "data-brevo": "recaptcha" });
    }

    // 5) Reload Brevo main.js AFTER the form exists to force binding in SPA
    reloadScript(BREVO_MAIN_SRC, { "data-brevo": "main" });
  }, []);

  return (
    <section className="flex justify-center py-12 px-4">
      {/* Outer wrapper for your design */}
      <div className="w-full max-w-[640px]">
        {/* Injected Brevo form */}
        <div ref={containerRef} />

        {/* CSS-only overrides to avoid “triple box” and add polish */}
        <style>{`
          /* Kill the outer dark bg and extra borders */
          .sib-form { background: transparent !important; }
          #sib-form-container { background: transparent !important; border: 0 !important; box-shadow: none !important; }

          /* Make the inner card look like your site */
          #sib-container {
            background: #f9fafb !important;
            border: 1px solid #e5e7eb !important;
            border-radius: 16px !important;
            padding: 24px !important;
            box-shadow: 0 16px 48px rgba(18, 28, 45, 0.12) !important;
          }

          /* Gradient button, no extra borders */
          .sib-form-block__button {
            background: linear-gradient(90deg, #139E9C, #2280FF) !important;
            border: none !important;
            border-radius: 10px !important;
            padding: 12px 16px !important;
          }

          /* Tidy message panels width/spacing */
          .sib-form-message-panel {
            max-width: 540px !important;
            margin: 0 auto 16px !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default SignupForm;