import { StaggerReveal } from "@/components/stagger-reveal"

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

        <StaggerReveal className="mt-20 flex flex-col items-center gap-16 text-center md:gap-24">
          <p className={`mx-auto max-w-4xl ${statementClass}`}>
            I&apos;m a tech journalist turned technical writer — and honestly,{" "}
            <span className="font-bold text-primary">the job hasn&apos;t changed that much.</span>
          </p>
          <p className={`text-white/55 ${statementClass}`}>I still write about technology.</p>
          <p className={`text-white/55 ${statementClass}`}>Engineering.</p>
          <p className={`text-white/55 ${statementClass}`}>Software.</p>
          <p className={`mx-auto max-w-3xl text-white/55 ${statementClass}`}>
            In plain words, accurate and clear enough that you don&apos;t need a PhD or a CS degree to follow along:
          </p>
        </StaggerReveal>
      </div>
    </div>
  )
}
