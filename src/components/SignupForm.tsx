// src/components/SignupForm.tsx
import React, { useEffect, useRef } from "react";

type Lang = "fr"; // keep FR only for now; we'll add 'en' after it works

const RECAPTCHA_SITE_KEY = "6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-";
// IMPORTANT: keep the exact action URL from Brevo (FR form)
const BREVO_POST_URL =
  "https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO";

function ensureHeadLink(hrefContains: string, href: string) {
  if (!document.querySelector<HTMLLinkElement>(`link[href*="${hrefContains}"]`)) {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = href;
    document.head.appendChild(l);
  }
}

const SignupForm: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1) Ensure Brevo styles in <head>
    ensureHeadLink(
      "sib-styles.css",
      "https://sibforms.com/forms/end-form/build/sib-styles.css"
    );
    ensureHeadLink(
      "fonts.googleapis.com/css2?family=Inter",
      "https://fonts.googleapis.com/css2?family=Inter&display=swap"
    );

    // 2) Put Brevo’s required globals on window BEFORE main.js
    (window as any).REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
    (window as any).LOCALE = "fr";
    (window as any).EMAIL_INVALID_MESSAGE =
      (window as any).SMS_INVALID_MESSAGE =
        "Adresse courriel invalide. Veuillez vérifier le format (ex. nom@entreprise.com ).";
    (window as any).REQUIRED_ERROR_MESSAGE =
      "Ce champ ne peut pas être laissé vide. ";
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

    // 3) Inject the FULL Brevo scaffold (unchanged IDs/classes)
    if (mountRef.current) {
      mountRef.current.innerHTML = `
<div class="sib-form" style="text-align: center; background-color: #121c2d;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"></path>
        </svg>
        <span class="sib-form-message-panel__inner-text">
          Une erreur est survenue. Veuillez réessayer dans quelques instants.
        </span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"></path>
        </svg>
        <span class="sib-form-message-panel__inner-text">
          Merci! Votre inscription à The Automated SMB est confirmée.
        </span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(249,250,251,1); max-width:540px; border-radius:20px; border-width:1px; border-color:#c3bebe; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST" action="${BREVO_POST_URL}" data-type="subscription" novalidate="true">
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
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:700; text-align:left; font-size:16px; font-family:Inter, webFonts; color:#121c2d;" for="EMAIL" data-required="*">Entrez votre adresse courriel pour recevoir l’infolettre :</label>
                <div class="entry__field">
                  <input class="input" type="email" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="nom@entreprise.com" data-required="true" required />
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
                    <span style="font-size:12px; font-family:Helvetica, sans-serif; color:#121c2d;"><p>Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.</p></span>
                  </label>
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
              <label class="entry__specification" style="font-size:12px; text-align:left; font-family:Inter, webFonts; color:#111827;">Vous pouvez vous désabonner en tout temps.</label>
            </div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="text-align:center">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; font-weight:700; font-family:Inter, webFonts; color:#FFFFFF; background: linear-gradient(90deg,#139E9C,#2280FF); border-radius:10px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" aria-hidden="true"></svg>
              Je m’abonne gratuitement
            </button>
          </div>
        </div>

        <div style="padding: 16px 0;">
          <div class="g-recaptcha-v3" data-sitekey="${RECAPTCHA_SITE_KEY}" style="display:none"></div>
        </div>

        <input type="text" name="email_address_check" value="" class="input--hidden" />
        <input type="hidden" name="locale" value="fr" />
      </form>
    </div>
  </div>
</div>`;
    }

    // 4) Load reCAPTCHA + Brevo main.js (only once)
    const alreadyMain = document.querySelector<HTMLScriptElement>('script[src*="sibforms.com/forms/end-form/build/main.js"]');
    const alreadyRecap = document.querySelector<HTMLScriptElement>('script[src*="www.google.com/recaptcha/api.js"]');

    const recaptcha = alreadyRecap ?? Object.assign(document.createElement("script"), {
      src: `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&hl=fr`,
      async: true,
      defer: true,
    });

    const main = alreadyMain ?? Object.assign(document.createElement("script"), {
      src: "https://sibforms.com/forms/end-form/build/main.js",
      defer: true,
    });

    if (!alreadyRecap) document.body.appendChild(recaptcha);
    if (!alreadyMain) document.body.appendChild(main);

    // 5) Basic diagnostics
    const logOnce = () => {
      const sib = (window as any).sib;
      const form = mountRef.current?.querySelector("#sib-form");
      // eslint-disable-next-line no-console
      console.log("[Brevo] sib loaded:", !!sib, "| form present:", !!form);
    };
    main.addEventListener("load", () => setTimeout(logOnce, 50));
    setTimeout(logOnce, 500);

    return () => {
      // don't remove global scripts on unmount (could be shared)
    };
  }, []);

  // Off-white card with shadow around Brevo’s block
  return (
    <section className="w-full bg-[#f5f7fb] py-12">
      <div className="mx-auto max-w-[760px] rounded-2xl bg-white p-6 shadow-[0_24px_60px_rgba(18,28,45,0.12)] sm:p-10">
        <div ref={mountRef} />
      </div>
    </section>
  );
};

export default SignupForm;
