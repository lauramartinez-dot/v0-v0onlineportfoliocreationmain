import { AboutMeReveal } from "@/components/about-me-reveal"
import { FlipCard } from "@/components/flip-card"

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
          <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-16 md:grid-cols-2">
            <FlipCard
              era="6 years ago"
              role="Tech journalist"
              imageSrc="/then-airplane-article.png"
              imageAlt="A passenger airplane flying low over a city skyline and river"
            >
              <a
                href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold leading-snug tracking-tight text-white text-balance underline-offset-4 hover:underline md:text-3xl"
              >
                &ldquo;How do planes stay in the air?&rdquo;
              </a>
            </FlipCard>

            <FlipCard
              era="Now"
              role="Technical writer"
              imageSrc="/now-tech-docs.png"
              imageAlt="A modern software API documentation page on a dark themed screen"
            >
              <p className="text-2xl font-semibold leading-snug tracking-tight text-white text-balance md:text-3xl">
                &ldquo;What&apos;s an API — and how does it get these two apps talking to each other?&rdquo;
              </p>
            </FlipCard>
          </div>
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
      <section className="relative px-4 py-32">
        <div className="relative mx-auto max-w-7xl">
          <div className="surface-card rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
              <div className="flex flex-col gap-12">
                <p className="text-2xl font-semibold leading-snug text-white text-balance md:text-3xl">
                  I&apos;m also a globetrotter. By my 30s, I&apos;d lived in four countries and become fluent in three
                  languages.
                </p>

                <div className="flex flex-col gap-5">
                  <h3 className="border-b border-white/10 pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                    Languages
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {languages.map((language) => (
                      <li
                        key={language.name}
                        className="surface-card flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                      >
                        <span className="text-xl font-semibold tracking-tight text-white">{language.name}</span>
                        <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary ring-1 ring-primary/30">
                          {language.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative mx-auto aspect-[71/100] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  src="/europe-pins.html"
                  title="Animated map of Europe with pins on the four countries I've lived in"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
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
