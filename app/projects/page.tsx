import Header from "@/components/header"
import Footer from "@/components/footer"
import { ProjectsExplorer } from "@/components/projects-explorer"
import { getProjectsByCategory } from "@/lib/projects"

export const metadata = {
  title: "Projects - Juan Jose Jimenez",
  description: "All my projects",
}

export default function ProjectsPage() {
  const categories = getProjectsByCategory()

  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#30302e] font-sans dark:bg-[#30302e]">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 sm:px-8 sm:py-24">
        <ProjectsExplorer categories={categories} />
      </main>
      <Footer />
    </div>
  )
}
