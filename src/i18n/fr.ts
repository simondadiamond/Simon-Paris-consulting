import type { TranslationKeys } from './en';
import { PACK_PRICE } from '../config';

const fr: TranslationKeys = {
  header: {
    brand: 'Simon Paris',
    languageToggle: 'FR/EN',
    email: 'info@simonparis.ca',
    cta: 'Joindre l’infolettre'
  },
  hero: {
    eyebrow: 'Pour les cliniques du Québec • Prêt Loi 25 + Loi 96',
    h1_part1: 'Remplissez votre horaire.',
    h1_accent: 'Restez 100% conforme.',
    subhead:
      'Automatisations bilingues prêtes à l’emploi pour vitesse‑à‑lead, relance d’absences et moteur d’avis — conçues pour les cliniques du Québec. Démo d’abord. Installation en minutes.',
    proof: 'Les cliniques qui automatisent voient souvent 25–50 % moins d’absences et des suivis beaucoup plus rapides.',
    primaryCta: 'Joindre l’infolettre'
  },
  problems: {
    title: 'Pourquoi les cliniques <span class="accent">perdent de l’argent</span> chaque semaine…',
      list: [
        { title: 'Leads ignorés', body: 'Les patients réservent ailleurs.' },
        { title: 'Rendez‑vous manqués', body: 'Des chaises vides aux heures de pointe.' },
        { title: 'Factures en retard', body: 'Moins de liquidités chaque mois.' },
        { title: 'Incertitude légale', body: 'Risque de non‑conformité (Loi 25/Loi 96).' }
      ],
    note: 'Tout se corrige avec une <span class="font-semibold">automatisation bilingue</span> simple.'
  },
  growth: {
    title: 'Le <span class="accent">moteur de croissance</span> de votre clinique : simple, bilingue, conforme.',
    gears: [
        {
          title: 'SMS vitesse‑à‑lead',
          bullets: ['Réponse en moins de 5 min', 'Priorité FR → EN', 'Intégration web, appels, réseaux sociaux']
        },
        {
          title: 'Relance d’absences + rappels',
          bullets: ['Rappels 24 h & 2 h', 'Lien simple pour replanifier', '25–50 % d’absences en moins']
        },
        {
          title: 'Moteur d’avis + conformité',
          bullets: ['Demandes d’avis polies FR/EN', '3× plus d’avis en 30–60 jours', 'Docs prêts pour audit (Loi 25/96)']
        }
      ],
    cta: 'Voir les packs en action'
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
  finalCTA: {
    title: 'Restez conforme. Restez en avance.',
    sub: 'Rejoignez l’infolettre hebdo pour des tactiques d’automatisation pensées pour les PME québécoises.',
    primary: 'Joindre l’infolettre',
    primaryHref: '/fr/newsletter',
    secondary: 'Voir les packs',
    secondaryHref: '/packs'
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
    title: 'The Automated SMB – L’infolettre pragmatique pour moderniser votre PME',
    subtitle: 'Chaque semaine : gagnez du temps et découvrez des outils IA concrets pour PME.',
    bodyLines: [
      'Des conseils clairs et applicables dès maintenant.',
      'Pensés pour les dirigeants de PME québécoises qui veulent rester conformes à la Loi 25.'
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
    blurb: 'Automatisation bilingue pour les PME du Québec. Conçu pour aujourd’hui, prêt pour l’IA de demain.',
    language: 'Pour tout le Québec • FR/EN',
    services: 'Services',
    servicesList: ['Suivi des clients potentiels', 'Rappels de rendez-vous', 'Gestion des avis', 'Conformité Loi 96'],
    contact: 'Contact',
    location: 'Québec, Canada',
    privacy: 'Politique de confidentialité',
    copyright: '© 2024 Simon Paris Consulting. Tous droits réservés.',
    curiosity: 'Curieux des prochaines avancées IA pour PME ? Écrivez à Simon.'
  }
};

export default fr;

