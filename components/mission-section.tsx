"use client"

import Image from "next/image"
import { Rocket } from "lucide-react"

export function MissionSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Centered container for image */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Image - centered and large */}
          <div className="relative w-full lg:w-[70%] mx-auto min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/team-collaboration.jpeg"
              alt="Laura collaborating with team members at an outdoor workspace"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mission content - overlapping the image from the right */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] mt-8 lg:mt-0">
            <div className="space-y-6 max-w-xl ml-auto">
              {/* Bridging sentence */}
              <p className="text-[21px] text-foreground/70 leading-relaxed bg-background/80 backdrop-blur-sm rounded-lg p-4 lg:p-0 lg:bg-transparent lg:backdrop-blur-none">
                Over the past 15 years I&apos;ve changed industries, roles, and languages, but my mission has remained the same:
              </p>

              {/* Mission box */}
              <div className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-purple-950/90 via-purple-900/85 to-pink-950/90 shadow-2xl shadow-primary/30 backdrop-blur-xl ring-1 ring-white/10 px-6 pt-4 pb-4">
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
      </div>
    </section>
  )
}
