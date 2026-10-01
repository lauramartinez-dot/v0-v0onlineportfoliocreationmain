import Image from "next/image"

const personalProjects = [
  {
    id: "portfolio",
    title: "This portfolio",
    tags: ["Vibe-coding", "AI"],
    image: "/project-portfolio.png",
    imageAlt: "Laptop showing this portfolio site being built",
  },
  {
    id: "bookclub",
    title: "Barcelona's first book club for women in tech",
    tags: ["Entrepreneurship", "Women in tech advocacy", "Event organisation"],
    image: "/too-bossy-club.png",
    imageAlt: "Too Bossy Club logo with an open book icon",
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
            <li key={project.id} className="group flex flex-col items-center gap-8 text-center">
              <div className="relative size-64 shrink-0 overflow-hidden rounded-full shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/15 transition-transform duration-500 ease-out group-hover:-translate-y-2 md:size-80">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <h3 className="max-w-sm text-2xl font-bold leading-tight text-white text-balance md:text-3xl">
                {project.title}
              </h3>
              <ul className="flex max-w-md flex-wrap justify-center gap-2" aria-label="Project skills">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.15em] text-primary"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
