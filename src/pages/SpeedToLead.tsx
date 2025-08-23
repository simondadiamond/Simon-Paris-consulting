import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import PartnerBar from '../components/PartnerBar';
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
  CalendarCheck,
  Lock
} from 'lucide-react';

type Lang = 'fr' | 'en';

const leadResponseConfig = {
  response_delay_minutes: 2,
  business_hours: { start: '08:30', end: '17:00', timezone: 'America/Toronto' },
  has_online_booking: true
} as const;

const content = {
  fr: {
    navDemo: 'Réserver une démo',
    hero: {
      headline: 'Ne manquez plus jamais un patient.',
      sub: 'Répondez à chaque demande en moins de 3 minutes — français d’abord, conforme à la Loi 25 et à la Loi 96.',
      cta: 'Réserver une démo de 15 min',
      bullets: ['Réponse < 3 min', 'Français d’abord', 'Équipe alertée'],
      footnote: 'Généralement 30–60 s; délai réglable 0–3 min pour plus de réalisme.'
    },
    whyTitle: 'Pourquoi les cliniques perdent des patients',
    whyCopy:
      '<strong>Chaque demande non traitée est un rendez-vous perdu.</strong> Les patients comparent plusieurs cliniques et choisissent celle qui répond en premier. Un suivi lent crée des trous d’horaire et du stress. <strong>Une réponse français d’abord, envoyée en quelques minutes, saisit l’intention, clarifie la suite et pousse à réserver — même hors heures.</strong>',
    pain: [
      { pain: 'Si\u00e8ges vides', outcome: 'Plus de cr\u00e9neaux remplis' },
      { pain: 'Suivi lent', outcome: 'R\u00e9ponses instantan\u00e9es, m\u00eame apr\u00e8s heures' },
      { pain: 'Stress de conformit\u00e9', outcome: 'Messages FR-d\u2019abord, tra\u00e7ables et conformes' }
    ],
    howTitle: 'Comment \u00e7a marche',
    howCopy:
      '<strong>Speed\u2011to\u2011Lead travaille discr\u00e8tement en coulisses.</strong> Une demande patient d\u00e9clenche un courriel que notre robot capte instantan\u00e9ment. <strong>En quelques secondes, une r\u00e9ponse bilingue est envoy\u00e9e avec une invitation chaleureuse \u00e0 r\u00e9server ou \u00e0 appeler.</strong> Votre \u00e9quipe re\u00e7oit le transcript et peut intervenir au besoin. Le syst\u00e8me garde les \u00e9changes organis\u00e9s, conformes et toujours align\u00e9s \u00e0 votre marque. Aucun nouveau logiciel \u00e0 ma\u00eetriser et aucune application \u00e0 installer pour les patients.',
    how: [
      '1. Un patient vous écrit (site, Cliniko, GoRendezvous, etc.) → vous recevez un courriel',
      '2. Nous détectons ce courriel et répondons en français en quelques secondes',
      '3. Le patient reçoit une réponse conviviale et la prochaine étape; votre équipe est alertée'
    ],
    proofTitle: 'Résultats attendus',
    proofCopy:
      '<strong>Des réponses plus rapides convertissent davantage.</strong> Les cliniques constatent moins d’absences et plus de créneaux remplis quand chaque demande reçoit une prochaine étape claire immédiatement.',
    stats: [
      '25–50 % d’absences en moins',
      'Réponses en moins de 5 min doublent les conversions',
      '3× plus d’avis Google'
    ],
    case: {
      clinic: 'Clinique Exemple, QC',
      before: 'Avant : 8 demandes/semaine sans réponse; trous d’horaire l’après-midi.',
      after: 'Après (30 jours) : 0 perdues; +35 % de créneaux remplis; moins de « téléphone arabe ».',
      impact: 'Impact : ~X $/semaine récupérés.',
      quote: '« On a cessé de perdre des patients du jour au lendemain. » — Clinique Exemple, QC'
    },
    founders: {
      badge: 'Offre Fondateurs',
      copy:
        '<strong>Profitez du tarif précurseur.</strong> Nous intégrons sept cliniques par mois au tarif « Done-With-You » de 99 $. Cela comprend l’installation, la formation et un court témoignage public. Les places se renouvellent chaque mois selon le principe du premier arrivé, premier servi.',
      primary: 'Réserver l’offre Fondateurs (99 $)',
      secondary: 'Réserver une démo'
    },
    faqIntro: 'Vous avez demandé, nous avons répondu.',
    faq: [
      { q: 'Est-ce compatible avec notre système?', a: 'Oui. Si vous recevez un courriel pour une demande, c’est compatible. Sinon, nous configurons un simple formulaire conforme.' },
      { q: 'Est-ce conforme à la Loi 25 et à la Loi 96?', a: 'Oui: français d’abord, consentement et confidentialité clairs.' },
      { q: 'Combien de temps pour démarrer?', a: '48 h pour l’installation standard.' },
      { q: 'Offrez-vous du support continu?', a: 'En option (forfait séparé).' },
      { q: 'Et hors des heures d’ouverture?', a: 'Les réponses partent quand même, avec mention claire des heures de rappel.' },
      { q: 'Où sont stockées les données?', a: 'Stockage sécurisé; détails dans notre Politique de confidentialité.' },
      { q: 'Peut-on choisir le délai de réponse ?', a: 'Oui, les réponses se font généralement en 30–60 s et vous pouvez régler un délai de 0–3 min.' }
    ],
    final: {
      title: 'Prêt à vous lancer?',
      copy:
        '<strong>Voyez-le en 15 minutes.</strong> Aucun chantier — on travaille avec vos outils actuels.',
      primary: 'Réserver une démo',
      secondary: 'Offre Fondateurs 99 $'
    },
    consent: 'En soumettant, vous consentez \u00e0 recevoir des communications li\u00e9es \u00e0 votre demande.',
    footer: { privacy: 'Confidentialit\u00e9', terms: 'Conditions', contact: 'Contact' }
  },
  en: {
    navDemo: 'Book Demo',
    hero: {
      headline: 'Never miss a patient again.',
      sub: 'Reply to every inquiry in under 3 minutes \u2014 French‑first and compliant with Law 25 & Bill 96.',
      cta: 'Book a 15-minute demo',
      bullets: ['Replies < 3 min', 'French-first', 'Team alerted'],
      footnote: 'Typically 30–60s; adjustable delay 0–3 min for realism.'
    },
    whyTitle: 'Why clinics miss patients',
    whyCopy:
      '<strong>Every missed inquiry is lost revenue.</strong> Patients compare multiple clinics and go with the first reply. Slow follow‑up means empty chairs tomorrow and stressed staff. <strong>A French‑first reply within minutes captures intent while it’s high, sets expectations for next steps, and nudges to book—even after hours.</strong>',
    pain: [
      { pain: 'Empty chairs', outcome: 'More filled slots' },
      { pain: 'Slow follow-up', outcome: 'Instant replies, even after hours' },
      { pain: 'Compliance stress', outcome: 'French-first, trackable, compliant messages' }
    ],
    howTitle: 'How it works',
    howCopy:
      '<strong>Speed-to-Lead works quietly behind the scenes.</strong> A patient inquiry triggers an email that our bot sees instantly. <strong>Within seconds a bilingual reply is sent with a friendly prompt to book or call.</strong> Your team receives the transcript and can jump in whenever needed. The system keeps conversations organized, compliant, and always on-brand. No new software to learn and no apps for patients to install.',
    how: [
      '1. A patient contacts you (site, Cliniko, GoRendezvous, etc.) → you get an email',
      '2. We detect that email and reply in French within seconds',
      '3. Patient gets a friendly reply and a next step; your team is alerted'
    ],
    proofTitle: 'Results you can expect',
    proofCopy:
      '<strong>Faster replies convert more patients.</strong> Clinics see fewer no-shows and more filled slots when every inquiry gets a clear next step right away.',
    stats: [
      '25–50% fewer no-shows',
      'Replies in under 5 minutes double conversions',
      '3× more Google reviews'
    ],
    case: {
      clinic: 'Example Clinic, QC',
      before: 'Before: 8 unreturned inquiries/week; calendar gaps most afternoons.',
      after: 'After (30 days): 0 lost inquiries; +35% booked slots; staff reports lower phone tag.',
      impact: 'Business impact: ~$X/week recovered from previously missed appointments.',
      quote: '“We stopped losing patients overnight.” — Example Clinic, QC'
    },
    founders: {
      badge: 'Founders Offer',
      copy:
        '<strong>Lock in early-adopter pricing.</strong> We onboard seven clinics each month at a Done-With-You rate of $99. This includes setup, training, and a brief public testimonial. Spots reset monthly and are first-come, first-served.',
      primary: 'Claim Founders Spot ($99)',
      secondary: 'Book a demo'
    },
    faqIntro: 'You asked, we answered.',
    faq: [
      { q: 'Will this work with our system?', a: 'Yes. If your inquiries trigger an email, it\u2019s compatible. If not, we set up a simple compliant form.' },
      { q: 'Is this compliant with Law\u202f25 & Bill\u202f96?', a: 'Yes: French-first with clear consent & privacy.' },
      { q: 'How fast can we go live?', a: '48 hours for standard setup.' },
      { q: 'Do you offer ongoing support?', a: 'Optional (separate plan).' },
      { q: 'What about after hours?', a: 'Replies still go out with a clear callback window.' },
      { q: 'Where is data stored?', a: 'Secure storage; see our Privacy Policy.' },
      { q: 'Can we choose the reply delay?', a: 'Yes, typical replies are 30\u201360s, and you can set a 0\u20133 minute delay.' }
    ],
    final: {
      title: 'Ready to get started?',
      copy:
        '<strong>See it live in 15 minutes.</strong> No rebuild \u2014 we work with your existing systems.',
      primary: 'Book a demo',
      secondary: 'Founders $99'
    },
    consent: 'By submitting, you consent to receive communications related to your inquiry.',
    footer: { privacy: 'Privacy', terms: 'Terms', contact: 'Contact' }
  }
} as const;

