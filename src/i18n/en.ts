import { PACK_PRICE } from '../config';

export const en = {
  header: {
    brand: 'Simon Paris',
    languageToggle: 'EN/FR',
    email: 'info@simonparis.ca',
    cta: 'Join Newsletter'
  },
  hero: {
    eyebrow: 'For Québec clinics • Law 25 + Bill 96 ready',
    h1_part1: 'Fill Your Schedule.',
    h1_accent: 'Stay 100% Compliant.',
    subhead:
      'Plug‑and‑play bilingual automations for Speed‑to‑Lead, No‑Show Chaser, and Review Engine—built for Québec clinics. Demo first. Install in minutes.',
    proof:
      'Clinics that automate often see 25–50% fewer no‑shows and much faster follow‑ups.',
    primaryCta: 'Join Newsletter'
  },
  problems: {
    title: 'Why clinics <span class="accent">lose money</span> every week…',
      list: [
        { title: 'Ignored leads', body: 'Patients book elsewhere.' },
        { title: 'Missed appointments', body: 'Empty chairs at peak hours.' },
        { title: 'Late invoices', body: 'Cash flow gets squeezed.' },
        { title: 'Legal uncertainty', body: 'Messages may breach Law 25/Bill 96.' }
      ],
    note: 'You can fix all of this with simple <span class="font-semibold">bilingual automation</span>.'
  },
  growth: {
    title: 'The <span class="accent">growth engine</span> for your clinic: simple, bilingual, compliant.',
    gears: [
        {
          title: 'Speed‑to‑Lead SMS',
          bullets: ['Replies in under 5 min', 'FR-first, then EN', 'Integrates web, calls, social']
        },
        {
          title: 'No‑Show Chaser + Reminders',
          bullets: ['24h & 2h reminders', 'Easy reschedule link', '25–50% fewer no-shows']
        },
        {
          title: 'Review Engine + Compliance',
          bullets: ['Polite FR/EN review asks', '3× more reviews in 30–60 days', 'Audit-ready docs (Law 25/96)']
        }
      ],
    cta: 'See the packs in action'
  },
  offers: {
    heading: 'Choose your path',
    list: [
      {
        title: 'DIY Packs',
        price: `$${PACK_PRICE} each`,
        desc: 'Install-ready automations. Minutes to set up.',
        cta: 'View Packs',
        href: '/packs'
      },
      {
        title: '48\u2011Hour Audit',
        price: '$249',
        desc: 'Diagnosis + 1 quick-win installed.',
        cta: 'Book the 48h Audit',
        href: '/audit',
        badge: 'Most Popular'
      },
      {
        title: 'Complete System',
        price: '$1,499',
        desc: 'All 3 packs installed + QA + handover.',
        cta: 'Get the System',
        href: '/system'
      }
    ],
    note: 'Flat pricing. No hidden fees. French-first templates.'
  },
  roi: {
    title: '<span class="accent">$199 today</span> saves clinics <span class="accent">~$600–900</span> every month',
    without: 'Lost leads, 3–4 no-shows, late invoices ≈ $600–900/mo',
    with: 'Pack from $199 → faster replies, fewer no‑shows, invoices on time',
    note: 'Many clinics recoup the pack in the first week.',
    disclaimer: 'Estimates based on ~$120–150 per appointment and typical lead leakage in Québec. Results vary.'
  },
  checklist: {
    eyebrow: 'Weekly Briefing',
    title: 'Are you really <span class="accent">Law 25</span> ready?',
    sub: 'Most clinics think they’re fine… until a no-show patient or audit proves otherwise. Join the weekly briefing to spot the hidden risks before they become costly.',
    points: [
      'Is your SMS & email consent wording valid under Québec law?',
      'Do you have timestamped proof for every message you send?',
      'Are your reminders and follow-ups fully FR-first?',
      'Can patients opt-out instantly, without risk of complaint?'
    ],
    cta: 'Join Newsletter',
    href: '/en/newsletter'
  },
  proof: {
    title: 'Clinics that automate see results fast.',
    bullets: [
      '25\u201350% fewer no-shows',
      'Replies in under 5 minutes',
      '3\u00D7 more Google reviews in 30\u201360 days'
    ]
  },
  faq: {
    title: 'FAQ',
    list: [
      {
        question: 'How quickly can you set up my automation?',
        answer: {
          intro: 'Faster than you think.',
          bullets: ['Live within 1–2 weeks', 'Hands-on support included']
        }
      },
      {
        question: 'Is this really compliant?',
        answer: {
          intro: 'Yes, and documented.',
          bullets: ['Bill 25/96-checked templates', 'Audit-ready proof provided']
        }
      },
      {
        question: "What if I'm not tech-savvy?",
        answer: {
          intro: 'Built for non-tech folks.',
          bullets: ['We set everything up', 'Human support in English & French']
        }
      },
      {
        question: 'How much does it cost?',
        answer: {
          intro: `From $${PACK_PRICE}.`,
          bullets: ['Flat pricing, no contract', 'ROI within days for many']
        }
      },
      {
        question: 'Can you help us with AI adoption or strategy?',
        answer: {
          intro: 'Absolutely.',
          bullets: ['Always testing new AI tools', 'Ask during the demo']
        }
      }
    ]
  },
  finalCTA: {
    title: 'Stay compliant. Stay ahead.',
    sub: 'Join the weekly newsletter for proven automation tactics built for Québec SMBs.',
    primary: 'Join Newsletter',
    primaryHref: '/en/newsletter',
    secondary: 'See Packs',
    secondaryHref: '/packs'
  },
  stickyCta: 'Join Newsletter',
  trustBadge: 'Built for Québec • Demo-first • Fully bilingual & Law 96\u2013compliant',
  partners: {
    title: 'Trusted & Supported By'
  },
  newsletter: {
    meta: {
      title: 'Québec SMB AI Newsletter | The Automated SMB',
      description:
        'Weekly newsletter for Québec SMBs: save time, cut costs, and stay compliant with Law 25.',
      canonical: '/en/newsletter',
      alternate: '/fr/newsletter'
    },
    title: 'The Automated SMB – The pragmatic newsletter for modernizing your SMB',
    subtitle: 'Every week: save time and discover practical AI tools for SMBs.',
    bodyLines: [
      'Clear, actionable tactics designed for Québec SMB leaders.',
      'Stay compliant with Law 25 and cut costs without the jargon.'
    ],
    emailLabel: 'Email address',
    emailPlaceholder: 'name@business.com',
    consent:
      'I consent to receive communications from The Automated SMB and understand I can unsubscribe at any time.',
    submit: 'Get the weekly newsletter',
    trust: {
      prefix: 'Your data is protected. See our ',
      linkLabel: 'Privacy Policy',
      suffix: '.'
    },
    success: {
      title: "Thanks! You're on the list.",
      body: 'Watch your inbox for the welcome email within the next few minutes.'
    },
    error: {
      title: 'Something needs your attention',
      body: 'Check your details and try again, or email hello@simonparis.ca for support.'
    },
    confirmation: {
      metaTitle: 'Newsletter confirmation | The Automated SMB',
      title: 'Subscription confirmed',
      body:
        'Thank you! Your subscription is confirmed. You’ll now receive weekly practical insights to modernize your SMB.',
      extra: '👉 Add us to your safe senders list so you never miss an issue.',
      backHome: {
        label: 'Back to homepage',
        href: '/en'
      }
    }
  },
  footer: {
    blurb: "Bilingual automation for Québec SMBs. Built for today's needs, ready for tomorrow's AI.",
    language: 'Serving all of Québec • EN/FR',
    services: 'Services',
    servicesList: ['Lead Follow-up Automation', 'Appointment Reminders', 'Review Management', 'Bill 96 Compliance'],
    contact: 'Contact',
    location: 'Québec, Canada',
    privacy: 'Privacy Policy',
    copyright: '© 2024 Simon Paris Consulting. All rights reserved.',
    curiosity: 'Curious about the next wave of AI for SMBs? Ask Simon.'
  }
};
export type TranslationKeys = typeof en;
export default en;
