"use client"

import { ChevronDown } from "lucide-react"

export function ScrollTransitionSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-purple-500/20 to-pink-500/20">
        {/* Additional gradient orbs for depth */}
        <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-pink-500/40 via-purple-500/30 to-transparent blur-3xl" />
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
      </div>

      <div className="flex flex-col items-center gap-0.5">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="h-5 w-5 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
