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

function SkillCard({
  item,
  index,
  image,
}: {
  item: (typeof topSkills)[number]
  index: number
  image?: string
}) {
  return (
    <div className="relative min-h-[720px] w-full overflow-hidden rounded-xl shadow-lg ring-2 ring-primary/20">
      {/* Optional background image, sitting under the same layered wash */}
      {image && <Image src={image || "/placeholder.svg"} alt="" fill aria-hidden="true" className="object-cover opacity-70" />}

      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent opacity-90" />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        {/* List marker - ties the card back to the "And then I:" lead-in */}
        <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-xl font-extrabold text-primary">
          {index + 1}
        </span>
        <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-white text-balance">
          {item.title}
        </h3>
      </div>
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

            <p className="mt-8 text-xl md:text-2xl font-medium tracking-tight leading-snug text-white/82 text-balance">
              I wreck my head for hours understanding complex, daunting technology{" "}
              <span className="text-primary font-bold">so you don&apos;t have to.</span>
            </p>
            <p className="mt-5 text-xl md:text-2xl font-medium tracking-tight leading-snug text-white/79 text-balance">
              Lately, that means APIs and integrations.
            </p>
            {/* Lead-in to the three cards, which act as the list itself */}
            <p className="mt-6 text-xl md:text-2xl font-medium tracking-tight leading-snug text-white/80 text-balance">
              And then I<span className="text-primary">:</span>
            </p>
          </div>
        </div>

        {/* The three things I do - simple boxes acting as the list */}
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          {topSkills.slice(0, 3).map((item, index) => (
            <li key={item.title}>
              <SkillCard
                item={item}
                index={index}
                image={
                  index === 0
                    ? "/api-docs-bg.png"
                    : index === 1
                      ? "/highlight-git-workflow-diagram.png"
                      : undefined
                }
              />
            </li>
          ))}
        </ul>

        {/* Mission - boxed, closing out the same section */}
        <div className="relative mx-auto mt-24 max-w-4xl rounded-2xl border border-primary/20 bg-card/50 px-6 pb-8 pt-10 text-center md:px-10 md:pb-10 md:pt-12">
          {/* Floating label - straddles the top border so it reads as part of the box */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-primary/30 bg-background px-4 py-1.5">
            <Rocket className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Mission</span>
          </div>

          {/* WHY - names the mission so the box reads as the reason behind the work */}
          <h3 className="mb-6 text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Why<span className="text-primary">?</span>
          </h3>

          <p className="text-xl md:text-2xl font-medium tracking-tight leading-snug text-white/79 text-balance">
            Because complex tech is literally everywhere, from the ve (what dhicles you use to the software that's suddenly deciding whether you get your next job. 
          </p>
          <p className="mt-5 text-xl md:text-2xl font-bold tracking-tight leading-snug text-primary text-balance">
            And you shouldn&apos;t need an IT degree or a PhD to understand any of it.
          </p>
        </div>

        {/* Spacer - gradient removed for consistent background */}
        <div className="py-3 mt-20" />

      </div>
    </section>
  )
}
