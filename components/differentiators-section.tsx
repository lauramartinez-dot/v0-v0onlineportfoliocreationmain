import Image from "next/image"

const differentiators = [
  {
    title: "Former Tech Journalist",
    body: "I've been writing about tech for 15 years straight - first as a Tech Journalist, now as a Technical Writer.",
    image: "/differentiator-journalist.png",
  },
  {
    title: "Extremely multicultural",
    body: "I lived in 4 countries, so I write for readers who don't share my first language or my context.",
    image: "/differentiator-multicultural.png",
  },
  {
    title: "Speak 3 languages weekly",
    body: "English, Spanish and German. Switching between them daily keeps me sharp on what actually survives translation.",
    image: "/differentiator-languages.png",
  },
  {
    title: "Permanent early hire",
    body: "Constantly one-of-the-first or first-of. I join before the playbook exists and write the first version of it.",
    image: "/differentiator-early-hire.png",
  },
  {
    title: "Hypergrowth startup experience",
    body: "I've documented products while the roadmap, the team and the tooling all changed underneath me.",
    image: "/differentiator-hypergrowth.png",
  },
  {
    title: "Women in Tech advocate",
    body: "I speak, mentor and write to make technical careers more reachable for the women coming up behind me.",
    image: "/differentiator-women-in-tech.png",
  },
]

export function DifferentiatorsSection() {
  return (
    <section id="differentiators" className="relative px-4 pt-24 pb-20 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            What differentiates me<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - separates the title from the cards */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {differentiators.map(({ title, body, image }) => (
            <article
              key={title}
              className="group relative min-h-[620px] overflow-hidden rounded-xl shadow-lg ring-2 ring-primary/20 transition-all duration-300 hover:-translate-y-2 hover:ring-primary/60 hover:shadow-[0_24px_70px_-16px_rgba(200,80,192,0.55)]"
            >
              {/* Full-bleed image */}
              <Image
                src={image || "/placeholder.svg"}
                alt=""
                fill
                aria-hidden="true"
                className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Colour wash + scrim so the copy stays legible */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />

              {/* Copy anchored to the bottom, over the image */}
              <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-4 p-8">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white text-balance">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed text-white/80 text-pretty">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
