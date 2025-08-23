import React from 'react';
import { Header, Footer } from '../components/Layout';

type Lang = 'fr' | 'en';

const content = {
  fr: {
    navDemo: 'Réserver une démo',
    hero: {
      headline: 'Ne manquez plus jamais un patient.',
      sub: 'Répondez à chaque demande en moins de 5 minutes — en français d’abord, conforme à la Loi 25 et à la Loi 96.',
      cta: 'Réserver une démo de 15 min',
    },
    proof: [
      'Réponse < 5 min = plus de rendez-vous',
      'Français d’abord (Loi 96)',
      'Conformité Loi 25 (consentement & confidentialité)',
    ],
    pain: [
      { pain: 'Sièges vides', outcome: 'Plus de créneaux remplis' },
      { pain: 'Suivi lent', outcome: 'Réponses instantanées, même après heures' },
      { pain: 'Stress de conformité', outcome: 'Messages FR‑d’abord, traçables et conformes' },
    ],
    how: [
      '1. Un patient vous écrit (site, Cliniko, GoRendezvous, etc.) → vous recevez un courriel',
      '2. Nous détectons ce courriel et répondons en français en quelques secondes',
      '3. Le patient est invité à réserver ou à rappeler; votre équipe est notifiée',
    ],
    case: '« Avant: 8 demandes par semaine sans réponse. Après: 0 perdues; +35% de rendez‑vous en 30 jours. »',
    founders: {
      title: 'Offre Fondateurs — 7 places — 99 $ DWY',
      bullets: [
        'Installation en 48 h',
        'Exige un court avis public / étude de cas',
        'Portée: Speed‑to‑Lead uniquement (sans support continu)',
      ],
      cta: 'Réserver l’offre Fondateurs (99 $)',
    },
    faq: [
      {
        q: 'Est‑ce compatible avec notre système?',
        a: 'Oui. Si vous recevez un courriel pour une demande, c’est compatible. Sinon, nous configurons un simple formulaire conforme.',
      },
      {
        q: 'Est‑ce conforme à la Loi 25 et à la Loi 96?',
        a: 'Oui: français d’abord, consentement et confidentialité clairs.',
      },
      { q: 'Combien de temps pour démarrer?', a: '48 h pour l’installation standard.' },
      { q: 'Offrez‑vous du support continu?', a: 'En option (forfait séparé).' },
      {
        q: 'Et hors des heures d’ouverture?',
        a: 'Les réponses partent quand même, avec mention claire des heures de rappel.',
      },
      {
        q: 'Où sont stockées les données?',
        a: 'Stockage sécurisé; détails dans notre Politique de confidentialité.',
      },
    ],
    final: {
      headline: 'Prêt à ne plus manquer de patients?',
      primary: 'Réserver une démo',
      secondary: 'Offre Fondateurs 99 $',
    },
    consent: 'En soumettant, vous consentez à recevoir des communications liées à votre demande.',
    footer: { privacy: 'Confidentialité', terms: 'Conditions', contact: 'Contact' },
  },
  en: {
    navDemo: 'Book Demo',
    hero: {
      headline: 'Never miss a patient again.',
      sub: 'Reply to every inquiry in under 5 minutes — French‑first and compliant with Law 25 & Bill 96.',
      cta: 'Book a 15-minute demo',
    },
    proof: [
      '<5-minute reply = more bookings',
      'French-first (Bill 96)',
      'Law 25 compliant (consent & privacy)',
    ],
    pain: [
      { pain: 'Empty chairs', outcome: 'More filled slots' },
      { pain: 'Slow follow-up', outcome: 'Instant replies, even after hours' },
      { pain: 'Compliance stress', outcome: 'French-first, trackable, compliant messages' },
    ],
    how: [
      '1. A patient contacts you (site, Cliniko, GoRendezvous, etc.) → you get an email',
      '2. We detect that email and reply in French within seconds',
      '3. Patient is nudged to book or call; your team is alerted',
    ],
    case: '“Before: 8 unreturned inquiries/week. After: 0 lost; +35% bookings in 30 days.”',
    founders: {
      title: 'Founders Offer — 7 spots — $99 DWY',
      bullets: [
        'Live within 48 hours',
        'Short public review / case study required',
        'Scope: Speed-to-Lead only (no ongoing support)',
      ],
      cta: 'Claim Founders Spot ($99)',
    },
    faq: [
      {
        q: 'Will this work with our system?',
        a: 'Yes. If your inquiries trigger an email, it’s compatible. If not, we set up a simple compliant form.',
      },
      {
        q: 'Is this compliant with Law 25 & Bill 96?',
        a: 'Yes: French-first with clear consent & privacy.',
      },
      { q: 'How fast can we go live?', a: '48 hours for standard setup.' },
      { q: 'Do you offer ongoing support?', a: 'Optional (separate plan).' },
      {
        q: 'What about after hours?',
        a: 'Replies still go out with a clear callback window.',
      },
      {
        q: 'Where is data stored?',
        a: 'Secure storage; see our Privacy Policy.',
      },
    ],
    final: {
      headline: 'Ready to stop missing patients?',
      primary: 'Book a demo',
      secondary: 'Founders $99',
    },
    consent: 'By submitting, you consent to receive communications related to your inquiry.',
    footer: { privacy: 'Privacy', terms: 'Terms', contact: 'Contact' },
  },
} as const;

