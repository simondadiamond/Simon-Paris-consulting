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
    title: 'Why clinics lose money every week…',
    list: [
      { title: 'Ignored leads', body: 'Patients wait and book elsewhere.' },
      { title: 'Missed appointments', body: 'Empty chairs at peak hours.' },
      { title: 'Late invoices', body: 'Cash flow gets squeezed.' },
      { title: 'Legal uncertainty', body: 'Messages may breach Law 25/Bill 96.' }
    ],
    note: 'You can fix all of this with simple bilingual automation.'
  },
  growth: {
    title: 'Your clinic\u2019s growth engine: simple, bilingual, compliant.',
    gears: [
      { title: 'Speed\u2011to\u2011Lead SMS', desc: 'Reply before competitors.' },
      { title: 'No\u2011Show Chaser + Reminders', desc: 'Fewer empty chairs every week.' },
      { title: 'Review Engine + Compliance', desc: 'More 5\u2605 reviews, audit-ready docs.' }
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
    title: `$${PACK_PRICE} vs ~$400 in lost appointments each month`,
    without: '3 missed appointments/month \u2248 $300\u2013$400 lost in revenue',
    with: `$${PACK_PRICE} pack \u2192 faster responses, fewer no-shows`,
    note: 'Many clinics recoup the pack cost within the first week.',
    disclaimer:
      'Estimates assume a typical appointment value of ~$100\u2013150. Results will vary by clinic.'
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
        answer:
          'Most setups are completed within 1\u20132 weeks after our demo call. I handle all the technical work while you focus on running your business.'
      },
      {
        question: 'Is this really compliant?',
        answer:
          'Absolutely. Every message template and automation workflow is reviewed for Bill 96 compliance. I provide documentation showing compliance for audit purposes.'
      },
      {
        question: "What if I'm not tech-savvy?",
        answer:
          "Perfect! That's exactly who this is built for. You don't need to understand the technology—just see the results. I handle all the technical setup and maintenance."
      },
      {
        question: 'How much does it cost?',
        answer: `From $${PACK_PRICE}. Flat pricing. No long-term contract.`
      },
      {
        question: 'Can you help us with AI adoption or strategy?',
        answer:
          "Absolutely. I'm always researching the latest AI tools and trends for SMBs. If you want to talk about how AI could help your business, just mention it when you book a demo."
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
