"use client"

import { useState, useRef, useCallback } from "react"
import { topSkills } from "@/data/highlights"
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
  imageFit = "cover",
}: {
  item: (typeof topSkills)[number]
  index: number
  image?: string
  /**
   * "contain" letterboxes the artwork so nothing gets cropped, leaving breathing room top and bottom.
   * "contain-lg" does the same but scales the artwork up so fine detail stays legible.
   */
  imageFit?: "cover" | "contain" | "contain-lg"
}) {
  const imageFitClass = {
    cover: "object-cover opacity-70",
    contain: "object-contain object-top py-10 opacity-70",
    "contain-lg": "object-contain object-top scale-[1.35] origin-top py-4 opacity-70",
  }[imageFit]

  return (
    <div className="relative min-h-[720px] w-full overflow-hidden rounded-xl shadow-lg ring-2 ring-primary/20">
      {/* Optional background image, sitting under the same layered wash */}
      {image && (
        <Image src={image || "/placeholder.svg"} alt="" fill aria-hidden="true" className={imageFitClass} />
      )}

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
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              What I do<span className="text-primary">.</span>
            </h2>

            {/* Accent bar - separates the title from the statement */}
            <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />

            <p className="mt-8 text-[25px] md:text-[25px] font-medium tracking-tight leading-snug text-white/82 text-pretty lg:whitespace-nowrap">
              I spend hours untangling complex, mind-bending tech{" "}
              <span className="text-[25px] font-bold" style={{ color: "#cf52c7" }}>so you don&apos;t have to.</span>
            </p>
            {/* Lead-in to the three cards, which act as the list itself */}
            <p className="mt-6 text-[25px] md:text-[25px] font-medium tracking-tight leading-snug text-white/80 text-balance">
              And once I&apos;ve finally cracked it, I:
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
                    ? "/writing-notes-desk.jpg"
                    : index === 1
                      ? "/highlight-git-workflow-diagram.png"
                      : "/highlight-ai-chatbot.png"
                }
                imageFit={index === 0 ? "cover" : index === 1 ? "contain" : "contain-lg"}
              />
            </li>
          ))}
        </ul>

        {/* Mission - boxed, closing out the same section */}
        <div className="relative mx-auto mt-28 max-w-4xl rounded-2xl border border-[#472444] bg-card/50 px-6 pb-10 pt-16 text-center shadow-[0_20px_70px_-30px_rgba(217,42,205,0.35)] md:px-12 md:pb-12 md:pt-20">
          {/* WHY - the box's title, straddling the top border so it reads as the section's headline */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full border border-primary/40 bg-background px-9 py-3 shadow-[0_0_40px_-12px_rgba(217,42,205,0.5)] md:-top-9 md:px-12 md:py-4">
            <span
              className="text-3xl font-bold uppercase tracking-tight md:text-4xl"
              style={{ color: "#d92acd" }}
            >
              Why?
            </span>
          </div>

          <p className="text-[25px] md:text-[25px] font-medium tracking-tight leading-snug text-white/79 text-balance border-[#472444]">
            Because{" "}
            <span className="font-bold" style={{ color: "#cf52c7" }}>
              you shouldn&apos;t need an IT background or a PhD
            </span>{" "}
            to understand the tech that&apos;s everywhere in your life.
          </p>
          <div className="mt-6 text-[25px] md:text-[25px] font-medium tracking-tight leading-snug text-white/79 text-balance">
            <p>
              Especially in 2026, when AI means you&apos;re expected to build software, not just use it.
            </p>
          </div>
        </div>

        {/* Spacer - gradient removed for consistent background */}
        <div className="py-3 mt-20" />

      </div>
    </section>
  )
}
