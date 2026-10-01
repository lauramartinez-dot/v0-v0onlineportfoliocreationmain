import { ScrollReveal } from "@/components/scroll-reveal"

const statementClass =
  "text-3xl font-semibold leading-[1.15] tracking-tight text-white text-balance md:text-4xl lg:text-[2.75rem]"

export function AboutMeReveal() {
  return (
    <div className="px-4 pb-20 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto w-full max-w-5xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            About me<span className="text-primary">.</span>
          </h2>
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <p className={`mt-20 max-w-4xl ${statementClass}`}>
          I&apos;m a tech journalist turned technical writer — and honestly,{" "}
          <span className="font-bold text-primary">the job hasn&apos;t changed that much.</span>
        </p>

        <ScrollReveal className="mt-16 md:mt-20">
          <div className="flex items-stretch justify-between gap-8">
            <div aria-hidden="true" className="w-px shrink-0 bg-gradient-to-b from-transparent to-primary" />
            <p className={`max-w-3xl text-right ${statementClass}`}>
              I still write about technology. Engineering. Software.{" "}
              <span className="text-white/55">
                In plain words, accurate and clear enough that you don&apos;t need a PhD or a CS degree to follow
                along.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
