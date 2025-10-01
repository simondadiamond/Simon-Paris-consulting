import React, { useEffect, useRef } from "react";

type SignupFormLang = "en" | "fr";

interface SignupFormProps {
  lang: SignupFormLang;
}

const SignupForm: React.FC<SignupFormProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject the Brevo styles + scripts only once
    if (!document.querySelector("link[data-brevo-styles]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://sibforms.com/forms/end-form/build/sib-styles.css";
      link.setAttribute("data-brevo-styles", "true");
      document.head.appendChild(link);
    }

    if (!document.querySelector("script[data-brevo-main]")) {
      const script = document.createElement("script");
      script.src = "https://sibforms.com/forms/end-form/build/main.js";
      script.defer = true;
      script.setAttribute("data-brevo-main", "true");
      document.body.appendChild(script);
    }

    if (!document.querySelector("script[data-recaptcha]")) {
      const script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=" +
        lang;
      script.async = true;
      script.defer = true;
      script.setAttribute("data-recaptcha", "true");
      document.body.appendChild(script);
    }

    // Inject the LANGUAGE hidden field dynamically
    const form = containerRef.current?.querySelector("form");
    if (form) {
      let langInput = form.querySelector<HTMLInputElement>(
        "input[name='LANGUAGE']"
      );
      if (!langInput) {
        langInput = document.createElement("input");
        langInput.type = "hidden";
        langInput.name = "LANGUAGE";
        form.appendChild(langInput);
      }
      langInput.value = lang;
    }
  }, [lang]);

  return (
    <section className="flex justify-center py-12 px-4">
      <div className="max-w-[540px] w-full rounded-2xl bg-[#f9fafb] p-8 shadow-[0_32px_80px_rgba(18,28,45,0.12)] ring-1 ring-black/5">
        <div ref={containerRef}
          // ✅ IMPORTANT: embed the raw Brevo HTML so their JS sees exactly what it expects
          dangerouslySetInnerHTML={{
            __html: `
<div class="sib-form" style="text-align: center;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical">
      <form id="sib-form" method="POST"
        action="https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO"
        data-type="subscription" novalidate="true">
        
        <h1 style="font-size: 1.5rem; font-weight:600; margin-bottom: 0.5rem; color:#121c2d;">The Automated SMB</h1>
        <p style="font-size: 1.1rem; font-weight:600; color:#139e9c; margin-bottom: 0.75rem;">
          ${lang === "fr"
            ? "L’infolettre pragmatique pour moderniser votre PME"
            : "The pragmatic newsletter to modernize your SMB"}
        </p>
        <p style="margin-bottom: 1rem; color:#4b5563;">
          ${
            lang === "fr"
              ? "Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises."
              : "Every week: save time, avoid costly mistakes, and discover AI tools ready for Québec SMBs."
          }
        </p>

        <label for="EMAIL" style="display:block; text-align:left; font-weight:600; margin-bottom:0.25rem; color:#121c2d;">
          ${lang === "fr" ? "Adresse courriel" : "Email address"}
        </label>
        <input type="email" id="EMAIL" name="EMAIL" required
          placeholder="${lang === "fr" ? "nom@entreprise.com" : "name@business.com"}"
          class="input" style="width:100%; padding:0.75rem; border:1px solid #d1d5db; border-radius:8px; margin-bottom:1rem;" />

        <div style="text-align:left; margin-bottom:1rem;">
          <input type="checkbox" id="OPT_IN" name="OPT_IN" value="1" required style="margin-right:0.5rem;" />
          <label for="OPT_IN" style="color:#4b5563; font-size:0.9rem;">
            ${
              lang === "fr"
                ? "Je consens à recevoir les communications de The Automated SMB et je comprends que je peux me désabonner en tout temps."
                : "I consent to receive communications from The Automated SMB and understand I can unsubscribe at any time."
            }
          </label>
        </div>

        <button type="submit"
          class="sib-form-block__button sib-form-block__button-with-loader"
          style="width:100%; padding:0.9rem; border-radius:10px; background:linear-gradient(90deg,#139E9C,#2280FF); color:white; font-weight:600; font-size:1rem;">
          ${lang === "fr"
            ? "Recevoir l’infolettre chaque semaine"
            : "Get the weekly newsletter"}
        </button>

        <input type="hidden" name="locale" value="${lang}" />
        <!-- LANGUAGE gets injected dynamically -->
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

export default SignupForm;
