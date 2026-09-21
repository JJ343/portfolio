import rawProjects from "@/public/projects.json";

export type Project = {
  title: string;
  githubUsername: string;
  repoName: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  category?: string;
};

const FEATURED_LIMIT = 4;

export const allProjects: Project[] = rawProjects as Project[];

export function getFeaturedProjects(): Project[] {
  return allProjects
    .filter((project) => project.category === "featured")
    .slice(0, FEATURED_LIMIT);
}

export type ProjectCategory = {
  name: string;
  projects: Project[];
};

export function getProjectsByCategory(): ProjectCategory[] {
  const order: string[] = [];
  const byCategory = new Map<string, Project[]>();

  for (const project of allProjects) {
    const name = project.category ?? "other";
    if (!byCategory.has(name)) {
      byCategory.set(name, []);
      order.push(name);
    }
    byCategory.get(name)?.push(project);
  }

  return order
    .sort((a, b) => (a === "featured" ? -1 : b === "featured" ? 1 : 0))
    .map((name) => ({ name, projects: byCategory.get(name) ?? [] }));
}
