"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Pinned scroll-reveal for the About me section.
 * The outer wrapper is tall; the inner content is sticky and stays fixed on
 * screen while you scroll through that height. Scroll progress crossfades the
 * lead line into the follow-up copy, so it reads as "the same block changing"
 * rather than the page moving on to new content.
 *
 * The raw scroll value is smoothed with a requestAnimationFrame lerp and eased,
 * so the transition glides instead of tracking the wheel 1:1.
 */
export function AboutMeReveal() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef(0)
  const currentRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const readTarget = () => {
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1))
      targetRef.current = total > 0 ? scrolled / total : 0
      if (prefersReduced) {
        currentRef.current = targetRef.current
        setProgress(targetRef.current)
      }
    }

    const tick = () => {
      // Ease the current value toward the target for smooth, inertial motion.
      const diff = targetRef.current - currentRef.current
      currentRef.current += diff * 0.12
      if (Math.abs(diff) < 0.0005) currentRef.current = targetRef.current
      setProgress(currentRef.current)
      rafRef.current = requestAnimationFrame(tick)
    }

    readTarget()
    if (!prefersReduced) rafRef.current = requestAnimationFrame(tick)

    window.addEventListener("scroll", readTarget, { passive: true })
    window.addEventListener("resize", readTarget)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("scroll", readTarget)
      window.removeEventListener("resize", readTarget)
    }
  }, [])

  const clamp = (n: number) => Math.min(Math.max(n, 0), 1)
  // Smootherstep easing for a gentle acceleration in and out of the fade.
  const ease = (t: number) => {
    const x = clamp(t)
    return x * x * x * (x * (x * 6 - 15) + 10)
  }

  // Clean cross-dissolve: the lead line leaves over the first half,
  // the follow-up arrives over the second half, with a brief overlap.
  const firstFade = ease(1 - progress / 0.5)
  const secondFade = ease((progress - 0.42) / 0.5)

  const firstStyle = {
    opacity: firstFade,
    transform: `translateY(${(1 - firstFade) * -1.25}rem)`,
    filter: `blur(${(1 - firstFade) * 6}px)`,
    pointerEvents: firstFade < 0.5 ? ("none" as const) : ("auto" as const),
  }
  const secondStyle = {
    opacity: secondFade,
    transform: `translateY(${(1 - secondFade) * 1.25}rem)`,
    filter: `blur(${(1 - secondFade) * 6}px)`,
    pointerEvents: secondFade < 0.5 ? ("none" as const) : ("auto" as const),
  }

  return (
    <div ref={wrapperRef} className="relative h-[240vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              About me<span className="text-primary">.</span>
            </h2>
            <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
          </div>

          {/* Both blocks share the same box; they crossfade in place as you scroll. */}
          <div className="relative mx-auto min-h-[16rem] max-w-2xl">
            <div className="absolute inset-0 flex flex-col justify-center will-change-[opacity,transform]" style={firstStyle}>
              <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
                I&apos;m a tech journalist turned technical writer — and honestly,{" "}
                <span className="font-bold" style={{ color: "#cf52c7" }}>
                  the job hasn&apos;t changed that much.
                </span>
              </p>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center will-change-[opacity,transform]" style={secondStyle}>
              <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
                I still write about technology.{" "}
                <span className="font-bold text-white">Engineering. Software.</span>
              </p>
              <p className="mt-6 text-lg font-medium leading-relaxed text-white/75 text-pretty md:text-xl">
                In plain words, while keeping it accurate — and clear enough that you don&apos;t need a PhD or a CS
                degree to follow along.
              </p>
            </div>
          </div>

          {/* Slim progress track that fills as the two lines exchange. */}
          <div className="mx-auto mt-14 h-px w-40 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${clamp(progress) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
