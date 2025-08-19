import type { TranslationKeys } from './en';

const fr: TranslationKeys = {
  header: {
    brand: 'Simon Paris',
    languageToggle: 'FR/EN',
    email: 'info@simonparis.ca',
    primaryCta: 'Télécharger la liste de conformité',
    secondaryCta: 'Packs d’automatisation (149 $)'
  },
  hero: {
    tagline: 'Pensé pour les PME du Québec',
    heading: 'Dites adieu aux',
    highlight: ' absences, suivis oubliés et factures impayées.',
    sub1: 'J\u2019automatise vos rappels, suivis et demandes d\u2019avis\u2014en français, conforme aux lois du Québec, et sans effort.',
    sub2: 'Conforme aux lois 25 et 96 \u2022 Français en priorité \u2022 Démo avant engagement',
    bookDemo: 'Voir une automatisation en action',
    quickQuestion: 'Une question rapide ?'
  },
  problems: {
    heading: 'Vous reconnaissez ces',
    highlight: ' situations?',
    subheading: 'Si vous g\u00e9rez une clinique, un commerce ou une entreprise de services au Qu\u00e9bec, ces probl\u00e8mes vous parlent s\u00fbr\u00e9ment\u00a0:',
    list: [
      { title: 'Clients qui ne donnent plus de nouvelles', description: 'Les gens remplissent un formulaire ou vous \u00e9crivent\u2026 et disparaissent.', impact: 'Clients perdus' },
      { title: 'Rendez-vous oubli\u00e9s ou annul\u00e9s', description: 'Des absences de derni\u00e8re minute qui nuisent \u00e0 votre horaire et vos revenus.', impact: 'Temps gaspill\u00e9' },
      { title: 'Factures en attente', description: 'Des paiements qui tra\u00eenent, sans automatisation pour faire le suivi.', impact: 'Tr\u00e9sorerie \u00e0 risque' },
      { title: 'Doutes sur la conformit\u00e9', description: 'Vous ne savez plus si vos messages ou rappels respectent la Loi 96.', impact: 'Risque l\u00e9gal r\u00e9el' }
    ]
  },
  howItWorks: {
    heading: 'Démo d\u2019abord.',
    highlight: ' Paiement après.',
    subheading: 'Voyez une automatisation fonctionnelle, adaptée à votre entreprise, avant de vous engager.',
    steps: [
      { number: '1', title: 'Démo personnalisée gratuite', description: 'Je vous montre en direct où vous perdez temps et argent\u2014et ce qu\u2019on peut automatiser.' },
      { number: '2', title: 'Mise en place sur mesure', description: 'Je bâtis vos automatisations en fonction de vos outils actuels, en français d\u2019abord, avec conformité totale.' },
      { number: '3', title: 'Résultats rapides et visibles', description: 'Gain de temps, suivis automatiques, moins d\u2019oublis, plus de paiements. Concrètement.' }
    ]
  },
  services: {
    tagline: 'Ce que j\u2019automatise',
    heading: 'Des automatisations qui',
    highlight: ' font gagner du temps et de l\u2019argent.',
    subheading: 'Voici les processus que j\u2019automatise le plus souvent pour mes clients au Qu\u00e9bec \u00a0:',
    list: [
      { title: 'Relance de prospects', description: '', features: ['Suivi automatique après formulaire, appel manqu\u00e9 ou message', 'Mod\u00e8les bilingues inclus', 'Int\u00e9gration \u00e0 vos outils (ex. Google, Meta, Square)'] },
      { title: 'Chasseur d\u2019absences et de paiements', description: '', features: ['Rappels automatis\u00e9s avant les rendez-vous', 'Relance pour factures en retard', 'Messages FR/EN conformes et polis'] },
      { title: 'G\u00e9n\u00e9rateur d\u2019avis clients', description: '', features: ['Envoi automatique apr\u00e8s prestation', 'Gestion des r\u00e9ponses', 'Aide au positionnement local (SEO)'] },
        { title: 'Conformité Loi 96 – pour vos automatisations', description: "Chaque message, rappel et demande d'avis est envoyé en français d'abord, vérifié pour la clarté juridique et prêt pour inspection.", features: ['Conformité linguistique prioritaire', 'Validation bilingue des messages', 'Documentation disponible sur demande'] },
    ],
    benefits: [
      { title: 'Démo en direct', description: 'Voyez votre automatisation réelle en action—avant de vous décider.' },
      { title: 'Support personnalis\u00e9', description: 'Vous travaillez avec moi, pas avec un repr\u00e9sentant ou une agence.' },
      { title: 'R\u00e9sultats concrets', description: 'Moins de gestion. Moins d\u2019oublis. Plus de revenus.' }
    ],
    whyTitle: 'Pourquoi choisir Simon Paris ?',
    whyParagraph: 'Vous verrez le tout fonctionner avant de vous engager. Aucun bla-bla, aucune surprise.',
    startJourney: 'Voir une automatisation en action'
  },
  miniCourse: {
    heading: 'NOUVEAU\u00a0: Comprenez les lois 25 et 96 en moins d\u2019une heure.',
    subheading: 'Vous craignez les amendes? Ce mini-cours autonome vous simplifie la conformit\u00e9.',
    list: [
      'Mod\u00e8les de messages bilingues (courriels, SMS, demandes d\u2019avis)',
      'Listes de v\u00e9rification avec liens vers les sources officielles',
      'Exemples r\u00e9els pour PME qu\u00e9b\u00e9coises',
      'Moins d\u2019une heure pour tout comprendre'
    ],
    cta: 'D\u00e9couvrir le mini-cours'
  },
  fullCourse: {
    heading: 'Bient\u00f4t\u00a0: Ma\u00eetrise compl\u00e8te des automatisations',
    subheading: 'Apprenez \u00e0 automatiser la capture de prospects, les rappels, les paiements et les avis clients.',
    list: [
      'Le\u00e7ons pas \u00e0 pas avec d\u00e9mos r\u00e9elles',
      'Mod\u00e8les bilingues fournis',
      'Con\u00e7u pour les cliniques, commerces et services du Qu\u00e9bec'
    ],
    cta: 'Rejoindre la liste d\u2019attente'
  },
  courses: {
    title: "Apprenez à automatiser et rester conforme",
    subheading: "Des formations conçues pour les entreprises québécoises qui veulent clarté, contrôle et croissance conforme."
  },
  proof: {
    heading: 'Pensé pour',
    highlight: ' les PME du Québec',
    subheading: 'Chaque automatisation est testée en direct avant d\u2019\u00eatre mise en place. Mon contenu, mes messages et mes rappels respectent la Loi 96, sont offerts en français d\u2019abord, et adapt\u00e9s \u00e0 votre r\u00e9alit\u00e9 d\u2019affaires locale.',
    calloutHeading: '',
    calloutText: '',
    items: [],
    button: ''
  },
  faq: {
    heading: 'Foire aux',
    highlight: ' questions',
    subheading: 'Tout ce qu’il faut savoir pour démarrer',
    list: [
      { question: 'En combien de temps mon automatisation sera prête ?', answer: 'La plupart des installations sont complétées en 1 à 2 semaines après la démo. Je m’occupe de tout le côté technique pendant que vous gérez votre entreprise.' },
      { question: 'Est-ce vraiment conforme à la Loi 96 ?', answer: 'Absolument. Chaque message et workflow est vérifié pour conformité Loi 96. Je fournis la documentation requise pour preuve d’audit.' },
      { question: 'Et si je ne suis pas techno ?', answer: 'C’est parfait—c’est conçu pour ça ! Vous n’avez pas à comprendre la technique : voyez les résultats, je m’occupe de toute la configuration.' },
      { question: 'Combien ça coûte ?', answer: "Les tarifs dépendent de vos besoins et de la taille de votre entreprise. Prix fixe, sans surprise. On discute du tarif exact lors de votre démo gratuite." },
      { question: 'Pouvez-vous nous aider avec l’adoption de l’IA ?', answer: "Avec plaisir ! Je reste à l’affût des dernières tendances IA pour PME. Si vous voulez en discuter, mentionnez-le lors de votre démo." }
    ]
  },
  finalCTA: {
    tagline: '',
    heading: 'Vous avez des suivis \u00e0 automatiser?',
    highlight: ' On commence avec une vraie d\u00e9mo.',
    subheading: '',
    nameLabel: 'Nom *',
    namePlaceholder: 'Votre nom complet',
    emailLabel: 'Courriel *',
    emailPlaceholder: 'votre@courriel.com',
    businessLabel: 'Type d’entreprise *',
    businessPlaceholder: 'Sélectionnez votre secteur',
    businessOptions: ['Sélectionnez votre secteur', 'Clinique médicale/dentaire', 'Entreprise de bien-être/spa', 'Commerçant/entrepreneur', 'Autre service'],
    painLabel: 'Votre principal enjeu',
    painPlaceholder: 'Quel est votre plus grand défi : suivis, absences, avis ?',
    submit: 'R\u00e9server une d\u00e9monstration gratuite',
    or: 'Ou, posez-moi votre question ici :',
    sticky: 'Réserver une démo'
  },
  trustBadge: 'Conçu pour le Québec • Démo en direct • Bilingue et conforme à la Loi 96',
  partners: {
    title: 'Partenaires de confiance'
  },
  footer: {
    blurb: "Automatisation bilingue pour PME québécoises. Conçu pour aujourd’hui, prêt pour demain.",
    language: 'Pour tout le Québec • FR/EN',
    services: 'Services',
    servicesList: ['Suivi des clients potentiels', 'Rappels de rendez-vous', 'Gestion des avis', 'Conformité Loi 96'],
    contact: 'Contact',
    location: 'Québec, Canada',
    privacy: 'Politique de confidentialité',
    copyright: '© 2024 Simon Paris Consulting. Tous droits réservés.',
    curiosity: "Curieux des prochaines avancées IA pour PME ? Écrivez à Simon."
  }
};

export default fr;
