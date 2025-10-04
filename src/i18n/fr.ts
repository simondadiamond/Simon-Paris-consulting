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
      line1: 'Moins de pertes.',
      line2: 'Plus de profits.',
      line3: '100 % conforme.'
    },
    subtext:
      'J’accompagne les PME du Québec à automatiser les tâches répétitives qui grugent temps et argent — tout en assurant la conformité à la Loi 25.',
    cta: {
      text: 'Diagnostic Éclair gratuit',
      href: 'https://cal.com/simonparis/diagnostic'
    },
    card: {
      title: 'Pendant le diagnostic, nous identifions…',
      bullet1: 'Un goulot qui vous fait perdre du temps ou des patients.',
      bullet2: 'Une tâche à automatiser sans changer votre logiciel.',
      bullet3: 'La prochaine étape pour rester tranquille côté Loi 25 / 96.',
      bullet4: 'Installation typique : 5 à 10 jours ouvrables.'
    }
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
    q1: {
      question: 'En combien de temps verrai-je des résultats ?',
      answer:
        'La majorité de mes clients voient leur première automatisation en place en 7 à 10 jours ouvrables. Vous recevez un plan clair après le diagnostic — sans jargon, sans casse-tête.'
    },
    q2: {
      question: 'Est-ce vraiment conforme à la Loi 25 / 96 ?',
      answer:
        'Oui. Chaque automatisation inclut des modèles conformes et un suivi de consentement documenté. Vous recevez un mini-rapport d’audit comme preuve.'
    },
    q3: {
      question: 'Et si je ne suis pas à l’aise avec la technologie ?',
      answer:
        'Aucun souci. J’installe tout pour vous — vous n’avez qu’à valider. J’accompagne plusieurs propriétaires qui détestent la techno, mais adorent gagner du temps.'
    },
    q4: {
      question: 'Combien ça coûte — et qu’est-ce que j’obtiens ?',
      answer:
        'Le diagnostic est gratuit. Les automatisations sur mesure commencent à 199 $, prix fixe. Aucun abonnement, et la majorité des clients récupèrent l’investissement en moins d’une semaine.'
    },
    q5: {
      question: 'Est-ce que ça fonctionne vraiment pour les petites équipes ?',
      answer:
        'Oui. C’est conçu pour les cliniques, commerces et bureaux de 3 à 25 employés. Objectif : moins d’administration, plus de clients, zéro stress — sans changer vos outils actuels.'
    },
    q6: {
      question: 'Pouvez-vous nous aider avec l’IA ou de nouveaux outils ?',
      answer:
        'Absolument. Je teste chaque mois de nouveaux assistants IA, chatbots et voice bots — que je peux ajouter une fois vos flux stables.'
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

