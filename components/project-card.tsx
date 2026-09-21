"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectCardProps {
  title: string;
  githubUsername: string;
  repoName: string;
  description: string;
  imageUrl: string;
  altText?: string;
  tags?: string[];
}

export function ProjectCard({
  title,
  githubUsername,
  repoName,
  description,
  imageUrl,
  altText = "Project preview",
  tags = [],
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const githubUrl = `https://github.com/${githubUsername}/${repoName}`;

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Versión mini: tarjeta cuadrada */}
      <div
        onClick={() => setIsOpen(true)}
        className="group/card relative flex aspect-square w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/40"
      >
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <img
            src={imageUrl}
            alt={altText}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
        </div>

        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center gap-2">
            <h3 className="min-w-0 flex-1 truncate text-sm font-semibold text-white">
              {title}
            </h3>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group relative block h-5 w-5 flex-shrink-0"
            >
              <img
                src="/github.png"
                alt=""
                className="absolute inset-0 h-5 w-5 opacity-100 transition-opacity"
              />
              <img
                src="/github-white-icon.webp"
                alt=""
                className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1">
              {tags.slice(0, 5).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] leading-tight text-gray-300"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 5 && (
                <span className="inline-flex items-center rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] leading-tight text-gray-300">
                  +{tags.length - 5}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Pop-up modal (portal a body para escapar de ancestros con transform) */}
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[85vh] w-full max-w-lg animate-[modal-in_0.25s_ease-out] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#262624] shadow-2xl shadow-black/60"
          >
            {/* Botón close */}
            <button
              onClick={handleClose}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
              {/* Imagen del proyecto */}
              <img
                src={imageUrl}
                alt={altText}
                className="h-56 w-full flex-none object-cover sm:h-64"
              />

              {/* Contenido del pop-up */}
              <div className="flex flex-col gap-4 p-6">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed whitespace-pre-line text-gray-300">
                {description}
              </p>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
              >
                <img src="/github.png" alt="" className="h-5 w-5" />
                Ver repositorio en GitHub
              </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
