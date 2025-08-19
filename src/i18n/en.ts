import { PACK_PRICE } from '../config';

export const en = {
  header: {
    brand: 'Simon Paris',
    languageToggle: 'EN/FR',
    email: 'info@simonparis.ca',
    bookDemo: 'Book Demo'
  },
  hero: {
    eyebrow: 'For Québec clinics • Law 25 + Bill 96 ready',
    h1_part1: 'Fill Your Schedule.',
    h1_accent: 'Stay 100% Compliant.',
    subhead:
      'Plug‑and‑play bilingual automations for Speed‑to‑Lead, No‑Show Chaser, and Review Engine—built for Québec clinics. Demo first. Install in minutes.',
      proof:
        'Clinics that automate often see 25–50% fewer no‑shows and much faster follow‑ups.',
      primaryCta: 'Get Free Compliance Checklist',
      secondaryCta: `See Automation Packs ($${PACK_PRICE})`
    },
  problems: {
    title: 'Why clinics <span class="text-teal-500 font-semibold">lose money</span> every week…',
    list: [
      { title: 'Ignored <span class="text-teal-500 font-semibold">leads</span>', body: 'Patients book elsewhere.' },
      { title: 'Missed <span class="text-teal-500 font-semibold">appointments</span>', body: 'Empty chairs at peak hours.' },
      { title: 'Late <span class="text-teal-500 font-semibold">invoices</span>', body: 'Cash flow gets squeezed.' },
      { title: 'Legal <span class="text-teal-500 font-semibold">uncertainty</span>', body: 'Messages may breach Law 25/Bill 96.' }
    ],
    note: 'You can fix all of this with simple <span class="font-semibold">bilingual automation</span>.'
  },
  growth: {
    title: 'The <span class="text-teal-500 font-semibold">growth engine</span> for your clinic: simple, bilingual, compliant.',
    gears: [
      {
        title: 'Speed‑to‑Lead <span class="text-teal-500 font-semibold">SMS</span>',
        bullets: ['Replies in under 5 min', 'FR-first, then EN', 'Integrates web, calls, social']
      },
      {
        title: 'No‑Show <span class="text-teal-500 font-semibold">Chaser</span> + <span class="text-teal-500 font-semibold">Reminders</span>',
        bullets: ['24h & 2h reminders', 'Easy reschedule link', '25–50% fewer no-shows']
      },
      {
        title: 'Review <span class="text-teal-500 font-semibold">Engine</span> + <span class="text-teal-500 font-semibold">Compliance</span>',
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
    title: 'Why <span class="text-teal-500 font-semibold">$149</span> beats <span class="text-teal-500 font-semibold">~$600–900</span> lost every month',
    without: 'Lost leads, 3–4 no-shows, late invoices ≈ $600–900/mo',
    with: 'Pack from $149 → faster replies, fewer no‑shows, invoices on time',
    note: 'Many clinics recoup the pack in the first week.',
    disclaimer: 'Estimates based on ~$120–150 per appointment and typical lead leakage in Québec. Results vary.'
  },
  checklist: {
    eyebrow: 'Free',
    title: 'Law 25 + Bill 96 <span class="text-teal-500 font-semibold">Compliance Checklist</span>',
    sub: 'Spot common risks in 3 minutes across reminders and messages.',
    points: [
      'FR-first templates ready',
      'Clear consent & opt-out',
      'Timestamp every send',
      'Plain, non-ambiguous language',
      'Proof archive for audits',
      'Bilingual message review'
    ],
    cta: 'Get the checklist',
    href: '/checklist',
    disclaimer: 'No spam. Includes FR/EN templates.'
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
    title: 'Start Free. Stay Compliant. Grow Faster.',
    sub: 'Download the checklist now — upgrade to packs when ready.',
    primary: 'Download Checklist',
    primaryHref: '/checklist',
    secondary: 'See Packs',
    secondaryHref: '/packs'
  },
  stickyCta: 'Get the Compliance Checklist',
  trustBadge: 'Built for Québec • Demo-first • Fully bilingual & Law 96\u2013compliant',
  partners: {
    title: 'Trusted & Supported By'
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
