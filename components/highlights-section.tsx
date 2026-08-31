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
}: {
  item: (typeof topSkills)[number]
  index: number
}) {
  return (
    <div className="relative flex min-h-[340px] w-full overflow-hidden rounded-xl shadow-lg ring-2 ring-primary/20">
      {/* Layered wash gives the card its depth now that there is no photo behind it */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent opacity-90" />

      <div className="relative mt-auto w-full p-8">
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
    <>
    <section id="highlights" className="relative px-4 overflow-hidden pt-0 pb-[70px] mt-[10px]">
      {/* Gradient background removed for consistent solid background */}

      {/* 1. The statement - sits on a full-bleed photographic band */}
      <div id="top-differentiators" className="relative mt-[120px] scroll-mt-32">
        {/* Breaks out of the centered container so the image spans the full viewport width */}
        <div className="absolute left-1/2 top-0 h-full w-screen -translate-x-1/2">
          <Image
            src="/what-i-do-background.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          {/* Left-to-right scrim keeps the copy legible while the code screen stays visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/55" />
          {/* Vertical fade blends the band into the page above and below */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-28 md:py-36">
          {/* Section title stays centered, like every other section */}
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              What I do<span className="text-primary">.</span>
            </h2>

            {/* Accent bar - separates the title from the statement */}
            <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
          </div>

          {/* Same family and casing as the body copy, just larger and heavier so it still leads */}
          <p className="max-w-4xl text-3xl font-semibold tracking-tight leading-[1.2] text-white text-balance md:text-4xl lg:text-[2.75rem]">
            I spend hours untangling complex, mind-bending tech{" "}
            <span className="font-bold" style={{ color: "#cf52c7" }}>
              so you don&apos;t have to.
            </span>
          </p>
        </div>
      </div>

      {/* Divider - marks the break between the statement and the list */}
      <div className="mx-auto max-w-7xl border-t border-[#472444]" />

      {/* 2. The three things I do - its own block with its own lead-in */}
      <div className="mx-auto max-w-7xl pt-20 pb-24">
        <p className="mb-10 text-center text-[25px] font-medium tracking-tight leading-snug text-white/80 text-balance">
          And once I&apos;ve finally cracked it, I:
        </p>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          {topSkills.slice(0, 3).map((item, index) => (
            <li key={item.title}>
              <SkillCard item={item} index={index} />
            </li>
          ))}
        </ul>
      </div>

    </section>

    {/* The mission - a section in its own right, not a callout inside "What I do" */}
    <section id="why" className="relative px-4 pt-20 pb-24 scroll-mt-32">
      <div className="mx-auto max-w-7xl text-center">
        {/* Same heading treatment as the other sections */}
        <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Why I do it<span className="text-primary">.</span>
        </h2>

        <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />

        <p className="mx-auto mt-10 max-w-4xl text-2xl font-medium tracking-tight leading-snug text-white/80 text-balance md:text-3xl">
          Because{" "}
          <span className="font-bold" style={{ color: "#cf52c7" }}>
            you shouldn&apos;t need an IT background or a PhD
          </span>{" "}
          to understand the tech that&apos;s everywhere in your life.
        </p>
      </div>
    </section>
    </>
  )
}
