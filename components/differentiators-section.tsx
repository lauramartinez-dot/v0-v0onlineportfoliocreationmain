import { Newspaper, Rocket, Globe } from "lucide-react"
import Image from "next/image"

const differentiators = [
  {
    icon: Newspaper,
    kicker: "15 years in",
    title: "Former Tech Journalist",
    body: "I've been writing about tech for 15 years straight - first as a Tech Journalist, now as a Technical Writer.",
    image: "/differentiator-journalist.png",
  },
  {
    icon: Rocket,
    kicker: "Employee #1",
    title: "Permanent early hire",
    body: "Constantly one-of-the-first or first-of. I join before the playbook exists and write the first version of it.",
    image: "/differentiator-early-hire.png",
  },
  {
    icon: Globe,
    kicker: "4 countries",
    title: "Extremely multicultural",
    body: "Lived in 4 countries. Speak 3 languages weekly (English, Spanish and German). I write for readers who don't share my first language.",
    image: "/differentiator-multicultural.png",
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
          {differentiators.map(({ icon: Icon, kicker, title, body, image }) => (
            <article
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-primary/40 bg-gradient-to-b from-purple-950/60 via-card to-card shadow-2xl shadow-primary/20 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/80 hover:shadow-[0_24px_70px_-16px_rgba(200,80,192,0.6)]"
            >
              {/* Top accent line */}
              <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

              {/* Image header */}
              <div className="relative h-56 w-full shrink-0 overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt=""
                  fill
                  aria-hidden="true"
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tint + fade so the image blends into the card body */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-card" />

                {/* Kicker badge */}
                <span className="absolute left-6 top-6 rounded-full bg-primary px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/40">
                  {kicker}
                </span>
              </div>

              {/* Icon straddling the image and the body */}
              <span className="relative z-10 -mt-8 ml-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/50 bg-card shadow-xl shadow-primary/30">
                <Icon className="h-9 w-9 text-primary" aria-hidden="true" />
              </span>

              <div className="flex flex-1 flex-col gap-4 px-8 pb-10 pt-6">
                <h3 className="text-3xl font-bold tracking-tight leading-tight text-foreground text-balance">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed text-foreground/75 text-pretty">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
