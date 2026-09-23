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

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {principles.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1420] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              {/* Thin top accent - quiet by default, lights up on hover so the row stays calm and scannable */}
              <div className="absolute inset-x-0 top-0 h-1 bg-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon badge - a soft tinted square reads cleaner than an outlined circle */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </span>

              <h3 className="text-2xl font-bold leading-tight text-white text-balance">
                {title}
              </h3>

              <p className="text-[15px] leading-relaxed text-white/65 text-pretty">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
