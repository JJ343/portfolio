import type { NextConfig } from "next";

// Para GitHub Pages como Project Site (https://<user>.github.io/<repo>/),
// haz el build con: $env:NEXT_BASE_PATH="/Portafolio-code"; npm run build
// Para dominio raíz o <user>.github.io, deja NEXT_BASE_PATH vacío.
const basePath = process.env.NEXT_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  // Genera /projects/index.html en vez de /projects.html -> funciona en
  // cualquier hosting estático (GitHub Pages, Nginx, Apache...).
  trailingSlash: true,
  // Obligatorio con `output: export` si usas next/image.
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
