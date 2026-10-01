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
  <div className="flex items-center justify-center gap-4">
  <span className="h-px w-10 bg-primary/60 md:w-16" aria-hidden="true" />
  <h3 className="text-balance text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
  What sets me apart<span className="text-primary">.</span>
  </h3>
  <span className="h-px w-10 bg-primary/60 md:w-16" aria-hidden="true" />
  </div>
          <AboutMeBoxes />
        </div>
      </section>
    </>
  )
}
