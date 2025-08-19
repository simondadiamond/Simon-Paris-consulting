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
      { title: 'Leads ignorés', body: 'Les patients réservent ailleurs.' },
      { title: 'Rendez-vous manqués', body: 'Des chaises vides aux heures de pointe.' },
      { title: 'Factures en retard', body: 'Moins de liquidités chaque mois.' },
      { title: 'Incertitude légale', body: 'Risque de non-conformité (Loi 25/Loi 96).' }
    ],
    note: 'Tout se corrige avec une automatisation bilingue simple.'
  },
  growth: {
    title: 'Le moteur de croissance de votre clinique : simple, bilingue, conforme.',
    gears: [
      { title: 'SMS vitesse-à-lead', desc: 'Répondez avant vos concurrents.' },
      { title: 'Relance d’absences + rappels', desc: 'Moins de chaises vides chaque semaine.' },
      { title: 'Moteur d’avis + conformité', desc: 'Plus d’avis 5★, docs prêts pour audit.' }
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
    title: `Pourquoi ${PACK_PRICE} $ bat ~600\u2013900 $ perdus chaque mois`,
    without: 'Clinique type : leads perdus, 3\u20134 no-shows, factures en retard \u2248 600\u2013900 $ par mois.',
    with: `Packs d\u00e8s ${PACK_PRICE} $ \u2192 r\u00e9ponses plus rapides, moins d\u2019absences, factures \u00e0 temps.`,
    note: 'Beaucoup de cliniques rentabilisent le pack d\u00e8s la premi\u00e8re semaine.',
    disclaimer:
      'Estimations bas\u00e9es sur ~120\u2013150 $ par rendez-vous et des pertes typiques de leads au Qu\u00e9bec. R\u00e9sultats variables.'
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
      { question: 'En combien de temps lançons-nous?', answer: 'La plupart des installations sont actives en 1–2 semaines.' },
      { question: 'C’est vraiment conforme?', answer: 'Oui. Modèles et workflows revus pour Loi 25 + Loi 96. Docs prêts pour audit.' },
      { question: 'Dois-je être technique?', answer: 'Non. On s’occupe de tout.' },
      { question: 'Combien ça coûte?', answer: 'À partir de 199 $. Prix fixes. Sans contrat à long terme.' }
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
  stickyCta: 'Télécharger la checklist conformité',
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

