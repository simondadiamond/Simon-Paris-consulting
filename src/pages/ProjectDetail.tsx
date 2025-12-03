import React, { useMemo } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft } from 'lucide-react';
import { Header, Footer } from '../components/Layout';
import { useProjects } from '../hooks/useProjects';

interface ProjectDetailProps {
  slug: string;
}

const getEmbedUrl = (url: string) => {
  if (!url) return url;

  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split(/[?&]/)[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }

  if (url.includes('youtube.com/watch')) {
    const searchParams = url.split('?', 2)[1];
    const params = new URLSearchParams(searchParams);
    const videoId = params.get('v');
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }

  if (url.includes('loom.com/share/')) {
    return url.replace('loom.com/share/', 'loom.com/embed/');
  }

  return url;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug }) => {
  const { projects, loading, error } = useProjects();
  const project = useMemo(() => projects.find((item) => item.slug === slug), [projects, slug]);
  const currentIndex = useMemo(() => projects.findIndex((item) => item.slug === slug), [projects, slug]);
  const nextProject = useMemo(() => {
    if (!projects.length || currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex];
  }, [currentIndex, projects]);
  const outcomes = useMemo(() => {
    if (!project?.outcomes) return [];
    return project.outcomes
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  }, [project?.outcomes]);

  const nextCaseStudyClasses = [
    'mt-12 block overflow-hidden rounded-3xl border border-[#139E9C]/40',
    'bg-gradient-to-r from-[#0B1320] via-slate-900/60 to-[#0E172A]',
    'p-8 shadow-[0_24px_70px_rgba(19,158,156,0.25)] transition-transform duration-500',
    'hover:-translate-y-1 hover:border-[#7ef9f6]/50 hover:shadow-[0_28px_90px_rgba(19,158,156,0.35)]',
  ].join(' ');

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B1320] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#139E9C]/40 border-t-[#7ef9f6]" />
          <p className="text-gray-300">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-[#0B1320] px-6 text-white">
        <div className="max-w-lg rounded-2xl bg-slate-900/40 p-10 text-center shadow-lg ring-1 ring-white/10">
          <h1 className="text-2xl font-semibold text-white">Unable to load project</h1>
          <p className="mt-4 text-gray-300">Please try again or return to the homepage.</p>
          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#139E9C] px-6 py-3 text-sm font-semibold text-[#0B1320] shadow-lg shadow-[#139E9C]/20 transition hover:brightness-110"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-[#0B1320] px-6 text-white">
        <div className="max-w-lg rounded-2xl bg-slate-900/40 p-10 text-center shadow-lg ring-1 ring-white/10">
          <h1 className="text-3xl font-bold">404 - Project Not Found</h1>
          <p className="mt-4 text-gray-300">The case study you are looking for does not exist or has been moved.</p>
          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#139E9C] px-6 py-3 text-sm font-semibold text-[#0B1320] shadow-lg shadow-[#139E9C]/20 transition hover:brightness-110"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0B1320] text-white">
      <Header forceDarkBackground />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_15%_20%,rgba(19,158,156,0.18),rgba(11,19,32,0)),radial-gradient(60%_60%_at_85%_0%,rgba(34,128,255,0.16),rgba(11,19,32,0)_70%)]" />
          <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-[#139E9C]/20 blur-[120px]" />
          <div className="absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full bg-[#139E9C]/14 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 lg:pb-24 lg:pt-36">
          <a
            href="/#projects"
            className="mb-6 inline-flex items-center gap-2 pb-6 text-xs font-bold uppercase tracking-[0.24em] text-slate-400 transition-colors hover:text-teal-400"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Back to Projects
          </a>

          <div className="mt-6 space-y-4">
            <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl">{project.title}</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-300">{project.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#139E9C]/10 backdrop-blur"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl">
            {project.demoVideoUrl && project.demoVideoUrl.startsWith('http') ? (
              <div className="aspect-[16/9] w-full">
                <iframe
                  src={getEmbedUrl(project.demoVideoUrl)}
                  title={`${project.title} demo`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : project.heroImage ? (
              <img src={project.heroImage} alt={project.title} className="h-full w-full object-cover" />
            ) : (
              <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[#139E9C]/30 via-[#0B1320] to-[#0B1320] text-gray-200">
                No media available
              </div>
            )}
          </div>

          {/* ACTION BAR - Insert this block */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#139E9C] px-5 py-2.5 text-sm font-semibold text-[#0B1320] transition hover:bg-[#7ef9f6] hover:shadow-[0_0_20px_rgba(19,158,156,0.4)]"
              >
                <span>Visit Live Site</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m-6-6L10 14" /></svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 hover:border-white/40"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>View Source</span>
              </a>
            )}
          </div>

          <div className="mt-14 grid gap-8 rounded-3xl border border-white/5 bg-slate-900/30 p-8 shadow-[0_20px_60px_rgba(6,10,25,0.45)] backdrop-blur lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="text-xl font-semibold text-white">The Challenge</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">The Solution</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300">{project.solution}</p>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-[0_24px_70px_rgba(6,10,25,0.55)]">
            <div className="border-b border-white/5 px-8 py-6">
              <h2 className="text-2xl font-semibold text-white">How It Works</h2>
              <p className="mt-2 text-gray-300">System architecture and flow visualization.</p>
            </div>
            <div className="flex items-center justify-center bg-slate-950/40 p-6">
              {project.architectureUrl ? (
                <img
                  src={project.architectureUrl}
                  alt={`${project.title} architecture`}
                  className="max-h-[540px] w-full rounded-2xl object-contain ring-1 ring-white/10 transition duration-500 hover:scale-[1.02] hover:ring-[#139E9C]/40"
                  style={{ cursor: 'zoom-in' }}
                />
              ) : (
                <div className="w-full rounded-2xl bg-slate-900/60 p-10 text-center text-gray-400 ring-1 ring-white/5">
                  Architecture diagram coming soon.
                </div>
              )}
            </div>
          </div>

          {outcomes.length > 0 && (
            <div className="mt-10 rounded-2xl border border-[#139E9C]/25 bg-slate-900/30 px-5 py-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <CheckCircle className="h-5 w-5 text-emerald-400" aria-hidden />
                <h2 className="text-lg">Key Outcomes</h2>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                {outcomes.map((outcomeText, index) => (
                  <div
                    key={index}
                    className="flex h-full items-center gap-3 rounded-lg border border-[#139E9C]/20 bg-slate-900/30 px-4 py-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium leading-none text-gray-300">{outcomeText}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {nextProject && (
            <a
              href={`/project/${nextProject.slug}`}
              className={nextCaseStudyClasses}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#7ef9f6]">Next Case Study</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{nextProject.title}</h3>
                  <p className="mt-1 text-gray-300">{nextProject.tagline}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#139E9C]/15 text-[#7ef9f6]">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
