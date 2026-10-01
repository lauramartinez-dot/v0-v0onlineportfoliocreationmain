import { AboutMeHeading, AboutMeIntro } from "@/components/about-me-reveal"
import { AboutMeBoxes } from "@/components/about-me-boxes"

export function HighlightsSection() {
  return (
    <>
      {/* 1. About me - heading */}
      <section id="top-differentiators" className="relative scroll-mt-32">
        <AboutMeHeading />
        <AboutMeIntro />
      </section>

      {/* 2. About me boxes - each opens an in-depth pop-up */}
      <section id="why" className="relative px-4 pb-32 pt-4 scroll-mt-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
  <div className="flex flex-col items-center gap-4 border-t border-border/60 pt-16 text-center">
  <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
  In a nutshell
  </span>
  <h3 className="text-balance text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
  Who am I, in <span className="text-primary">4</span> words<span className="text-primary">.</span>
  </h3>
  </div>
          <AboutMeBoxes />
        </div>
      </section>
    </>
  )
}
