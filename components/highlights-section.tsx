import { AboutMeReveal } from "@/components/about-me-reveal"
import { ArticleCard } from "@/components/article-card"
import { EuropePinsMap } from "@/components/europe-pins-map"
import { StaggerReveal } from "@/components/stagger-reveal"

const languages = [
    { name: "Spanish", code: "es", level: "Native" },
    { name: "English", code: "gb", level: "Bilingual" },
    { name: "German", code: "de", level: "B2" },
]

export function HighlightsSection() {
  return (
    <>
      {/* 1. About me - intro + supporting statement */}
      <section id="top-differentiators" className="relative scroll-mt-32">
        <AboutMeReveal />
      </section>

      {/* 2. Then & now - the two eras as a contrast pair (plain-background breather) */}
      <section className="relative px-4 pb-32 pt-4">
        <div className="mx-auto max-w-5xl">
          <StaggerReveal
            className="grid grid-cols-1 items-stretch gap-x-8 gap-y-16 md:grid-cols-2"
            itemClassName="flex [&>*]:flex-1"
            step={350}
          >
            <ArticleCard
              era="6 years ago"
              role="Tech journalist"
              imageSrc="/then-airplane-article.png"
              imageAlt="Magazine article titled How do planes stay in the air?"
              href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire"
            />

            <ArticleCard
              era="Now"
              role="Technical writer"
              imageSrc="/now-tech-docs.png"
              imageAlt="Documentation page titled What is an API? on a laptop screen"
            />
          </StaggerReveal>
        </div>
      </section>

      {/* 3. The mission - immersive, full-height cosmic background with parallax */}
      <section
        id="why"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 scroll-mt-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/cosmic-inflation-universe-expansion.jpg')" }}
          aria-hidden="true"
        />
        {/* Darken for legibility */}
        <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
        {/* Top/bottom fades blend the section into the neighbours for a seamless scroll */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto max-w-4xl py-32 text-center">
          <p className="mx-auto max-w-4xl text-2xl font-medium tracking-tight leading-snug text-white text-pretty md:text-3xl lg:text-4xl">
            The mission hasn&apos;t changed:{" "}
            <span className="font-bold text-primary">
              democratising access to technical knowledge.
            </span>{" "}
            The more people understand technology, use it, and help build it, the further we can push the frontiers of
            knowledge.
          </p>
        </div>
      </section>

      {/* 4. Global - globetrotter, on the plain section background */}
      <section className="relative overflow-hidden px-4">
        <div
  className="pointer-events-none absolute inset-y-0 left-1/2 aspect-[71/100] h-full -translate-x-1/2"
  style={{
    maskImage:
      "linear-gradient(to bottom, transparent 0%, #000 18%, #000 78%, transparent 100%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0%, #000 18%, #000 78%, transparent 100%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
    maskComposite: "intersect",
    WebkitMaskComposite: "source-in",
  }}
  aria-hidden="true"
  >
          <EuropePinsMap />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[110vh] max-w-7xl flex-col justify-between gap-16 py-24 md:py-32">
          <div className="max-w-md self-start rounded-3xl border border-white/10 bg-background/70 p-8 shadow-2xl backdrop-blur-md md:p-10">
            <p className="text-2xl font-semibold leading-snug text-white text-balance md:text-3xl">
              I&apos;m also a globetrotter. By my 30s, I&apos;d lived in four countries and become fluent in three
              languages.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col gap-6 self-end rounded-3xl border border-primary/40 bg-background/80 p-8 shadow-2xl shadow-primary/10 backdrop-blur-md md:p-10">
            <h3 className="text-2xl font-semibold leading-snug text-white md:text-3xl">Languages</h3>
            <ul className="flex flex-col">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-baseline justify-between gap-6 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span className="text-xl font-semibold text-white md:text-2xl">{language.name}</span>
                  <span className="text-lg font-medium text-primary md:text-xl">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Startup DNA - immersive, full-height office background with parallax */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/modern-tech-office-workspace-with-beer-tap-dublin.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/82" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto max-w-4xl py-32 text-center">
          <p className="mx-auto text-2xl font-medium tracking-tight leading-snug text-white text-pretty md:text-3xl lg:text-4xl">
            Most of my career has been at startups — including{" "}
            <span className="font-bold text-primary">
              Personio, one of Europe&apos;s unicorns.
            </span>{" "}
            So I&apos;m drawn to experimenting, trying new tools, and learning by doing.
          </p>
        </div>
      </section>

    </>
  )
}
