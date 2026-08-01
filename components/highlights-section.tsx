"use client"

import { useState, useRef, useCallback } from "react"
import { topSkills } from "@/data/highlights"
import Image from "next/image"
import { Rocket } from "lucide-react"

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
      className={`relative w-full h-full overflow-hidden rounded-xl ring-2 ring-primary/40 shadow-xl cursor-ew-resize bg-background transition-all duration-300 hover:shadow-2xl hover:ring-primary/60 ${href ? "block" : ""}`}
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

function SkillCard({ item, index }: { item: (typeof topSkills)[number]; index: number }) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-xl border border-primary/25 bg-card p-8 transition-colors duration-300 hover:border-primary/50">
      {/* List marker - ties the card back to the "And then I:" lead-in */}
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary text-lg font-extrabold text-primary">
        {index + 1}
      </span>
      <h3 className="text-2xl font-bold leading-snug text-foreground text-balance">{item.title}</h3>
    </div>
  )
}

export function HighlightsSection() {
  return (
    <section id="highlights" className="relative px-4 overflow-hidden pt-0 pb-[70px] mt-[10px]">
      {/* Gradient background removed for consistent solid background */}

      <div className="mx-auto max-w-7xl">
        {/* Top Differentiators Section */}
        <div id="top-differentiators" className="mb-14 mt-[120px] scroll-mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              What I do<span className="text-primary">.</span>
            </h2>

            {/* Accent bar - separates the title from the statement */}
            <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />

            <p className="mt-8 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-foreground text-balance">
              I wreck my head for hours understanding complex, daunting technology{" "}
              <span className="text-primary">so you don&apos;t have to.</span>
            </p>
            {/* Lead-in to the three cards, which act as the list itself */}
            <p className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-foreground text-balance">
              And then I<span className="text-primary">:</span>
            </p>
          </div>
        </div>

        {/* The three things I do - simple boxes acting as the list */}
        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {topSkills.slice(0, 3).map((item, index) => (
            <li key={item.title}>
              <SkillCard item={item} index={index} />
            </li>
          ))}
        </ul>

        {/* Mission - boxed, closing out the same section */}
        <div className="relative mx-auto mt-24 max-w-4xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-purple-950/60 via-purple-900/40 to-pink-950/50 px-6 pb-8 pt-10 text-center shadow-2xl shadow-primary/20 ring-1 ring-white/5 backdrop-blur-md md:px-10 md:pb-10 md:pt-12">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05]" />

          {/* Floating label */}
          <div className="absolute -top-4 left-6 flex items-center gap-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 px-4 py-2 shadow-lg shadow-purple-500/40 ring-4 ring-background">
            <Rocket className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold uppercase tracking-wider text-white">Mission</span>
          </div>

          <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-white text-balance">
            Because complex tech is literally everywhere, from the software you use daily to the new AI tool
            that&apos;s suddenly deciding whether you get the next job.
          </p>
          <p className="relative z-10 mt-6 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-primary text-balance">
            And you shouldn&apos;t need an IT degree or a PhD to understand it.
          </p>
        </div>

        {/* Spacer - gradient removed for consistent background */}
        <div className="py-3 mt-20" />

      </div>
    </section>
  )
}
