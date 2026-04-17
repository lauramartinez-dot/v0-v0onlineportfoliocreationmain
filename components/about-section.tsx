"use client"

export function AboutSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background - Global/International visual */}
      <div className="absolute inset-0 -z-10">
        {/* Large globe wireframe SVG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] opacity-[0.07]">
          <svg viewBox="0 0 400 400" className="w-full h-full text-primary">
            {/* Globe outline */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Latitude lines */}
            <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="200" cy="200" rx="180" ry="150" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {/* Longitude lines */}
            <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="200" cy="200" rx="150" ry="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {/* Center vertical line */}
            <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" />
            {/* Center horizontal line */}
            <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        
        {/* Floating connection dots representing global network */}
        <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
        <div className="absolute top-[25%] right-[25%] w-2 h-2 rounded-full bg-pink-500/30 animate-pulse delay-100" />
        <div className="absolute bottom-[30%] left-[15%] w-2 h-2 rounded-full bg-purple-500/30 animate-pulse delay-200" />
        <div className="absolute bottom-[20%] right-[20%] w-3 h-3 rounded-full bg-primary/30 animate-pulse delay-300" />
        <div className="absolute top-[40%] left-[10%] w-1.5 h-1.5 rounded-full bg-pink-500/25 animate-pulse delay-500" />
        <div className="absolute top-[35%] right-[12%] w-1.5 h-1.5 rounded-full bg-purple-500/25 animate-pulse delay-700" />
        <div className="absolute bottom-[40%] right-[30%] w-2 h-2 rounded-full bg-primary/25 animate-pulse delay-400" />
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-gradient-to-tl from-pink-500/15 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl relative z-10">
        <div className="text-center space-y-6">
          <div className="text-base md:text-lg text-foreground/70 leading-relaxed font-normal space-y-4">
            <p className="text-foreground/80">I&apos;m the writer you hire when your software company:</p>
            <ul className="space-y-1.5 text-foreground/60">
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                starts growing fast
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                goes from ~100 to 1,000+ people
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                expands into new countries
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <p className="text-sm md:text-base text-foreground/50 leading-relaxed max-w-2xl mx-auto">
              Right when documentation stops being about adding more now,
              and becomes about{" "}
              <span className="relative group/tooltip cursor-pointer text-foreground/80 font-medium bg-primary/10 px-1.5 py-0.5 rounded border-b border-dashed border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-200">
                making sure you can add a lot more later
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 text-[9px] rounded-full border border-primary/40 text-primary/60 ml-1 group-hover/tooltip:border-primary group-hover/tooltip:text-primary transition-all">?</span>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-2 bg-background border border-primary/30 rounded-lg text-xs text-foreground/80 whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl z-50">
                  Way more pages.<br />
                  With more visuals.<br />
                  For more audiences.<br />
                  In more languages.
                </span>
              </span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
