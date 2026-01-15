"use client"

import { ChevronDown } from "lucide-react"

export function ScrollTransitionSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-32 overflow-hidden my-[-20px]">
      <div className="absolute inset-0 -z-10">
        {/* Pink gradient orb - bottom right */}
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-pink-500/25 via-purple-500/15 to-transparent blur-3xl" />
        {/* Center subtle accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
      </div>

      <div className="flex flex-col items-center gap-0.5">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="h-5 w-5 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
