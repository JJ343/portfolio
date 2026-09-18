"use client";

import { useState } from "react";

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

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
<div className="cursor-pointer">
      {/* Versión contraída: imagen pequeña + título + ícono GitHub */}
      <div
        onClick={handleOpen}
        className="flex items-center gap-4 transition-colors hover:opacity-90"
      >
        <img
          src={imageUrl}
          alt={altText}
          className="w-14 h-14 rounded-lg object-cover flex-shrink-0 hover:opacity-80 transition-opacity"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium">{title}</h3>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {tags.slice(0, 5).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 5 && (
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
                >
                  +{tags.length - 5}
                </span>
              )}
            </div>
          )}
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-5 h-5 block"
        >
         <img src="/github.png"
               alt=""
               className="absolute inset-0 w-5 h-5 opacity-100 transition-opacity"
              />

          <img src="/github-white-icon.webp"
           alt=""
           className="absolute inset-0 w-5 h-5  opacity-0 group-hover:opacity-100 transition-opacity"
          />

           
        </a>
      </div>

      {/* Pop-up modal */}
      {isOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 items-center justify-center p-4"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full shadow-2xl transform scale-100 transition-transform"
          >
            {/* Botón close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
            >
              <span className="material-symbols-dark">close</span>
            </button>

            {/* Contenido del pop-up */}
            <div className="flex flex-col items-center gap-6">
              <img
                src={imageUrl}
                alt={altText}
                className="w-48 h-48 rounded-lg object-cover hover:scale-105 transition-transform"
              />
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-zinc-600 text-base line-clamp-3">
                {description}
              </p>

              {tags && tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-[40%] py-[40%] rounded text-xs border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 w-full">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Ver repositorio en GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}