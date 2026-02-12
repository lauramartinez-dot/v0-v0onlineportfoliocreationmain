"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function BeforeAfterSection() {
  return (
    <section className="relative px-4 py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl w-full">
        {/* Intro text */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I turn complex technology into content anyone can understand,
            whether they're into tech or not.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-2">
            For the past 15 years, this has been at the heart of every role
            I've held.
          </p>
        </div>

        {/* Before / After visual comparison */}
        <div className="flex flex-col items-center gap-12 md:gap-8">
          {/* Labels row on desktop */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center w-full gap-6">
            <h3 className="text-center text-xl font-semibold text-muted-foreground/70">
              It used to look like this...
            </h3>
            <div className="w-8" />
            <h3 className="text-center text-xl font-semibold text-primary">
              Now it looks like this.
            </h3>
          </div>

          {/* Comparison grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center w-full gap-6 md:gap-6">
            {/* Before column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-lg font-semibold text-muted-foreground/70 md:hidden">
                It used to look like this...
              </h3>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/50 shadow-sm opacity-60 grayscale-[30%]">
                  <Image
                    src="/images/before-1.jpg"
                    alt="Dense, overwhelming technical documentation with walls of jargon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/50 shadow-sm opacity-60 grayscale-[30%]">
                  <Image
                    src="/images/before-2.jpg"
                    alt="Complex system architecture diagram that is hard to follow"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Arrow divider */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </div>

            {/* Mobile arrow */}
            <div className="flex md:hidden items-center justify-center py-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 rotate-90">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </div>

            {/* After column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-lg font-semibold text-primary md:hidden">
                Now it looks like this.
              </h3>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-primary/20 shadow-md shadow-primary/5">
                  <Image
                    src="/images/after-1.jpg"
                    alt="Clean, well-structured technical documentation that is easy to read"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-primary/20 shadow-md shadow-primary/5">
                  <Image
                    src="/images/after-2.jpg"
                    alt="Clear visual guide explaining a technical concept simply"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
