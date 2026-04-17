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

          {/* Mission box - white glass, overlapping in bottom right corner */}
          <div className="relative lg:absolute lg:right-8 lg:bottom-8 w-full lg:w-[48%] mt-6 lg:mt-0 z-10">
            <div className="relative rounded-2xl border border-white/30 bg-white/90 shadow-2xl shadow-black/20 backdrop-blur-xl px-7 pt-8 pb-6">
              {/* Soft inner highlight */}
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
              
              {/* Mission badge */}
              <div className="absolute -top-4 left-7 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-500/30 ring-2 ring-white">
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">15-Year-Long Mission</span>
              </div>
              
              <p className="text-[19px] leading-relaxed text-slate-800 font-medium text-left mt-4 mb-4 relative z-10">
                I help all humans — with an extra focus on non-technical people and women — get more comfortable using new technology and software because <span className="text-slate-900 font-semibold bg-purple-100 px-1.5 py-0.5 rounded">over 90% of European jobs now require digital skills</span>, yet nearly 1 in 3 Europeans still doesn&apos;t have them.
              </p>
              <p className="text-sm text-slate-500 italic text-right relative z-10">
                — Eurostat · Regional Yearbook, European Commission, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
