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
    headline: {
      line1: 'Less waste.',
      line2: 'More profit.',
      line3: '100% compliant.'
    },
    subtext:
      'I help Québec SMBs automate the repetitive tasks that drain time and money — while keeping Law 25 compliance covered.',
    cta: {
      text: 'Free Mini Audit',
      href: 'https://cal.com/simonparis/mini-audit'
    },
    card: {
      title: 'During the diagnostic, we identify…',
      bullet1: 'A bottleneck costing you time or clients.',
      bullet2: 'One task to automate without changing your software.',
      bullet3: 'The next step to stay safe with Law 25 / 96.',
      bullet4: 'Typical setup: 5–10 business days.'
    }
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
    q1: {
      question: 'How fast can we see results?',
      answer: [
        'Most setups are live within 1–2 weeks.',
        'You’ll start seeing time savings as soon as the first workflow goes live.'
      ]
    },
    q2: {
      question: 'Is this really compliant?',
      answer: [
        'Yes — everything follows Law 25 and Bill 96 requirements.',
        'Each workflow includes consent tracking and audit-ready documentation.'
      ]
    },
    q3: {
      question: 'What if I’m not comfortable with technology?',
      answer: [
        'No problem — everything is handled for you.',
        'You only review and approve; I take care of the setup and testing.',
        'Each workflow is designed to be effortless for non-technical teams.'
      ]
    },
    q4: {
      question: 'What’s the price — and what do I get?',
      answer: [
        'Your 20-minute Mini Audit is free.',
        'Custom automations start around $1,000 depending on scope.',
        'Founding-member discounts and fixed-price bundles are available.',
        'No monthly contracts — just clear deliverables and ROI you can measure.'
      ]
    },
    q5: {
      question: 'Do these automations actually work for small teams?',
      answer: [
        'Yes. They’re designed for lean SMB operations — no IT team required.',
        'The goal is simple: save hours every week without adding complexity.'
      ]
    },
    q6: {
      question: 'Can you help us with AI or new tools later?',
      answer: [
        'Absolutely. Once your core workflows run smoothly,',
        'I can help you integrate new AI features — chatbots, voice bots, or analytics — when you’re ready.'
      ]
    },
    cta: {
      text: 'Still unsure what fits your team?',
      button: 'Book a Free Mini Audit'
    }
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
    compliance: {
      label: 'Privacy & Compliance',
      href: '/privacy'
    },
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
