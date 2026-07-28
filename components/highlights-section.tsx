"use client"

import { useState, useRef, useCallback } from "react"
import { topSkills } from "@/data/highlights"
import { ArrowRight, Rocket } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Read more about: ${item.title}`}
          className="group relative block w-full min-h-[720px] overflow-hidden rounded-xl text-left shadow-lg ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/60 hover:shadow-[0_12px_48px_-12px_rgba(200,80,192,0.5)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-3xl font-bold text-white leading-tight text-balance">{item.title}</h3>
            <span className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-primary">
              See the numbers
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-5xl max-h-[90vh] overflow-y-auto gap-0 border-primary/30 bg-card p-0">
        {/* Full-bleed image banner */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden md:h-72">
          <Image src={image || "/placeholder.svg"} alt={item.title} fill className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
        </div>

        <div className="flex flex-col gap-8 px-6 pb-8 md:px-10 md:pb-10">
          <DialogHeader className="-mt-12 relative">
            <DialogTitle className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
              {item.title}
            </DialogTitle>
            <DialogDescription className="mt-3 text-lg leading-relaxed text-foreground/70 md:text-xl">
              {item.description}
            </DialogDescription>
          </DialogHeader>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {skill}
              </span>
            ))}
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What I&apos;m proud of
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card px-6 py-5"
                >
                  <span className="min-w-[110px] shrink-0 text-right text-5xl font-extrabold leading-none text-primary drop-shadow-[0_0_25px_rgba(200,80,192,0.55)] md:text-6xl">
                    {achievement.stat}
                  </span>
                  <span className="flex-1 text-lg font-semibold leading-snug text-foreground">
                    {achievement.label}
                    {achievement.description
                      ? `, ${achievement.description.replace(/\n/g, " ").toLowerCase()}`
                      : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary md:text-base">
              What I do
            </p>

            {/* Accent bar */}
            <div className="mx-auto mt-6 mb-6 h-1.5 w-12 rounded-full bg-primary" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-foreground text-balance">
              I wreck my head for hours understanding complex, daunting technology so you don&apos;t have to. And then I
              write about it.
            </h2>
          </div>
        </div>

        {/* Mission box - polished design with purple glow */}
        <div className="relative z-10 max-w-3xl mx-auto pt-[15px]">
          {/* Purple glow effects - matching hero image */}
          <div className="absolute -bottom-6 -left-8 h-32 w-32 md:h-40 md:w-40 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl" />
          <div className="absolute -top-4 -right-4 h-20 w-20 md:h-28 md:w-28 rounded-full bg-gradient-to-bl from-pink-500/25 to-purple-500/25 blur-2xl" />
          <div className="absolute bottom-2 -right-2 h-12 w-12 md:h-16 md:w-16 rounded-full bg-pink-500/20 blur-xl" />

          <div className="relative rounded-3xl border border-primary/40 bg-card/80 backdrop-blur-sm px-8 md:px-10 pt-14 pb-8 shadow-lg shadow-primary/5">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

            {/* Mission badge with larger rocket icon */}
            <div className="absolute -top-6 left-8 flex items-center justify-center w-14 h-14 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/30">
              <Rocket className="w-7 h-7 text-white drop-shadow-md" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-[22.5px] font-semibold leading-[1.7] text-foreground/95 text-left">
                Why? Because I believe in <span className="text-primary font-bold">democratising STEM</span>. Tech is
                everywhere now, and understanding it shouldn&apos;t be reserved for people with IT degrees and PhDs. The
                more accessible technical knowledge gets, the more people can contribute to it.
              </p>
            </div>
          </div>
        </div>

        {/* How do I do it */}
        <div className="text-center mt-24 mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary md:text-base">
            How do I do it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
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
