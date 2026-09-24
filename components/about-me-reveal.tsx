export function AboutMeReveal() {
  return (
    <div className="px-4 py-28 md:py-32">
      <div className="mx-auto w-full max-w-4xl">
        <div>
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            About me<span className="text-primary">.</span>
          </h2>
          <div className="mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <p className="mt-16 text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
          I&apos;m a tech journalist turned technical writer — and honestly,{" "}
          <span className="font-bold" style={{ color: "#cf52c7" }}>
            the job hasn&apos;t changed that much.
          </span>
        </p>

        <div className="mt-20 flex flex-col gap-4">
          <p className="text-xl font-medium leading-relaxed text-white/80 md:text-2xl">
            I still write about technology — engineering and software.
          </p>
          <p className="text-xl font-medium leading-relaxed text-white/55 text-pretty md:text-2xl">
            In plain words, while keeping it accurate and clear enough that you don&apos;t need a PhD or a CS degree to
            follow along.
          </p>
        </div>
      </div>
    </div>
  )
}
