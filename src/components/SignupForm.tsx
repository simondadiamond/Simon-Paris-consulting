import React, { useEffect } from "react";

const SignupForm: React.FC = () => {
  useEffect(() => {
    // Ensure Brevo script is loaded once globally
    if (!document.querySelector("script[src*='sibforms.com/forms/end-form/build/main.js']")) {
      const script = document.createElement("script");
      script.src = "https://sibforms.com/forms/end-form/build/main.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="flex justify-center py-12 px-4">
      <div
        className="w-full max-w-xl"
        dangerouslySetInnerHTML={{
          __html: `
          <style>
            /* Container */
            #sib-container {
              max-width: 540px !important;
              border-radius: 16px !important;
              background: #f9fafb !important;
              box-shadow: 0 24px 64px rgba(18,28,45,0.14) !important;
              padding: 24px !important;
            }
            /* Title & subtitle */
            #sib-container h1 {
              font-size: 1.75rem !important;
              font-weight: 600 !important;
              margin-bottom: 0.5rem !important;
              color: #121c2d !important;
            }
            #sib-container p strong {
              color: #139e9c !important;
              font-size: 1.125rem !important;
            }
            /* Inputs */
            #sib-container input[type="email"],
            #sib-container input[type="text"] {
              border-radius: 8px !important;
              border: 1px solid #d1d5db !important;
              padding: 0.75rem !important;
              font-size: 0.95rem !important;
              width: 100% !important;
            }
            /* Consent checkbox */
            #sib-container .entry__choice label {
              display: flex !important;
              align-items: flex-start !important;
              gap: 0.5rem !important;
              font-size: 0.85rem !important;
              color: #4b5563 !important;
            }
            /* Submit button */
            .sib-form-block__button {
              width: 100% !important;
              border-radius: 10px !important;
              background: linear-gradient(90deg, #139e9c, #2280ff) !important;
              font-weight: 600 !important;
              font-size: 1rem !important;
              color: white !important;
              padding: 0.9rem !important;
              transition: opacity 0.2s ease !important;
            }
            .sib-form-block__button:hover {
              opacity: 0.9 !important;
            }
            /* Hide hidden fields */
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
          </style>

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

<!-- START - We recommend to place the below code where you want the form in your website html  -->
<div class="sib-form" style="text-align: center;
         background-color: transparent;                                 ">
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
      <form id="sib-form" method="POST" action="https://c454d84b.sibforms.com/serve/MUIFALlJ8VO8pgOD8jArLpeuCcN5UNYC64-IgkEN0iOdrexKiXCf_emlc5-37PtMK10GNjgf_SAieFMwXA9YZTejEi0mw7smWX5OP7m8C2a2tIYbd7suJW6UaYT4jdsbdj7lolGXMOXAWjB50xxdkEDq_QHrgeElIJHaNsxBMuZQLg8xjurxx0LiIhcfHaCl3QQM2IezpsIsaWdz" data-type="subscription">
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

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
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

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
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

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
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
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
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
<!-- END - We recommend to place the above code where you want the form in your website html  -->

<!-- START - We recommend to place the below code in footer or bottom of your website html  -->
<script>
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.LOCALE = 'en';
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

  var AUTOHIDE = Boolean(0);
</script>

<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>

<script src="https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=en" async defer></script>

<!-- END - We recommend to place the above code in footer or bottom of your website html  -->
<!-- End Brevo Form -->
        `,
        }}
      />
    </section>
  );
};

export default SignupForm;
