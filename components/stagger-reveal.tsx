"use client"

import { Children, useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

const START = 0.95
const END = 0.55

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.style.opacity = "1"
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height / 2
      const raw = (vh * START - center) / (vh * (START - END))
      const progress = easeOut(Math.min(1, Math.max(0, raw)))
      node.style.opacity = String(progress)
      node.style.transform = `translateY(${(1 - progress) * 32}px)`
      node.style.filter = progress < 1 ? `blur(${(1 - progress) * 6}px)` : "none"
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    // Capture phase so scrolling inside a pop-up (not just the window) also drives the reveal.
    document.addEventListener("scroll", onScroll, { passive: true, capture: true })
    window.addEventListener("resize", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll, { capture: true })
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} style={{ opacity: 0 }} className={cn("will-change-[opacity,transform]", className)}>
      {children}
    </div>
  )
}

export function StaggerReveal({
  children,
  className,
  itemClassName,
}: {
  children: ReactNode
  className?: string
  itemClassName?: string
  step?: number
}) {
  return (
    <div className={className}>
      {Children.toArray(children).map((child, index) => (
        <RevealItem key={index} className={itemClassName}>
          {child}
        </RevealItem>
      ))}
    </div>
  )
}
