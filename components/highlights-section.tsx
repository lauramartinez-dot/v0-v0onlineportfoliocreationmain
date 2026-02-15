"use client"

import { useState, useRef, useCallback } from "react"
import { topSkills } from "@/data/highlights"
import { Rocket, ArrowRight } from "lucide-react"
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
      {/* Gradient overlay - purple at bottom for label readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-800 via-purple-600/30 to-transparent" />
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
        {/* Gradient overlay - purple at bottom for label readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-800 via-purple-600/30 to-transparent" />
      </div>
      {/* Centered audience label */}
      {beforeLabel && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 bg-white/30 backdrop-blur-md text-white text-base font-semibold shadow-lg whitespace-nowrap">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Audience:</span>
            {beforeLabel}
          </span>
        </div>
      )}
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
          <div className="text-center mb-12 max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
              I turn complex technology into content anyone can understand, whether they{"'"}re into tech or not.
            </p>
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mt-3">
              For the past 15 years, this has been at the heart of every role I{"'"}ve held.
            </p>
          </div>

          {/* Before / After visual comparison */}
          <div className="max-w-5xl mx-auto mt-16 mb-16">
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
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch w-full gap-6">
                {/* Before column */}
                <div className="flex flex-col gap-4 md:min-h-0">
                  <h3 className="text-center text-lg font-semibold text-muted-foreground/70 md:hidden">
                    It used to look like this...
                  </h3>
                  <DiagonalRevealImage
                    beforeSrc="/images/before-1-new.png"
                    afterSrc="/images/before-2.png"
                    beforeAlt="Technical textbook page about aircraft flight mechanics with diagram of four forces"
                    afterAlt="Spanish-language article about why planes stay in the air, by Laura Martinez Montero"
                    beforeLabel="Non-technical readers"
                    href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire"
                  />
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
                <div className="flex flex-col gap-4 md:min-h-0">
                  <h3 className="text-center text-lg font-semibold text-primary md:hidden">
                    Now it looks like this.
                  </h3>
                  <DiagonalRevealImage
                    beforeSrc="/images/before-2-new.png"
                    afterSrc="/images/after-2-new.png"
                    beforeAlt="Role-Based Access Control Policy diagram showing organization, users, roles, and permissions"
                    afterAlt="Help center article: Set up permissions and employee roles"
                    beforeLabel="Non-technical software users"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bridging sentence + Mission side by side */}
          <div className="max-w-5xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Bridging sentence - left */}
            <p className="text-left text-lg md:text-xl text-muted-foreground leading-relaxed md:w-1/3 flex-shrink-0">
              I{"'"}ve changed industries, roles, languages, and audiences, but my mission has remained the same:
            </p>

            {/* Mission box - right */}
            <div className="flex items-start gap-5 rounded-2xl border border-primary/25 bg-gradient-to-r from-purple-50/80 to-pink-50/80 dark:from-purple-950/30 dark:to-pink-950/30 px-8 py-7 shadow-md shadow-primary/5 backdrop-blur-sm md:flex-1">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex-shrink-0 mt-0.5">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85 text-left">
                To make technology and software — often complex, jargon-heavy, and sometimes even gatekeepy — accessible to everyone, helping people stay relevant and employable in 2026, with a focus on women.
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
