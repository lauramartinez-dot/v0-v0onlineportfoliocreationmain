"use client"

import { useEffect, useRef, useState } from "react"

/**
 * A right-side image panel with a genuine scroll-driven parallax.
 * Unlike `background-attachment: fixed`, this keeps the image confined to the
 * right side (so the subject stays visible) while still moving on scroll.
 */
export function ParallaxPanel({ image }: { image: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the panel is centered in the viewport, negative/positive as it scrolls past
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh
      setOffset(progress * -260) // px of travel
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-y-0 right-0 w-full overflow-hidden md:w-1/2 lg:w-[46%]"
      aria-hidden="true"
    >
      {/* Fit the FULL image width into the panel (not `cover`) so the whole scene -
          the woman AND the code screen - shows at a smaller scale, as a band that
          blends into the dark section background above and below. Parallax moves it on scroll. */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "112% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      />
      {/* Soft overlay for legibility */}
      <div className="absolute inset-0 bg-background/30" />
      {/* Left-edge fade blends the image into the page background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent to-30%" />
    </div>
  )
}
