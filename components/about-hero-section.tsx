"use client"

export function AboutHeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 pt-[24px] overflow-hidden">
      {/* Gradient orbs removed for consistent background */}

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
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary md:text-base">
              Now I&apos;m that technical writer you bring in early, as soon as your company:
            </p>

            {/* Accent bar */}
            <div className="mx-auto md:mx-0 mb-5 h-1.5 w-12 rounded-full bg-primary" />

            <ul className="space-y-3 mb-6">
              <li className="flex items-center justify-center gap-3 text-4xl font-extrabold uppercase tracking-tighter leading-[0.95] text-foreground md:justify-start md:text-5xl lg:text-6xl">
                <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-primary" />
                starts growing fast
              </li>
              <li className="flex items-center justify-center gap-3 text-4xl font-extrabold uppercase tracking-tighter leading-[0.95] text-foreground md:justify-start md:text-5xl lg:text-6xl">
                <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-primary" />
                goes from ~100 to 1,000+ people
              </li>
              <li className="flex items-center justify-center gap-3 text-4xl font-extrabold uppercase tracking-tighter leading-[0.95] text-foreground md:justify-start md:text-5xl lg:text-6xl">
                <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-primary" />
                expands into new countries
              </li>
            </ul>

          
          </div>
        </div>
      </div>
    </section>
  )
}
