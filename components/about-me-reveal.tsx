"use client"

import { useEffect, useRef, useState } from "react"

export function AboutMeReveal() {
  const [revealed, setRevealed] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      // Only fire once the block has scrolled well up into the viewport,
      // so the fade-in is clearly perceived instead of firing on entry.
      { threshold: 0, rootMargin: "0px 0px -45% 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex min-h-screen flex-col justify-center px-4 py-32">
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

          {/* Second block reveals as it scrolls into view, set lower so it appears later */}
          <div
            ref={ref}
            className={`mt-[45vh] transition-all duration-700 ease-out ${
              revealed ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
            }`}
          >
            <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
              I still write about technology.{" "}
              <span className="font-bold text-white">Engineering. Software.</span>
            </p>

            <p
              className={`mt-6 text-lg font-medium leading-relaxed text-white/75 text-pretty transition-all duration-700 ease-out md:text-xl ${
                revealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: revealed ? "150ms" : "0ms" }}
            >
              In plain words, while keeping it accurate — and clear enough that you don&apos;t need a PhD or a CS degree
              to follow along.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
