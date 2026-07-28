import { Newspaper, Rocket, Globe } from "lucide-react"

const differentiators = [
  {
    icon: Newspaper,
    title: "Former Tech Journalist",
    body: "I've been writing about tech for 15 years straight - first as a Tech Journalist, now as a Technical Writer.",
  },
  {
    icon: Rocket,
    title: "Permanent early hire",
    body: "Constantly one-of-the-first or first-of. I join before the playbook exists and write the first version of it.",
  },
  {
    icon: Globe,
    title: "Extremely multicultural",
    body: "Lived in 4 countries. Speak 3 languages weekly (English, Spanish and German). I write for readers who don't share my first language.",
  },
]

export function DifferentiatorsSection() {
  return (
    <section id="differentiators" className="relative px-4 pt-24 pb-20 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            What differentiates me<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - separates the title from the cards */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {differentiators.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_8px_40px_-8px_rgba(200,80,192,0.45)]"
            >
              {/* Top accent line */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
              {/* Glow accent */}
              <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-5 px-8 py-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/40 bg-primary/15">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </span>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground text-balance">
                  {title}
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/75 text-pretty">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
