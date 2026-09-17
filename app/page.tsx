import Header from "@/components/header"
import { TypingAnimation } from "@/components/typing-animation"

export default function Home() {
  const title = "Hi, I'm Juan José\nSystems and Computer Engineer."

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
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <img 
            src="/yo-merengues.jpg" 
            alt="my face" 
            className="rounded-full w-20 h-20 object-cover sm:w-24 sm:h-24"
          />
          <div className="flex flex-col sm:w-full space-y-2 text-white">
            <p className="font-medium text-sm sm:text-base">
             I’m a Systems and Computer Engineer from the National University of Colombia, 
             with experience in software development, process automation, and cloud technologies.
             I enjoy building practical solutions that combine technology, problem-solving, and 
             continuous learning.
            </p>
          </div>
        </div>
<div className="flex flex-col sm:w-full space-y-6 text-white">
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
        <div>

        </div>
      </main>
    </div>
  )
}
