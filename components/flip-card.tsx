"use client"

import Image from "next/image"
import { useState, type ReactNode } from "react"
import { RotateCcw } from "lucide-react"

type FlipCardProps = {
  era: string
  role: string
  imageSrc: string
  imageAlt: string
  children: ReactNode
}

const faceStyle = {
  gridArea: "1 / 1",
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
} as const

export function FlipCard({ era, role, imageSrc, imageAlt, children }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flex flex-col" style={{ perspective: "1600px" }}>
      <div
        className="grid flex-1 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <button
          type="button"
          onClick={() => setFlipped(true)}
          inert={flipped}
          aria-label={`${era}, ${role}. Show the image`}
          className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-primary/40 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          style={faceStyle}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-primary/85 transition-colors duration-300 group-hover:bg-primary/75" />
          <div className="relative flex flex-col items-center gap-4 px-8 text-center">
            <span className="text-5xl font-semibold tracking-tight text-primary-foreground text-balance md:text-6xl">
              {era}
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/85">
              {role}
            </span>
          </div>
          <span className="absolute bottom-8 flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
            <RotateCcw className="size-4" aria-hidden="true" />
            Click to flip
          </span>
        </button>

        <div
          inert={!flipped}
          className="surface-card relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
          style={{ ...faceStyle, transform: "rotateY(180deg)" }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f131c] via-[#0f131c]/20 to-transparent" />
            <button
              type="button"
              onClick={() => setFlipped(false)}
              aria-label="Flip the card back"
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/20 bg-[#0f131c]/70 text-white backdrop-blur transition-colors hover:bg-[#0f131c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              <span className="text-primary">{era}</span>
              <span aria-hidden="true" className="mx-2">
                ·
              </span>
              {role}
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
