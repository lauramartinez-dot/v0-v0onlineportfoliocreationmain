"use client"

import { ChevronDown, MapPin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-48 pb-6 md:pt-56"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_30%_40%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="animate-slide-in-left shrink-0">
            <div className="relative h-60 w-60 overflow-hidden rounded-full p-1.5 surface-card md:h-72 md:w-72 lg:h-80 lg:w-80">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/main-headshot.jpg"
                  alt="Laura Martínez - Senior Technical Writer"
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 240px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 animate-slide-in-right text-center md:text-left">
            <p className="mb-5 text-lg font-medium tracking-tight text-primary md:text-xl">
              Hi there! I&apos;m Laura Martínez.
            </p>

            <h1 className="mb-8 text-foreground">
              <span className="mb-3 block text-2xl font-bold uppercase tracking-tight text-muted-foreground md:text-3xl">
                A global
              </span>
              <span className="block text-6xl font-extrabold uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                Senior
                <br />
                Technical
                <br />
                Writer
              </span>
            </h1>

            <div className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium backdrop-blur-sm md:text-base">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-foreground">Based in Barcelona.</span>
                <span className="text-muted-foreground">Working globally.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 flex flex-col items-center gap-1 text-muted-foreground/70">
        <span className="text-sm">Scroll to explore</span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  )
}
