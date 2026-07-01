"use client"

export function OriginSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 pt-[20px]">
      {/* Gradient orbs removed for consistent background */}

      <div className="mx-auto max-w-6xl w-full">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Text on the left */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1 animate-slide-in-left">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary md:text-base">
              I was born in Spain. {"·"} But I spent almost a decade living
            </p>

            <h2 className="text-foreground">
              <span className="block text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
                abroad in
              </span>
              <span className="block text-6xl font-extrabold uppercase tracking-tighter leading-[0.95] md:text-7xl lg:text-8xl xl:text-9xl">
                3 countries<span className="text-primary">.</span>
              </span>
            </h2>
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