const LandingFAQ: React.FC<{ title: string; intro: string; items: { q: string; a: string }[] }> = ({ title, intro, items }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-700 mb-10">{intro}</p>
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
  const bulletIcons = [Clock, Languages, Mail];
  const howIcons = [Mail, Zap, CalendarCheck];
  const statIcons = [CheckCircle, Clock, Star];

  return (
    <div className="font-sans">
      <Header langToggle={{ fr: frHref, en: enHref }} ctaHref="#demo" ctaLabel={t.navDemo} />

      <main>
        <section
          className="relative flex items-center bg-[#121c2d] text-white pt-24 pb-16 overflow-hidden"
          style={{ minHeight: '75vh' }}
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
              <p className="mt-2 text-xs opacity-70">{t.hero.footnote}</p>
            </div>
            <div className="mt-10 md:mt-0">
              <div className="w-full h-64 rounded-xl bg-gradient-to-br from-teal-400 to-blue-500" />
            </div>
          </div>
        </section>

        <PartnerBar />

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">{t.whyTitle}</h2>
            <p className="mb-10 text-gray-700" dangerouslySetInnerHTML={{ __html: t.whyCopy }} />
            <div className="grid md:grid-cols-3 gap-6">
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
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">{t.howTitle}</h2>
            <p className="mb-10 text-gray-700" dangerouslySetInnerHTML={{ __html: t.howCopy }} />
            <div className="mb-10">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video rounded-xl bg-gray-200"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.how.map((step, i) => {
                const Icon = howIcons[i];
                return (
                  <div key={i} className="card-light p-6 flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#2280FF]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#2280FF]" />
                    </div>
                    <p className="font-semibold">{step}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
              <h3 className="font-semibold mb-3">{lang === 'fr' ? 'Timing intelligent' : 'Smart timing'}</h3>
              <div className="space-y-2 text-sm">
                <p>
                  {lang === 'fr'
                    ? `Heures d'ouverture: "Bien reçu — je termine quelque chose, je vous rappelle dans ~${leadResponseConfig.response_delay_minutes} minutes."`
                    : `During business hours: "Got your message — just wrapping up, I'll call you in ~${leadResponseConfig.response_delay_minutes} minutes."`}
                </p>
                <p>
                  {lang === 'fr' ? (
                    <>
                      Hors heures: "Merci pour votre message — nous vous rappelons demain 8h30–9h. Vous préférez réserver maintenant?"
                      {leadResponseConfig.has_online_booking && (
                        <a href="#" className="text-[#2280FF] underline ml-1">
                          Lien de réservation
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      After hours: "Thanks for your message — we'll call tomorrow 8:30–9:00. Prefer to book now?"
                      {leadResponseConfig.has_online_booking && (
                        <a href="#" className="text-[#2280FF] underline ml-1">
                          Booking link
                        </a>
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">{t.proofTitle}</h2>
            <p className="mb-10 text-gray-700" dangerouslySetInnerHTML={{ __html: t.proofCopy }} />
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {t.stats.map((s, i) => {
                const Icon = statIcons[i];
                return (
                  <div key={i} className="card-light p-6 flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-[#2280FF]" />
                    <p className="font-medium">{s}</p>
                  </div>
                );
              })}
            </div>
            <div className="card-light p-8">
              <h3 className="font-semibold mb-3">{t.case.clinic}</h3>
              <p className="text-sm mb-1">{t.case.before}</p>
              <p className="text-sm mb-1">{t.case.after}</p>
              <p className="text-sm mb-4">{t.case.impact}</p>
              <p className="text-sm italic text-gray-600">{t.case.quote}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="card-light p-8 relative" data-spots="7">
              <span className="absolute top-4 left-4 bg-[#2280FF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {t.founders.badge}
              </span>
              <p className="mb-6 text-gray-700" dangerouslySetInnerHTML={{ __html: t.founders.copy }} />
              <div className="flex justify-center space-x-4">
                <a
                  href="https://buy.stripe.com/FOUNDERS99"
                  data-action="founders"
                  className="btn-primary"
                >
                  {t.founders.primary}
                </a>
                <a href="#demo" data-action="demo" className="btn-outline">
                  {t.founders.secondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <LandingFAQ title="FAQ" intro={t.faqIntro} items={t.faq} />

        <section id="demo" className="bg-[#121c2d] text-white py-20 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">{t.final.title}</h2>
            <p className="mb-8" dangerouslySetInnerHTML={{ __html: t.final.copy }} />
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
            <div className="flex justify-center space-x-6 mb-8 text-sm">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-1" />
                {lang === 'fr' ? 'Loi 96' : 'Bill 96'}
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-1" />
                {lang === 'fr' ? 'Loi 25' : 'Law 25'}
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 mr-1" />
                {lang === 'fr' ? 'Paiement s\u00e9curis\u00e9' : 'Secure payment'}
              </div>
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
          </div>
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
