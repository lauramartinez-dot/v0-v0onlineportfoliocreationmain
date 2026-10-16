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
        title:
          "Led a content audit that removed over 100 outdated Help Center articles, 20% of all content, so readers only found what was still true.",
        where: "Personio",
      },
      {
        title:
          "Cut a product area\u2019s support ticket volume by over 50% by rewriting its documentation to answer the question and stop there.",
        where: "Personio",
      },
      {
        title:
          "Kept this portfolio to the sections that earn their place: no decorative stats, no filler, nothing that doesn\u2019t help you decide.",
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
        title:
          "Developed tailored documentation for 5+ user groups, from business admins and HR managers to supervisors and employees, and supported role-based navigation.",
        where: "Personio",
      },
      {
        title:
          "Built Personio\u2019s entire Spanish documentation library from the ground up, managing 150+ English-to-Spanish translations a year.",
        where: "Personio",
      },
      {
        title:
          "Grouped the writing samples on this site into three technical tiers, from developers down to people who read about tech in the news.",
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
        title:
          "Vibe-coded this entire portfolio with v0 and Claude without writing a line of code myself, while writing every word of the copy by hand.",
        where: "This portfolio",
      },
      {
        title:
          "Developed an AI-powered assistant for Spanish translation review that reduced review time by 90% and let the team scale translations.",
        where: "Personio",
      },
      {
        title:
          "Used ChatGPT, Claude and Cursor to draft and structure new documentation pages in under 4 hours, while keeping the quality bar where it was.",
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
        title:
          "Used data analysis to identify and deprioritise 20% of feature release documentation tasks that had minimal audience impact.",
        where: "Personio",
      },
      {
        title:
          "Built the team\u2019s Tableau reporting on article views, helpfulness votes and linked tickets, making reporting 30% faster and pointing rewrites where the numbers said.",
        where: "Personio",
      },
      {
        title:
          "Collaborated directly with leadership to tie documentation to product adoption and customer retention metrics, not to how many pages we published.",
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
        title:
          "Conducted 20+ company-wide culture interviews and reported the findings back to leadership unfiltered, including the uncomfortable ones.",
        where: "Personio",
      },
      {
        title:
          "Helped design the company-wide release process that tells every team what is shipping and when, so nobody downstream is surprised by a launch.",
        where: "Personio",
      },
      {
        title:
          "Mentored a peer to Senior Technical Writer with clear expectations and regular candid feedback, so there were no surprises at review time.",
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
        title:
          "Joined Personio at 300 employees as one of the first Technical Writers and helped grow the team from 3 writers to a global team of 10+.",
        where: "Personio",
      },
      {
        title:
          "Co-founded Personio\u2019s first Women\u2019s Committee and kept it running alongside the day job, because nobody else was going to.",
        where: "Personio",
      },
      {
        title:
          "Led the expansion of documentation from 3 languages to 6, owning the vendor relationships and the day-to-day of getting content translated and published.",
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
                          <span className="w-fit shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground md:mt-1">
                            {item.where}
                          </span>
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
