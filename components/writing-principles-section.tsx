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

type Source = "Personio" | "OMP" | "This portfolio"

// Dialogs show one tile per company, with that company's achievements stacked inside.
// OMP first because it's the current role (its lines are written in present tense).
const sourceOrder: Source[] = ["OMP", "Personio", "This portfolio"]

function groupBySource(proof: Proof[]) {
  return sourceOrder
    .map((source) => ({ source, titles: proof.filter((p) => p.where === source).map((p) => p.title) }))
    .filter((group) => group.titles.length > 0)
}

// OMP's mark is compact, so it gets more inner padding to sit visually level with Personio's wordmark.
const sourceWordmarks: Partial<Record<Source, { src: string; padding: string }>> = {
  Personio: { src: "/personio-wordmark.png", padding: "px-2 py-1.5" },
  OMP: { src: "/omp-wordmark.png", padding: "px-5 py-3" },
}

type Proof = {
  title: string
  where: Source
}

function SourceBadge({ source }: { source: Source }) {
  const wordmark = sourceWordmarks[source]
  if (wordmark) {
    return (
      <div className="relative h-12 w-28 shrink-0 overflow-hidden rounded-xl bg-white/95">
        <Image
          src={wordmark.src}
          alt={`${source} logo`}
          fill
          sizes="112px"
          className={`object-contain ${wordmark.padding}`}
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

type Audience = {
  level: string
  who: string
}

type Principle = {
  icon: LucideIcon
  title: string
  description: ReactNode
  audiences?: Audience[]
  proof: Proof[]
}

const principles: Principle[] = [
  {
    icon: Flag,
    title: "High ownership",
    description: (
      <>
        I&apos;m comfortable being <Em>the first writer</Em> on a team, or one of the first. I don&apos;t need a
        playbook. I&apos;m used to figuring out the path as I go.
      </>
    ),
    proof: [
      {
        title: "Joined OMP as the second Technical Writer for integrations and APIs",
        where: "OMP",
      },
      {
        title: "Leading the move to docs-as-code, built into the development workflow",
        where: "OMP",
      },
      {
        title: "Pioneering the creation of AI agents and skills to automate repetitive writing work",
        where: "OMP",
      },
      {
        title: "Joined Personio as a foundational Technical Writer",
        where: "Personio",
      },
      {
        title: "Became Personio\u2019s first-ever Senior Technical Writer",
        where: "Personio",
      },
      {
        title: "Grew the documentation team from 3 writers to a global team of 10+",
        where: "Personio",
      },
      {
        title: "Led the expansion of documentation from 3 languages to 6",
        where: "Personio",
      },
      {
        title: "Co-founded Personio\u2019s first Women\u2019s Committee, and organised 10+ events",
        where: "Personio",
      },
    ],
  },
  {
    icon: Sparkles,
    title: "AI, but not always",
    description: (
      <>
        I use AI all day long. But more importantly, I know when <Em>not to use it</Em>. You won&apos;t find AI slop
        here, or a single {"\u201CI work at the intersection of\u2026\u201D"}
      </>
    ),
    proof: [
      {
        title: "Vibe-coded 100% of this portfolio with v0, and wrote 100% of the words by hand",
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
      {
        title: "Pioneering the creation of AI agents and skills to automate repetitive writing work",
        where: "OMP",
      },
    ],
  },
  {
    icon: LineChart,
    title: "Data over gut feeling",
    description: (
      <>
        I work in a way where my own opinions and preferences are <Em>completely irrelevant</Em>. Is the content
        clear? Is it easy to navigate? You tell me.
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
        title: "Rewrote a product area\u2019s documentation and cut its support tickets by 50%",
        where: "Personio",
      },
      {
        title: "Asking the end users of our documentation for feedback regularly, a first for the team",
        where: "OMP",
      },
    ],
  },
  {
    icon: Minus,
    title: "Less is more",
    description: (
      <>
        I see my job as a technical writer as subtracting and taking information away, <Em>not adding it</Em>. I
        write as if every extra sentence cost me 50{"\u20AC"}.
      </>
    ),
    proof: [
      {
        title: "Designed a content audit that let the team deprecate 100+ outdated pages",
        where: "Personio",
      },
      {
        title: "I keep this portfolio as short and tight as possible",
        where: "This portfolio",
      },
    ],
  },
  {
    icon: Users,
    title: "User-centered",
    description: (
      <>
        Before I write a word, I find out who&apos;s reading. Do they use the software or set it up? If they set it
        up, do they stay inside the app? <Em>How technical</Em> are they, really?
      </>
    ),
    audiences: [
      {
        level: "Low technical knowledge",
        who: "People with no technical background who use the software every day, or who read about technology in the news.",
      },
      {
        level: "Medium technical knowledge",
        who: "People with some technical background, usually gained on the job, who set up the software or help others set it up.",
      },
      {
        level: "High technical knowledge",
        who: "People with a technical background who build the software and the systems around it, and keep them running. They write code.",
      },
    ],
    proof: [
      {
        title: "Tailored documentation to 5+ audiences, from admins to everyday employees",
        where: "Personio",
      },
      {
        title: "Helped build role-based navigation so 5+ audiences each land on their own path",
        where: "Personio",
      },
      {
        title: "Tailoring API documentation to two audiences, developers and semi-technical consultants",
        where: "OMP",
      },
    ],
  },
  {
    icon: Eye,
    title: "Radical candor",
    description: (
      <>
        I&apos;m big on transparency and candid feedback. If something&apos;s off, <Em>I say so</Em>, and I&apos;m
        never shy about sharing my point of view.
      </>
    ),
    proof: [
      {
        title: "Mentored a peer to Senior Technical Writer through regular, candid feedback",
        where: "Personio",
      },
      {
        title: "Became a culture champion and gave candid feedback on candidates in 20+ hiring interviews",
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

          <p className="mx-auto mt-8 max-w-2xl text-center text-base text-white/60 text-pretty md:text-lg">
            These are the non-negotiables I bring to every job and project. Click a principle to see how I&apos;ve put
            it into practice.
            <ArrowUpRight className="ml-2 inline-block h-5 w-5 align-text-bottom text-primary" aria-hidden="true" />
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch auto-rows-fr">
          {principles.map(({ icon: Icon, title, description, audiences, proof }) => (
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

                  {audiences && (
                    <div className="flex flex-col gap-4 border-b border-white/10 px-8 py-8 md:px-12 md:py-10">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                        Who I write for
                      </h3>
                      <ol className="grid gap-4 md:grid-cols-3">
                        {audiences.map((audience, index) => (
                          <li
                            key={audience.level}
                            className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                          >
                            <div className="flex items-center gap-2" aria-hidden="true">
                              {Array.from({ length: 3 }, (_, i) => (
                                <span
                                  key={i}
                                  className={`h-1.5 flex-1 rounded-full ${i <= index ? "bg-primary" : "bg-white/15"}`}
                                />
                              ))}
                            </div>
                            <h4 className="text-lg font-semibold leading-snug text-white">{audience.level}</h4>
                            <p className="text-sm leading-relaxed text-white/60 text-pretty">{audience.who}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  <div className="flex flex-col gap-4 px-8 py-8 md:px-12 md:py-10">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">In practice</h3>
                    <ul className="flex flex-col gap-4">
                      {groupBySource(proof).map((group) => (
                        <li
                          key={group.source}
                          className="flex flex-col gap-5 rounded-3xl border border-primary/40 bg-primary/15 p-6 shadow-[0_0_40px_-12px] shadow-primary/40 transition-colors hover:bg-primary/20 md:flex-row md:items-start md:gap-6 md:p-7"
                        >
                          <SourceBadge source={group.source} />
                          <ul className="flex flex-col divide-y divide-white/10">
                            {group.titles.map((title) => (
                              <li
                                key={title}
                                className="py-3 text-lg font-semibold leading-snug text-white text-pretty first:pt-0 last:pb-0 md:text-xl"
                              >
                                {title}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
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
