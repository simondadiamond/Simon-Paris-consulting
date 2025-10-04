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
    headline: {
      line1: 'Automatisez les tâches lourdes.',
      line2: 'Protégez vos marges.',
      line3: 'Restez conforme à la Loi 25.'
    },
    subtext:
      'Des automatisations bilingues qui répondent aux leads, relancent les factures et documentent les consentements — sans ajouter d’outils que votre équipe n’utilisera pas.',
    cta: {
      href: 'https://cal.com/simonparis/diagnostic'
    }
  },
  cta: {
    bookAudit: 'Réserver un Diagnostic Éclair',
    audit: {
      title: 'Voici ce que l’on identifie dans votre Mini Audit de 20 minutes.',
      bullets: [
        'Le processus qui vous fait perdre le plus de temps ou de revenus.',
        'L’automatisation à implanter rapidement dans vos outils actuels.',
        'Les risques de conformité à corriger avant les amendes de la Loi 25.'
      ],
      timeline: 'Installation typique : 5 à 10 jours ouvrables.'
    }
  },
  problems: {
    title: 'Pourquoi les PME du Québec perdent du temps chaque semaine…',
    list: [
      {
        title: 'Ventes perdues',
        body: 'Appels manqués et formulaires ignorés font filer les prospects ailleurs.'
      },
      {
        title: 'Heures gaspillées',
        body: 'Des suivis manuels gardent les propriétaires coincés dans l’administratif.'
      },
      {
        title: 'Stress de trésorerie',
        body: 'Des factures impayées ralentissent les dépôts chaque mois.'
      },
      {
        title: 'Amendes évitables',
        body: 'Des preuves de consentement incomplètes augmentent le risque Loi 25.'
      }
    ],
    note: 'Tout cela se règle avec des <span class="font-semibold">automatisations bilingues</span> pensées pour votre équipe.'
  },
  growth: {
    title: 'Des <span class="accent">automatisations prêtes</span> pour faire croître votre entreprise.',
    gears: [
      {
        title: 'Réponse vitesse-à-lead',
        bullets: [
          'Répondez à chaque lead en moins de 5 minutes.',
          'SMS + courriel en français d’abord, anglais au besoin.',
          'Connecte formulaires, appels et messages sociaux.'
        ]
      },
      {
        title: 'Rappels & suivis automatisés',
        bullets: [
          'Rappels sans effort pour rendez-vous, travaux et soumissions.',
          'Messages envoyés automatiquement dans la bonne langue.',
          'Votre pipeline avance sans embauches supplémentaires.'
        ]
      },
      {
        title: 'Conformité + avis clients',
        bullets: [
          'Consentement tracé pour chaque message (Loi 25/96).',
          'Modèles guidés pour avis, mises à jour et paiements.',
          'Plus d’avis 5 étoiles sans surcharge administrative.'
        ]
      }
    ]
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
    title: `Chaque module commence à seulement ${PACK_PRICE} $ — la plupart des cliniques en ajoutent 2 ou 3 pour de vrais résultats.`,
    sub: 'Les cliniques récupèrent généralement 600 à 900 $/mois en rendez-vous sauvés, moins d’absences et moins de tâches administratives — tout en réduisant le stress de l’équipe.',
    footnote: 'Estimations basées sur ~120 à 150 $ par rendez-vous et les pertes de clients typiques au Québec. Les résultats peuvent varier.'
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
    list: [
      {
        question: 'En combien de temps pouvez-vous configurer mon automatisation?',
        answer: {
          intro: 'Rapide, sans tracas.',
          bullets: ['Configuration en 1–2 semaines', 'Support complet pendant l’installation']
        }
      },
      {
        question: 'C’est vraiment conforme?',
        answer: {
          intro: 'Oui, documenté.',
          bullets: ['Modèles vérifiés Loi 25/96', 'Preuves prêtes pour audit']
        }
      },
      {
        question: 'Et si je ne suis pas à l’aise avec la technologie?',
        answer: {
          intro: 'Pensé pour les non‑tech.',
          bullets: ['Installation gérée pour vous', 'Accompagnement humain en français']
        }
      },
      {
        question: 'Combien ça coûte?',
        answer: {
          intro: `À partir de ${PACK_PRICE} $.`,
          bullets: ['Prix fixes, aucun contrat', 'Retour rapide sur investissement']
        }
      },
      {
        question: 'Pouvez-vous nous aider avec l’adoption ou la stratégie IA?',
        answer: {
          intro: 'Bien sûr.',
          bullets: ['Veille constante des outils IA', 'Conseils lors de la démo']
        }
      }
    ]
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

