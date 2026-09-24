export function AboutMeReveal() {
  return (
    <div className="px-4 py-28 md:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            About me<span className="text-primary">.</span>
          </h2>
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <p className="mt-16 text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
          I&apos;m a tech journalist turned technical writer — and honestly,{" "}
          <span className="font-bold" style={{ color: "#cf52c7" }}>
            the job hasn&apos;t changed that much.
          </span>
        </p>

        <div className="mt-12 border-l-2 border-primary/60 pl-6 md:pl-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
            I still write about technology.{" "}
            <span className="text-white/70">Engineering. Software.</span>
          </p>
          <p className="mt-4 text-xl font-medium leading-relaxed text-white/85 text-pretty md:text-2xl">
            In plain words, while keeping it accurate — and clear enough that you don&apos;t need a PhD or a CS degree to
            follow along.
          </p>
        </div>
      </div>
    </div>
  )
}
