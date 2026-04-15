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

      <div className={`absolute inset-0 bg-gradient-to-b ${addPurpleOverlay ? "from-purple-600/50 via-purple-500/35" : "from-purple-600/30 via-purple-500/15"} to-transparent`} />

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
        className="group relative rounded-2xl bg-card border border-primary/15 shadow-lg shadow-purple-900/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 cursor-default overflow-hidden"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Content */}
        <div className="relative flex items-center justify-center px-6 py-6 min-h-[80px]">
          <h4 className="font-semibold text-purple-100 text-lg md:text-xl leading-tight text-center group-hover:text-primary transition-colors duration-300">{item.title}</h4>
        </div>

        {/* Bottom subtle glow on hover */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-300 pointer-events-none" />
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
              <div className="mb-5">
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
    <section id="highlights" className="relative px-4 overflow-hidden pt-[40px] pb-[70px]">
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
        <div id="top-differentiators" className="mb-16 mt-[120px] scroll-mt-20">
          <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl text-center">Top Skills</h2>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I write about complex software products so that <span className="relative group/tooltip cursor-pointer text-white font-semibold bg-primary/20 px-1.5 py-0.5 rounded border-b-2 border-dashed border-primary/50 hover:bg-primary/30 hover:border-primary transition-all duration-200">all humans <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] rounded-full border border-primary/50 text-primary/70 group-hover/tooltip:border-primary group-hover/tooltip:text-primary transition-all">?</span><span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 bg-background border border-primary/30 rounded-lg text-sm text-foreground/90 whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-50">Not just the ones with an IT background.</span></span> can understand and use them.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">As a Senior Technical Writer though, writing is just part of what I do:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">


          {/* Column 1: A Foundation in Tech Journalism */}
          <div className="relative z-10 flex flex-col">
            <SkillImageCard item={topSkills[0]} image="/vr-person-blue-tech.png" />
            <div className="flex flex-col gap-2.5 mt-8 pt-6 border-t border-primary/10">
              <p className="text-xs font-semibold text-primary/50 uppercase tracking-widest mb-1 text-center">Top Skills</p>
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
              <p className="text-xs font-semibold text-primary/50 uppercase tracking-widest mb-1 text-center">Top Skills</p>
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
              <p className="text-xs font-semibold text-primary/50 uppercase tracking-widest mb-1 text-center">Top Skills</p>
              {coreSkills
                .filter((s) => s.column === 3)
                .map((skill, i) => (
                  <SkillCard key={i} item={skill} />
                ))}
            </div>
          </div>
        </div>

        {/* Mission box - moved to bottom */}
        <div className="max-w-6xl mx-auto mt-32 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Bridging sentence - left */}
          <p className="text-left text-lg md:text-xl text-foreground/70 leading-relaxed md:w-1/3 flex-shrink-0">
            Over the past 15 years I{"'"}ve changed industries, roles, and languages, but my mission has remained the same:
          </p>

          {/* Mission box - right */}
          <div className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-purple-950/60 via-purple-900/40 to-pink-950/50 shadow-2xl shadow-primary/20 backdrop-blur-md md:flex-1 ring-1 ring-white/5 px-6 pt-4 pb-4">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] pointer-events-none" />
            <div className="absolute -top-4 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/40 ring-4 ring-background">
              <Rocket className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white">Mission</span>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 font-medium text-left mt-[18px] mb-4 mx-1 relative z-10 px-[7px]">
              I help all humans — with an extra focus on non-technical people and women — get more comfortable using new technology and and software because <span className="text-white font-semibold bg-primary/20 px-1.5 py-0.5 rounded">over 90% of European jobs now require digital skills</span>, yet nearly 1 in 3 Europeans still doesn&apos;t have them.
            </p>
            <p className="text-sm text-white/50 italic text-right relative z-10 px-[7px]">
              — Eurostat · Regional Yearbook, European Commission, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
