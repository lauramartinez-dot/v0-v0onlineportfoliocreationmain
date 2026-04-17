"use client"

import Image from "next/image"
import { Rocket } from "lucide-react"

export function MissionSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Image on the left - extends to the left edge */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px]">
          <Image
            src="/team-collaboration.jpeg"
            alt="Laura collaborating with team members at an outdoor workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/80 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:hidden" />
        </div>

        {/* Mission content on the right */}
        <div className="lg:w-1/2 px-6 lg:px-12 py-10 lg:py-0 flex items-center">
          <div className="space-y-6 max-w-xl">
            {/* Bridging sentence */}
            <p className="text-[21px] text-foreground/70 leading-relaxed">
              Over the past 15 years I&apos;ve changed industries, roles, and languages, but my mission has remained the same:
            </p>

            {/* Mission box */}
            <div className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-purple-950/60 via-purple-900/40 to-pink-950/50 shadow-2xl shadow-primary/20 backdrop-blur-md ring-1 ring-white/5 px-6 pt-4 pb-4">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] pointer-events-none" />
              <div className="absolute -top-4 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/40 ring-4 ring-background">
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white">Mission</span>
              </div>
              <p className="text-[21px] leading-relaxed text-white/90 font-medium text-left mt-[18px] mb-4 mx-1 relative z-10 px-[7px]">
                I help all humans — with an extra focus on non-technical people and women — get more comfortable using new technology and software because <span className="text-white font-semibold bg-primary/20 px-1.5 py-0.5 rounded">over 90% of European jobs now require digital skills</span>, yet nearly 1 in 3 Europeans still doesn&apos;t have them.
              </p>
              <p className="text-sm text-white/50 italic text-right relative z-10 px-[7px]">
                — Eurostat · Regional Yearbook, European Commission, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
