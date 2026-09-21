import Header from "@/components/header"
import Footer from "@/components/footer"
import { TypingAnimation } from "@/components/typing-animation"
import { Reveal } from "@/components/reveal"
import { ProjectCard } from "@/components/project-card"
import { getFeaturedProjects } from "@/lib/projects"
import Link from "next/link"

export default function Home() {
  const title = "Hi, I'm Juan José\nSystems and Computer Engineer."
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#30302e] font-sans dark:bg-[#30302e]">
      <Header />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#30302e] dark:bg-black sm:items-start sm:text-left">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <TypingAnimation
            text={title}
            className="text-4xl font-bold leading-snug  w-full"
            speed={90}
          />
        </div>
        <Reveal className="w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <img 
            src="/yo-merengues.jpg" 
            alt="my face" 
            className="rounded-full w-20 h-20 object-cover sm:w-24 sm:h-24"
          />
          <div className="flex flex-col sm:w-full space-y-2 text-white mt-8">
            <p className="font-medium text-sm sm:text-base">
              I’m a Systems and Computer Engineer from the National University of Colombia, 
              with experience in software development, process automation, and cloud technologies.
              I enjoy building practical solutions that combine technology, problem-solving, and 
              continuous learning.
            </p>
          </div>
        </div>
        </Reveal>

        <Reveal delayMs={100} className="w-full">
        <div className="flex flex-col sm:w-full space-y-6 text-white mt-8">
            <p className="font-medium text-sm sm:text-base">
              I have worked with technologies such as Python, SQL, Next.js, AWS, 
              and have some experience with Kubernetes and cloud-based environments. 
              I’m particularly interested in cybersecurity, cloud infrastructure, 
              and software engineering, and I’m always looking for opportunities to strengthen my skills and take on 
              new technical challenges.
            </p>

          <p className="font-medium text-sm sm:text-base">
             Beyond technology, I consider myself a curious, adaptable, 
             and collaborative person. I enjoy learning new things,  
             and turning ideas into solutions that create real value.
          </p>
        </div>
        </Reveal>
        


       
        <Reveal delayMs={150} className="w-full sm:w-full">
        <div id="projects" className="flex flex-col sm:w-full space-y-6 text-white mt-8 
                bg-gradient-to-r from-[#2a2a2a] via-[#333333] to-[#2a2a2a]
                border border-gray-700/50 rounded-xl
                px-6 py-5
                shadow-lg shadow-black/20 scroll-mt-20">

          <div className="flex w-full items-center justify-between gap-4">
            <p className="font-bold text-xl sm:text-2xl tracking-wide">
              Featured Projects
            </p>
            <Link
              href="/projects"
              className="flex-shrink-0 text-sm font-medium text-gray-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              View all projects →
            </Link>
          </div>

          {featuredProjects.length === 0 ? (
            <div className="mt-8 flex flex-col items-center gap-2 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center">
              <p className="text-base font-semibold text-white">No featured projects yet</p>
              <p className="max-w-sm text-sm text-gray-400">
                Check the full list or come back later for new projects.
              </p>
            </div>
          ) : featuredProjects.length === 1 ? (
            <div className="mt-8 flex w-full justify-center">
              <div className="w-full sm:max-w-[calc(50%-0.5rem)]">
                <ProjectCard
                  title={featuredProjects[0].title}
                  githubUsername={featuredProjects[0].githubUsername}
                  repoName={featuredProjects[0].repoName}
                  description={featuredProjects[0].description}
                  imageUrl={featuredProjects[0].imageUrl}
                  tags={featuredProjects[0].tags}
                />
              </div>
            </div>
          ) : (
            <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
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
          )}

        </div>
        </Reveal>

        
      </main>
      <Footer />
    </div>
  )
}