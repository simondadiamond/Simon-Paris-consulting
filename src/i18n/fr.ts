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
    title: `${PACK_PRICE} $ vs \u2248 400 $ de revenus manqu\u00e9s par mois`,
    without: '3 rendez-vous manqu\u00e9s/mois \u2248 300\u2013400 $ de revenus perdus',
    with: `Pack \u00e0 ${PACK_PRICE} $ \u2192 r\u00e9ponses plus rapides, moins d\u2019absences`,
    note: 'Plusieurs cliniques rentabilisent le pack d\u00e8s la premi\u00e8re semaine.',
    disclaimer:
      'Estimations bas\u00e9es sur une valeur de rendez-vous typique de 100\u2013150 $. R\u00E9sultats variables.'
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
        answer:
          'La plupart des configurations sont termin\u00e9es en 1\u20132 semaines apr\u00e8s notre appel d\u00e9mo. Je m’occupe de toute la partie technique pendant que vous g\u00e9rez votre entreprise.'
      },
      {
        question: 'C’est vraiment conforme?',
        answer:
          'Absolument. Chaque mod\u00e8le de message et flux d’automatisation est v\u00e9rifi\u00e9 pour la conformit\u00e9 \u00e0 la Loi 96. Je fournis une documentation montrant la conformit\u00e9 pour les audits.'
      },
      {
        question: 'Et si je ne suis pas \u00e0 l’aise avec la technologie?',
        answer:
          'Parfait! C’est justement pour vous que c’est con\u00e7u. Vous n’avez pas besoin de comprendre la technologie — voyez simplement les r\u00e9sultats. Je m’occupe de toute l’installation et de la maintenance.'
      },
      {
        question: 'Combien \u00e7a co\u00fbte?',
        answer: `\u00c0 partir de ${PACK_PRICE} $. Prix fixes. Sans contrat \u00e0 long terme.`
      },
      {
        question: 'Pouvez-vous nous aider avec l’adoption ou la strat\u00e9gie IA?',
        answer:
          'Absolument. Je suis toujours \u00e0 l’aff\u00fbt des derniers outils et tendances IA pour les PME. Si vous voulez discuter de la fa\u00e7on dont l’IA peut aider votre entreprise, mentionnez-le lors de la d\u00e9mo.'
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

