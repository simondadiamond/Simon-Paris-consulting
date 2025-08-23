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

const content = {
  fr: {
    navDemo: 'Réserver une démo',
    hero: {
      headline: 'Ne manquez plus jamais un patient.',
      sub: 'Répondez à chaque demande en moins de 5 minutes — en français d’abord, conforme à la Loi 25 et à la Loi 96.',
      cta: 'Réserver une démo de 15 min',
      bullets: ['Réponse < 5 min', 'Français d’abord', 'Conforme Loi 25 & Loi 96']
    },
    whyTitle: 'Pourquoi c\u2019est important',
    whyCopy:
      '<strong>Chaque demande manqu\u00e9e est un revenu perdu.</strong> Les patients comparent plusieurs cliniques et celle qui r\u00e9pond en premier gagne g\u00e9n\u00e9ralement leur confiance. <strong>Un suivi lent signifie des si\u00e8ges vides demain et des d\u00e9penses marketing gaspill\u00e9es.</strong> Avec des r\u00e9ponses instantan\u00e9es en fran\u00e7ais, vous captez les patients lorsque leur intention est \u00e9lev\u00e9e, m\u00eame apr\u00e8s les heures d\u2019ouverture, tout en restant pleinement conforme aux lois sur la confidentialit\u00e9. <strong>La rapidit\u00e9 convertit; l\u2019h\u00e9sitation fait fuir les profits.</strong> Ce rythme cr\u00e9e fid\u00e9lit\u00e9 et visites r\u00e9p\u00e9t\u00e9es.',
    pain: [
      { pain: 'Si\u00e8ges vides', outcome: 'Plus de cr\u00e9neaux remplis' },
      { pain: 'Suivi lent', outcome: 'R\u00e9ponses instantan\u00e9es, m\u00eame apr\u00e8s heures' },
      { pain: 'Stress de conformit\u00e9', outcome: 'Messages FR-d\u2019abord, tra\u00e7ables et conformes' }
    ],
    howTitle: 'Comment \u00e7a marche',
    howCopy:
      '<strong>Speed\u2011to\u2011Lead travaille discr\u00e8tement en coulisses.</strong> Une demande patient d\u00e9clenche un courriel que notre robot capte instantan\u00e9ment. <strong>En quelques secondes, une r\u00e9ponse bilingue est envoy\u00e9e avec une invitation chaleureuse \u00e0 r\u00e9server ou \u00e0 appeler.</strong> Votre \u00e9quipe re\u00e7oit le transcript et peut intervenir au besoin. Le syst\u00e8me garde les \u00e9changes organis\u00e9s, conformes et toujours align\u00e9s \u00e0 votre marque. Aucun nouveau logiciel \u00e0 ma\u00eetriser et aucune application \u00e0 installer pour les patients.',
    how: [
      '1. Un patient vous \u00e9crit (site, Cliniko, GoRendezvous, etc.) \u2192 vous recevez un courriel',
      '2. Nous d\u00e9tectons ce courriel et r\u00e9pondons en fran\u00e7ais en quelques secondes',
      '3. Le patient est invit\u00e9 \u00e0 r\u00e9server ou \u00e0 rappeler; votre \u00e9quipe est notifi\u00e9e'
    ],
    proofTitle: 'La preuve que \u00e7a marche',
    proofCopy:
      '<strong>Les cliniques obtiennent des gains mesurables.</strong> Des r\u00e9ponses rapides r\u00e9duisent les absences et doublent les conversions lorsque l\u2019intention est \u00e0 son sommet. <strong>Un suivi constant g\u00e9n\u00e8re plus d\u2019avis et une fid\u00e9lit\u00e9 durable.</strong> Un seul patient sauv\u00e9 peut rentabiliser le syst\u00e8me plusieurs fois. Les chiffres ci\u2011dessous sont typiques des pratiques qui exploitent chaque piste. Ces am\u00e9liorations se cumulent mois apr\u00e8s mois pendant que votre \u00e9quipe se concentre sur les soins plut\u00f4t que sur la chasse aux messages.',
    stats: [
      '25\u201350 % d\u2019absences en moins',
      'R\u00e9ponses en moins de 5 min doublent les conversions',
      '3\u00d7 plus d\u2019avis Google'
    ],
    case: {
      clinic: 'Clinique Exemple',
      metrics: ['+35% de rendez\u2011vous en 30 jours', '0 demandes perdues', 'Installation en 48h']
    },
    founders: {
      ribbon: 'Offre Fondateurs \u2014 7 places ce mois\u2011ci \u2014 99\u202f$ DWY',
      copy:
        '<strong>Profitez du tarif pr\u00e9curseur.</strong> Nous int\u00e9grons sept cliniques par mois au tarif \u00ab\u00a0Done\u2011With\u2011You\u00a0\u00bb de 99\u00a0$. Cela comprend l\u2019installation, la formation et un court t\u00e9moignage public. Les places se renouvellent chaque mois selon le principe du premier arriv\u00e9, premier servi.',
      cta: 'R\u00e9server l\u2019offre Fondateurs (99\u202f$)'
    },
    faqIntro: 'Vous avez demand\u00e9, nous avons r\u00e9pondu.',
    faq: [
      { q: 'Est\u2011ce compatible avec notre syst\u00e8me?', a: 'Oui. Si vous recevez un courriel pour une demande, c\u2019est compatible. Sinon, nous configurons un simple formulaire conforme.' },
      { q: 'Est\u2011ce conforme \u00e0 la Loi\u202f25 et \u00e0 la Loi\u202f96?', a: 'Oui: fran\u00e7ais d\u2019abord, consentement et confidentialit\u00e9 clairs.' },
      { q: 'Combien de temps pour d\u00e9marrer?', a: '48\u202fh pour l\u2019installation standard.' },
      { q: 'Offrez\u2011vous du support continu?', a: 'En option (forfait s\u00e9par\u00e9).' },
      { q: 'Et hors des heures d\u2019ouverture?', a: 'Les r\u00e9ponses partent quand m\u00eame, avec mention claire des heures de rappel.' },
      { q: 'O\u00f9 sont stock\u00e9es les donn\u00e9es?', a: 'Stockage s\u00e9curis\u00e9; d\u00e9tails dans notre Politique de confidentialit\u00e9.' }
    ],
    final: {
      title: 'Pr\u00eat \u00e0 vous lancer?',
      copy:
        '<strong>Votre prochain patient attend d\u00e9j\u00e0.</strong> R\u00e9servez une d\u00e9mo rapide pour voir Speed\u2011to\u2011Lead en action ou d\u00e9crochez une place Fondateur tant qu\u2019elle est disponible. <strong>R\u00e9ponses en quelques minutes, conformit\u00e9 d\u00e8s le premier jour.</strong>',
      primary: 'R\u00e9server une d\u00e9mo',
      secondary: 'Offre Fondateurs 99\u202f$'
    },
    consent: 'En soumettant, vous consentez \u00e0 recevoir des communications li\u00e9es \u00e0 votre demande.',
    footer: { privacy: 'Confidentialit\u00e9', terms: 'Conditions', contact: 'Contact' }
  },
  en: {
    navDemo: 'Book Demo',
    hero: {
      headline: 'Never miss a patient again.',
      sub: 'Reply to every inquiry in under 5 minutes \u2014 French\u2011first and compliant with Law\u202f25 & Bill\u202f96.',
      cta: 'Book a 15-minute demo',
      bullets: ['<5-minute reply', 'French-first', 'Law 25 & Bill 96 ready']
    },
    whyTitle: 'Why it matters',
    whyCopy:
      '<strong>Every missed inquiry is lost revenue.</strong> Patients compare multiple clinics and the one who responds first usually wins their trust. <strong>Slow follow-up means empty chairs tomorrow and wasted marketing spend.</strong> With instant French-first replies, you capture patients while intent is high, even after hours, and you stay fully compliant with privacy laws. <strong>Speed converts; hesitation leaks profit.</strong> That momentum builds loyalty and repeat visits.',
    pain: [
      { pain: 'Empty chairs', outcome: 'More filled slots' },
      { pain: 'Slow follow-up', outcome: 'Instant replies, even after hours' },
      { pain: 'Compliance stress', outcome: 'French-first, trackable, compliant messages' }
    ],
    howTitle: 'How it works',
    howCopy:
      '<strong>Speed-to-Lead works quietly behind the scenes.</strong> A patient inquiry triggers an email that our bot sees instantly. <strong>Within seconds a bilingual reply is sent with a friendly prompt to book or call.</strong> Your team receives the transcript and can jump in whenever needed. The system keeps conversations organized, compliant, and always on-brand. No new software to learn and no apps for patients to install.',
    how: [
      '1. A patient contacts you (site, Cliniko, GoRendezvous, etc.) \u2192 you get an email',
      '2. We detect that email and reply in French within seconds',
      '3. Patient is nudged to book or call; your team is alerted'
    ],
    proofTitle: 'Proof it works',
    proofCopy:
      '<strong>Real clinics see measurable gains.</strong> Fast replies reduce no-shows and double conversions when intent is highest. <strong>Consistent follow\u2011up produces more reviews and long\u2011term loyalty.</strong> Even a single saved patient can repay the system many times over. The numbers below are typical for practices that engage every lead. Those improvements compound month after month as your team focuses on care instead of chasing messages.',
    stats: [
      '25\u201350% fewer no-shows',
      'Replies in under 5 minutes double conversions',
      '3\u00d7 more Google reviews'
    ],
    case: {
      clinic: 'Example Clinic',
      metrics: ['+35% bookings in 30 days', '0 missed inquiries', '48h setup']
    },
    founders: {
      ribbon: 'Founders Offer \u2014 7 spots this month \u2014 $99 DWY',
      copy:
        '<strong>Lock in early-adopter pricing.</strong> We onboard seven clinics each month at a Done-With-You rate of $99. This includes setup, training, and a brief public testimonial. Spots reset monthly and are first-come, first-served.',
      cta: 'Claim Founders Spot ($99)'
    },
    faqIntro: 'You asked, we answered.',
    faq: [
      { q: 'Will this work with our system?', a: 'Yes. If your inquiries trigger an email, it\u2019s compatible. If not, we set up a simple compliant form.' },
      { q: 'Is this compliant with Law\u202f25 & Bill\u202f96?', a: 'Yes: French-first with clear consent & privacy.' },
      { q: 'How fast can we go live?', a: '48 hours for standard setup.' },
      { q: 'Do you offer ongoing support?', a: 'Optional (separate plan).' },
      { q: 'What about after hours?', a: 'Replies still go out with a clear callback window.' },
      { q: 'Where is data stored?', a: 'Secure storage; see our Privacy Policy.' }
    ],
    final: {
      title: 'Ready to get started?',
      copy:
        '<strong>Your next patient is already waiting.</strong> Book a quick demo to see Speed-to-Lead in action, or grab a founders spot while it\u2019s still available. <strong>Replies in minutes, compliant from day one.</strong>',
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
  const bulletIcons = [Clock, Languages, ShieldCheck];
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
              <ul className="space-y-1 text-sm">
                {t.case.metrics.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F9FAFB]">
          <div className="max-w-3xl mx-auto px-6 card-light p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 relative inline-block">
              <span className="bg-[#2280FF] text-white px-4 py-1 rounded-t">{t.founders.ribbon}</span>
            </h2>
            <p className="mb-6 text-gray-700" dangerouslySetInnerHTML={{ __html: t.founders.copy }} />
            <a
              href="https://buy.stripe.com/FOUNDERS99"
              data-action="founders"
              className="btn-outline"
            >
              {t.founders.cta}
            </a>
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
