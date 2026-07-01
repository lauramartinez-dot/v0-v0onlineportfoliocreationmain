"use client"

import { Download, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center px-4 pt-[220px] pb-[20px] overflow-hidden mt-[25px] mb-[25px]">
      <div className="absolute inset-0 -z-10">
        {/* Purple/pink gradient orb - top left */}
        <div className="absolute -top-20 -left-20 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-purple-500/35 via-pink-500/25 to-transparent blur-3xl" />
        {/* Pink gradient orb - bottom right */}
        <div className="absolute -bottom-32 -right-32 h-[800px] w-[800px] rounded-full bg-gradient-to-tl from-pink-500/35 via-purple-500/25 to-transparent blur-3xl" />
        {/* Center subtle accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-500/35 to-pink-500/35 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl w-full">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16 mt-[40px]">
          <div className="order-1 animate-slide-in-left">
            <div className="relative">
              {/* Large blurred circle - bottom left */}
              <div className="absolute -bottom-8 -left-12 h-40 w-40 md:h-52 md:w-52 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl" />
              {/* Small blurred circle - top right */}
              <div className="absolute -top-6 -right-6 h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-bl from-pink-500/25 to-purple-500/25 blur-2xl" />
              {/* Small accent circle - bottom right */}
              <div className="absolute bottom-4 -right-4 h-16 w-16 md:h-20 md:w-20 rounded-full bg-pink-500/20 blur-xl" />

              {/* Profile image */}
              <div className="relative h-72 w-72 md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem] rounded-full overflow-hidden ring-2 ring-border shadow-xl hover:shadow-2xl hover:ring-primary/30 transition-all duration-300 z-10">
                <Image
                  src="/main-headshot.jpg"
                  alt="Laura Martínez - Senior Technical Writer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left order-2 animate-slide-in-right">
            {/* Eyebrow label */}
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary md:text-base">
              Hi there! {"·"} I&apos;m Laura Martínez.
            </p>

            {/* Accent bar */}
            <div className="mx-auto md:mx-0 mb-5 h-1.5 w-12 rounded-full bg-primary" />

            {/* Two-tier headline */}
            <h1 className="mb-10 text-foreground">
              <span className="block text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
                A global
              </span>
              <span className="block text-6xl font-extrabold uppercase tracking-tighter leading-[0.95] md:text-7xl lg:text-8xl xl:text-9xl">
                Senior Technical Writer<span className="align-baseline text-2xl md:text-3xl lg:text-4xl">{" 🌍"}</span>
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button
                size="lg"
                variant="outline"
                className="group rounded-full px-8 py-6 text-base font-medium border-2 border-purple-500/50 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="https://www.linkedin.com/in/lauramartinezmontero/" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group rounded-full px-8 py-6 text-base font-medium border-2 border-purple-500/50 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="https://drive.google.com/file/d/1jxEkccyHsJgQvur5cm6PiNiX9yS0H9bI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download CV
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-0.5 mt-32 opacity-70">
        <span className="text-sm text-muted-foreground opacity-70">Scroll to explore</span>
        <ChevronDown className="h-5 w-5 text-muted-foreground opacity-70 animate-bounce" />
      </div>
    </section >
  )
}
