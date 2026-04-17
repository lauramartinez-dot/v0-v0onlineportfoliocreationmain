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
        <div className="max-w-5xl text-left space-y-8">
          <div className="text-[26.25px] text-foreground/90 leading-relaxed font-normal space-y-8">
            <p className="font-medium">I&apos;m the writer you hire when your software company:</p>
            <ul className="space-y-3 text-foreground/80 pl-6 md:pl-8">
              <li className="flex items-center gap-3 text-[42px]">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                starts growing fast
              </li>
              <li className="flex items-center gap-3 text-[42px]">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                goes from ~100 to 1,000+ people
              </li>
              <li className="flex items-center gap-3 text-[42px]">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                expands into new countries
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <p className="text-[26.25px] text-foreground/70 leading-relaxed">
              Right when documentation stops being about adding more now, {" "} and becomes about
              <span className="relative group/tooltip cursor-pointer text-primary font-semibold bg-primary/15 px-2 py-1 rounded-md border-b-2 border-dashed border-primary/40 hover:bg-primary/25 hover:border-primary transition-all duration-200">
                making sure you can add a lot more later
                <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] rounded-full border border-primary/50 text-primary/70 ml-1 group-hover/tooltip:border-primary group-hover/tooltip:text-primary transition-all">?</span>
                <span className="absolute left-0 top-full mt-2 px-4 py-3 bg-background border border-primary/30 rounded-lg text-sm text-foreground/90 whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl z-50">
                  Way more pages.<br />
                  With more visuals.<br />
                  For more audiences.<br />
                  In more languages.
                </span>
              </span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
