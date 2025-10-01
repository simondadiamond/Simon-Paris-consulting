import React, { useEffect } from "react";

const SignupForm: React.FC = () => {
  useEffect(() => {
    // Load Brevo main.js and reCAPTCHA after mount
    const scriptMain = document.createElement("script");
    scriptMain.src = "https://sibforms.com/forms/end-form/build/main.js";
    scriptMain.defer = true;
    document.body.appendChild(scriptMain);

    const scriptRecaptcha = document.createElement("script");
    scriptRecaptcha.src =
      "https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=fr";
    scriptRecaptcha.async = true;
    scriptRecaptcha.defer = true;
    document.body.appendChild(scriptRecaptcha);

    return () => {
      document.body.removeChild(scriptMain);
      document.body.removeChild(scriptRecaptcha);
    };
  }, []);

  return (
    <section className="mx-auto max-w-[600px] rounded-2xl bg-[#f9fafb] p-8 shadow-xl">
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <form id="sib-form" method="POST" 
              action="https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO" 
              data-type="subscription" novalidate="true">

              <h1>The Automated SMB</h1>
              <p><strong>L’infolettre pragmatique pour moderniser votre PME</strong></p>
              <p>Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.</p>

              <label for="EMAIL">Entrez votre adresse courriel :</label>
              <input type="email" id="EMAIL" name="EMAIL" required placeholder="nom@entreprise.com" class="input">

              <div>
                <input type="checkbox" id="OPT_IN" name="OPT_IN" value="1" required class="input_replaced">
                <label for="OPT_IN">Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.</label>
              </div>

              <button type="submit" class="sib-form-block__button sib-form-block__button-with-loader">
                Je m’abonne gratuitement
              </button>

              <input type="hidden" name="locale" value="fr">
            </form>
          `,
        }}
      />
    </section>
  );
};

export default SignupForm;
