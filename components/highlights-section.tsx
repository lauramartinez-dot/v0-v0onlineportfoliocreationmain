"use client"

import { useState, useRef, useCallback } from "react"
import { topSkills } from "@/data/highlights"
import { ArrowRight, Rocket } from "lucide-react"
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

      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-[26.95px] font-bold text-white">{item.title}</h3>
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
        <div id="top-differentiators" className="mb-16 mt-[120px] scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-8">
            <p className="text-[21px] text-foreground/90 leading-relaxed">
              Why me? Because I bring three roles into one:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Column 1: A Foundation in Tech Journalism */}
          <div className="relative z-10">
            <SkillImageCard item={topSkills[0]} image="/vr-person-blue-tech.png" />
          </div>

          {/* Column 2: 3x Early Hire in Tech Scale-Ups */}
          <div className="relative z-10">
            <SkillImageCard item={topSkills[1]} image="/3d-graph-computer-illustration.jpg" addPurpleOverlay={true} />
          </div>

          {/* Column 3: An International Career Across 4 Countries */}
          <div className="relative z-10">
            <SkillImageCard item={topSkills[2]} image="/still-life-supply-chain.jpg" />
          </div>
        </div>

        {/* Mission section - integrated into the same visual flow */}
        <div className="mt-[62px] pt-[54px] text-center">
          <p className="text-[21px] text-foreground/90 leading-relaxed mb-8">
            And a clear mission:
          </p>
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
              <p className="text-[21px] font-normal leading-[1.7] text-foreground/95 text-left mb-5">
                   By helping companies improve and internationalise their documentation, I ultimately help more people actually use and master new technology. Because we live in a time where knowing your way around the right software — whether that&apos;s an HR, marketing or AI tool — <span className="text-primary font-medium">can make the difference between getting a job or not</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Spacer - gradient removed for consistent background */}
        <div className="py-3 mt-20" />

      </div>
    </section>
  )
}
