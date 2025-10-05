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
    headline: 'L’IA pratique pour les PME du Québec.',
    accent: 'Rapide. Conforme. Rentable.',
    subtitle:
      'Je transforme vos suivis, vos tâches et votre conformité en systèmes IA bilingues\nqui travaillent pendant que vous dormez.',
    cta: {
      label: 'Diagnostic Éclair Gratuit',
      href: 'https://cal.com/simonparis/diagnostic'
    },
    secondaryCta: {
      label: 'Pas prêt ? Rejoignez l’infolettre →',
      href: '/fr/infolettre'
    }
  },
  sections: {
    problem: {
      heading: 'Pourquoi les PME du Québec perdent du temps (et des marges <span class="accent">réelles</span>) chaque semaine…',
      subheading: 'Les quatre problèmes que j’ai appris à résoudre — en commençant par mes propres systèmes.',
      cards: [
        {
          title: 'Tâches administratives répétitives',
          description: 'Des heures perdues à planifier, facturer et saisir manuellement des données.'
        },
        {
          title: 'Suivis trop tardifs',
          description: 'Des clients ou soumissions qui tombent entre les mailles du filet.'
        },
        {
          title: 'Conformité à la dernière minute',
          description: 'Des consentements et politiques gérés seulement sous pression.'
        },
        {
          title: 'Outils déconnectés',
          description: 'Des systèmes qui ne se parlent pas — et font perdre du temps à votre équipe.'
        }
      ]
    }
  },
  cta: {
    bookAudit: 'Réserver un Diagnostic Éclair',
    audit: {
      title: 'Voici ce que l’on identifie dans votre Mini Audit de 20 minutes.',
      bullets: [
        'Le processus qui vous fait perdre le plus de temps ou de revenus.',
        'L’automatisation rapide à implanter dans vos outils actuels.',
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
  proofLab: {
    title: 'Des outils réels, <highlight>conçus au Québec.</highlight>',
    subtitle: 'Chaque flux est né d’une expérimentation interne — peaufiné et prêt pour les PME québécoises.',
    cards: [
      {
        title: 'Moteur d’infolettre IA',
        desc: 'Automatise la <highlight>création et l’envoi bilingues</highlight> des infolettres.',
        status: 'Conçu au Québec — fait gagner des heures chaque semaine.',
        badges: ['🧠 IA intégrée', '💬 Bilingue'],
        image: {
          src: '/proof-lab-ai-newsletter.png',
          alt: 'Capture d’écran Gmail de l’automatisation d’infolettre bilingue.'
        } as { src: string; alt: string }
      },
      {
        title: 'Suivi de conformité (Loi 25)',
        desc: 'Consigne automatiquement <highlight>chaque consentement</highlight>.',
        status: 'Bilingue et prêt pour les PME québécoises.',
        badges: ['🔒 Prêt pour la Loi 25', '⚙️ Automatisé'],
        image: null as { src: string; alt: string } | null
      },
      {
        title: 'Centre de commande CRM',
        desc: 'Centralise contacts, projets et <highlight>communications quotidiennes</highlight>.',
        status: 'Maintient votre équipe alignée sans ajouter d’outils.',
        badges: ['⚙️ Automatisé', '💬 Bilingue'],
        image: null as { src: string; alt: string } | null
      },
      {
        title: 'Flux de capture et de planification',
        desc: 'Achemine formulaires et rendez-vous <highlight>automatiquement</highlight>.',
        status: 'Ne perdez plus aucun lead.',
        badges: ['⚙️ Automatisé', '🔒 Prêt pour la Loi 25'],
        image: null as { src: string; alt: string } | null
      },
      {
        title: 'Moteur vidéo IA',
        desc: 'Crée des vidéos bilingues propulsées par <highlight>Heygen + scripts IA</highlight>.',
        status: 'Propulsé par Heygen + scripts IA.',
        badges: ['🧠 IA intégrée', '💬 Bilingue'],
        image: null as { src: string; alt: string } | null
      },
      {
        title: 'Réceptionniste IA (Prototype)',
        desc: 'Assistant 24/7 qui <highlight>prend des rendez-vous</highlight> et gère les consentements.',
        status: 'Idéal pour les cliniques et entreprises de services.',
        badges: ['🧠 IA intégrée', '🔒 Prêt pour la Loi 25'],
        image: null as { src: string; alt: string } | null
      }
    ]
  },
  growth: {
    title: 'Des <span class="accent">automatisations prêtes</span> pour faire croître votre entreprise.',
    gears: [
      {
        title: 'Flux de capture et de planification',
        tagline: 'Automatise formulaires, réservations et suivis.',
        description: 'Tally → n8n → Airtable → Cal.com : chaque piste est suivie automatiquement.',
        status: 'running'
      },
      {
        title: 'Générateur de vidéos IA (avatars)',
        tagline: 'Crée des vidéos bilingues pour renforcer la présence des PME.',
        description: 'Propulsé par Heygen + scripts IA personnalisés.',
        status: 'indev'
      },
      {
        title: 'Réceptionniste IA (prototype)',
        tagline: 'Assistant bilingue 24/7 pour cliniques et petites entreprises.',
        description: 'Planifie des rendez-vous, répond aux questions et assure la conformité.',
        status: 'prototype'
      }
    ]
  },
  offers: {
    heading: 'Trois parcours <span class="accent">efficaces</span>',
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

