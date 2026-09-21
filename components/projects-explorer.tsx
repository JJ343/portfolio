"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { ProjectCategory } from "@/lib/projects";

interface ProjectsExplorerProps {
  categories: ProjectCategory[];
}

function formatCategoryName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function ProjectsExplorer({ categories }: ProjectsExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    return categories
      .filter(
        (category) => activeCategory === "all" || category.name === activeCategory
      )
      .map((category) => ({
        ...category,
        projects: category.projects.filter((project) => {
          if (!normalizedQuery) return true;
          const haystack = [
            project.title,
            project.description,
            project.repoName,
            ...(project.tags ?? []),
          ]
            .join(" ")
            .toLowerCase();
          return normalizedQuery
            .split(/\s+/)
            .every((word) => haystack.includes(word));
        }),
      }))
      .filter((category) => category.projects.length > 0);
  }, [categories, activeCategory, normalizedQuery]);

  const totalResults = filteredCategories.reduce(
    (acc, category) => acc + category.projects.length,
    0
  );
  const hasProjects = categories.length > 0;
  const isFiltering = normalizedQuery !== "" || activeCategory !== "all";

  return (
    <>
      {/* Título centrado */}
      <div className="text-center text-white">
        <p className="font-bold text-3xl sm:text-4xl tracking-wide">
          All my Projects
        </p>
        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Here are some of the projects I&apos;ve worked on.
        </p>
      </div>

      {/* Búsqueda rápida + filtro por categoría (solo si hay proyectos) */}
      {hasProjects && (
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="relative w-full max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, tag or keyword…"
            aria-label="Search projects"
            className="w-full rounded-full border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-10 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.07]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-3.5 w-3.5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          )}
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label="Filter by category"
        >
          {["all", ...categories.map((c) => c.name)].map((name) => {
            const isActive = activeCategory === name;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setActiveCategory(name)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-white/25 hover:text-white"
                }`}
              >
                {name === "all" ? "All" : formatCategoryName(name)}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-gray-500" role="status" aria-live="polite">
          {isFiltering
            ? totalResults > 0
              ? `${totalResults} project${totalResults === 1 ? "" : "s"} found`
              : "No projects found. Try another search or category."
            : `${totalResults} project${totalResults === 1 ? "" : "s"} in total`}
        </p>
      </div>
      )}

      {filteredCategories.length === 0 ? (
        <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-white">
          {hasProjects ? (
            <>
              <p className="text-lg font-semibold">Nothing matches your search</p>
              <p className="max-w-sm text-sm text-gray-400">
                Try a different keyword or pick another category to keep exploring.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("all");
                }}
                className="mt-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-gray-200"
              >
                Clear filters
              </button>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold">No projects yet</p>
              <p className="max-w-sm text-sm text-gray-400">
                There are no projects to show. Please check back later.
              </p>
            </>
          )}
        </div>
      ) : (
        filteredCategories.map((category) => (
          <section
            key={category.name}
            className="mt-8 flex flex-col space-y-6 text-white
                bg-gradient-to-r from-[#2a2a2a] via-[#333333] to-[#2a2a2a]
                border border-gray-700/50 rounded-xl
                px-6 py-5
                shadow-lg shadow-black/20"
          >
            <p className="font-bold text-xl sm:text-2xl tracking-wide">
              {formatCategoryName(category.name)}
            </p>

            {category.projects.length === 1 ? (
              <div className="flex w-full justify-center">
                <div className="w-full sm:max-w-[calc(50%-0.5rem)]">
                  <ProjectCard
                    key={category.projects[0].repoName}
                    title={category.projects[0].title}
                    githubUsername={category.projects[0].githubUsername}
                    repoName={category.projects[0].repoName}
                    description={category.projects[0].description}
                    imageUrl={category.projects[0].imageUrl}
                    tags={category.projects[0].tags}
                  />
                </div>
              </div>
            ) : (
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {category.projects.map((project, index) => (
                  <ProjectCard
                    key={`${project.repoName}-${index}`}
                    title={project.title}
                    githubUsername={project.githubUsername}
                    repoName={project.repoName}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    tags={project.tags}
                  />
                ))}
              </div>
            )}
          </section>
        ))
      )}
    </>
  );
}
