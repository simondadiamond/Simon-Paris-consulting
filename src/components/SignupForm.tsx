import React from 'react';

const SignupForm: React.FC = () => {
  return (
    <>
      <section className="mx-auto max-w-[540px] rounded-xl bg-white p-8 shadow-lg shadow-[0_32px_80px_rgba(18,28,45,0.12)] sm:p-12">
        <div className="sib-form text-center">
          <div id="sib-form-container" className="sib-form-container space-y-6">
            <div
              id="error-message"
              className="sib-form-message-panel mx-auto w-full max-w-[540px] rounded-md border border-[#ff4949] bg-[#ffeded] text-left text-base text-[#661d1d]"
              style={{ fontSize: '16px', display: 'none' }}
            >
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center flex items-start gap-3 p-4">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon h-6 w-6 text-[#661d1d]" aria-hidden="true">
                  <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Une erreur est survenue. Veuillez réessayer dans quelques instants.
                </span>
              </div>
            </div>

            <div
              id="success-message"
              className="sib-form-message-panel mx-auto w-full max-w-[540px] rounded-md border border-[#13ce66] bg-[#e7faf0] text-left text-base text-[#085229]"
              style={{ fontSize: '16px', display: 'none' }}
            >
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center flex items-start gap-3 p-4">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon h-6 w-6 text-[#085229]" aria-hidden="true">
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Merci! Votre inscription à The Automated SMB est confirmée.
                </span>
              </div>
            </div>

            <div
              id="sib-container"
              className="sib-container--large sib-container--vertical mx-auto max-w-[540px] rounded-2xl border border-[#c3bebe] bg-[#f9fafb] p-6 text-left"
            >
              <form
                id="sib-form"
                method="POST"
                action="https://c454d84b.sibforms.com/serve/MUIFAJJ6cYYdQJxsLvYxPCYFLJwem50hEcNaFaSvR-FjQdyGrm7qIF3Dc0f-ieM0neAXJu1oTl62xcFWJek9bFIaJrEbCbuZ87-ZGM8Si4azraP-sB4WZCgUV0x_L0RS6TT7-jCI8MwJ8t33lS8eelWzbmhcnthg5qN5t0I4SrjZ11JSP66cX63DNlKYtfJMhOIQvVpzXtWg-xcO"
                data-type="subscription"
                className="space-y-6"
              >
                <div className="sib-form-block space-y-3 text-center">
                  <h1 className="text-3xl font-semibold text-[#121c2d]">The Automated SMB</h1>
                </div>

                <div className="sib-form-block text-center text-lg font-semibold text-[#139e9b]">
                  <div className="sib-text-form-block">
                    <p>
                      <strong>L’infolettre pragmatique pour moderniser votre PME</strong>
                    </p>
                  </div>
                </div>

                <div className="sib-form-block text-left text-base text-[#121c2d]">
                  <div className="sib-text-form-block">
                    <p>
                      Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME
                      québécoises.
                    </p>
                  </div>
                </div>

                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block space-y-2">
                    <div className="form__label-row">
                      <label
                        className="entry__label text-base font-semibold text-[#121c2d]"
                        htmlFor="EMAIL"
                        data-required="*"
                      >
                        Entrez votre adresse courriel pour recevoir l’infolettre :
                      </label>
                    </div>
                    <div className="entry__field">
                      <input
                        className="input w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-[#121c2d] placeholder-gray-400 focus:border-[#139E9C] focus:outline-none focus:ring-4 focus:ring-[#139E9C]/20"
                        type="text"
                        id="EMAIL"
                        name="EMAIL"
                        autoComplete="off"
                        placeholder="nom@entreprise.com"
                        data-required="true"
                        required
                      />
                    </div>
                    <label className="entry__error entry__error--primary mt-2 block rounded-md border border-[#ff4949] bg-[#ffeded] px-3 py-2 text-sm text-[#661d1d]"></label>
                  </div>
                </div>

                <div className="sib-optin sib-form-block" data-required="true">
                  <div className="form__entry entry_mcq space-y-2">
                    <div className="form__label-row">
                      <label
                        className="entry__label text-base font-semibold text-[#121c2d]"
                        htmlFor="OPT_IN"
                        data-required="*"
                      >
                        Opt-in
                      </label>
                      <div className="entry__choice">
                        <label className="flex items-start gap-3 text-left">
                          <input type="checkbox" className="input_replaced mt-1" value="1" id="OPT_IN" name="OPT_IN" required />
                          <span className="checkbox checkbox_tick_positive mt-1"></span>
                          <span className="text-xs text-[#121c2d]">
                            <p>Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.</p>
                          </span>
                        </label>
                      </div>
                    </div>
                    <label className="entry__error entry__error--primary mt-2 block rounded-md border border-[#ff4949] bg-[#ffeded] px-3 py-2 text-sm text-[#661d1d]"></label>
                    <label className="entry__specification block text-xs text-[#111827]">
                      Vous pouvez vous désabonner en tout temps.
                    </label>
                  </div>
                </div>

                <div className="sib-form-block text-left text-[1px] text-[#121c2d]">
                  <div className="sib-text-form-block">
                    <p>
                      <br />
                    </p>
                  </div>
                </div>

                <div className="sib-form-block text-center">
                  <button
                    className="sib-form-block__button sib-form-block__button-with-loader w-full rounded-lg bg-gradient-to-r from-[#139E9C] to-[#2280FF] py-3 font-semibold text-white transition hover:opacity-90"
                    form="sib-form"
                    type="submit"
                  >
                    <svg
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon mr-2 inline h-4 w-4 align-middle"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    Je m’abonne gratuitement
                  </button>
                </div>

                <div className="sib-form-block">
                  <div className="g-recaptcha-v3" data-sitekey="6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-" style={{ display: 'none' }}></div>
                </div>

                <input type="text" name="email_address_check" value="" className="input--hidden" />
                <input type="hidden" name="locale" value="en" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <script>
        {`
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
`}
      </script>

      <script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>

      <script src="https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=en" async defer></script>
    </>
  );
};

export default SignupForm;
