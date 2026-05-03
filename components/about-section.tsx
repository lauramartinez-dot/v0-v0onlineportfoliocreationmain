"use client"

export function AboutSection() {
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

      <div className="mx-auto max-w-5xl w-full">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Text on the left */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1 animate-slide-in-left">
            <p className="font-medium text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-6">
              I&apos;m the writer you hire when your software company:
            </p>
            
            <ul className="space-y-3 text-foreground/80 pl-2 md:pl-4 mb-8">
              <li className="flex items-center gap-3 text-lg md:text-xl lg:text-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                starts growing fast
              </li>
              <li className="flex items-center gap-3 text-lg md:text-xl lg:text-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                goes from ~100 to 1,000+ people
              </li>
              <li className="flex items-center gap-3 text-lg md:text-xl lg:text-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                expands into new countries
              </li>
            </ul>

            <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed">
              Right when documentation stops being about adding more now, and becomes about{" "}
              <span className="relative group/tooltip cursor-pointer text-primary font-semibold bg-primary/15 px-2 py-1 rounded-md hover:bg-primary/25 transition-all duration-200">
                making sure you can add a lot more later
                <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] rounded-full border border-primary/50 text-primary/70 ml-1 group-hover/tooltip:border-primary group-hover/tooltip:text-primary transition-all">?</span>
                <span className="absolute left-0 bottom-full mb-2 px-4 py-3 bg-background border border-primary/30 rounded-lg text-sm text-foreground/90 whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl z-50">
                  Way more pages.<br />
                  With more visuals.<br />
                  For more audiences.<br />
                  In more languages.
                </span>
              </span>.
            </p>
          </div>

          {/* Animation on the right - globe at natural size */}
          <div className="order-1 md:order-2 animate-slide-in-right shrink-0">
            <iframe
              src="/germany-expansion-animation.html"
              className="border-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
              title="Germany Global Expansion Animation"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
