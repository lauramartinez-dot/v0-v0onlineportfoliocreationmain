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
    image: "/project-bookclub.png",
    imageAlt: "A group of women gathered around books at a bookclub meeting",
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

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {personalProjects.map((project) => (
            <li
              key={project.title}
              className="surface-card group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f131c]/70 to-transparent" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-4 p-10">
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
