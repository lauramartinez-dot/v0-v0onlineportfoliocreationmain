import type { ReactNode } from "react"
import { Minus, Users, Sparkles, Eye, LineChart, Flag } from "lucide-react"

function Em({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>
}

const principles: { icon: typeof Minus; title: string; description: ReactNode }[] = [
  {
    icon: Minus,
    title: "Less is more",
    description: (
      <>
        I see my job as a technical writer as <Em>subtracting</Em>, not adding {"\u2014"} taking information away until
        only what matters is left. I write as if every extra sentence cost me 50 euros.
      </>
    ),
  },
  {
    icon: Users,
    title: "Who is reading",
    description: (
      <>
        Before I write a word, I find out who&apos;s reading. Do they use the software or set it up? Click through
        settings or integrate it with other systems? <Em>How technical</Em> are they, really?
      </>
    ),
  },
  {
    icon: Sparkles,
    title: "AI, but not always",
    description: (
      <>
        I use AI all day, mostly Copilot and Claude. But knowing when <Em>not to use it</Em> matters even more. You
        won&apos;t find AI slop here, or a single {"\u201CI work at the intersection of\u2026\u201D"}
      </>
    ),
  },
  {
    icon: LineChart,
    title: "Data over gut feeling",
    description: (
      <>
        I <Em>don&apos;t assume</Em> my docs are helpful. I want to hear it from the people using them and see it in
        the data, and let that shape what I write next.
      </>
    ),
  },
  {
    icon: Eye,
    title: "Transparency",
    description: (
      <>
        I&apos;m big on transparency and candid feedback, so you&apos;ll <Em>never have to guess</Em>. You&apos;ll
        always know where my work stands, and if I have an issue, you&apos;ll hear it from me first.
      </>
    ),
  },
  {
    icon: Flag,
    title: "High ownership",
    description: (
      <>
        Whatever&apos;s assigned to me, I see through <Em>to the end</Em>. I&apos;m big on prioritizing, so some
        things may wait in my backlog for a while, but nothing gets quietly forgotten.
      </>
    ),
  },
]

export function WritingPrinciplesSection() {
  return (
    <section id="writing-principles" className="relative px-4 py-24 md:py-32 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Core principles as a TW<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - matches the other main section titles */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch auto-rows-fr">
          {principles.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="surface-card group relative flex h-full min-h-[300px] flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              {/* Icon badge - subtle primary-tinted chip, consistent across every card */}
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <Icon className="h-7 w-7" />
              </span>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white text-balance">
                {title}
              </h3>

              <p className="text-base md:text-[17px] leading-relaxed text-white/60 text-pretty">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
