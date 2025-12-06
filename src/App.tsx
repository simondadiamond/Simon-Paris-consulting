import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Header } from './components/Layout';
import FinalCTA from './components/FinalCTA';
import { useProjects } from './hooks/useProjects';

const GradientCard = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <section
    id={id}
    className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-slate-900 to-[#0E1625] px-6 py-16 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:px-12"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,230,219,0.12),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(34,128,255,0.18),transparent_32%)]" />
    <div className="relative z-10 mx-auto max-w-4xl text-center text-white">{children}</div>
  </section>
);

const HeroSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative" id="solutions">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[32px] bg-white p-8 shadow-[0_30px_120px_rgba(15,23,42,0.12)] ring-1 ring-slate-100 md:grid-cols-2 md:p-14">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {lang === 'fr' ? 'IA & Automatisation' : 'AI & Automation'}
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{lang === 'fr' ? 'Ligne directrice' : 'Principal focus'}</p>
            <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] font-black leading-[0.95] text-slate-900">
              {t.header.brand}
            </h1>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white shadow-sm">
              {lang === 'fr' ? 'IA & Automatisation' : 'AI & Automation'}
            </div>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={t.hero.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-[1px] hover:shadow-xl"
            >
              {lang === 'fr' ? 'Commencer' : 'Get started'}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07)] transition hover:-translate-y-[1px] hover:shadow-md"
            >
              {t.hero.cta.label}
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 scale-[1.08] rounded-[30px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 opacity-90" />
          <div className="relative overflow-hidden rounded-[28px] bg-[#0B1320] p-6 shadow-[0_25px_80px_rgba(10,21,50,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,128,255,0.35),transparent_45%),radial-gradient(circle_at_10%_15%,rgba(19,158,156,0.25),transparent_40%)]" />
            <div className="relative flex flex-col items-center gap-6">
              <img
                src="/simon.jpg"
                alt="Portrait"
                className="h-[360px] w-auto rounded-[20px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
              <div className="flex w-full items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
                <span>{lang === 'fr' ? 'IA spécialisée' : 'AI systems'}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">{lang === 'fr' ? 'Actif' : 'Active'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StorySection = () => {
  const { lang } = useLanguage();
  return (
    <GradientCard id="story">
      <div className="space-y-6">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-semibold leading-tight text-white">
            {lang === 'fr'
              ? 'Passionné par l’IA et par la transformation d’idées en systèmes qui résolvent de vrais problèmes.'
              : 'Passionate about AI and turning strong ideas into systems that solve real problems.'}
          </h2>
          <p className="text-lg leading-8 text-white/80">
            {lang === 'fr'
              ? "Chaque projet est un laboratoire : tester, ajuster, livrer. Je conçois des solutions numériques qui reflètent la marque et simplifient le quotidien."
              : 'Every engagement is a lab: testing, adjusting, delivering. I design digital systems that reflect your brand and remove friction from daily operations.'}
          </p>
        </div>
      </div>
    </GradientCard>
  );
};

const SkeletonProject = () => (
  <div className="grid gap-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 md:grid-cols-[1.1fr_1fr]">
    <div className="h-[220px] animate-pulse rounded-xl bg-slate-100" />
    <div className="space-y-3">
      <div className="h-6 w-48 animate-pulse rounded bg-slate-100" />
      <div className="h-5 w-64 animate-pulse rounded bg-slate-100" />
      <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
      <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />
    </div>
  </div>
);

const ProjectsShowcase = () => {
  const { projects, loading, error } = useProjects();

  const projectList = projects.length > 0
    ? projects
    : [
        {
          id: 'placeholder-1',
          slug: 'workflow-automation',
          title: 'Ops Automation Studio',
          tagline: 'Automated intake, triage, and SLA tracking across client journeys.',
          status: 'Live',
          engineeringChallenge: '',
          techStack: ['n8n', 'Supabase', 'Postgres'],
          heroImages: ['/proof-lab-ai-newsletter.png'],
          heroImage: '/proof-lab-ai-newsletter.png',
          problem: '',
          solution: '',
          demoVideoUrl: '',
          architectureUrl: '',
          outcomes: '',
        },
      ];

  return (
    <section id="projects" className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Projetos</p>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-semibold text-slate-900">Projects in motion</h2>
        </div>
        <a
          href={projectList.length > 0 ? `/project/${projectList[0].slug}` : '#projects'}
          className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-[1px] hover:shadow-xl sm:inline-flex"
        >
          View details
        </a>
      </div>

      <div className="space-y-6">
        {loading && (
          <>
            <SkeletonProject />
            <SkeletonProject />
          </>
        )}
        {!loading && error && (
          <div className="rounded-2xl bg-white p-6 text-center text-slate-500 shadow-sm ring-1 ring-slate-100">
            Unable to load projects right now.
          </div>
        )}
        {!loading && !error &&
          projectList.map((project) => (
            <a
              key={project.id}
              href={`/project/${project.slug}`}
              className="group grid gap-6 rounded-[22px] bg-white p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 transition hover:-translate-y-[2px] hover:shadow-[0_28px_90px_rgba(15,23,42,0.12)] md:grid-cols-[1.1fr_1fr]"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                {project.heroImages?.[0] ? (
                  <img
                    src={project.heroImages[0]}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full min-h-[220px] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
                    <span className="text-sm font-semibold">{project.title}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between gap-4 p-2 md:pr-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    <span className="rounded-full bg-slate-900/5 px-3 py-1 text-slate-800">{project.status}</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">Automation</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-base leading-7 text-slate-600">{project.tagline}</p>
                </div>
                {project.techStack?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#e8e5e0] pb-20">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-28 md:pt-32">
        <HeroSection />
        <StorySection />
        <ProjectsShowcase />
      </main>
      <div id="contact" className="mt-16">
        <FinalCTA />
      </div>
    </div>
  );
}

export default App;
