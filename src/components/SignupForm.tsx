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

type BrevoTranslation = {
  common: {
    selectedList: string;
    selectedLists: string;
    selectedOption: string;
    selectedOptions: string;
  };
};

type BrevoWindow = Window & {
  REQUIRED_CODE_ERROR_MESSAGE?: string;
  LOCALE?: "fr" | "en";
  EMAIL_INVALID_MESSAGE?: string;
  SMS_INVALID_MESSAGE?: string;
  REQUIRED_ERROR_MESSAGE?: string;
  GENERIC_INVALID_MESSAGE?: string;
  translation?: BrevoTranslation;
  AUTOHIDE?: boolean;
};

// --- Brevo Configuration Data ---

const FORM_ACTION_URLS = {
  // French Form Action URL (original default)
  fr: "https://c454d84b.sibforms.com/serve/MUIFAKOL2ES0iVRU7f9TS4DJeiNvWgNZgTAuWAFzzECJN-5Mr1LpCizF0cpTEHd24bAGTIdmu6CW1xNiN05WCO6bFHF-KsUxjmrjJSr0loIrevetQFMpTNrsV20S9NOpJgzf5bJXPSRCu5zu_RkFmovzeVCA81lHBq9k0N8Fy9jzjrq9uSS8DD2rcrIMyJtR-rs7s93aOBQrUrF-",
  // English Form Action URL (from user reference)
  en: "https://c454d84b.sibforms.com/serve/MUIFAIUIPgH0AIhOXpYGKM0b2Egfo-8rUwsW8BU7q_uwwtfZA4KeVj2CrS_ouvczzqoToEYLxUT9xsm61UbdRp1X9hJldRtUAJKvR7-WDYWIx3zD2tfBaTBG8l70MxrMPCd_xhL9AIvWyhjupByZ-2UPVrZQD7gudzxUeqjUGULD6TJ5WMH0NBSLFP47X8yaIMCJmlA2deX3NV-E",
};

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
  },
};

/**
 * Builds the Brevo HTML with dynamic content and translations.
 */
const getFormHtml = (lang: 'fr' | 'en', sourceUrl: string) => {
  const text = translations[lang];
  // --- EDITED: Select the correct action URL based on language ---
  const formActionUrl = FORM_ACTION_URLS[lang];


  return `
<div class="sib-form" style="text-align: center; /* background-color: #121c2d; REMOVED to allow CSS to control background */">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949; max-width:540px; display:none;">
    </div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66; max-width:540px; display:none;">
    </div>

    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(249,250,251,1); max-width:540px; border-radius:20px; border-width:1px; border-color:#c3bebe; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST"
        action="${formActionUrl}"
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
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="${lang === 'fr' ? 'nom@entreprise.com' : 'name@business.com'}" data-required="true" required />
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
    // 0) Determine language based on URL (path starts with /en or /fr)
    const path = window.location.pathname;
    const lang: 'fr' | 'en' = path.startsWith('/en') ? 'en' : 'fr';
    const sourceUrl = window.location.href;

    // 1) Inject Brevo HTML
    const html = getFormHtml(lang, sourceUrl);
    if (containerRef.current) {
      containerRef.current.innerHTML = html;
    }

    // 2) Ensure Brevo CSS exists
    ensureHeadLink(SIB_STYLES_HREF, { "data-brevo": "styles" });
    
    // 3) Set Brevo globals
    
    // --- EDITED: Dynamic Validation Messages based on language ---
    const requiredErrorMsg =
      lang === "en"
        ? "This field cannot be left blank."
        : "Ce champ ne peut pas être laissé vide.";

    const emailInvalidMsg =
      lang === "en"
        ? "Invalid email address. Please check the format (ex. name@business.com)."
        : "Adresse courriel invalide. Veuillez vérifier le format (ex. nom@entreprise.com).";

    const brevoWindow = window as BrevoWindow;

    brevoWindow.REQUIRED_CODE_ERROR_MESSAGE =
      lang === "en"
        ? "Please choose a country code"
        : "Veuillez choisir un indicatif de pays";

    brevoWindow.LOCALE = lang; // DYNAMICALLY SETS LOCALE

    brevoWindow.EMAIL_INVALID_MESSAGE = emailInvalidMsg;
    brevoWindow.SMS_INVALID_MESSAGE = emailInvalidMsg;
    brevoWindow.REQUIRED_ERROR_MESSAGE = requiredErrorMsg;
    brevoWindow.GENERIC_INVALID_MESSAGE = emailInvalidMsg;

    brevoWindow.translation = {
      common: {
        selectedList: "{quantity} list selected",
        selectedLists: "{quantity} lists selected",
        selectedOption: "{quantity} selected",
        selectedOptions: "{quantity} selected",
      },
    };
    brevoWindow.AUTOHIDE = Boolean(0);

    // 4) Ensure reCAPTCHA is present
    if (!document.querySelector(`script[src^="https://www.google.com/recaptcha/api.js"]`)) {
      reloadScript(RECAPTCHA_SRC, { "data-brevo": "recaptcha" });
    }

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
          
          /* Ensure input fields have better padding/border-radius */
          #sib-container .input {
            padding: 12px 16px !important;
            border-radius: 8px !important;
          }
          /* Add a subtle focus style */
          #sib-container .input:focus {
             border-color: #2280FF !important; /* Blue accent on focus */
             box-shadow: 0 0 0 3px rgba(34, 128, 255, 0.2) !important;
             outline: none !important;
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
          .sib-form-message-panel {
            max-width: 600px !important;
            margin: 0 auto 16px !important; /* Restore a little space above form */
            padding: 12px 16px !important; /* Add back padding to the message panel container */
            border-radius: 8px !important;
          }
          
          /* Error Message Panel */
          #error-message {
            border: 1px solid #ef4444 !important;
            background-color: #fef2f2 !important; /* Light red background */
            color: #b91c1c !important; /* Darker red text */
          }
          
          /* Success Message Panel (Added for visual consistency) */
          #success-message {
            border: 1px solid #13ce66 !important;
            background-color: #e7faf0 !important; /* Light green background */
            color: #085229 !important; /* Darker green text */
          }


          /* Button Styling */
          .sib-form-block__button {
            /* Custom Gradient */
            background: linear-gradient(to right, #2280FF, #139E9C) !important;
            /* Enhanced Aesthetics */
            width: 100% !important; /* Make it full width */
            padding: 14px 24px !important;
            font-size: 18px !important;
            border: none !important;
            border-radius: 10px !important;
            transition: opacity 0.2s, transform 0.1s, box-shadow 0.2s !important;
            box-shadow: 0 4px 10px rgba(34, 128, 255, 0.2) !important;
          }
          
          .sib-form-block__button:hover {
             opacity: 0.95 !important;
             transform: translateY(-1px) !important;
             box-shadow: 0 6px 15px rgba(34, 128, 255, 0.4) !important;
          }

          .sib-form-block__button:active {
             transform: translateY(1px) !important;
             box-shadow: 0 2px 5px rgba(34, 128, 255, 0.1) !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default SignupForm;
