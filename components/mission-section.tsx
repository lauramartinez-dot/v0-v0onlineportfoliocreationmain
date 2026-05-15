"use client"

import { Rocket } from "lucide-react"

export function MissionSection() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Intro text - similar to top differentiators */}
        <div className="text-center mb-12">
          <p className="text-[21px] text-foreground/90 leading-relaxed">
            And a 15-year long mission:
          </p>
        </div>

        {/* Mission box - centered */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-primary/20 bg-card shadow-lg shadow-purple-900/20 backdrop-blur-xl px-7 pt-8 pb-6">
            {/* Soft inner glow */}
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            
            {/* Mission badge */}
            <div className="absolute -top-4 left-7 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-500/30 ring-2 ring-background">
              <Rocket className="w-4 h-4 text-white" />
              <span className="text-[13px] font-bold uppercase tracking-widest text-white">15-Year-Long Mission</span>
            </div>
            
            <p className="text-[19px] leading-[1.8] text-foreground/90 text-left mt-5 mb-5 relative z-10">
              By helping companies build better software documentation, I ultimately want to help all humans — especially non-technical people and women — become more confident and capable with rapidly evolving technology, because <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md border border-primary/20">over 90% of European jobs now require digital skills</span>, yet nearly 1 in 3 Europeans still doesn&apos;t have them.
            </p>
            <p className="text-sm text-foreground/40 italic text-right relative z-10 mt-2">
              — Eurostat · Regional Yearbook, European Commission, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
