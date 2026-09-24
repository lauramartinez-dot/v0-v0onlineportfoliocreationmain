"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Pinned scroll-reveal for the About me section.
 * The outer wrapper is tall; the inner content is sticky and stays fixed on
 * screen while you scroll through that height. Scroll progress crossfades the
 * lead line into the follow-up copy, so it reads as "the same block changing"
 * rather than the page moving on to new content.
 */
export function AboutMeReveal() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1))
      setProgress(total > 0 ? scrolled / total : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const clamp = (n: number) => Math.min(Math.max(n, 0), 1)
  // First block owns the first ~60% of the scroll, second block fades in after ~40%.
  const firstOpacity = clamp(1 - progress / 0.6)
  const secondOpacity = clamp((progress - 0.4) / 0.6)

  return (
    <div ref={wrapperRef} className="relative h-[220vh]">
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
            <div
              className="absolute inset-0 flex flex-col justify-center"
              style={{
                opacity: firstOpacity,
                transform: `translateY(${(1 - firstOpacity) * -1.5}rem)`,
                pointerEvents: firstOpacity < 0.5 ? "none" : "auto",
              }}
            >
              <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
                I&apos;m a tech journalist turned technical writer — and honestly,{" "}
                <span className="font-bold" style={{ color: "#cf52c7" }}>
                  the job hasn&apos;t changed that much.
                </span>
              </p>
            </div>

            <div
              className="absolute inset-0 flex flex-col justify-center"
              style={{
                opacity: secondOpacity,
                transform: `translateY(${(1 - secondOpacity) * 1.5}rem)`,
                pointerEvents: secondOpacity < 0.5 ? "none" : "auto",
              }}
            >
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
        </div>
      </div>
    </div>
  )
}
