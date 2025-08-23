import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ShieldCheck,
  Clock,
  Languages,
  Star,
  XCircle,
  Mail,
  Zap,
  CalendarCheck
} from 'lucide-react';

type Lang = 'fr' | 'en';

const content = {
  fr: {
    navDemo: 'Réserver une démo',
    hero: {
      headline: 'Ne manquez plus jamais un patient.',
      sub: 'Répondez à chaque demande en moins de 5 minutes — en français d’abord, conforme à la Loi 25 et à la Loi 96.',
      cta: 'Réserver une démo de 15 min',
      bullets: [
        'Réponse < 5 min',
        'Français d’abord',
        'Conforme Loi 25 & Loi 96'
      ]
    },
    values: [
      '25–50 % d’absences en moins',
      'Réponses en moins de 5 min',
      '3× plus d’avis Google'
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
      bullets: ['<5-minute reply', 'French-first', 'Law 25 & Bill 96 ready']
    },
    values: [
      '25–50% fewer no-shows',
      'Replies in under 5 minutes',
      '3× more Google reviews'
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

const LandingFAQ: React.FC<{ items: { q: string; a: string }[] }> = ({ items }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
        <div className="space-y-4">
          {items.map((qa, i) => (
            <div key={i} className="card-light overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-lg font-semibold text-gray-900">{qa.q}</span>
                {open === i ? (
                  <ChevronUp className="w-6 h-6 text-[#2280FF]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#2280FF]" />
                )}
              </button>
              <div
                className={`px-6 pb-6 transition-all duration-300 ${
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-700">{qa.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Landing: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = content[lang];
  const frHref = '/fr/ne-manquez-aucun-patient';
  const enHref = '/never-miss-a-patient';
  const bulletIcons = [Clock, Languages, ShieldCheck];
  const valueIcons = [CheckCircle, Clock, Star];
  const howIcons = [Mail, Zap, CalendarCheck];

  return (
    <div className="font-sans">
      <Header
        langToggle={{ fr: frHref, en: enHref }}
        ctaHref="#demo"
        ctaLabel={t.navDemo}
      />

      <main>
        <section
          className="relative flex items-center bg-[#121c2d] text-white pt-24 overflow-hidden"
          style={{ minHeight: '80vh' }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: '2s' }}
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{t.hero.headline}</h1>
              <p className="mb-6 max-w-md">{t.hero.sub}</p>
              <a href="#demo" data-action="demo" className="btn-primary text-lg px-8 py-4">
                {t.hero.cta}
              </a>
              <ul className="mt-6 space-y-2">
                {t.hero.bullets.map((b, i) => {
                  const Icon = bulletIcons[i];
                  return (
                    <li key={i} className="flex items-center text-sm">
                      <Icon className="w-4 h-4 text-[#2280FF]" />
                      <span className="ml-2">{b}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center space-x-3 mt-6">
                <span className="flex items-center bg-white/10 rounded-full px-3 py-1 text-xs font-medium">
                  <ShieldCheck className="w-4 h-4 mr-1" />
                  {lang === 'fr' ? 'Loi 96' : 'Bill 96'}
                </span>
                <span className="flex items-center bg-white/10 rounded-full px-3 py-1 text-xs font-medium">
                  <ShieldCheck className="w-4 h-4 mr-1" />
                  {lang === 'fr' ? 'Loi 25' : 'Law 25'}
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-64 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {t.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={i} className="card-light p-6 flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-[#2280FF]" />
                  <p className="font-medium">{v}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {t.pain.map((item, i) => (
              <div key={i} className="card-light p-6">
                <div className="flex items-center mb-2">
                  <XCircle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="font-semibold">{item.pain}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#139E9B] mr-2" />
                  <span className="text-[#139E9B] font-medium">{item.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#121C2D] text-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {t.how.map((step, i) => {
              const Icon = howIcons[i];
              return (
                <div key={i} className="card-dark p-6">
                  <div className="w-10 h-10 mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2280FF]" />
                  </div>
                  <p className="font-semibold">{step}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto card-light p-8 text-center italic">{t.case}</div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto card-light p-8">
            <h2 className="text-2xl font-bold mb-4">{t.founders.title}</h2>
            <ul className="mb-6 space-y-2 list-disc list-inside">
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

        <LandingFAQ items={t.faq} />

        <section id="demo" className="bg-[#121c2d] text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.final.headline}</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#demo" data-action="demo" className="btn-primary">
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

      <a
        href="#demo"
        data-action="demo"
        className="fixed bottom-4 right-4 z-50 btn-primary md:hidden"
      >
        {t.hero.cta}
      </a>

      <Footer langToggle={{ fr: frHref, en: enHref }} />
    </div>
  );
};

export const LandingFR: React.FC = () => <Landing lang="fr" />;
export const LandingEN: React.FC = () => <Landing lang="en" />;

export default Landing;

