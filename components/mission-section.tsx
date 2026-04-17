"use client"

import Image from "next/image"
import { Rocket } from "lucide-react"

export function MissionSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Relative container for overlapping elements */}
        <div className="relative">
          {/* Image - full width, same size as before */}
          <div className="relative w-full min-h-[500px] lg:min-h-[580px] rounded-2xl overflow-hidden">
            {/* Large blurred circle - bottom left */}
            <div className="absolute -bottom-8 -left-12 h-40 w-40 md:h-52 md:w-52 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl z-10" />
            {/* Small blurred circle - top right */}
            <div className="absolute -top-6 -right-6 h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-bl from-pink-500/25 to-purple-500/25 blur-2xl z-10" />
            {/* Small accent circle - bottom right */}
            <div className="absolute bottom-4 -right-4 h-16 w-16 md:h-20 md:w-20 rounded-full bg-pink-500/20 blur-xl z-10" />
            
            <Image
              src="/team-collaboration.jpeg"
              alt="Laura collaborating with team members at an outdoor workspace"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mission box - lighter style matching page design */}
          <div className="relative lg:absolute lg:-right-8 lg:-bottom-8 w-full lg:w-[45%] mt-6 lg:mt-0 z-10">
            <div className="relative rounded-2xl border border-primary/20 bg-card shadow-lg shadow-purple-900/20 backdrop-blur-xl px-7 pt-8 pb-6">
              {/* Soft inner glow */}
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              
              {/* Mission badge */}
              <div className="absolute -top-4 left-7 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-500/30 ring-2 ring-background">
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">15-Year-Long Mission</span>
              </div>
              
              <p className="text-[19px] leading-relaxed text-foreground font-medium text-left mt-4 mb-4 relative z-10">
                I help all humans — with an extra focus on non-technical people and women — get more comfortable using new technology and software because <span className="text-primary font-semibold bg-primary/10 px-1.5 py-0.5 rounded">over 90% of European jobs now require digital skills</span>, yet nearly 1 in 3 Europeans still doesn&apos;t have them.
              </p>
              <p className="text-sm text-foreground/50 italic text-right relative z-10">
                — Eurostat · Regional Yearbook, European Commission, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
