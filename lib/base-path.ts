export const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  if (!publicBasePath) return path;
  return `${publicBasePath}${path}`;
}
