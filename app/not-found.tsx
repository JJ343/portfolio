import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { DogAnimation } from "@/components/dog-animation";
import "@/styles/dog-animation.css";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#30302e] font-sans dark:bg-[#30302e]">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <p className="text-7xl font-bold tracking-tight text-white sm:text-8xl">
          404
        </p>
        <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">
          Page not found
        </p>
        <p className="mt-2 max-w-sm text-sm text-gray-400 sm:text-base">
          The page you are looking for does not exist or was moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-gray-200"
          >
            Back to home
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-white/25 hover:text-white"
          >
            View projects
          </Link>
        </div>
        <div className="mt-8">
          <DogAnimation />
        </div>
        <p className="mt-6 text-xs text-gray-500">
          Dog animation by{" "}
          <a
            href="https://codepen.io/ricardoolivaalonso/pen/oNjdBme"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-gray-300"
          >
            Ricardo Oliva Alonso
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
