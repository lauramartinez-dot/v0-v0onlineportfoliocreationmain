"use client"

import Image from "next/image"

export function OriginSection() {
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
          <div className="order-1 animate-slide-in-left">
            <div className="relative">
              {/* Large blurred circle - bottom left */}
              <div className="absolute -bottom-8 -left-12 h-40 w-40 md:h-52 md:w-52 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl" />
              {/* Small blurred circle - top right */}
              <div className="absolute -top-6 -right-6 h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-bl from-pink-500/25 to-purple-500/25 blur-2xl" />
              {/* Small accent circle - bottom right */}
              <div className="absolute bottom-4 -right-4 h-16 w-16 md:h-20 md:w-20 rounded-full bg-pink-500/20 blur-xl" />

              {/* Profile image */}
              <div className="relative h-72 w-72 md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem] rounded-full overflow-hidden ring-2 ring-border shadow-xl hover:shadow-2xl hover:ring-primary/30 transition-all duration-300 z-10">
                <Image
                  src="/main-headshot.jpg"
                  alt="Laura Martínez - Senior Technical Writer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left order-2 animate-slide-in-right">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              I&apos;m originally<br />from Spain.
            </h2>

            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/70 leading-relaxed">
              Although I&apos;ve lived and worked in<br />
              <span className="text-primary font-semibold">4 countries</span> over the past <span className="text-primary font-semibold">10 years</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
