"use client"

import Image from "next/image"
import { Rocket } from "lucide-react"

export function MissionSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Relative container for overlapping elements */}
        <div className="relative">
          {/* Image - larger, centered */}
          <div className="relative w-full min-h-[500px] lg:min-h-[580px] rounded-2xl overflow-hidden">
            <Image
              src="/team-collaboration.jpeg"
              alt="Laura collaborating with team members at an outdoor workspace"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mission box - overlapping in bottom right corner */}
          <div className="relative lg:absolute lg:right-8 lg:bottom-8 w-full lg:w-[48%] mt-6 lg:mt-0 z-10">
            <div className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-purple-950/95 via-purple-900/90 to-pink-950/95 shadow-2xl shadow-primary/30 backdrop-blur-xl ring-1 ring-white/10 px-6 pt-6 pb-5">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] pointer-events-none" />
              <div className="absolute -top-4 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/40 ring-4 ring-background">
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white">15-year-long mission/span>
              </div>
              <p className="text-[21px] leading-relaxed text-white/90 font-medium text-left mt-2 mb-4 relative z-10">
                I help all humans — with an extra focus on non-technical people and women — get more comfortable using new technology and software because <span className="text-white font-semibold bg-primary/20 px-1.5 py-0.5 rounded">over 90% of European jobs now require digital skills</span>, yet nearly 1 in 3 Europeans still doesn&apos;t have them.
              </p>
              <p className="text-sm text-white/50 italic text-right relative z-10">
                — Eurostat · Regional Yearbook, European Commission, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
