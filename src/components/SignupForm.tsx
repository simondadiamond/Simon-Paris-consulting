<!-- Begin Brevo Form -->
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap">

<style>
  /* === OVERRIDES TO FIX LOOKS === */
  .sib-form {
    background: transparent !important;
    text-align: center;
  }
  #sib-container {
    background: #f9fafb !important;
    border: 1px solid #d1d5db !important;
    border-radius: 20px !important;
    padding: 24px !important;
    max-width: 540px;
    margin: 0 auto;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  }
  h1 {
    font-family: Inter, sans-serif !important;
    font-size: 22px !important;
    font-weight: 700 !important;
    color: #121c2d !important;
    margin-bottom: 8px !important;
  }
  #sib-container p {
    font-family: Inter, sans-serif !important;
    color: #4b5563 !important;
    margin-bottom: 12px !important;
  }
  .sib-form-block__button {
    width: 100% !important;
    padding: 12px !important;
    border-radius: 10px !important;
    background: linear-gradient(90deg,#139E9C,#2280FF) !important;
    font-weight: 600 !important;
    font-size: 16px !important;
    color: #fff !important;
  }
  /* Hide custom fields cleanly */
  #SOURCE_URL, #LANGUAGE {
    display: none !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    visibility: hidden !important;
  }
</style>

<div class="sib-form">
  <div id="sib-form-container" class="sib-form-container">
    <!-- Error message -->
    <div id="error-message" class="sib-form-message-panel">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        Une erreur est survenue. Veuillez réessayer.
      </div>
    </div>

    <!-- Success message -->
    <div id="success-message" class="sib-form-message-panel">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        Merci! Votre inscription à The Automated SMB est confirmée.
      </div>
    </div>

    <!-- Actual Brevo Form -->
    <div id="sib-container" class="sib-container--large sib-container--vertical">
      <form id="sib-form" method="POST"
        action="https://c454d84b.sibforms.com/serve/MUIFALlJ8VO8pgOD8jArLpeuCcN5UNYC64-IgkEN0iOdrexKiXCf_emlc5-37PtMK10GNjgf_SAieFMwXA9YZTejEi0mw7smWX5OP7m8C2a2tIYbd7suJW6UaYT4jdsbdj7lolGXMOXAWjB50xxdkEDq_QHrgeElIJHaNsxBMuZQLg8xjurxx0LiIhcfHaCl3QQM2IezpsIsaWdz"
        data-type="subscription">

        <h1>The Automated SMB</h1>
        <p><strong>L’infolettre pragmatique pour moderniser votre PME</strong></p>
        <p>Chaque semaine : gagnez du temps, évitez les erreurs coûteuses et découvrez des outils IA prêts pour les PME québécoises.</p>

        <!-- Hidden custom fields -->
        <input type="text" id="SOURCE_URL" name="SOURCE_URL" value="https://simonparis.ca/fr/newsletter">
        <input type="text" id="LANGUAGE" name="LANGUAGE" value="fr">

        <!-- Email -->
        <label for="EMAIL">Adresse courriel :</label>
        <input class="input" type="email" id="EMAIL" name="EMAIL" required placeholder="nom@entreprise.com">

        <!-- Consent -->
        <label>
          <input type="checkbox" class="input_replaced" id="OPT_IN" name="OPT_IN" value="1" required>
          Oui, je veux recevoir l’Hebdo IA Québec et rester conforme à la Loi 25.
        </label>

        <!-- Submit -->
        <button class="sib-form-block__button sib-form-block__button-with-loader" type="submit">
          Je m’abonne gratuitement
        </button>

        <!-- Brevo internals -->
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>

<!-- Brevo required scripts -->
<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
<script src="https://www.google.com/recaptcha/api.js?render=6Lf0RtYrAAAAAMnsVvJx3DTeKDVGi2ZQElXygdM-&hl=fr" async defer></script>
