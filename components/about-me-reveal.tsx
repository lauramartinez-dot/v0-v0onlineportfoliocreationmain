import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutMeReveal() {
  return (
    <div className="px-4 pb-10 pt-28 md:pb-12 md:pt-32">
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

        <ScrollReveal className="mt-16 md:mt-20">
          <div aria-hidden="true" className="h-20 w-px bg-gradient-to-b from-transparent to-primary md:h-28" />
        </ScrollReveal>

        <div className="mt-10 flex flex-col gap-10 md:mt-12 md:gap-14">
          <ScrollReveal>
            <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
              I still write about technology — engineering and software.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-3xl font-semibold leading-[1.15] tracking-tight text-white/50 text-balance md:text-4xl lg:text-[2.75rem]">
              In plain words, accurate and clear enough that you don&apos;t need a PhD or a CS degree to{" "}
              <span className="text-white">follow along.</span>
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300} className="mt-16 md:mt-20">
          <div aria-hidden="true" className="h-20 w-px bg-gradient-to-b from-primary to-transparent md:h-28" />
        </ScrollReveal>
      </div>
    </div>
  )
}
