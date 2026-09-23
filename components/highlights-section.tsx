import Image from "next/image"
import { Plane, Code2, Languages, Rocket } from "lucide-react"

const journey = ["Spain", "France · Erasmus", "Spain", "Ireland", "Germany", "Spain"]

export function HighlightsSection() {
  return (
    <>
      {/* 1. What I do - immersive, full-height photographic background with parallax */}
      <section
        id="top-differentiators"
        className="relative flex min-h-screen items-center overflow-hidden px-4 scroll-mt-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/what-i-do-background.jpg')" }}
          aria-hidden="true"
        />
        {/* Darken for legibility, with the left kept heavier so the copy stays crisp */}
        <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background from-10% via-background/70 via-55% to-transparent"
          aria-hidden="true"
        />
        {/* Top/bottom fades blend the section into the neighbours for a seamless scroll */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-32 md:py-40">
          <div className="mb-14">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              What I do<span className="text-primary">.</span>
            </h2>
            <div className="mt-8 h-1.5 w-12 rounded-full bg-primary" />
          </div>

          {/* Lead line - hero-adjacent scale so it leads the block */}
          <p className="max-w-4xl text-3xl font-semibold tracking-tight leading-[1.15] text-white text-balance md:text-4xl lg:text-[2.75rem]">
            I&apos;m a tech journalist turned technical writer — and honestly,{" "}
            <span className="font-bold" style={{ color: "#cf52c7" }}>
              the job hasn&apos;t changed that much.
            </span>
          </p>

          <div className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-white/75 text-pretty md:text-xl">
            <p>I still write about technology.</p>
            <p className="mt-2 font-semibold text-white">Engineering.</p>
            <p className="mt-2 font-semibold text-white">Software.</p>
            <p className="mt-4">
              In plain words, while keeping it accurate — and clear enough that you don&apos;t need a PhD or a CS degree
              to follow along.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Then & now - the two eras as a contrast pair (plain-background breather) */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Then &amp; now<span className="text-primary">.</span>
            </h2>
            <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
            {/* Then */}
            <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10">
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
            </div>

            {/* Now */}
            <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-primary/30 bg-primary/[0.06] p-10">
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
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            The mission<span className="text-primary">.</span>
          </h2>
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
          <p className="mx-auto mt-10 max-w-4xl text-2xl font-medium tracking-tight leading-snug text-white text-pretty md:text-3xl lg:text-4xl">
            Same as always:{" "}
            <span className="font-bold" style={{ color: "#cf52c7" }}>
              democratising access to technical knowledge.
            </span>{" "}
            The more people understand technology, use it, and help build it, the further we can push the frontiers of
            knowledge.
          </p>
        </div>
      </section>

      {/* 4. Around the world - globetrotter over a travel backdrop, content in a glass panel */}
      <section className="relative overflow-hidden px-4 py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/european-cities-travel-expat.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Around the world<span className="text-primary">.</span>
            </h2>
            <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
          </div>

          {/* Glass panel keeps the copy crisp over the photo */}
          <div className="rounded-3xl border border-white/10 bg-background/60 p-8 backdrop-blur-md md:p-12">
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

              <div className="relative mx-auto aspect-[71/100] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white">
                <Image
                  src="/three-languages-illustration-centered.png"
                  alt="Illustration of a person who speaks German, Spanish, and English"
                  fill
                  className="object-contain"
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
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Rocket className="h-7 w-7" />
          </span>
          <h2 className="mt-8 text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Startup DNA<span className="text-primary">.</span>
          </h2>
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
          <p className="mx-auto mt-10 text-2xl font-medium tracking-tight leading-snug text-white text-pretty md:text-3xl lg:text-4xl">
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
