"use client"

import type { ReactNode } from "react"
import Image from "next/image"
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

type Source = "Personio" | "This portfolio"

type Proof = {
  title: string
  where: Source
}

function SourceBadge({ source }: { source: Source }) {
  if (source === "Personio") {
    return (
      <div className="relative h-12 w-28 shrink-0 overflow-hidden rounded-xl bg-white/95">
        <Image
          src="/personio-wordmark.png"
          alt="Personio logo"
          fill
          sizes="112px"
          className="object-contain px-2 py-1.5"
        />
      </div>
    )
  }
  return (
    <div
      className="flex h-12 w-28 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-white/95 text-sm font-semibold text-primary"
      aria-label="This portfolio"
    >
      <Sparkles className="size-4" aria-hidden="true" />
      <span>This site</span>
    </div>
  )
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
        title: "Designed a content audit that let the team deprecate 100+ outdated pages",
        where: "Personio",
      },
      {
        title: "Rewrote a product area\u2019s documentation and cut its support tickets by 50%",
        where: "Personio",
      },
      {
        title: "Kept this portfolio to five sections, with no decorative stats or filler",
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
        title: "Tailored documentation to 5+ user groups, from admins to everyday employees",
        where: "Personio",
      },
      {
        title: "Built the Spanish documentation library from scratch, 150+ translations a year",
        where: "Personio",
      },
      {
        title: "Grouped the writing samples on this site into three technical tiers",
        where: "This portfolio",
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
        title: "Vibe-coded this entire portfolio with v0, and wrote every word of it by hand",
        where: "This portfolio",
      },
      {
        title: "Built an AI agent that cut Spanish translation review time by 90%",
        where: "Personio",
      },
      {
        title: "Used Gen AI to take new documentation pages from brief to published in under 4 hours",
        where: "Personio",
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
        title: "Designed a prioritisation framework that let the team drop 20% of low-impact tasks",
        where: "Personio",
      },
      {
        title: "Proposed Tableau dashboard improvements that sped up team reporting by 30%",
        where: "Personio",
      },
      {
        title: "Tied documentation goals to product adoption and retention metrics with leadership",
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
        title: "Conducted 20+ company-wide culture interviews and reported the findings unfiltered",
        where: "Personio",
      },
      {
        title: "Co-designed the company-wide release process so no team is surprised by a launch",
        where: "Personio",
      },
      {
        title: "Mentored a peer to Senior Technical Writer through regular candid feedback",
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
        title: "Helped grow the documentation team from 3 writers to a global team of 10+",
        where: "Personio",
      },
      {
        title: "Co-founded Personio\u2019s first Women\u2019s Committee",
        where: "Personio",
      },
      {
        title: "Led the expansion of documentation from 3 languages to 6",
        where: "Personio",
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

          <p className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 text-base text-white/60 text-pretty md:text-lg">
            Click on a principle to see the achievements behind it
            <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          </p>
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
                  </button>
                </DialogTrigger>

                <DialogContent className="flex max-h-[92vh] w-[95vw] max-w-3xl flex-col gap-0 overflow-y-auto border-white/10 bg-card p-0 sm:max-w-3xl sm:rounded-[1.75rem]">
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
                    <ol className="flex flex-col gap-4">
                      {proof.map((item) => (
                        <li
                          key={item.title}
                          className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-primary/15 p-6 shadow-[0_0_40px_-12px] shadow-primary/40 transition-colors hover:bg-primary/20 md:flex-row md:items-start md:gap-6 md:p-7"
                        >
                          <SourceBadge source={item.where} />
                          <p className="text-lg font-semibold leading-snug text-white text-pretty md:text-xl">{item.title}</p>
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