const Landing: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = content[lang];
  const frHref = '/fr/ne-manquez-aucun-patient';
  const enHref = '/never-miss-a-patient';

  return (
    <div className="font-sans">
      <Header
        langToggleHref={lang === 'fr' ? enHref : frHref}
        langToggleLabel={lang === 'fr' ? 'EN' : 'FR'}
        ctaHref="#demo"
        ctaLabel={t.navDemo}
      />

      <main>
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#121c2d] text-white pt-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: '2s' }}
            />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">{t.hero.headline}</h1>
            <p className="max-w-2xl mx-auto mb-6">{t.hero.sub}</p>
            <a
              href="#demo"
              data-action="demo"
              className="btn-primary text-lg px-8 py-4"
            >
              {t.hero.cta}
            </a>
          </div>
          <div className="relative z-10 mt-8 flex justify-center space-x-6 opacity-75">
            <img
              src="https://github.com/simondadiamond/workflowleaf-assets/blob/1ae5d2c4fc3b285cdd60ed5b3c986f0e14a3c4b7/partner-bar/Microsoft%20Startups.png?raw=true"
              alt="Microsoft for Startups"
              className="h-12 w-auto"
            />
            <img
              src="https://github.com/simondadiamond/workflowleaf-assets/blob/07e0a1d79616959fc3294b71c06da22e0078914d/partner-bar/hatch.png?raw=true"
              alt="DigitalOcean Hatch"
              className="h-12 w-auto"
            />
            <img
              src="https://github.com/simondadiamond/workflowleaf-assets/blob/1ae5d2c4fc3b285cdd60ed5b3c986f0e14a3c4b7/partner-bar/Stripe%20Logo.svg?raw=true"
              alt="Stripe"
              className="h-12 w-auto"
            />
            <img
              src="https://github.com/simondadiamond/workflowleaf-assets/blob/1ae5d2c4fc3b285cdd60ed5b3c986f0e14a3c4b7/partner-bar/Airtable.png?raw=true"
              alt="Airtable"
              className="h-12 w-auto"
            />
          </div>
        </section>

        <section className="bg-white text-[#121c2d] py-12">
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            {t.proof.map((p, i) => (
              <div key={i}>
                <p className="font-semibold">{p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {t.pain.map((item, i) => (
              <div key={i}>
                <p className="font-bold mb-2">{item.pain}</p>
                <p className="text-[#139E9B]">{item.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#121c2d] text-white py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            {t.how.map((step, i) => (
              <div key={i}>
                <p className="font-bold mb-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 max-w-3xl mx-auto text-center">
          <p className="italic">{t.case}</p>
        </section>

        <section className="bg-white text-[#121c2d] py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">{t.founders.title}</h2>
            <ul className="mb-6 space-y-2">
              {t.founders.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
              <a
                href="https://buy.stripe.com/FOUNDERS99"
                data-action="founders"
                className="btn-outline"
              >
                {t.founders.cta}
              </a>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
          <div className="space-y-6">
            {t.faq.map((qa, i) => (
              <div key={i}>
                <p className="font-semibold">{qa.q}</p>
                <p>{qa.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="demo" className="bg-[#121c2d] text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.final.headline}</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="#demo"
                data-action="demo"
                className="btn-primary"
              >
                {t.final.primary}
              </a>
              <a
                href="https://buy.stripe.com/FOUNDERS99"
                data-action="founders"
                className="btn-outline"
              >
                {t.final.secondary}
              </a>
            </div>
          <form
            action="/api/lead"
            method="POST"
            className="max-w-md mx-auto text-left space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder={lang === 'fr' ? 'Nom' : 'Name'}
              className="w-full p-2 text-[#121c2d] rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={lang === 'fr' ? 'Courriel' : 'Email'}
              className="w-full p-2 text-[#121c2d] rounded"
              required
            />
            <input
              type="text"
              name="clinic"
              placeholder={lang === 'fr' ? 'Type de clinique' : 'Clinic type'}
              className="w-full p-2 text-[#121c2d] rounded"
              required
            />
            <label className="flex items-start text-sm">
              <input type="checkbox" required className="mr-2 mt-1" />
              <span>{t.consent}</span>
            </label>
            <button type="submit" className="btn-primary w-full">
              {lang === 'fr' ? 'Envoyer' : 'Send'}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const LandingFR: React.FC = () => <Landing lang="fr" />;
export const LandingEN: React.FC = () => <Landing lang="en" />;

export default Landing;

