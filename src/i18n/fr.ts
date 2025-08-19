import type { TranslationKeys } from './en';
import { PACK_PRICE } from '../config';

const fr: TranslationKeys = {
  header: {
    brand: 'Simon Paris',
    languageToggle: 'FR/EN',
    email: 'info@simonparis.ca',
    bookDemo: 'Réserver une démo'
  },
  hero: {
    eyebrow: 'Pour les cliniques du Québec • Prêt Loi 25 + Loi 96',
    h1_part1: 'Remplissez votre horaire.',
    h1_accent: 'Restez 100% conforme.',
    subhead:
      'Automatisations bilingues prêtes à l’emploi pour vitesse‑à‑lead, relance d’absences et moteur d’avis — conçues pour les cliniques du Québec. Démo d’abord. Installation en minutes.',
    proof: 'Les cliniques qui automatisent voient souvent 25–50 % moins d’absences et des suivis beaucoup plus rapides.',
    primaryCta: 'Obtenir la checklist de conformité',
    secondaryCta: `Voir les packs (${PACK_PRICE} $)`
  },
  problems: {
    title: 'Pourquoi les cliniques perdent de l’argent chaque semaine…',
    list: [
      { title: 'Leads ignorés', body: 'Les patients attendent et réservent ailleurs.' },
      { title: 'Rendez-vous manqués', body: 'Des chaises vides aux heures de pointe.' },
      { title: 'Factures en retard', body: 'La trésorerie se resserre.' },
      { title: 'Incertitude légale', body: 'Vos messages peuvent enfreindre la Loi 25/Bill 96.' }
    ],
    note: 'Vous pouvez tout corriger avec une simple automatisation bilingue.'
  },
  growth: {
    title: 'Le moteur de croissance de votre clinique : simple, bilingue, conforme.',
    gears: [
      { title: 'SMS vitesse-à-lead', desc: 'réponse instantanée, FR/EN' },
      { title: 'Poursuite d’absences + rappel', desc: 'moins de chaises vides' },
      { title: 'Moteur d’avis et conformité', desc: 'plus de 5★, prêt pour audit' }
    ],
    cta: 'Voir les packs en action'
  },
  offers: {
    heading: 'Trois parcours productisés.',
    list: [
      {
        title: 'Packs DIY',
        price: `${PACK_PRICE} $ chacun`,
        desc: 'Automatisations prêtes à l’emploi. Installation en minutes.',
        cta: 'Voir les packs',
        href: '/packs'
      },
      {
        title: 'Audit rapide',
        price: '249 $',
        desc: 'Diagnostic en 48 h + un gain rapide installé.',
        cta: 'Réserver l’audit 48h',
        href: '/audit'
      },
      {
        title: 'Système complet',
        price: '1 499 $',
        desc: 'Les 3 packs installés + QA + transfert.',
        cta: 'Obtenir le système',
        href: '/system'
      }
    ],
    note: 'Prix fixes. Aucun frais caché. Modèles français d’abord.'
  },
  roi: {
    title: `${PACK_PRICE} $ vs \u2248 400 $ de revenus manqu\u00e9s par mois`,
    without: '3 rendez-vous manqu\u00e9s/mois \u2248 300 $\u2013400 $ de revenus perdus',
    with: `Pack \u00e0 ${PACK_PRICE} $ \u2192 r\u00e9ponses plus rapides, moins d\u2019absences`,
    note: 'Plusieurs cliniques rentabilisent le pack d\u00e8s la premi\u00e8re semaine.',
    disclaimer:
      'Estimations bas\u00e9es sur une valeur de rendez-vous typique de 100 $\u2013150 $. R\u00e9sultats variables.'
  },
  proof: {
    title: 'Les cliniques qui automatisent voient des résultats rapides.',
    bullets: [
      '25–50 % d’absences en moins',
      '5× plus de rendez-vous réservés grâce aux SMS instantanés',
      '3× plus d’avis Google en 30–60 jours'
    ]
  },
  faq: {
    title: 'FAQ',
    list: [
      { question: 'En combien de temps pouvons-nous lancer?', answer: 'La plupart sont en ligne 1–2 semaines après votre démo.' },
      { question: 'Est-ce vraiment conforme à la Loi 96/Loi 25?', answer: 'Oui. Messages en français d’abord, anglais sur demande, modèles vérifiés. Documentation fournie.' },
      { question: 'Dois-je être technique?', answer: 'Non. Vous le voyez fonctionner d’abord; je m’occupe de l’installation et du transfert.' },
      { question: 'Combien ça coûte?', answer: `Packs DIY ${PACK_PRICE} $ chacun • Audit 249 $ • Système complet 1 499 $.` }
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

