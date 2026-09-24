import Image from "next/image"
import { Plane, Code2, Languages, ArrowUpRight } from "lucide-react"
import { AboutMeReveal } from "@/components/about-me-reveal"

const journey = ["Spain", "France · Erasmus", "Spain", "Ireland", "Germany", "Spain"]

export function HighlightsSection() {
  return (
    <>
      {/* 1. About me - plain static intro */}
      <section id="top-differentiators" className="relative scroll-mt-32">
        <AboutMeReveal />
      </section>

      {/* 1b. Still writing - the big statement comes second */}
      <section className="relative px-4 pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-medium leading-relaxed text-white/70 text-pretty md:text-xl">
            I still write about technology.{" "}
            <span className="font-semibold text-white">Engineering. Software.</span>
          </p>
          <p className="mt-6 text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
            In plain words, while keeping it accurate — and clear enough that you don&apos;t need a PhD or a CS degree to
            follow along.
          </p>
        </div>
      </section>

      {/* 2. Then & now - the two eras as a contrast pair (plain-background breather) */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
            {/* Then - links to the live published article */}
            <a
              href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src="/then-airplane-article.png"
                  alt="A passenger airplane flying low over a city skyline and river"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f131c] via-[#0f131c]/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-black/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/20 backdrop-blur-md">
                  6 years ago
                </span>
              </div>
              <div className="flex flex-col gap-6 p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Plane className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                    Then · Tech journalist
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
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/30 bg-primary/[0.06]">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src="/now-tech-docs.png"
                  alt="A modern software API documentation page on a dark themed screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f1c] via-[#1a0f1c]/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground backdrop-blur-md">
                  Now
                </span>
              </div>
              <div className="flex flex-col gap-6 p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Code2 className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                    Now · Technical writer
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
            Same as always:{" "}
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
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              <div>
                <p className="text-2xl font-semibold leading-snug text-white text-balance md:text-3xl">
                  I&apos;m also a globetrotter. By my 30s, I&apos;d lived in four countries and become fluent in three
                  languages.
                </p>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-6">
                    <div className="text-4xl font-extrabold text-primary md:text-5xl">4</div>
                    <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                      Countries
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-6">
                    <div className="flex items-center gap-3 text-4xl font-extrabold text-primary md:text-5xl">
                      <Languages className="h-8 w-8" />3
                    </div>
                    <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                      Languages
                    </div>
                  </div>
                </div>

                {/* The path */}
                <div className="mt-10">
                  <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/45">The path</div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                    {journey.map((stop, index) => (
                      <div key={`${stop}-${index}`} className="flex items-center gap-2">
                        <span className="rounded-full border border-[#472444] bg-card/40 px-4 py-2 text-sm font-medium text-white/85">
                          {stop}
                        </span>
                        {index < journey.length - 1 && (
                          <span className="text-primary" aria-hidden="true">
                            →
                          </span>
                        )}
                      </div>
                    ))}
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
