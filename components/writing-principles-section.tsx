import { Minus, Users, Sparkles, Eye, LineChart, Flag } from "lucide-react"

const principles = [
  {
    icon: Minus,
    title: "Less is more",
    description:
      "I see my job as a technical writer as subtracting, not adding \u2014 taking information away until only what matters is left. I write as if every extra sentence cost me 50 euros.",
  },
  {
    icon: Users,
    title: "Who is reading?",
    description:
      "I don't write a single word until I know who I'm writing for. What's their job? Are they setting things up or just using them? How technical are they?",
  },
  {
    icon: Sparkles,
    title: "AI, but not always",
    description:
      "I use AI every day, and I'm good at it. But knowing when not to use it matters just as much. You won't find AI slop or \u201CI work at the intersection of\u2026\u201D here.",
  },
  {
    icon: LineChart,
    title: "Data over gut feeling",
    description:
      "I don't assume my docs are helpful. I want to hear it from the people using them and see it in the data, and let that shape what I write next.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "I leave notes in my tickets as I work: what I did, what I found, what's still open. Anyone can see where things stand and pick up where I left off.",
  },
  {
    icon: Flag,
    title: "High ownership",
    description:
      "Once I pick something up, I don't drop it. If I'm stuck, I figure out who to ask or dig in myself. It doesn't just sit on my list.",
  },
]

export function WritingPrinciplesSection() {
  return (
    <section id="writing-principles" className="relative px-4 pt-24 pb-24 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Core principles<span className="text-primary">.</span>
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
