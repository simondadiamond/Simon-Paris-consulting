import { PACK_PRICE } from '../config';

export const en = {
  header: {
    brand: 'Simon Paris',
    languageToggle: 'EN/FR',
    email: 'info@simonparis.ca',
    cta: 'Diagnostic Éclair'
  },
  hero: {
    tagline: 'For Québec SMBs • Law 25 ready • Zero jargon',
    h1: 'Automate the busywork. Protect your margins. Stay Law 25 ready.',
    sub: 'One bilingual automation system to capture leads, follow up, and stay compliant without adding headcount.',
    cta: 'Book your Mini Audit',
    ctaHref: 'https://cal.com/simonparis/diagnostic'
  },
  pain: {
    title: 'Why Québec SMBs lose time (and profit) every week…',
    cards: [
      {
        title: 'Lost sales',
        body: 'Missed calls and ignored forms push ready-to-buy clients to competitors.'
      },
      {
        title: 'Wasted hours',
        body: 'Manual follow-ups keep owners stuck in admin instead of growth.'
      },
      {
        title: 'Cash-flow stress',
        body: 'Invoices slip through the cracks and payouts get delayed.'
      },
      {
        title: 'Compliance risk',
        body: 'Consent tracking gaps create unnecessary Law 25 risk.'
      }
    ],
    sub: 'All of this is fixable with simple bilingual automations.'
  },
  solution: {
    title: 'The growth engine for your business: simple, bilingual, compliant.',
    cards: [
      {
        title: 'Fast Response',
        body: 'Respond instantly to new leads and clients.'
      },
      {
        title: 'Smart Follow-ups',
        body: 'Automate reminders without adding headcount.'
      },
      {
        title: 'Compliance & Trust',
        body: 'Stay compliant and earn client trust effortlessly.'
      }
    ]
  },
  audit: {
    title: 'Here’s what we identify in your 20-minute Mini Audit',
    bullets: [
      'The workflow leaking the most time or revenue.',
      'Quick-win automations that fit your current stack.',
      'Consent and compliance gaps to close before fines.'
    ],
    timeline: 'Typical setup: 5–10 business days.',
    cta: 'Book your Mini Audit'
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
  finalcta: {
    headline: 'AI that matters to you.',
    subtext: 'Every week, I translate AI and automation news into concrete actions for your SMB.',
    cta: 'Join the newsletter',
    href: '/en/newsletter',
    alternativeHeadlines: [
      'Make AI work for your SMB.',
      'Turn AI noise into next steps.',
      'Weekly AI guidance you can act on.'
    ]
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
    title: 'The Automated SMB',
    subtitle: 'The pragmatic newsletter to modernize your SMB',
    bodyLines: [
      'Every week: save time and cut costly mistakes.',
      'Clear, practical tips for Québec SMBs that stay compliant with Law 25.'
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
    tagline: 'Bilingual automation for Québec SMBs.',
    contact: {
      emailLabel: 'Email',
      email: 'info@simonparis.ca',
      locationLabel: 'Based in',
      location: 'Québec, Canada'
    },
    copyright: '© 2024 Simon Paris Consulting'
  }
};
export type TranslationKeys = typeof en;
export default en;
