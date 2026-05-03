"use client"

export function OriginSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24">
      <div className="absolute inset-0 -z-10">
        {/* Purple/pink gradient orb - top right */}
        <div className="absolute -top-20 -right-20 h-[700px] w-[700px] rounded-full bg-gradient-to-bl from-purple-500/35 via-pink-500/25 to-transparent blur-3xl" />
        {/* Pink gradient orb - bottom left */}
        <div className="absolute -bottom-32 -left-32 h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-pink-500/35 via-purple-500/25 to-transparent blur-3xl" />
        {/* Center subtle accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-500/35 to-pink-500/35 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Text on the left */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1 animate-slide-in-left">
            <p className="mb-1 text-[21px] md:text-xl lg:text-2xl text-foreground/70">
              I&apos;m originally from Spain.
            </p>
            <p className="mb-2 text-lg md:text-xl lg:text-2xl text-foreground/70">
              And yet I&apos;ve lived and worked accross
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-primary">4 countries</span><span className="text-primary">.</span>
            </h2>

            <p className="mt-3 text-lg md:text-xl lg:text-2xl text-foreground/70">
              over a decade
            </p>
          </div>

          {/* Animation on the right */}
          <div className="order-1 md:order-2 animate-slide-in-right shrink-0">
            <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] relative overflow-hidden">
              <iframe
                src="/germany-expansion-animation.html"
                className="border-0 absolute top-1/2 left-1/2 w-[780px] h-[780px] origin-center scale-[0.45] md:scale-[0.58] lg:scale-[0.71] -translate-x-1/2 -translate-y-1/2"
                title="Germany Global Expansion Animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
