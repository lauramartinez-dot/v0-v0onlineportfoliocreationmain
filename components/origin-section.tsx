"use client"

export function OriginSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Purple/pink gradient orb - top right */}
        <div className="absolute -top-20 -right-20 h-[700px] w-[700px] rounded-full bg-gradient-to-bl from-purple-500/35 via-pink-500/25 to-transparent blur-3xl" />
        {/* Pink gradient orb - bottom left */}
        <div className="absolute -bottom-32 -left-32 h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-pink-500/35 via-purple-500/25 to-transparent blur-3xl" />
        {/* Center subtle accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-500/35 to-pink-500/35 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl w-full">
        <div className="flex flex-col items-center text-center animate-slide-in-left">
          <p className="mb-2 text-lg md:text-xl lg:text-2xl text-foreground/70">
            I&apos;m originally from Spain.
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
            Although I&apos;ve lived and worked in{" "}
            <span className="text-primary">4 countries</span>
            <br />
            over the past <span className="text-primary">10 years</span>.
          </h2>
        </div>
      </div>
    </section>
  )
}
