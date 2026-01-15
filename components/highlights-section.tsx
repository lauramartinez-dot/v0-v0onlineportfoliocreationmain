"use client"

import { useState } from "react"
import { topSkills, type coreSkills, type beyondCoreSkills } from "@/data/highlights"
import { Star, X } from "lucide-react"
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
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 via-purple-500/10 to-transparent" />

      {addPurpleOverlay && <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

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
            Today, as a Senior Technical Writer, I translate complex SaaS software into documentation that's clear
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
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

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

          {/* Text content - centered and above images */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - All text content */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I turn complex technology into content anyone can understand, whether they're into tech or not.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the past 15 years, this has been at the core of every role I've worked in.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, as a Senior Technical Writer, I turn complex SaaS software into{" "}
                  <span className="text-primary/90 font-medium">documentation tailored to the end user</span>, whether
                  that's a business user who needs clear, jargon-free guidance on using the app or a developer who needs
                  accurate, fluff-free guidance on how to work with it.
                </p>
              </div>

              {/* Right side - Single documentation image without background */}
              <div className="relative">
                <Image
                  src="/images/untitled.png"
                  alt="Documentation interface"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Why Section */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="inline-flex items-center gap-3 rounded-full border-2 border-primary/30 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 px-6 py-4 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex-shrink-0">
                <Star className="w-5 h-5 text-white" />
              </div>
              <p className="text-base text-foreground leading-relaxed">
                <span className="font-bold text-primary">Mission:</span> I want to help people—especially women and
                others who haven't always been encouraged to pursue STEM—gain tech literacy. I believe it's one of the
                most life-changing skills, especially in today's AI-driven world.
              </p>
            </div>
          </div>
        </div>

        {/* Top Differentiators Section */}
        <div className="mb-16 text-center">
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
