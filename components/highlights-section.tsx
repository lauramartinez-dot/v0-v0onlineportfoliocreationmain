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
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary md:text-base">
              What sets me apart
            </h3>
            <p className="text-sm leading-relaxed text-foreground/60">Open any card to go deeper.</p>
          </div>
          <AboutMeBoxes />
        </div>
      </section>
    </>
  )
}
