"use client"

import { useState, useRef, useCallback } from "react"
import { topSkills } from "@/data/highlights"
import Image from "next/image"
import {
  writingAchievements,
  buildingAchievements,
  translateAchievements,
} from "@/components/achievements-section"

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

type Achievement = { stat: string; label: string; description?: string }

function SkillImageCard({
  item,
  image,
  achievements,
}: {
  item: (typeof topSkills)[number]
  image: string
  achievements: Achievement[]
}) {
  return (
    <div className="w-full text-left">
      {/* Image card - title only */}
      <div className="relative min-h-[520px] w-full overflow-hidden rounded-xl shadow-lg ring-2 ring-primary/20">
        <Image src={image || "/placeholder.svg"} alt={item.title} fill className="object-cover opacity-70" />

        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent opacity-90" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-3xl font-bold text-white leading-tight text-balance">{item.title}</h3>
        </div>
      </div>

      {/* Achievements - always visible below the image */}
      <div className="mt-4 rounded-xl border border-primary/30 bg-card p-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">What I&apos;m proud of</p>
        <ul className="flex flex-col gap-3">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card px-4 py-3"
            >
              <span className="min-w-[72px] shrink-0 text-right text-3xl font-extrabold leading-none text-primary drop-shadow-[0_0_25px_rgba(200,80,192,0.55)]">
                {achievement.stat}
              </span>
              <span className="flex-1 text-sm font-semibold leading-snug text-foreground">
                {achievement.label}
                {achievement.description ? `, ${achievement.description.replace(/\n/g, " ").toLowerCase()}` : ""}
              </span>
            </li>
          ))}
        </ul>
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

            <p className="mt-8 text-2xl md:text-[28px] font-medium leading-relaxed text-foreground/75 text-balance">
              I wreck my head for hours understanding complex, daunting technology{" "}
              <span className="text-primary">so you don&apos;t have to.</span>
            </p>
            <p className="mt-5 text-2xl md:text-[28px] font-semibold leading-relaxed text-foreground text-balance">
              And then I write about it.
            </p>
          </div>
        </div>

        {/* Why I do it */}
        <div className="text-center mt-32 mb-12">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Why I do it<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - separates the title from the statement */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        {/* Mission statement */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-[28px] font-medium leading-relaxed text-foreground/75 text-balance">
            Because complex tech is literally everywhere, from the software you use daily to the new AI tool
            that&apos;s suddenly deciding whether you get the next job.
          </p>
          <p className="mt-5 text-2xl md:text-[28px] font-semibold leading-relaxed text-primary text-balance">
            And you shouldn&apos;t need an IT degree or a PhD to understand it.
          </p>
        </div>

        {/* How I do it */}
        <div className="text-center mt-40 mb-12">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            How I do it<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - separates the title from the cards */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">
          {/* Column 1: A Foundation in Tech Journalism */}
          <div className="relative z-10">
            <SkillImageCard
              item={topSkills[0]}
              image="/vr-person-blue-tech.png"
              achievements={writingAchievements}
            />
          </div>

          {/* Column 2: 3x Early Hire in Tech Scale-Ups */}
          <div className="relative z-10">
            <SkillImageCard
              item={topSkills[1]}
              image="/3d-graph-computer-illustration.jpg"
              achievements={buildingAchievements}
            />
          </div>

          {/* Column 3: An International Career Across 4 Countries */}
          <div className="relative z-10">
            <SkillImageCard
              item={topSkills[2]}
              image="/still-life-supply-chain.jpg"
              achievements={translateAchievements}
            />
          </div>
        </div>

        {/* Spacer - gradient removed for consistent background */}
        <div className="py-3 mt-20" />

      </div>
    </section>
  )
}
