import React, { useEffect, useRef } from "react";

const SIB_STYLES_HREF = "https://sibforms.com/forms/end-form/build/sib-styles.css";
const BREVO_MAIN_SRC = "https://sibforms.com/forms/end-form/build/main.js";
const RECAPTCHA_SRC =
  "https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-";

function ensureHeadLink(href: string) {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }
}

function reloadScript(src: string) {
  document.querySelectorAll(`script[src="${src}"]`).forEach(el => el.remove());
  const s = document.createElement("script");
  s.src = src;
  s.defer = true;
  document.body.appendChild(s);
}

interface SignupFormProps {
  lang: "fr" | "en";
}

const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sourceUrl = window.location.href;

    // Localized strings
    const text = {
      fr: {
        headline: "The Automated SMB",
        tagline: "L’infolettre pragmatique pour moderniser votre PME",
        desc: "Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.",
        label: "Entrez votre adresse courriel pour recevoir l’infolettre :",
        cta: "Je m’abonne gratuitement",
        optin: "Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.",
        unsubscribe: "Vous pouvez vous désabonner en tout temps."
      },
      en: {
        headline: "The Automated SMB",
        tagline: "The pragmatic newsletter to modernize your SMB",
        desc: "Every week: save time, avoid costly mistakes, and discover AI tools ready for Québec SMBs.",
        label: "Enter your email address to receive the newsletter:",
        cta: "Subscribe for free",
        optin: "Yes, I want to receive the Weekly AI Québec and stay compliant with Law 25.",
        unsubscribe: "You can unsubscribe at any time."
      }
    }[lang];

    // Inject HTML with hidden fields for LANGUAGE + SOURCE_URL
    const html = `
<div class="sib-form" style="text-align:center; background-color:#121c2d;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical" 
         style="text-align:center; background:#f9fafb; max-width:540px; border-radius:20px; border:1px solid #ddd; padding:24px;">
      <form id="sib-form" method="POST"
        action="https://c454d84b.sibforms.com/serve/MUIFALlJ8VO8pgOD8jArLpeuCcN5UNYC64-IgkEN0iOdrexKiXCf_emlc5-37PtMK10GNjgf_SAieFMwXA9YZTejEi0mw7smWX5OP7m8C2a2tIYbd7suJW6UaYT4jdsbdj7lolGXMOXAWjB50xxdkEDq_QHrgeElIJHaNsxBMuZQLg8xjurxx0LiIhcfHaCl3QQM2IezpsIsaWdz"
        data-type="subscription">

        <h1 style="font-size:22px; font-weight:700; color:#121c2d;">${text.headline}</h1>
        <p style="font-size:18px; color:#139e9c; margin-bottom:8px;"><strong>${text.tagline}</strong></p>
        <p style="font-size:14px; color:#374151;">${text.desc}</p>

        <input type="hidden" name="SOURCE_URL" value="${sourceUrl}">
        <input type="hidden" name="LANGUAGE" value="${lang}">
        
        <label for="EMAIL" style="display:block; font-weight:600; margin-top:16px; color:#121c2d;">${text.label}</label>
        <input type="email" id="EMAIL" name="EMAIL" required placeholder="nom@entreprise.com"
               style="width:100%; padding:10px; border:1px solid #ccc; border-radius:8px; margin-bottom:12px;" />

        <label style="display:flex; align-items:start; font-size:13px; color:#374151;">
          <input type="checkbox" id="OPT_IN" name="OPT_IN" value="1" required style="margin-right:8px; margin-top:3px;">
          ${text.optin}
        </label>
        <p style="font-size:12px; color:#6b7280; margin-top:4px;">${text.unsubscribe}</p>

        <button type="submit" class="sib-form-block__button"
          style="margin-top:16px; width:100%; background:linear-gradient(90deg,#139E9C,#2280FF); border:none; color:white; font-weight:600; padding:12px; border-radius:10px;">
          ${text.cta}
        </button>

        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="${lang}">
      </form>
    </div>
  </div>
</div>`;

    if (containerRef.current) containerRef.current.innerHTML = html;

    // Brevo globals
    (window as any).LOCALE = lang;
    (window as any).EMAIL_INVALID_MESSAGE = "Adresse courriel invalide.";
    (window as any).REQUIRED_ERROR_MESSAGE = lang === "fr" ? "Ce champ est requis." : "This field is required.";
    (window as any).GENERIC_INVALID_MESSAGE = (window as any).EMAIL_INVALID_MESSAGE;

    ensureHeadLink(SIB_STYLES_HREF);
    reloadScript(RECAPTCHA_SRC);
    reloadScript(BREVO_MAIN_SRC);
  }, [lang]);

  return <div ref={containerRef} />;
};

export default SignupForm;
