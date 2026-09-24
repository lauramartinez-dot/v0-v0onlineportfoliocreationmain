import { Minus, Sparkles, Eye, LineChart, Flag } from "lucide-react"

const principles = [
  {
    icon: Minus,
    title: "Less is more",
    description:
      "I see my job as a technical writer as subtracting, not adding \u2014 taking information away until only what matters is left. I write as if every extra sentence cost me 50 euros.",
  },
  {
    icon: Sparkles,
    title: "AI, but not always",
    description:
      "I spend most of my working day talking to AI chatbots. I know how to use AI. But just as importantly, I know WHEN NOT TO USE IT. You won't catch any AI slop or \u201CI work at the intersection of\u2026\u201D here.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "I document what I'm doing as I do it, so anyone can follow my reasoning \u2014 and pick up where I left off if they need to.",
  },
  {
    icon: LineChart,
    title: "I listen to end users",
    description:
      "I base content decisions on data, not assumptions. I want to know whether what I write is genuinely useful.",
  },
  {
    icon: Flag,
    title: "High ownership",
    description:
      "I take full ownership and see projects through to the end \u2014 no handholding required.",
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

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {principles.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group relative flex h-full min-h-[300px] flex-col gap-6 overflow-hidden rounded-3xl bg-[#f6f4f0] p-10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_36px_80px_-28px_rgba(217,42,205,0.4)]"
            >
              {/* Icon badge - solid primary chip so it pops on the light surface */}
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                <Icon className="h-7 w-7" />
              </span>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight text-[#1a1420] text-balance">
                {title}
              </h3>

              <p className="text-base md:text-[17px] leading-relaxed text-[#4a4450] text-pretty">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
