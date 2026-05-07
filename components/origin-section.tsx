"use client"

import { useEffect, useRef, useState } from "react"

export function OriginSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress: 0 when section enters viewport, 1 when it's centered
      const sectionCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      
      // Start animation when section top enters viewport bottom
      // Complete when section is centered in viewport
      const startPoint = windowHeight // section top at viewport bottom
      const endPoint = viewportCenter - rect.height / 2 // section centered
      
      const progress = Math.max(0, Math.min(1, (startPoint - rect.top) / (startPoint - endPoint)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation values based on scroll progress
  const globeTranslateX = 50 - (scrollProgress * 50) // Starts at center (50%), moves to left (0%)
  const textOpacity = scrollProgress
  const textTranslateX = 100 - (scrollProgress * 100) // Starts off-screen right, slides in

  return (
    <section 
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center px-4 py-24 pt-[20px] min-h-[80vh]"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16 relative">
          {/* Text on the right - animated */}
          <div 
            className="flex-1 text-center md:text-left order-2 transition-none"
            style={{
              opacity: textOpacity,
              transform: `translateX(${textTranslateX}px)`,
            }}
          >
            <p className="mb-1 text-[21px] md:text-xl lg:text-2xl text-foreground/70">
              I was born in Spain.
            </p>
            <p className="mb-2 text-lg md:text-xl lg:text-2xl text-foreground/70">
              But I spent almost a decade living
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-white border-b-2 border-white pb-1">abroad in<br></br></span><span className="text-primary">4 countries</span>
            </h2>
          </div>

          {/* Globe Animation on the left - animated */}
          <div 
            className="order-1 shrink-0 transition-none"
            style={{
              transform: `translateX(${globeTranslateX}%)`,
            }}
          >
            <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] relative overflow-hidden">
              <iframe
                src="/germany-expansion-animation.html"
                className="border-0 absolute top-1/2 left-1/2 w-[780px] h-[780px] origin-center scale-[0.45] md:scale-[0.58] lg:scale-[0.71] -translate-x-1/2 -translate-y-1/2"
                title="Germany Global Expansion Animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
