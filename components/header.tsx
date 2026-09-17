import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        <Link
          className="font-semibold text-xl tracking-tight"
          href="/"
        >
          Portfolio
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}