"use client";

import { useState } from "react";

interface ProjectCardProps {
  title: string;
  githubUsername: string;
  repoName: string;
  description: string;
  imageUrl: string;
  altText?: string;
}

export function ProjectCard({
  title,
  githubUsername,
  repoName,
  description,
  imageUrl,
  altText = "Project preview",
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
        <div>
          <h3 className="text-base font-medium">{title}</h3>
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