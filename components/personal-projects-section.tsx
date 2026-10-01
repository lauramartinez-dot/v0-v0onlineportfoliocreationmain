import Image from "next/image"

const personalProjects = [
  {
    title: "This portfolio",
    description: "As a playground for AI. I built this entire site from scratch with AI tools, learning as I went.",
    image: "/project-portfolio.png",
    imageAlt: "Laptop showing this portfolio site being built",
  },
  {
    title: "Barcelona's first women in tech bookclub",
    description: "I started Barcelona's first women in tech bookclub, where we read, discuss and push each other forward.",
    image: "/too-bossy-poster.jpg",
    imageAlt: "Too Bossy poster: Barcelona's first book club for women in tech, reading women in tech",
  },
]

export function PersonalProjectsSection() {
  return (
    <section id="personal-projects" className="relative px-4 py-24 md:py-32 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Personal projects<span className="text-primary">.</span>
          </h2>
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          {personalProjects.map((project) => (
            <li key={project.title} className="group flex flex-col items-center gap-8 text-center">
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/15 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                />
              </div>
              <div className="flex max-w-sm flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white text-balance">{project.title}</h3>
                <p className="text-base md:text-[17px] leading-relaxed text-white/60 text-pretty">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
