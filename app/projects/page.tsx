import Header from "@/components/header"
import Footer from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { getProjectsByCategory } from "@/lib/projects"

export const metadata = {
  title: "Projects - Juan Jose Jimenez",
  description: "All my projects",
}

function formatCategoryName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export default function ProjectsPage() {
  const categories = getProjectsByCategory()

  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#30302e] font-sans dark:bg-[#30302e]">
      <Header />
      <main className="flex w-full max-w-3xl flex-1 flex-col px-16 py-16 sm:py-24">
        <div className="text-white">
          <p className="font-bold text-3xl sm:text-4xl tracking-wide">
            All my Projects
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Here are some of the projects I've worked on.
          </p>
        </div>

        {categories.map((category) => (
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

            <div className="grid w-full grid-cols-4 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {category.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  githubUsername={project.githubUsername}
                  repoName={project.repoName}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}
