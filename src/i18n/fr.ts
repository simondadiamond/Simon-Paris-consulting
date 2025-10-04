import type { TranslationKeys } from './en';
import { PACK_PRICE } from '../config';

const fr: TranslationKeys = {
  header: {
    brand: 'Simon Paris',
    languageToggle: 'FR/EN',
    email: 'info@simonparis.ca',
    cta: 'Diagnostic Éclair'
  },
  hero: {
    tagline: 'Pour les PME du Québec • Loi 25 prête • Zéro jargon',
    h1: 'Automatisez le travail répétitif. Protégez vos marges. Restez conforme à la Loi 25.',
    sub: 'Un système d’automatisation bilingue pour capter chaque lead, assurer les suivis et documenter vos consentements.',
    cta: 'Réserver un Diagnostic Éclair',
    ctaHref: 'https://cal.com/simonparis/diagnostic'
  },
  pain: {
    title: 'Pourquoi les PME du Québec perdent temps (et argent) chaque semaine…',
    cards: [
      {
        title: 'Ventes perdues',
        body: 'Les appels manqués et formulaires ignorés envoient vos prospects chez la concurrence.'
      },
      {
        title: 'Heures gaspillées',
        body: 'Les suivis manuels et rappels vous gardent coincé dans l’administration.'
      },
      {
        title: 'Stress de trésorerie',
        body: 'Les factures impayées et suivis tardifs ralentissent les encaissements.'
      },
      {
        title: 'Risque de conformité',
        body: 'Des preuves de consentement incomplètes ouvrent la porte aux amendes de la Loi 25.'
      }
    ],
    sub: 'Tout cela se règle avec des automatisations bilingues simples.'
  },
  solution: {
    title: 'Le moteur de croissance de votre entreprise : simple, bilingue, conforme.',
    cards: [
      {
        title: 'Réponse éclair',
        body: 'Répondez instantanément aux nouveaux prospects et clients.'
      },
      {
        title: 'Suivis intelligents',
        body: 'Automatisez les relances sans ajouter d’effectifs.'
      },
      {
        title: 'Conformité & confiance',
        body: 'Restez conforme et inspirez confiance sans effort.'
      }
    ]
  },
  audit: {
    title: 'Voici ce que nous identifions dans votre mini audit de 20 minutes',
    bullets: [
      'Le flux qui fait perdre le plus de temps ou de revenus.',
      'L’automatisation rapide qui s’intègre à votre stack actuelle.',
      'Les écarts de consentement à corriger avant les amendes.'
    ],
    timeline: 'Mise en place typique : 5 à 10 jours ouvrables.',
    cta: 'Réserver un Diagnostic Éclair'
  },
  offers: {
    heading: 'Trois parcours productisés',
    list: [
      {
        title: 'Packs DIY',
        price: `${PACK_PRICE} $ chacun`,
        desc: 'Automatisations prêtes à l’emploi. Installation en minutes.',
        cta: 'Voir les packs',
        href: '/packs'
      },
      {
        title: 'Audit 48 h',
        price: '249 $',
        desc: 'Diagnostic + un gain rapide installé.',
        cta: 'Réserver l’audit 48 h',
        href: '/audit',
        badge: 'Le plus choisi'
      },
      {
        title: 'Système complet',
        price: '1 499 $',
        desc: 'Les 3 packs + QA + transfert.',
        cta: 'Obtenir le système',
        href: '/system'
      }
    ],
    note: 'Prix fixes. Aucun frais caché. Modèles français d’abord.'
  },
  roi: {
    title: '<span class="accent">199 $</span> pour protéger <span class="accent">600–900 $</span> chaque mois',
    without: 'Leads perdus, 3–4 no‑shows, factures en retard ≈ 600–900 $ / mois',
    with: 'Pack dès 199 $ → réponses plus rapides, moins d’absences, factures à temps',
    note: 'Beaucoup de cliniques rentabilisent le pack dès la première semaine.',
    disclaimer: 'Estimations basées sur ~120–150 $ par rendez‑vous et des pertes typiques de leads au Québec. Résultats variables.'
  },
  checklist: {
    eyebrow: 'Hebdo IA',
    title: 'Êtes-vous vraiment prêt pour la <span class="accent">Loi 25</span>?',
    sub: 'La plupart des cliniques croient que oui… jusqu’à ce qu’un absent ou un audit révèle le contraire. Joignez l’infolettre hebdo pour repérer les failles avant qu’elles ne coûtent cher.',
    points: [
      'Vos formulaires de consentement pour SMS et courriels sont-ils vraiment conformes?',
      'Avez-vous une preuve horodatée de chaque message envoyé?',
      'Vos rappels et suivis sont-ils 100 % en français d’abord (FR-first)?',
      'Vos patients peuvent-ils se désabonner instantanément, sans plainte possible?'
    ],
    cta: 'Joindre l’infolettre',
    href: '/fr/newsletter'
  },
  proof: {
    title: 'Les cliniques qui automatisent voient des résultats rapides.',
    bullets: [
      '25–50 % d’absences en moins',
      'Réponses en moins de 5 min',
      '3× plus d’avis Google en 30–60 jours'
    ]
  },
  faq: {
    title: 'FAQ',
    q1: {
      question: 'En combien de temps puis-je voir des résultats ?',
      answer: [
        'La plupart des systèmes sont en ligne en 1 à 2 semaines.',
        'Vous commencez à gagner du temps dès la première automatisation active.'
      ]
    },
    q2: {
      question: 'C’est vraiment conforme ?',
      answer: [
        'Oui — chaque automatisation respecte la Loi 25 et la Loi 96.',
        'Les consentements sont tracés et la documentation prête pour les audits.'
      ]
    },
    q3: {
      question: 'Et si je ne suis pas à l’aise avec la technologie ?',
      answer: [
        'Aucun souci — tout est configuré pour vous.',
        'Vous n’avez qu’à approuver ; je m’occupe de la mise en place et des tests.',
        'Chaque automatisation est pensée pour les équipes non techniques.'
      ]
    },
    q4: {
      question: 'Quel est le prix — et qu’est-ce qui est inclus ?',
      answer: [
        'Le Diagnostic Éclair de 20 minutes est gratuit.',
        'Les automatisations personnalisées débutent à environ 1 000 $, selon l’ampleur.',
        'Des rabais fondateurs et forfaits à prix fixe sont offerts.',
        'Aucun abonnement mensuel — des résultats clairs et mesurables.'
      ]
    },
    q5: {
      question: 'Est-ce que ces automatisations fonctionnent pour les petites équipes ?',
      answer: [
        'Oui, elles sont faites pour les PME sans équipe TI.',
        'L’objectif : gagner des heures chaque semaine sans complexifier vos outils.'
      ]
    },
    q6: {
      question: 'Pouvez-vous nous aider avec l’adoption de l’IA ou de nouveaux outils ?',
      answer: [
        'Bien sûr. Une fois vos processus stables,',
        'je peux vous aider à intégrer de nouvelles solutions IA — agents vocaux, chatbots ou analyses intelligentes.'
      ]
    },
    cta: {
      text: 'Pas certain de ce qui convient à votre équipe ?',
      button: 'Réserver un Diagnostic Éclair'
    }
  },
  finalcta: {
    headline: 'L’IA qui vous concerne.',
    subtext: 'Chaque semaine, je traduis l’actualité IA en actions concrètes pour votre PME québécoise.',
    cta: 'Joindre l’infolettre',
    href: '/fr/newsletter',
    alternativeHeadlines: [
      'Faites travailler l’IA pour votre PME.',
      'De l’actualité IA à vos prochaines actions.',
      'Chaque semaine, une tactique IA applicable.'
    ]
  },
  stickyCta: 'Joindre l’infolettre',
  trustBadge: 'Conçu pour le Québec • Démo en direct • Bilingue et conforme à la Loi 96',
  partners: {
    title: 'Partenaires de confiance'
  },
  newsletter: {
    meta: {
      title: 'Infolettre PME Québec | The Automated SMB',
      description:
        'Infolettre hebdo pour les PME québécoises : gagnez du temps, réduisez vos coûts et restez conforme à la Loi 25.',
      canonical: '/fr/newsletter',
      alternate: '/en/newsletter'
    },
    title: 'The Automated SMB',
    subtitle: 'L’infolettre pragmatique pour moderniser votre PME',
    bodyLines: [
      'Chaque semaine : gagnez du temps et évitez les erreurs coûteuses.',
      'Des conseils clairs, pensés pour les PME québécoises et conformes à la Loi 25.'
    ],
    emailLabel: 'Adresse courriel',
    emailPlaceholder: 'nom@entreprise.com',
    consent:
      'Je consens à recevoir les communications de The Automated SMB et je comprends que je peux me désabonner en tout temps.',
    submit: 'Recevoir l’infolettre chaque semaine',
    trust: {
      prefix: 'Vos données sont protégées. Consultez notre ',
      linkLabel: 'Politique de confidentialité',
      suffix: '.'
    },
    success: {
      title: 'Merci! Votre inscription est prise en compte.',
      body: 'Surveillez votre boîte de réception : un courriel de bienvenue arrive sous peu.'
    },
    error: {
      title: 'Une vérification est nécessaire',
      body: 'Vérifiez vos informations et réessayez, ou écrivez-nous à hello@simonparis.ca.'
    },
    confirmation: {
      metaTitle: 'Confirmation infolettre | The Automated SMB',
      title: 'Inscription confirmée',
      body:
        'Merci! Votre inscription à l’infolettre est confirmée. Vous recevrez chaque semaine des conseils pratiques pour moderniser votre PME.',
      extra: '👉 Ajoutez-nous à vos expéditeurs sûrs pour ne rien manquer.',
      backHome: {
        label: 'Retour à l’accueil',
        href: '/fr'
      }
    }
  },
  footer: {
    tagline: 'Automatisation bilingue pour les PME du Québec.',
    compliance: {
      label: 'Conformité & confidentialité',
      href: '/fr/politique-confidentialite'
    },
    contact: {
      emailLabel: 'Courriel',
      email: 'info@simonparis.ca',
      locationLabel: 'Basé à',
      location: 'Québec, Canada'
    },
    copyright: '© 2024 Simon Paris Consulting'
  }
};

export default fr;

