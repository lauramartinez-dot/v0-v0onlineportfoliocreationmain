"use client"

import type { ReactNode } from "react"
import { ArrowUpRight, Minus, Users, Sparkles, Eye, LineChart, Flag, type LucideIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function Em({ children }: { children: ReactNode }) {
  return <>{children}</>
}

type Proof = {
  title: string
  where: "Personio" | "This portfolio"
}

type Principle = {
  icon: LucideIcon
  title: string
  description: ReactNode
  proof: Proof[]
}

const principles: Principle[] = [
  {
    icon: Minus,
    title: "Less is more",
    description: (
      <>
        I see my job as a technical writer as <Em>subtracting</Em>, not adding {"\u2014"} taking information away until
        only what matters is left. I write as if every extra sentence cost me 50 euros.
      </>
    ),
    proof: [
      {
        title: "Deprecated 100+ outdated Help Center pages",
        where: "Personio",
      },
      {
        title: "Dropped 20% of low-impact tasks",
        where: "Personio",
      },
      {
        title: "Wrote Personio\u2019s first documentation style guides",
        where: "Personio",
      },
      {
        title: "Kept this portfolio to what matters",
        where: "This portfolio",
      },
    ],
  },
  {
    icon: Users,
    title: "Who is reading",
    description: (
      <>
        Before I write a word, I find out who&apos;s reading. Do they use the software or set it up? If they set it
        up, do they stay inside the app or design the systems around it? <Em>How technical</Em> are they, really?
      </>
    ),
    proof: [
      {
        title: "Tailored documentation to 5+ audiences",
        where: "Personio",
      },
      {
        title: "Built the Spanish documentation site from scratch",
        where: "Personio",
      },
      {
        title: "Split writing samples into three technical tiers",
        where: "This portfolio",
      },
      {
        title: "Published how-to videos alongside articles",
        where: "Personio",
      },
    ],
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
    proof: [
      {
        title: "Vibe-coded this entire portfolio",
        where: "This portfolio",
      },
      {
        title: "Built an AI agent that cut translation review time by 90%",
        where: "Personio",
      },
      {
        title: "Created new pages in under 4 hours with Gen AI",
        where: "Personio",
      },
      {
        title: "Wrote every word on this site by hand",
        where: "This portfolio",
      },
    ],
  },
  {
    icon: LineChart,
    title: "Data over gut feeling",
    description: (
      <>
        I <Em>don&apos;t assume</Em> my docs are helpful. I want to hear it from the people who use them. If
        data shows a page isn&apos;t clear enough, I rewrite it, even when I was sure I&apos;d nailed it.
      </>
    ),
    proof: [
      {
        title: "Cut a product area\u2019s support volume by over 50%",
        where: "Personio",
      },
      {
        title: "Sped up team reporting by 30%",
        where: "Personio",
      },
      {
        title: "Let data decide what to deprecate",
        where: "Personio",
      },
      {
        title: "Tracked article performance in Tableau",
        where: "Personio",
      },
    ],
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
    proof: [
      {
        title: "Conducted 20+ company-wide culture interviews",
        where: "Personio",
      },
      {
        title: "Co-founded Personio\u2019s first Women\u2019s Committee",
        where: "Personio",
      },
      {
        title: "Co-built the company-wide release process",
        where: "Personio",
      },
      {
        title: "Mentored a peer to Senior in the open",
        where: "Personio",
      },
    ],
  },
  {
    icon: Flag,
    title: "High ownership",
    description: (
      <>
        Whatever I take on, I see through <Em>to the end</Em>. I prioritise, so some things wait in the backlog,
        but nothing gets dropped just because nobody&apos;s chasing me.
      </>
    ),
    proof: [
      {
        title: "Grew a 3-writer team into a global team of 10",
        where: "Personio",
      },
      {
        title: "Became Personio\u2019s first Senior Technical Writer",
        where: "Personio",
      },
      {
        title: "Grew documentation from 3 to 6 languages",
        where: "Personio",
      },
      {
        title: "Shipped this portfolio end to end",
        where: "This portfolio",
      },
    ],
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
          {principles.map(({ icon: Icon, title, description, proof }) => (
            <li key={title} className="flex [&>*]:flex-1">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="surface-card group relative flex h-full min-h-[300px] flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {/* Icon badge - subtle primary-tinted chip, consistent across every card */}
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <Icon className="h-7 w-7" />
                    </span>

                    <span className="text-2xl md:text-3xl font-bold leading-tight text-white text-balance">
                      {title}
                    </span>

                    <span className="text-base md:text-[17px] leading-relaxed text-white/60 text-pretty">
                      {description}
                    </span>

                    <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary">
                      See it in practice
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </button>
                </DialogTrigger>

                <DialogContent className="flex max-h-[92vh] w-[95vw] max-w-4xl flex-col gap-0 overflow-y-auto border-white/10 bg-card p-0 sm:max-w-4xl sm:rounded-[1.75rem]">
                  <DialogHeader className="flex flex-col gap-4 space-y-0 border-b border-white/10 px-8 pt-10 pb-8 text-left md:px-12">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <DialogTitle className="text-3xl font-bold leading-tight text-white text-balance md:text-4xl">
                      {title}
                    </DialogTitle>
                    <DialogDescription className="max-w-2xl text-base leading-relaxed text-white/60 text-pretty">
                      {description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col gap-4 px-8 py-8 md:px-12 md:py-10">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">In practice</h3>
                    <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {proof.map((item) => (
                        <li
                          key={item.title}
                          className="flex min-h-[180px] flex-col justify-between gap-6 rounded-3xl border border-primary/40 bg-primary/15 p-7 shadow-[0_0_40px_-12px] shadow-primary/40 transition-colors hover:bg-primary/20"
                        >
                          <p className="text-xl font-bold leading-snug text-white text-balance md:text-2xl">{item.title}</p>
                          <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                            {item.where}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </DialogContent>
              </Dialog>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
