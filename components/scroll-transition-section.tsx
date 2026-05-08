"use client"

import { ChevronDown } from "lucide-react"

export function ScrollTransitionSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-32 overflow-hidden my-[-40px] bg-background">
      {/* Gradient orbs removed for consistent background */}

      <div className="flex flex-col items-center gap-0.5">
        <ChevronDown className="h-5 w-5 text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
