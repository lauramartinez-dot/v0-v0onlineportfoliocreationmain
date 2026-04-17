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

          {/* Mission box - polished grey glass, overlapping in bottom right corner */}
          <div className="relative lg:absolute lg:right-8 lg:bottom-8 w-full lg:w-[48%] mt-6 lg:mt-0 z-10">
            <div className="relative rounded-2xl border border-purple-500/10 bg-gradient-to-br from-slate-800/90 via-purple-900/40 to-slate-800/90 shadow-2xl shadow-black/50 backdrop-blur-2xl px-7 pt-8 pb-6">
              {/* Subtle glass effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.05] via-transparent to-white/[0.03] pointer-events-none" />
              {/* Inner highlight */}
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
              {/* Bottom shadow for depth */}
              <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              
              {/* Mission badge */}
              <div className="absolute -top-4 left-7 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-pink-500 shadow-lg shadow-primary/40 ring-2 ring-background">
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">15-Year-Long Mission</span>
              </div>
              
              <p className="text-[19px] leading-relaxed text-white font-medium text-left mt-4 mb-4 relative z-10">
                I help all humans — with an extra focus on non-technical people and women — get more comfortable using new technology and software because <span className="text-white font-semibold bg-primary/25 px-1.5 py-0.5 rounded border-b border-primary/50">over 90% of European jobs now require digital skills</span>, yet nearly 1 in 3 Europeans still doesn&apos;t have them.
              </p>
              <p className="text-sm text-white/40 italic text-right relative z-10">
                — Eurostat · Regional Yearbook, European Commission, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
