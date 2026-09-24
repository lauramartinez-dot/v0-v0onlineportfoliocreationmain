export function AboutMeReveal() {
  return (
    <div className="flex min-h-[60vh] items-center px-4 py-32">
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
        </div>
      </div>
    </div>
  )
}
