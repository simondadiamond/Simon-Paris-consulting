import { useEffect, useState } from 'react';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  status: string;
  engineeringChallenge: string;
  techStack: string[];
  heroImages: string[];
  heroImage: string;
  problem: string;
  solution: string;
  demoVideoUrl: string;
  architectureUrl: string;
  outcomes: string;
}

interface UseProjectsState {
  projects: Project[];
  loading: boolean;
  error: Error | null;
}

export function useProjects(): UseProjectsState {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/.netlify/functions/get-projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = (await response.json()) as Project[];
        if (isMounted) {
          setProjects(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, loading, error };
}

export default useProjects;
