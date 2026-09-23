import { Minus, Sparkles, Eye, LineChart, Flag } from "lucide-react"

const principles = [
  {
    icon: Minus,
    title: "Less is more",
    description:
      "I see my job as subtracting information more than adding it. Cognitive overload is very real, especially in 2026.",
  },
  {
    icon: Sparkles,
    title: "AI, but not always",
    description:
      "I spend my worktime talking to AI, especially Copilot and Claude. More importantly, I know when NOT to trust it and when NOT to use it. You won't see AI-slop or \u201CI work at the intersection of\u2026\u201D written by me.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "I'm big on transparency. I note what I'm doing as I do it, so anyone can follow my reasoning and take over if they need to.",
  },
  {
    icon: LineChart,
    title: "I need end-user feedback",
    description:
      "I base my content decisions on data rather than assumption. I need to know whether the content is actually useful.",
  },
  {
    icon: Flag,
    title: "High-ownership",
    description:
      "I operate with high ownership and see projects through with no handholding.",
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

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="group relative flex min-h-[340px] overflow-hidden rounded-xl shadow-lg ring-2 ring-primary/20 transition-all duration-300 hover:-translate-y-1 hover:ring-primary/50 hover:shadow-[0_28px_70px_-32px_rgba(217,42,205,0.5)]"
            >
              {/* Layered wash gives the card its depth, matching the What I do boxes */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent opacity-90" />

              <div className="relative mt-auto flex w-full flex-col gap-4 p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-colors duration-300 group-hover:bg-primary/10">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white text-balance">
                  {title}
                </h3>

                <p className="text-base font-medium leading-relaxed text-white/75 text-pretty">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
