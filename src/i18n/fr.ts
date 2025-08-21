import type { TranslationKeys } from './en';
import { PACK_PRICE } from '../config';

const fr: TranslationKeys = {
  header: {
    brand: 'Simon Paris',
    languageToggle: 'FR/EN',
    email: 'info@simonparis.ca',
    cta: 'Télécharger la checklist'
  },
  hero: {
    eyebrow: 'Pour les cliniques du Québec • Prêt Loi 25 + Loi 96',
    h1_part1: 'Remplissez votre horaire.',
    h1_accent: 'Restez 100% conforme.',
    subhead:
      'Automatisations bilingues prêtes à l’emploi pour vitesse‑à‑lead, relance d’absences et moteur d’avis — conçues pour les cliniques du Québec. Démo d’abord. Installation en minutes.',
    proof: 'Les cliniques qui automatisent voient souvent 25–50 % moins d’absences et des suivis beaucoup plus rapides.',
    primaryCta: 'Télécharger la checklist de conformité'
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
    title: `💡 « Chaque module commence à seulement ${PACK_PRICE} $ — la plupart des cliniques en ajoutent 2 ou 3 pour de vrais résultats. »`,
    sub: 'Les cliniques récupèrent généralement 600 à 900 $/mois en rendez-vous sauvés, moins d’absences et moins de tâches administratives — tout en réduisant le stress de l’équipe.',
    footnote: 'Estimations basées sur ~120 à 150 $ par rendez-vous et les pertes de clients typiques au Québec. Les résultats peuvent varier.'
  },
  checklist: {
    eyebrow: 'Gratuit',
    title: 'Êtes-vous vraiment prêt pour la <span class="accent">Loi 25</span>?',
    sub: 'La plupart des cliniques croient que oui… jusqu’à ce qu’un patient manqué ou un audit révèle le contraire. Téléchargez la liste gratuite pour découvrir les zones à risque dans vos communications.',
      points: [
        'Vos formulaires de consentement pour SMS et courriels sont-ils vraiment conformes?',
        'Avez-vous une preuve horodatée de chaque message envoyé?',
        'Vos rappels et suivis sont-ils 100 % en français d’abord (FR-first)?',
        'Vos patients peuvent-ils se désabonner instantanément, sans plainte possible?'
      ],
    cta: 'Télécharger la Liste',
    href: '/checklist'
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
    title: 'Commencez gratuitement. Restez conforme. Croissez plus vite.',
    sub: 'Téléchargez la checklist maintenant — passez aux packs quand vous serez prêt.',
    primary: 'Télécharger la checklist',
    primaryHref: '/checklist',
    secondary: 'Voir les packs',
    secondaryHref: '/packs'
  },
  stickyCta: 'Télécharger la checklist',
  trustBadge: 'Conçu pour le Québec • Démo en direct • Bilingue et conforme à la Loi 96',
  partners: {
    title: 'Partenaires de confiance'
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

