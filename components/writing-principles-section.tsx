import { Lightbulb, Users, Compass, FlaskConical } from "lucide-react"

const principles = [
  {
    icon: Lightbulb,
    title: "Clarity over cleverness",
    description:
      "Every sentence earns its place. If a simpler word does the job, it wins — jargon only when it genuinely carries meaning.",
  },
  {
    icon: Users,
    title: "Start from the reader",
    description:
      "I write for the person on the other side, not the one who already knows the answer. Their context sets the shape of the page.",
  },
  {
    icon: Compass,
    title: "Show the why, not just the how",
    description:
      "Steps are easy to copy; understanding is what makes them stick. I give readers the mental model behind the instructions.",
  },
  {
    icon: FlaskConical,
    title: "Test everything I document",
    description:
      "If I haven't run it, I haven't written it. Every snippet, command, and flow gets verified before it ships.",
  },
]

export function WritingPrinciplesSection() {
  return (
    <section id="writing-principles" className="relative px-4 pt-24 pb-24 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Writing principles<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - matches the other main section titles */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {principles.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#472444] bg-card/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_28px_70px_-32px_rgba(217,42,205,0.5)] md:p-10"
            >
              {/* Top hairline picks up the accent on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/60 text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary/10">
                <Icon className="h-6 w-6" />
              </span>

              <h3 className="text-2xl font-bold leading-tight text-white text-balance md:text-3xl">
                {title}
              </h3>

              <p className="text-lg font-medium leading-relaxed text-white/70 text-pretty">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
