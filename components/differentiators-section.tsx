import Image from "next/image"

const differentiators = [
  {
    title: "Former Tech Journalist",
    body: "Worked as a journalist for 6 years, then moved into the tech industry.",
    image: "/differentiator-journalist-bi-wall.png",
  },
  {
    title: "Lived in 4 countries",
    body: "Born in Spain. Spent 9 years across France, Ireland, and Germany.",
    image: "/differentiator-four-countries.png",
  },
  {
    title: "Speak 3 languages",
    body: "Switching between English, Spanish and German almost daily.",
    image: "/differentiator-languages-books.jpg",
  },
  {
    title: "Hired early by startups",
    body: "Always hired as the first writer, or one of the first. Need no playbook.",
    image: "/differentiator-early-hire-welcome.jpg",
  },
  {
    title: "Worked at an unicorn startup",
    body: "Worked at Personio, Europe's HR unicorn ($8.5B valuation).",
    image: "/differentiator-unicorn-personio.jpg",
  },
  {
    title: "Women in Tech advocate",
    body: "Co-founded Personio's first Women's Committee. ",
    image: "/ooo-women.jpg",
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
              className="group relative min-h-[720px] overflow-hidden rounded-xl shadow-lg ring-2 ring-primary/20 transition-all duration-300 hover:-translate-y-2 hover:ring-primary/60 hover:shadow-[0_24px_70px_-16px_rgba(200,80,192,0.55)]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent opacity-90" />

              {/* Copy anchored to the bottom, over the image */}
              <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-4 p-8">
                <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-white text-balance">
                  {title}
                </h3>
                <p className="text-xl md:text-2xl font-medium leading-snug text-white/85 text-pretty">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
