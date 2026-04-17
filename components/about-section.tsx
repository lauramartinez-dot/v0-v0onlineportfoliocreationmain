"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden min-h-[400px]">
      {/* Background - Globe wireframe positioned on right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
        <Image
          src="/globe-purple.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-[1]" />

      <div className="mx-auto max-w-7xl relative z-10 flex justify-center md:justify-start md:pl-[8%]">
        <div className="max-w-lg text-left space-y-6">
          <div className="text-lg md:text-xl text-foreground/80 leading-relaxed font-normal space-y-4">
            <p>I&apos;m the writer you hire when your software company:</p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary/60" />
                starts growing fast
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary/60" />
                goes from ~100 to 1,000+ people
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary/60" />
                expands into new countries
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-md">
              Right when documentation stops being about adding more now, and becomes about{" "}
              <span className="relative group/tooltip cursor-pointer text-foreground font-semibold bg-primary/15 px-2 py-1 rounded-md border-b-2 border-dashed border-primary/40 hover:bg-primary/25 hover:border-primary transition-all duration-200">
                making sure you can add a lot more later
                <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] rounded-full border border-primary/50 text-primary/70 ml-1 group-hover/tooltip:border-primary group-hover/tooltip:text-primary transition-all">?</span>
                <span className="absolute left-0 top-full mt-2 px-4 py-3 bg-background border border-primary/30 rounded-lg text-sm text-foreground/90 whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl z-50">
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
