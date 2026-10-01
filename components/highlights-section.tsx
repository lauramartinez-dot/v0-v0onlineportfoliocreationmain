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
  <div className="flex flex-col items-center gap-6 text-center">
  <h2 className="text-balance text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
  What sets me apart<span className="text-primary">.</span>
  </h2>
  <div className="h-1.5 w-12 rounded-full bg-primary" aria-hidden="true" />
  <p className="text-base leading-relaxed text-foreground/60">Open any card to go deeper.</p>
  </div>
          <AboutMeBoxes />
        </div>
      </section>
    </>
  )
}
