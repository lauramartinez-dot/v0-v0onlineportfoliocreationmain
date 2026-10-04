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
        <div className="mx-auto flex max-w-[92rem] flex-col gap-8">
          <div className="flex flex-col items-center gap-5 text-center">
          <h3 className="mx-auto max-w-4xl text-balance text-3xl font-medium leading-snug tracking-tight text-primary md:text-4xl">
            I am also:
        </h3>
        <div className="h-1 w-10 rounded-full bg-primary/70" aria-hidden="true" />
          </div>
          <AboutMeBoxes />
        </div>
      </section>
    </>
  )
}
