"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Track if user has scrolled at all
    let hasScrolled = false

    const handleScroll = () => {
      hasScrolled = true
    }

    window.addEventListener('scroll', handleScroll, { once: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animation if user has scrolled AND section is in view
        if (entry.isIntersecting && hasScrolled) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 px-4 min-h-[400px] mt-[60px]">
      {/* Background - Globe wireframe positioned on right, half cut off */}
      <div
        className={`absolute -right-[280px] md:-right-[350px] lg:-right-[420px] top-1/2 -translate-y-1/2 w-[750px] h-[750px] md:w-[950px] md:h-[950px] lg:w-[1150px] lg:h-[1150px] opacity-15 mt-[60px] transition-all duration-[2000ms] ease-out ${isVisible ? "translate-x-0" : "translate-x-[200px]"
          }`}
      >
        <Image
          src="/globe-purple.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 flex justify-center md:justify-start md:pl-[8%]">
        <div className="max-w-5xl text-left space-y-4">
          <div className="text-lg md:text-xl text-foreground/90 leading-snug tracking-tight space-y-3">
            <p className="font-normal">I&apos;m the writer you hire when your software company:</p>
            <ul className="space-y-1.5 text-foreground/80 pl-5 text-[26.25px]">
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary/70" />
                starts growing fast
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary/70" />
                goes from ~100 to 1,000+ people
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary/70" />
                expands into new countries
              </li>
            </ul>
          </div>

          <p className="text-[26.25px] font-semibold text-primary leading-snug tracking-tight">
            Right when documentation stops being about adding more now, <br></br>and becomes about
            <span className="relative group/tooltip cursor-pointer text-[42px] bg-primary/15 px-1.5 py-0.5 rounded-md hover:bg-primary/25 transition-all duration-200">
              making sure you can add a lot more later
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 text-[9px] rounded-full border border-primary/50 text-primary/70 ml-1 group-hover/tooltip:border-primary group-hover/tooltip:text-primary transition-all">?</span>
              <span className="absolute left-0 bottom-full mb-2 px-3 py-2 bg-background border border-primary/30 rounded-lg text-sm text-foreground/90 whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl z-50">
                Way more pages.<br />
                With more visuals.<br />
                For more audiences.<br />
                In more languages.
              </span>
            </span>.
          </p>
        </div>
      </div>
    </section>
  )
}
