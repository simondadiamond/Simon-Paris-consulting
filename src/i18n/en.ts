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
      secondaryCta: 'See Automation Packs ($149)'
    },
  problems: {
    title: 'Why clinics keep losing money every week…',
    list: [
      { title: 'Ghosted Leads', body: 'Leads wait and book elsewhere.' },
      { title: 'Missed Appointments', body: 'Empty chairs at prime hours.' },
      { title: 'Late Invoices', body: 'Cash flow gets squeezed.' },
      { title: 'Legal Uncertainty', body: 'Messaging may breach Bill 96/Law 25.' }
    ],
    note: 'You can fix all of this with simple, bilingual automation.'
  },
  growth: {
    title: 'Your Clinic\u2019s Growth Engine: Simple, Bilingual, Compliant.',
    gears: [
      { title: 'Speed\u2011to\u2011Lead SMS', desc: 'instant reply, EN/FR' },
      { title: 'No\u2011Show Chaser + Recall', desc: 'fewer empty chairs' },
      { title: 'Review & Compliance Engine', desc: 'more 5\u2605, audit-friendly' }
    ],
    cta: 'See Packs in Action'
  },
  offers: {
    heading: 'Three productized paths.',
    list: [
      {
        title: 'DIY Packs',
        price: '$149 each',
        desc: 'Plug\u2011and\u2011play automations. Install in minutes.',
        cta: 'Browse Packs',
        href: '/packs'
      },
      {
        title: 'Quick Audit',
        price: '$249',
        desc: '48h diagnosis + 1 quick win installed.',
        cta: 'Book 48h Audit',
        href: '/audit'
      },
      {
        title: 'Complete System',
        price: '$1,499',
        desc: 'All 3 packs installed + QA + handoff.',
        cta: 'Get the System',
        href: '/system'
      }
    ],
    note: 'Flat pricing. No hidden fees. French-first templates.'
  },
  roi: {
    title: '$149 vs. $900+ Lost Each Month',
    without: '3 missed patients/month = $900+ lost.',
    with: '$149 pack \u2192 instant replies, fewer no-shows.',
    note: 'Most clinics recoup the pack cost in the first week.'
  },
  proof: {
    title: 'Clinics that automate see results fast.',
    bullets: [
      '25\u201350% fewer no-shows',
      '5\u00d7 more booked appointments from instant SMS',
      '3\u00d7 more Google reviews in 30\u201360 days'
    ]
  },
  faq: {
    title: 'FAQ',
    list: [
      { question: 'How quickly can we launch?', answer: 'Most go live in 1\u20132 weeks after your demo.' },
      { question: 'Is this really Bill 96/Law 25 compliant?', answer: 'Yes. French-first messaging, EN on request, and templates reviewed for clarity. Documentation available.' },
      { question: 'Do I need to be technical?', answer: 'No. You see it working first; I handle setup and handoff.' },
      { question: 'How much does it cost?', answer: 'DIY packs $149 each \u2022 Audit $249 \u2022 Complete system $1,499.' }
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
