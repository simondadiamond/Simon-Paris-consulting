import React, { useEffect, useRef } from "react";

const SIB_STYLES_HREF = "https://sibforms.com/forms/end-form/build/sib-styles.css";
const BREVO_MAIN_SRC = "https://sibforms.com/forms/end-form/build/main.js";
const RECAPTCHA_SRC =
  "https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=en";

// --- Utility Functions (Keep as is) ---

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

function reloadScript(src: string, attrs: Record<string, string> = {}) {
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

// --- Text Content and Action URLs ---

const translations = {
  fr: {
    headline: "The Automated SMB",
    tagline: "L’infolettre pragmatique pour moderniser votre PME",
    desc: "Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.",
    label: "Entrez votre adresse courriel pour recevoir l’infolettre :",
    cta: "Je m’abonne gratuitement",
    optin: "Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.",
    unsubscribe: "Vous pouvez vous désabonner en tout temps.",
    languageCode: "fr", // For the hidden field
    placeholder: "nom@entreprise.com",
    // FR Brevo Form Action URL
    actionUrl: "https://c454d84b.sibforms.com/serve/MUIFAKOL2ES0iVRU7f9TS4DJeiNvWgNZgTAuWAFzzECJN-5Mr1LpCizF0cpTEHd24bAGTIdmu6CW1xNiN05WCO6bFHF-KsUxjmrjJSr0loIrevetQFMpTNrsV20S9NOpJgzf5bJXPSRCu5zu_RkFmovzeVCA81lHBq9k0N8Fy9jzjrq9uSS8DD2rcrIMyJtR-rs7s93aOBQrUrF-",
    errorMessages: {
      // Messages for the user (both client-side validation & top-level panels)
      emailInvalid: "Adresse courriel invalide. Veuillez vérifier le format (ex. nom@entreprise.com ).",
      required: "Ce champ ne peut pas être laissé vide. ",
      genericInvalid: "Adresse courriel invalide. Veuillez vérifier le format (ex. nom@entreprise.com ).",
      requiredCode: "Veuillez choisir un indicatif de pays",
      success: "Merci! Votre abonnement à The Automated SMB est confirmé.",
      apiError: "Une erreur s'est produite. Veuillez réessayer dans quelques instants.",
    }
  },
  en: {
    headline: "The Automated SMB",
    tagline: "The pragmatic newsletter to modernize your SMB",
    desc: "Every week: save time, avoid costly mistakes, and discover AI tools ready for Québec SMBs.",
    label: "Enter your email address to receive the newsletter:",
    cta: "Subscribe for free",
    optin: "Yes, I want to receive the Weekly AI Québec and stay compliant with Law 25.",
    unsubscribe: "You can unsubscribe at any time.",
    languageCode: "en", // For the hidden field
    placeholder: "name@business.com",
    // EN Brevo Form Action URL
    actionUrl: "https://c454d84b.sibforms.com/serve/MUIFAIUIPgH0AIhOXpYGKM0b2Egfo-8rUwsW8BU7q_uwwtfZA4KeVj2CrS_ouvczzqoToEYLxUT9xsm61UbdRp1X9hJldRtUAJKvR7-WDYWIx3zD2tfBaTBG8l70MxrMPCd_xhL9AIvWyhjupByZ-2UPVrZQD7gudzxUeqjUGULD6TJ5WMH0NBSLFP47X8yaIMCJmlA2deX3NV-E",
    errorMessages: {
      // Messages for the user (both client-side validation & top-level panels)
      emailInvalid: "Invalid email address. Please check the format (ex. name@business.com).",
      required: "This field cannot be left blank. ",
      genericInvalid: "Invalid email address. Please check the format (ex. name@business.com).",
      requiredCode: "Please choose a country code",
      success: "Thank you! Your subscription to The Automated SMB is confirmed.",
      apiError: "An error occurred. Please try again in a few moments.",
    }
  },
};

/**
 * Builds the Brevo HTML with dynamic content, translations, and error messages.
 */
const getFormHtml = (lang: 'fr' | 'en', sourceUrl: string) => {
  const text = translations[lang];

  return `
<div class="sib-form" style="text-align: center; background-color: #121c2d;">
  <div id="sib-form-container" class="sib-form-container">
    
    <!-- ERROR MESSAGE PANEL (General API Error) -->
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949; max-width:540px; display:none;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">
          ${text.errorMessages.apiError}
        </span>
      </div>
    </div>

    <!-- SUCCESS MESSAGE PANEL -->
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66; max-width:540px; display:none;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">
          ${text.errorMessages.success}
        </span>
      </div>
    </div>

    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(249,250,251,1); max-width:540px; border-radius:20px; border-width:1px; border-color:#c3bebe; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST"
        action="${text.actionUrl}"
        data-type="subscription">

        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-size:19px; text-align:center; font-weight:700; font-family:Inter, webFonts; color:#121c2d; background-color:transparent; text-align:center">
            <h1>${text.headline}</h1>
          </div>
        </div>

        <div style="padding: 16px 0 8px 0;">
          <div class="sib-form-block" style="font-size:19px; text-align:center; font-family:Inter, webFonts; color:#139e9b; background-color:transparent; text-align:center">
            <div class="sib-text-form-block">
              <p><strong>${text.tagline}</strong></p>
            </div>
          </div>
        </div>

        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:Inter, webFonts; color:#121c2d; background-color:transparent; text-align:left">
            <div class="sib-text-form-block">
              <p>${text.desc}</p>
            </div>
          </div>
        </div>
        
        <input type="hidden" id="SOURCE_URL" name="SOURCE_URL" value="${sourceUrl}" />
        <input type="hidden" id="LANGUAGE" name="LANGUAGE" value="${text.languageCode}" />
        
        <div style="padding: 10px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight:700; text-align:left; font-size:16px; font-family:Inter, webFonts; color:#121c2d;" for="EMAIL" data-required="*">
                  ${text.label} *
                </label>
                <div class="entry__field">
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="${text.placeholder}" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>

        <div style="padding: 10px 0;">
          <div class="sib-optin sib-form-block" data-required="true">
            <div class="form__entry entry_mcq">
              <div class="form__label-row">
                <label class="entry__label" style="font-weight:700; text-align:left; font-size:16px; font-family:Inter, webFonts; color:#121c2d;" for="OPT_IN" data-required="*">Opt-in*</label>
                <div class="entry__choice">
                  <label>
                    <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                    <span class="checkbox checkbox_tick_positive"></span>
                    <span style="font-size:12px; text-align:left; font-family:Helvetica, sans-serif; color:#121c2d;">
                      <p>${text.optin}</p>
                    </span>
                  </label>
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
              <label class="entry__specification" style="font-size:12px; text-align:left; font-family:Inter, webFonts; color:#111827;">
                ${text.unsubscribe}
              </label>
            </div>
          </div>
        </div>

        <div style="padding: 20px 0;">
          <div class="sib-form-block" style="text-align: center">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:center; font-weight:700; font-family:Inter, webFonts; color:#FFFFFF; background-color:#0473d0; border-radius:10px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style="vertical-align:middle; margin-right:6px; height:14px; width:14px;">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"/>
              </svg>
              ${text.cta}
            </button>
          </div>
        </div>

        <div style="padding: 0;">
          <div class="g-recaptcha-v3" data-sitekey="6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-" style="display: none"></div>
        </div>

        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="${text.languageCode}">
      </form>
    </div>
  </div>
</div>
`;
};


// --- Main Component ---

const SignupForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 0) Determine language based on URL (path starts with /en or default to /fr)
    const path = window.location.pathname;
    const lang: 'fr' | 'en' = path.startsWith('/en') ? 'en' : 'fr';
    const sourceUrl = window.location.href;
    const text = translations[lang]; // Get current language content

    // 1) Inject Brevo HTML
    const html = getFormHtml(lang, sourceUrl);
    if (containerRef.current) {
      containerRef.current.innerHTML = html;
    }

    // 2) Ensure Brevo CSS exists
    ensureHeadLink(SIB_STYLES_HREF, { "data-brevo": "styles" });
    
    // 3) Set Brevo globals (now fully dynamic based on language)
    (window as any).LOCALE = lang; // DYNAMICALLY SETS LOCALE

    (window as any).REQUIRED_CODE_ERROR_MESSAGE = text.errorMessages.requiredCode;
    (window as any).EMAIL_INVALID_MESSAGE = (window as any).SMS_INVALID_MESSAGE = text.errorMessages.emailInvalid;
    (window as any).REQUIRED_ERROR_MESSAGE = text.errorMessages.required;
    (window as any).GENERIC_INVALID_MESSAGE = text.errorMessages.genericInvalid;
    
    // These are boilerplate/non-visible in this form
    (window as any).translation = {
      common: {
        selectedList: "{quantity} list selected",
        selectedLists: "{quantity} lists selected",
        selectedOption: "{quantity} selected",
        selectedOptions: "{quantity} selected",
      },
    };
    (window as any).AUTOHIDE = Boolean(0);

    // 4) Ensure reCAPTCHA is present
    // Reloading reCAPTCHA ensures the 'hl' parameter (language) is correct
    const recaptchaSrc = `https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=${lang}`;
    reloadScript(recaptchaSrc, { "data-brevo": "recaptcha" });

    // 5) Reload Brevo main.js AFTER the form exists to force binding in SPA
    reloadScript(BREVO_MAIN_SRC, { "data-brevo": "main" });
  }, []);

  return (
    <section className="flex justify-center py-12 px-4">
      <div className="w-full max-w-[720px]"> {/* WIDER CONTAINER: max-w-[720px] */}
        <div ref={containerRef} />

        {/* --- FINAL CSS Overrides for Aesthetics, Spacing, and Validation --- */}
        <style>{`
          /* General Container Styling */
          .sib-form { background: transparent !important; }
          #sib-form-container { background: transparent !important; border: 0 !important; box-shadow: none !important; }
          #sib-container {
            background: #f9fafb !important;
            border: 1px solid #e5e7eb !important;
            border-radius: 16px !important;
            padding: 20px !important; /* Mobile padding */
            max-width: 600px !important; 
            margin: 0 auto !important;
            box-shadow: 0 16px 48px rgba(18, 28, 45, 0.12) !important;
          }

          /* Desktop Padding */
          @media (min-width: 640px) {
            #sib-container {
              padding: 32px !important; 
            }
          }

          /* Typography and Opt-in Specifics */
          #sib-container h1 {
            font-size: 28px !important;
            line-height: 1.2 !important;
            margin-bottom: 0px !important; 
          }
          
          /* Remove the "Vous pouvez vous désabonner..." text */
          #sib-container .entry__specification {
            display: none !important;
          }

          /* --- OPT-IN SPACING FIX (Using your requested values) --- */
          
          /* Target Opt-in field label */
          #sib-container .sib-optin .entry__label {
            margin-bottom: 2px !important;
          }

          /* Target Opt-in field choice (checkbox and text) */
          #sib-container .sib-optin .entry__choice {
            margin-top: 2px !important;
          }

          /* CRITICAL FIX: Ensure the label row itself has no default margin */
          #sib-container .sib-optin .form__label-row {
            margin-bottom: 0 !important;
          }

          /* --- Validation Error Styling FIX (Modern/Clean Look) --- */
          
          /* Target all validation panels (primary and top form messages) */
          .entry__error, 
          .sib-form-message-panel {
            /* Remove Brevo's ugly red/pink background and border */
            background-color: transparent !important; 
            border: none !important;
            border-radius: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            
            /* Set font and color for a clean inline look */
            font-size: 14px !important;
            font-weight: 500 !important;
            color: #ef4444 !important; /* Tailwind's red-500 */
            text-align: left !important;
            
            /* Reduce unnecessary top/bottom padding/margin on the error elements themselves */
            margin-top: 4px !important;
            margin-bottom: 4px !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          
          /* Ensure the top message panel respects the max width and looks clean */
          #error-message, #success-message {
            max-width: 600px !important;
            margin: 0 auto 16px !important; /* Restore a little space above form */
            padding: 12px 16px !important; /* Add back padding to the message panel container */
            border: 1px solid #ef4444 !important;
            border-radius: 8px !important;
            background-color: #fef2f2 !important; /* Light red background */
            color: #b91c1c !important; /* Darker red text */
          }
          #success-message {
            border: 1px solid #10b981 !important; /* Green border */
            background-color: #ecfdf5 !important; /* Light green background */
            color: #065f46 !important; /* Dark green text */
          }


          /* Button Styling */
          .sib-form-block__button {
            background: linear-gradient(90deg, #139E9C, #2280FF) !important;
            border: none !important;
            border-radius: 10px !important;
            padding: 12px 16px !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default SignupForm;
