"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { createPortal } from "react-dom"
import { topSkills, coreSkills } from "@/data/highlights"
import { Rocket, ArrowRight, X } from "lucide-react"
import Image from "next/image"

function DiagonalRevealImage({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  href,
}: {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  beforeLabel?: string
  href?: string
}) {
  const [revealPercent, setRevealPercent] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setRevealPercent(Math.max(0, Math.min(100, x)))
  }, [])

  const handleMouseEnter = useCallback(() => setIsHovering(true), [])
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    setRevealPercent(0)
  }, [])

  const skew = 12
  const p = revealPercent

  const Wrapper = href ? "a" : "div"
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <Wrapper
      {...wrapperProps}
      ref={containerRef as React.RefObject<HTMLDivElement & HTMLAnchorElement>}
      className={`relative w-full h-full overflow-hidden rounded-xl ring-2 ring-purple-400/40 shadow-xl shadow-purple-500/25 cursor-ew-resize bg-background transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/35 hover:ring-purple-400/60 ${href ? "block" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Before image (base layer) */}
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        width={800}
        height={1067}
        className="w-full h-full object-cover"
        unoptimized
      />
      {/* After image (revealed via diagonal clip-path) */}
      <div
        className="absolute inset-0 transition-[clip-path] duration-100 ease-out"
        style={{
          clipPath: `polygon(${Math.max(0, p - skew)}% 0%, 100% 0%, 100% 100%, ${Math.max(0, p + skew)}% 100%)`,
        }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          width={800}
          height={1067}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      {/* Diagonal line indicator */}
      {isHovering && (
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-primary/40 pointer-events-none transition-none"
          style={{
            left: `${p}%`,
            transform: `skewX(-${skew}deg)`,
            transformOrigin: 'center',
          }}
        />
      )}

    </Wrapper>
  )
}

function SkillImageCard({
  item,
  image,
  addPurpleOverlay = false,
}: {
  item: (typeof topSkills)[number]
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

      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 via-purple-500/15 to-transparent" />

      {addPurpleOverlay && <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-2xl font-bold text-white md:text-3xl">{item.title}</h3>
      </div>
    </div>
  )
}

function SkillCard({ item }: { item: (typeof coreSkills)[number] }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer rounded-xl bg-purple-500/10 border shadow-sm border-purple-400/20 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40 hover:bg-purple-500/15 hover:-translate-y-0.5 transition-all duration-300"
      >
        <div className="flex items-center gap-3 px-5 py-4">
          <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/15 h-10 w-10">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <h4 className="font-semibold text-foreground text-lg md:text-xl leading-tight flex-1">{item.title}</h4>
        </div>
      </div>

      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg rounded-2xl bg-background border border-border shadow-2xl shadow-purple-500/20 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex shrink-0 items-center justify-center rounded-xl bg-primary/15 h-12 w-12">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-2xl md:text-3xl leading-tight">{item.title}</h3>
              </div>

              {item.description && (
                <p className="text-lg text-foreground leading-relaxed mb-5">{item.description}</p>
              )}

              {item.tools && item.tools.length > 0 && (
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">Tools</span>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-full bg-purple-500/20 border border-purple-400/40 px-3.5 py-1.5 text-sm font-semibold text-purple-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
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
        {/* Top Differentiators Section */}
        <div id="top-differentiators" className="mb-16 text-center mt-[200px] scroll-mt-20">
          <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">My Role</h2>
          <div className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto space-y-6">
            <p className="whitespace-nowrap">In general terms, I write about complex technology and software in the <span className="text-primary font-semibold">simplest, least <em>jargony</em> way possible</span>.</p>
            <p className="whitespace-nowrap">This is at the core of the Technical Writer role, as well as every other role I{"'"}ve had over the past 15 years.</p>
            <p className="whitespace-nowrap">However, nowadays, my role is more than just writing:</p>
          </div>
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

          {/* Column 1: A Foundation in Tech Journalism */}
          <div className="relative z-10 flex flex-col">
            <SkillImageCard item={topSkills[0]} image="/vr-person-blue-tech.png" />
            <div className="flex flex-col gap-2.5 mt-8 pt-6 border-t border-primary/10">
              <p className="text-xs font-semibold text-primary/50 uppercase tracking-widest mb-1">Core Skills</p>
              {coreSkills
                .filter((s) => s.column === 1)
                .map((skill, i) => (
                  <SkillCard key={i} item={skill} />
                ))}
            </div>
          </div>

          {/* Column 2: 3x Early Hire in Tech Scale-Ups */}
          <div className="relative z-10 flex flex-col">
            <SkillImageCard item={topSkills[1]} image="/startup-workspace.jpg" addPurpleOverlay={true} />
            <div className="flex flex-col gap-2.5 mt-8 pt-6 border-t border-primary/10">
              <p className="text-xs font-semibold text-primary/50 uppercase tracking-widest mb-1">Core Skills</p>
              {coreSkills
                .filter((s) => s.column === 2)
                .map((skill, i) => (
                  <SkillCard key={i} item={skill} />
                ))}
            </div>
          </div>

          {/* Column 3: An International Career Across 4 Countries */}
          <div className="relative z-10 flex flex-col">
            <SkillImageCard item={topSkills[2]} image="/still-life-supply-chain.jpg" />
            <div className="flex flex-col gap-2.5 mt-8 pt-6 border-t border-primary/10">
              <p className="text-xs font-semibold text-primary/50 uppercase tracking-widest mb-1">Core Skills</p>
              {coreSkills
                .filter((s) => s.column === 3)
                .map((skill, i) => (
                  <SkillCard key={i} item={skill} />
                ))}
            </div>
          </div>
        </div>

        {/* Mission box - moved to bottom */}
        <div className="max-w-6xl mx-auto mt-20 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Bridging sentence - left */}
          <p className="text-left text-lg md:text-xl text-foreground leading-relaxed md:w-1/3 flex-shrink-0">
            I{"'"}ve changed industries, roles, languages, and audiences, but my mission has remained the same:
          </p>

          {/* Mission box - right */}
          <div className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-purple-950/40 to-pink-950/40 px-8 py-7 shadow-lg shadow-primary/15 backdrop-blur-sm md:flex-1">
            <div className="absolute -top-4 left-7 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 shadow-md shadow-purple-500/30 ring-4 ring-background">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <p className="text-base md:text-lg leading-relaxed text-foreground font-medium text-left text-balance mt-1">
              I help non-technical people make sense of technology because knowing your way around new tech — especially software and AI tools in today{"'"}s post-ChatGPT world — is what keeps you employed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
