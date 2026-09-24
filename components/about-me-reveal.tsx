"use client"

import { useEffect, useRef, useState } from "react"

export function AboutMeReveal() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setProgress(1)
      return
    }

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Distance scrolled through the pinned range (sticky child is one viewport tall).
      const total = rect.height - vh
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      setProgress(total > 0 ? scrolled / total : 0)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Map the middle of the pinned scroll to the reveal so it clearly animates in place.
  const smootherstep = (t: number) => {
    const x = Math.min(Math.max(t, 0), 1)
    return x * x * x * (x * (x * 6 - 15) + 10)
  }
  const reveal = smootherstep((progress - 0.15) / 0.5)

  return (
    // Tall wrapper creates the scroll distance; the child pins in place while the block reveals.
    <div ref={wrapRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center px-4 py-32">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              About me<span className="text-primary">.</span>
            </h2>
            <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
          </div>

          <div className="mx-auto max-w-2xl">
            <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
              I&apos;m a tech journalist turned technical writer — and honestly,{" "}
              <span className="font-bold" style={{ color: "#cf52c7" }}>
                the job hasn&apos;t changed that much.
              </span>
            </p>

            {/* Second block reveals in place, driven by scroll progress */}
            <div
              className="mt-10 will-change-transform"
              style={{
                opacity: reveal,
                transform: `translateY(${(1 - reveal) * 28}px)`,
                filter: `blur(${(1 - reveal) * 6}px)`,
              }}
            >
              <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
                I still write about technology.{" "}
                <span className="font-bold text-white">Engineering. Software.</span>
              </p>

              <p
                className="mt-6 text-lg font-medium leading-relaxed text-white/75 text-pretty md:text-xl"
                style={{
                  opacity: smootherstep((progress - 0.3) / 0.5),
                }}
              >
                In plain words, while keeping it accurate — and clear enough that you don&apos;t need a PhD or a CS
                degree to follow along.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
