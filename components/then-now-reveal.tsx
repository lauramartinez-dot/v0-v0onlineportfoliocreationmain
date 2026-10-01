"use client"

import { useEffect, useRef, type ReactNode } from "react"

const EASE = "cubic-bezier(0.65, 0, 0.35, 1)"

// Runs via the Web Animations API so the shift can be measured from the real
// card positions: both cards start side by side in the center, then separate.
export function ThenNowReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const left = node.querySelector<HTMLElement>(".compare-left")
    const right = node.querySelector<HTMLElement>(".compare-right")
    if (!left || !right) return

    left.style.opacity = "0"
    right.style.opacity = "0"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const isSideBySide = window.matchMedia("(min-width: 768px)").matches
        left.style.opacity = "1"
        right.style.opacity = "1"

        if (!isSideBySide) {
          const rise = [
            { opacity: 0, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" },
          ]
          left.animate(rise, { duration: 800, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" })
          right.animate(rise, { duration: 800, delay: 150, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" })
          return
        }

        const distance = right.getBoundingClientRect().left - left.getBoundingClientRect().left
        const shift = Math.round(distance * 0.22)

        const keyframes = (offset: number) => [
          { opacity: 0, transform: `translateX(${offset}px) scale(0.9)`, offset: 0 },
          { opacity: 1, transform: `translateX(${offset}px) scale(0.94)`, offset: 0.35 },
          { opacity: 1, transform: `translateX(${offset}px) scale(0.94)`, offset: 0.5 },
          { opacity: 1, transform: "translateX(0) scale(1)", offset: 1 },
        ]

        left.animate(keyframes(shift), { duration: 1800, easing: EASE, fill: "backwards" })
        right.animate(keyframes(-shift), { duration: 1800, easing: EASE, fill: "backwards" })
      },
      { threshold: 0.25 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
