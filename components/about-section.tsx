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
          {/* Animation on the left */}
          <div className="order-1 animate-slide-in-left">
            <div className="relative">
              {/* Large blurred circle - bottom left */}
              <div className="absolute -bottom-8 -left-12 h-40 w-40 md:h-52 md:w-52 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl" />
              {/* Small blurred circle - top right */}
              <div className="absolute -top-6 -right-6 h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-bl from-pink-500/25 to-purple-500/25 blur-2xl" />
              {/* Small accent circle - bottom right */}
              <div className="absolute bottom-4 -right-4 h-16 w-16 md:h-20 md:w-20 rounded-full bg-pink-500/20 blur-xl" />

              {/* Germany expansion animation */}
              <div className="relative h-72 w-72 md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem] rounded-full overflow-hidden ring-2 ring-border shadow-xl hover:shadow-2xl hover:ring-primary/30 transition-all duration-300 z-10 bg-background">
                <iframe
                  src="/germany-expansion-animation.html"
                  className="absolute inset-0 w-full h-full border-0 scale-110"
                  title="Germany Global Expansion Animation"
                />
              </div>
            </div>
          </div>

          {/* Text on the right */}
          <div className="flex-1 text-center md:text-left order-2 animate-slide-in-right">
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
        </div>
      </div>
    </section>
  )
}
