import React, { useMemo } from 'react';
import { useProjects } from '../hooks/useProjects';

interface ProjectDetailProps {
  slug: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug }) => {
  const { projects, loading, error } = useProjects();
  const project = useMemo(() => projects.find((item) => item.slug === slug), [projects, slug]);

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
      <div className="flex min-h-screen items-center justify-center bg-[#0B1320] px-6 text-white">
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
      <div className="flex min-h-screen items-center justify-center bg-[#0B1320] px-6 text-white">
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
    <div className="min-h-screen bg-[#0B1320] text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_15%_20%,rgba(19,158,156,0.18),rgba(11,19,32,0)),radial-gradient(60%_60%_at_85%_0%,rgba(34,128,255,0.16),rgba(11,19,32,0)_70%)]" />
          <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-[#139E9C]/20 blur-[120px]" />
          <div className="absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full bg-[#139E9C]/14 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#7ef9f6]">
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
                <span key={tech} className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-gray-100 ring-1 ring-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/30 shadow-[0_30px_80px_rgba(8,12,24,0.55)]">
            {project.demoVideoUrl ? (
              <div className="aspect-[16/9] w-full">
                <iframe
                  src={project.demoVideoUrl}
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
                  className="max-h-[540px] w-full rounded-2xl object-contain ring-1 ring-white/10"
                />
              ) : (
                <div className="w-full rounded-2xl bg-slate-900/60 p-10 text-center text-gray-400 ring-1 ring-white/5">
                  Architecture diagram coming soon.
                </div>
              )}
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-[#139E9C]/30 bg-gradient-to-br from-[#139E9C]/10 via-[#0B1320] to-[#0B1320] p-10 shadow-[0_24px_70px_rgba(6,10,25,0.5)]">
            <h2 className="text-2xl font-semibold text-white">Key Outcomes</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-200">{project.outcomes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
