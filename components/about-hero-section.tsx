"use client"

export function AboutHeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Purple/pink gradient orb - top left */}
        <div className="absolute -top-20 -left-20 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-purple-500/35 via-pink-500/25 to-transparent blur-3xl" />
        {/* Pink gradient orb - bottom right */}
        <div className="absolute -bottom-32 -right-32 h-[800px] w-[800px] rounded-full bg-gradient-to-tl from-pink-500/35 via-purple-500/25 to-transparent blur-3xl" />
        {/* Center subtle accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-500/35 to-pink-500/35 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Animation on the left */}
          <div className="order-1 animate-slide-in-left shrink-0">
            <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] relative overflow-hidden">
              <iframe
                src="/germany-expansion-animation.html"
                className="border-0 absolute top-1/2 left-1/2 w-[780px] h-[780px] origin-center scale-[0.45] md:scale-[0.58] lg:scale-[0.71] -translate-x-1/2 -translate-y-1/2"
                title="Germany Global Expansion Animation"
              />
            </div>
          </div>

          {/* Text on the right */}
          <div className="flex-1 text-center md:text-left order-2 animate-slide-in-right">
            <p className="text-lg md:text-xl text-foreground/60 mb-4">
              I&apos;m the writer you hire when your software company:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                starts growing fast
              </li>
              <li className="flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                goes from ~100 to 1,000+ people
              </li>
              <li className="flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                expands into new countries
              </li>
            </ul>

            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Right when documentation stops being about adding more now, and becomes about
            </p>
            <p className="mt-4">
              <span className="relative group/tooltip cursor-pointer text-primary font-bold text-2xl md:text-3xl lg:text-4xl bg-primary/15 px-3 py-2 rounded-md hover:bg-primary/25 transition-all duration-200">
                making sure you can add a lot more later
                <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] rounded-full border border-primary/50 text-primary/70 ml-2 group-hover/tooltip:border-primary group-hover/tooltip:text-primary transition-all">?</span>
                <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 bottom-full mb-2 px-4 py-3 bg-background border border-primary/30 rounded-lg text-sm text-foreground/90 whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl z-50">
                  Way more pages.<br />
                  With more visuals.<br />
                  For more audiences.<br />
                  In more languages.
                </span>
              </span><span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
