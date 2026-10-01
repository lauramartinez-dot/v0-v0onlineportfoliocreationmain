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
        <div className="mx-auto max-w-7xl">
          <AboutMeBoxes />
        </div>
      </section>
    </>
  )
}
