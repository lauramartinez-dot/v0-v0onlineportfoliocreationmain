"use client"

import { useState } from "react"
import { topSkills, type coreSkills, type beyondCoreSkills } from "@/data/highlights"
import { Rocket, Star, X, ArrowRight } from "lucide-react"
import Image from "next/image"

function renderDescription(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(1, -1)}
        </strong>
      )
    }
    return part
  })
}

function SkillPopup({
  item,
  isPinned,
  rank,
  onClose,
}: {
  item: (typeof topSkills)[number] | (typeof coreSkills)[number] | (typeof beyondCoreSkills)[number]
  isPinned?: boolean
  rank?: number
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md rounded-2xl border shadow-2xl p-6 animate-in zoom-in-95 duration-200 bg-card
          ${isPinned ? "border-primary/30" : "border-border"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors">
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div
            className={`flex shrink-0 items-center justify-center rounded-lg h-12 w-12
              ${isPinned ? "bg-primary text-primary-foreground" : "bg-primary/10"}`}
          >
            <item.icon className={`h-6 w-6 ${isPinned ? "text-primary-foreground" : "text-primary"}`} />
          </div>

          <h3 className="flex-grow font-semibold text-foreground text-lg leading-tight">{item.title}</h3>

          {isPinned && rank && (
            <div className="flex items-center gap-1 rounded-full bg-primary/20 px-2 py-1 text-xs font-semibold text-primary">
              <Star className="h-3 w-3 fill-primary/50" />
              <span>#{rank}</span>
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4">{renderDescription(item.description)}</p>
      </div>
    </div>
  )
}

function SkillCard({
  item,
  isPinned = false,
  rank,
  tier = "core",
  onSelect,
}: {
  item: (typeof topSkills)[number] | (typeof coreSkills)[number] | (typeof beyondCoreSkills)[number]
  isPinned?: boolean
  rank?: number
  tier?: "top" | "core" | "beyond"
  onSelect: () => void
}) {
  return (
    <div
      onClick={onSelect}
      className="group relative cursor-pointer rounded-xl bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 border border-purple-200/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 p-5"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 h-7 w-7">
          <item.icon className="h-3.5 w-3.5 text-white" />
        </div>

        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-foreground text-base leading-tight">{item.title}</h3>
        </div>

        {isPinned && rank && (
          <div className="flex items-center gap-1 rounded-full bg-primary/20 px-2 py-1 text-xs font-semibold text-primary">
            <Star className="h-3 w-3 fill-primary/50" />
            <span>#{rank}</span>
          </div>
        )}
      </div>

      <p className="text-sm text-muted-foreground">{renderDescription(item.description)}</p>
    </div>
  )
}

function SkillImageCard({
  item,
  image,
  addPurpleOverlay = false,
}: {
  item: (typeof topSkills)[number] | (typeof coreSkills)[number] | (typeof beyondCoreSkills)[number]
  image: string
  addPurpleOverlay?: boolean
}) {
  return (
    <div className="group relative min-h-[600px] overflow-hidden rounded-xl shadow-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/50 via-purple-500/25 to-transparent" />

      {addPurpleOverlay && <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

      <div className="absolute bottom-0 left-0 right-0 p-8 transition-transform duration-300 group-hover:-translate-y-6">
        <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 md:text-3xl">{item.title}</h3>
        <p className="text-lg text-white/90 leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-48 group-hover:opacity-100">
          {item.description}
        </p>
      </div>
    </div>
  )
}

function CollapsibleSkillCard({
  item,
  isExpanded,
  onToggle,
}: {
  item: (typeof coreSkills)[number] | (typeof beyondCoreSkills)[number]
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="group cursor-pointer rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:shadow-sm hover:border-primary/30"
      onClick={onToggle}
    >
      <div className="flex items-center gap-3">
        <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 h-10 w-10">
          <item.icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="flex-grow font-semibold text-foreground text-sm">{item.title}</h3>
        <div className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
          <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">{renderDescription(item.description)}</p>
        </div>
      )}
    </div>
  )
}

function HoverExpandableCard({
  item,
}: {
  item: (typeof coreSkills)[number] | (typeof beyondCoreSkills)[number]
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      data-skill-title={item.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer rounded-xl bg-card border border-border p-5 transition-all duration-300 ${
        isHovered ? "shadow-xl scale-[1.02] border-primary/50" : ""
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/10 h-10 w-10">
          <item.icon className="h-5 w-5 text-primary" />
        </div>

        <div className="flex-grow min-w-0">
          <h3 className="text-xl font-semibold text-foreground mb-3">My role as a Senior Technical Writer</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            , I translate complex SaaS software into documentation that's clear
            enough for anyone to use and precise enough for engineers to trust.
          </p>
        </div>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isHovered ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base text-muted-foreground mb-3">{renderDescription(item.description)}</p>
      </div>
    </div>
  )
}

export function HighlightsSection() {
  return (
    <section id="highlights" className="relative px-4 overflow-hidden py-[70px]">
      {/* Purple gradient background - matching hero section style */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-purple-500/20" />
        {/* Large blurred orbs */}
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-pink-500/25 via-purple-500/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* My Role Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              What I do
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">My role</h2>
          </div>

          {/* Intro text */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I turn complex technology into content anyone can understand, whether they{"'"}re into tech or not.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-2">
              For the past 15 years, this has been at the heart of every role I{"'"}ve held.
            </p>
          </div>

          {/* Before / After visual comparison */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              {/* Labels row on desktop */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center w-full gap-6">
                <h3 className="text-center text-xl font-semibold text-muted-foreground/70">
                  It used to look like this...
                </h3>
                <div className="w-8" />
                <h3 className="text-center text-xl font-semibold text-primary">
                  Now it looks like this.
                </h3>
              </div>

              {/* Comparison grid */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center w-full gap-6">
                {/* Before column */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-center text-lg font-semibold text-muted-foreground/70 md:hidden">
                    It used to look like this...
                  </h3>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/50 shadow-sm opacity-60 grayscale-[30%]">
                    <Image
                      src="/images/before-1.png"
                      alt="Technical textbook page about aircraft flight mechanics with dense academic text and diagrams"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/50 shadow-sm opacity-60 grayscale-[30%]">
                    <Image
                      src="/images/before-2.png"
                      alt="Spanish-language article about why planes stay in the air, by Laura Martinez Montero"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1.5 mt-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Audience</span>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-semibold border border-border shadow-sm">
                      Non-technical readers
                    </span>
                  </div>
                </div>

                {/* Arrow divider */}
                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Mobile arrow */}
                <div className="flex md:hidden items-center justify-center py-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 rotate-90">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>

                {/* After column */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-center text-lg font-semibold text-primary md:hidden">
                    Now it looks like this.
                  </h3>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-primary/20 shadow-md shadow-primary/5">
                    <Image
                      src="/images/after-1.jpg"
                      alt="Clean, well-structured technical documentation that is easy to read"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-primary/20 shadow-md shadow-primary/5">
                    <Image
                      src="/images/after-2.jpg"
                      alt="Clear visual guide explaining a technical concept simply"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1.5 mt-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Audience</span>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold shadow-md">
                      Non-technical software users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bridging sentence */}
          <p className="text-center text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-10">
            My audience used to be non-technical readers, and now they are non-technical software users, but at the core my mission remains the same:
          </p>

          {/* Mission */}
          <div className="max-w-5xl mx-auto mt-12 flex justify-center">
            <div className="flex items-start gap-5 rounded-2xl border border-primary/25 bg-gradient-to-r from-purple-50/80 to-pink-50/80 dark:from-purple-950/30 dark:to-pink-950/30 px-8 py-7 shadow-md shadow-primary/5 backdrop-blur-sm w-full">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex-shrink-0 mt-0.5">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg leading-relaxed text-foreground/85 text-left">
                <span className="font-semibold text-primary tracking-wide uppercase text-sm">15-year long mission</span>
                <br />
                To make technology — often complex, jargon-filled, and sometimes borderline gatekeepy — accessible to everyone, helping people stay relevant and employable in 2026, with a special focus on women.
              </p>
            </div>
          </div>
        </div>

        {/* Top Differentiators Section */}
        <div id="top-differentiators" className="mb-16 text-center mt-[200px] scroll-mt-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            What Sets Me Apart
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Top Differentiators</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting lines that extend down */}
          <div className="hidden md:block absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
            <div className="grid grid-cols-3 gap-8 h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200/30 dark:bg-gray-800/20 rounded-t-3xl" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200/30 dark:bg-gray-800/20 rounded-t-3xl" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200/30 dark:bg-gray-800/20 rounded-t-3xl" />
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div className="relative z-10">
            <SkillImageCard item={topSkills[0]} image="/vr-person-blue-tech.png" />
          </div>

          {/* Column 2 */}
          <div className="relative z-10">
            <SkillImageCard item={topSkills[1]} image="/startup-workspace.jpg" addPurpleOverlay={true} />
          </div>

          {/* Column 3 */}
          <div className="relative z-10">
            <SkillImageCard item={topSkills[2]} image="/still-life-supply-chain.jpg" />
          </div>
        </div>
      </div>
    </section>
  )
}
