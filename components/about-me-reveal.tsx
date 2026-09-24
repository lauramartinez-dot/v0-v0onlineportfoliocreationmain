export function AboutMeReveal() {
  return (
    <div className="flex min-h-screen items-center px-4 py-32">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            About me<span className="text-primary">.</span>
          </h2>
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <div className="mx-auto max-w-2xl">
          <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
            I&apos;m a tech journalist turned technical writer — and honestly,{" "}
            <span className="font-bold" style={{ color: "#cf52c7" }}>
              the job hasn&apos;t changed that much.
            </span>
          </p>

          <p className="mt-10 text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
            I still write about technology.{" "}
            <span className="font-bold text-white">Engineering. Software.</span>
          </p>

          <p className="mt-6 text-lg font-medium leading-relaxed text-white/75 text-pretty md:text-xl">
            In plain words, while keeping it accurate — and clear enough that you don&apos;t need a PhD or a CS degree to
            follow along.
          </p>
        </div>
      </div>
    </div>
  )
}
