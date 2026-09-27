import Image from "next/image"
import { Plane, Code2, ArrowUpRight } from "lucide-react"
import { AboutMeReveal } from "@/components/about-me-reveal"

const countries = [
  { name: "Spain", code: "es" },
  { name: "France", code: "fr" },
  { name: "Ireland", code: "ie" },
  { name: "Germany", code: "de" },
]

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
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
            {/* Then - links to the live published article */}
            <a
              href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire"
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/then-airplane-article.png"
                  alt="A passenger airplane flying low over a city skyline and river"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f131c] via-[#0f131c]/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-background/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                  6 years ago
                </span>
              </div>
              <div className="flex flex-col gap-6 p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Plane className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                    Tech journalist
                  </span>
                </div>
                <p className="text-2xl font-bold leading-snug text-white text-balance md:text-3xl">
                  &ldquo;How do planes stay in the air?&rdquo;
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors group-hover:text-white">
                  Read the live article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>

            {/* Now */}
            <div className="surface-card relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/30 bg-primary/[0.06]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/now-tech-docs.png"
                  alt="A modern software API documentation page on a dark themed screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f1c] via-[#1a0f1c]/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-background/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                  Now
                </span>
              </div>
              <div className="flex flex-col gap-6 p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Code2 className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                    Technical writer
                  </span>
                </div>
                <p className="text-2xl font-bold leading-snug text-white text-balance md:text-3xl">
                  &ldquo;What&apos;s an API — and how does it get these two apps talking to each other?&rdquo;
                </p>
              </div>
            </div>
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
            <span className="font-bold" style={{ color: "#cf52c7" }}>
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
            <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <div className="flex flex-col">
                <p className="text-2xl font-semibold leading-snug text-white text-balance md:text-3xl">
                  I&apos;m also a globetrotter. By my 30s, I&apos;d lived in four countries and become fluent in three
                  languages.
                </p>

                {/* Countries & languages */}
                <div className="mt-12 flex flex-1 flex-col justify-center gap-10">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                        Countries lived in
                      </h3>
                      <span className="text-xs font-semibold tabular-nums text-primary">04</span>
                    </div>
                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {countries.map((country) => (
                        <li
                          key={country.name}
                          className="surface-card group flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
                        >
                          <img
                            src={`https://flagcdn.com/w320/${country.code}.png`}
                            srcSet={`https://flagcdn.com/w640/${country.code}.png 2x`}
                            width={96}
                            height={64}
                            loading="lazy"
                            alt={country.name}
                            title={country.name}
                            className="aspect-[3/2] w-full max-w-24 rounded-lg object-cover shadow-lg shadow-black/40 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Languages</h3>
                      <span className="text-xs font-semibold tabular-nums text-primary">03</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {languages.map((language) => (
                        <li
                          key={language.name}
                          className="surface-card flex min-h-32 flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
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
              </div>

              <div className="relative mx-auto aspect-[71/100] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/differentiator-four-countries.png"
                  alt="Standing on a bridge in Bamberg, Germany, one of the four countries I've lived in"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
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
            <span className="font-bold" style={{ color: "#cf52c7" }}>
              Personio, one of Europe&apos;s unicorns.
            </span>{" "}
            So I&apos;m drawn to experimenting, trying new tools, and learning by doing.
          </p>
        </div>
      </section>

    </>
  )
}
