// src/components/SignupForm.tsx
import React, { useEffect } from 'react';
import Head from 'next/head'; // If you're using Next.js, this is the best way to manage <head> elements

// If you are NOT using Next.js, you'd need a separate utility to append
// the <style> and <link> elements to the document <head> on mount,
// similar to how you handle the scripts in useEffect, but targeting document.head.

const BrevoScriptsAndStyles = () => {
  useEffect(() => {
    // --- 1. Load Main Brevo Script ---
    const scriptMain = document.createElement('script');
    scriptMain.src = 'https://sibforms.com/forms/end-form/build/main.js';
    // We already use 'defer' in the original Brevo code, so we'll stick to that
    scriptMain.defer = true;
    document.body.appendChild(scriptMain);

    // --- 2. Load reCAPTCHA Script ---
    const scriptRecaptcha = document.createElement('script');
    // Note: Brevo provides 'en' locale in their footer code, but you used 'fr' in your attempt.
    // I'm sticking to the 'en' version from their provided footer code, but you can change 'en' to 'fr'.
    scriptRecaptcha.src =
      'https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=en';
    scriptRecaptcha.async = true;
    scriptRecaptcha.defer = true;
    document.body.appendChild(scriptRecaptcha);

    // --- 3. Global Brevo variables (from the footer code) ---
    // This needs to be available before main.js runs.
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    window.LOCALE = 'en'; // Match this to the reCAPTCHA locale above ('fr' if you want French reCAPTCHA labels)
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Adresse courriel invalide. Veuillez vérifier le format (ex. nom@entreprise.com ).";
    window.REQUIRED_ERROR_MESSAGE = "Ce champ ne peut pas être laissé vide. ";
    window.GENERIC_INVALID_MESSAGE = "Adresse courriel invalide. Veuillez vérifier le format (ex. nom@entreprise.com ).";

    window.translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected',
        selectedOption: '{quantity} selected',
        selectedOptions: '{quantity} selected',
      }
    };
    window.AUTOHIDE = Boolean(0);


    // Cleanup function
    return () => {
      document.body.removeChild(scriptMain);
      document.body.removeChild(scriptRecaptcha);
      // Note: We don't clean up the global variables here as it might break other forms,
      // and in a single-page app, typically the form component unmounts and remounts.
    };
  }, []);

  // Inline CSS and external link that Brevo suggests putting in the <head>
  // If you are using Next.js, use the <Head> component. Otherwise, you could
  // manually append these to document.head in the useEffect hook.
  return (
    <>
      {/* If using Next.js, uncomment the <Head> block below. */}
      {/* <Head>
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-display: block;
            font-family: Roboto;
            src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
          }
          /* ... other @font-face and #sib-container styles ... */
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
        ` }} />
        <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&amp;&amp;display=swap" />
      </Head> */}
      {/* If NOT using Next.js, you should create a separate useEffect hook here or
          merge the logic into the main one to inject the <style> and <link> tags
          into document.head */}
    </>
  );
};

declare global {
  interface Window {
    REQUIRED_CODE_ERROR_MESSAGE: string;
    LOCALE: string;
    EMAIL_INVALID_MESSAGE: string;
    SMS_INVALID_MESSAGE: string;
    REQUIRED_ERROR_MESSAGE: string;
    GENERIC_INVALID_MESSAGE: string;
    translation: {
      common: {
        selectedList: string;
        selectedLists: string;
        selectedOption: string;
        selectedOptions: string;
      };
    };
    AUTOHIDE: boolean;
  }
}

const BrevoFormHtml = `
<div class="sib-form" style="text-align: center;
         background-color: transparent;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
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
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">
          Merci! Votre inscription à The Automated SMB est confirmée.
        </span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(249,250,251,1); max-width:540px; border-radius:20px; border-width:1px; border-color:#c3bebe; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST" action="https://c454d84b.sibforms.com/serve/MUIFAIc_ZYokAb7Re9W4jBSV4XQYcsxEbq7qL1PXbvYcBByuzavFkeirp92eDDXXAxnIX_PJK6-lMeYfEbiuh-8UznhnXThf-N_WmiKUqgpVXUnwUu81EBRS9Un2eTQh4a_SyYWlBhJJhMDqWEqZmIciGjwVrByMjSfsyTnvQ-TMDr_zrkIyiOjDX8ZPR9oAxJ6BMM3goTw6mbi_" data-type="subscription">
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
                <div class="entry__field">
                  <input class="input " maxlength="200" type="text" id="SOURCE_URL" name="SOURCE_URL" autocomplete="off" />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <div class="entry__field">
                  <input class="input " maxlength="200" type="text" id="LANGUAGE" name="LANGUAGE" autocomplete="off" />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:Inter, webFonts; color:#121c2d;" for="EMAIL" data-required="*">Entrez votre adresse courriel pour recevoir l’infolettre :</label>
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
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:Inter, webFonts; color:#121c2d;" for="OPT_IN" data-required="*">Opt-in</label>
                <div class="entry__choice" style="">
                  <label>
                    <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                    <span class="checkbox checkbox_tick_positive"
            style="margin-left:"
            ></span><span style="font-size:12px; text-align:left; font-family:Helvetica, sans-serif; color:#121c2d; background-color:transparent;"><p>Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.</p></span> </label>
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="font-size:1px; text-align:left; font-family:Inter, webFonts; color:#121c2d; background-color:transparent; text-align:left">
            <div class="sib-text-form-block">
              <p><br></p>
            </div>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="sib-form-block" style="text-align: center">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:center; font-weight:700; font-family:Inter, webFonts; color:#FFFFFF; background-color:#0473d0; border-radius:10px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style="">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              Je m’abonne gratuitement
            </button>
          </div>
        </div>
        <div style="padding: 16px 0;">
          <div class="g-recaptcha-v3" data-sitekey="6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-" style="display: none"></div>
        </div>

        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>
`;

const SignupForm: React.FC = () => {
  return (
    <>
      {/* 1. Embed Scripts/Styles/Globals (outside the main form div) */}
      <BrevoScriptsAndStyles />

      {/* 2. Your container styling (Tailwind CSS) */}
      <section className="mx-auto max-w-[540px] rounded-xl bg-[#f9fafb] p-8 shadow-xl sm:p-12">
        {/* 3. The Brevo HTML form structure */}
        <div
          dangerouslySetInnerHTML={{ __html: BrevoFormHtml }}
        />
      </section>
    </>
  );
};

export default SignupForm;
