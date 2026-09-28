import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutMeReveal() {
  return (
    <div className="px-4 pb-6 pt-28 md:pb-8 md:pt-32">
      <div className="mx-auto w-full max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            About me<span className="text-primary">.</span>
          </h2>
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <p className="mt-16 text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]">
          I&apos;m a tech journalist turned technical writer — and honestly,{" "}
          <span className="font-bold text-primary">
            the job hasn&apos;t changed that much.
          </span>
        </p>

  <ScrollReveal className="mt-28 md:mt-36">
  <div aria-hidden="true" className="h-24 w-px bg-gradient-to-b from-transparent to-primary md:h-32" />
  </ScrollReveal>
  
  <ScrollReveal className="mt-10 md:mt-12">
          <div className="flex max-w-2xl flex-col gap-2">
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              I still write about technology. Engineering. Software.
            </p>
            <p className="text-base leading-relaxed text-white/45 text-pretty md:text-lg">
              In plain words, accurate and clear enough that you don&apos;t need a PhD or a CS degree to follow along.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
