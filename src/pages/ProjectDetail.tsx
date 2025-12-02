import React, { useMemo } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
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

  const debugPanel = useMemo(() => {
    if (loading) return null;

    const formattedJson = JSON.stringify(projects, null, 2);

    return (
      <div className="fixed bottom-6 right-6 z-50 max-h-[70vh] w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur">
        <details open className="h-full">
          <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-[#7ef9f6]">Debug: Projects JSON</summary>
          <div className="max-h-[60vh] overflow-auto px-4 pb-4 text-xs leading-relaxed text-gray-200">
            <pre className="whitespace-pre-wrap break-words">
              <code>{formattedJson}</code>
            </pre>
          </div>
        </details>
      </div>
    );
  }, [loading, projects]);

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
        {debugPanel}
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
        {debugPanel}
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
      {debugPanel}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_15%_20%,rgba(19,158,156,0.18),rgba(11,19,32,0)),radial-gradient(60%_60%_at_85%_0%,rgba(34,128,255,0.16),rgba(11,19,32,0)_70%)]" />
          <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-[#139E9C]/20 blur-[120px]" />
          <div className="absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full bg-[#139E9C]/14 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 lg:pb-24 lg:pt-36">
          <a
            href="/"
            className="inline-flex items-center text-sm font-semibold text-[#7ef9f6] transition hover:text-[#8cfbf8]"
          >
            ← Back to Portfolio
          </a>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#7ef9f6]">
            <span className="rounded-full bg-[#139E9C]/15 px-3 py-1 ring-1 ring-[#139E9C]/30">Case Study</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-gray-200 ring-1 ring-white/10">{project.status}</span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl">{project.title}</h1>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-300">{project.tagline}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
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

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/30 shadow-[0_30px_80px_rgba(8,12,24,0.55)]">
            <div className="flex h-8 items-center gap-2 bg-slate-900 px-4 py-2">
              <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-amber-400" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-emerald-500" aria-hidden />
            </div>
            <div className="border-t border-white/10">
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

          <div className="mt-14 rounded-3xl border border-emerald-500/20 bg-emerald-900/10 p-10 shadow-[0_24px_70px_rgba(6,10,25,0.5)]">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-emerald-400" aria-hidden />
              <h2 className="text-2xl font-semibold text-white">Key Outcomes</h2>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-gray-200">{project.outcomes}</p>
          </div>

          {nextProject && (
            <a
              href={`/project/${nextProject.slug}`}
              className="mt-12 block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0B1320] via-slate-900/60 to-[#0E172A] p-8 shadow-[0_24px_70px_rgba(6,10,25,0.55)] transition-transform duration-500 hover:-translate-y-1 hover:border-[#139E9C]/40 hover:shadow-[0_28px_80px_rgba(19,158,156,0.3)]"
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
