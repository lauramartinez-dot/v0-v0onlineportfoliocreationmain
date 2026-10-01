import type { ReactNode } from "react"
import { StaggerReveal } from "@/components/stagger-reveal"

export function AboutMeHeading() {
  return (
    <div className="px-4 pb-16 pt-28 md:pt-32">
      <div className="mx-auto w-full max-w-5xl text-center">
        <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          About me<span className="text-primary">.</span>
        </h2>
        <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
      </div>
    </div>
  )
}

const statementClass = "text-xl font-semibold leading-snug tracking-tight text-pretty md:text-2xl"

function FadeLine({ index, className, children }: { index: number; className?: string; children: ReactNode }) {
  return (
    <p
      className={`animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700 ease-out motion-reduce:animate-none ${statementClass} ${className ?? ""}`}
      style={{ animationDelay: `${150 + index * 220}ms` }}
    >
      {children}
    </p>
  )
}

const introClass = "mx-auto max-w-3xl text-xl font-semibold leading-snug tracking-tight text-pretty md:text-2xl"

export function AboutMeIntro() {
  return (
    <StaggerReveal className="flex flex-col gap-8 px-4 pb-12 text-center" step={350}>
      <p className="mx-auto max-w-4xl text-3xl font-bold leading-snug tracking-tight text-white text-pretty md:text-4xl">
        I&apos;m a tech journalist turned technical writer — and honestly,{" "}
        <span className="text-primary">the job hasn&apos;t changed that much.</span>
      </p>
      <p className={`${introClass} text-white/55`}>I still write about technology. Engineering. Software.</p>
      <p className={`${introClass} text-white/55`}>
        In plain words. While keeping it accurate.
        <br />
        And somehow clear enough
        <br />
        that you don&apos;t need a PhD or a CS degree to follow along.
      </p>
    </StaggerReveal>
  )
}

export function AboutMeStatements() {
  return (
    <div className="flex flex-col gap-5">
      <FadeLine index={0} className="text-white">
        I&apos;m a tech journalist turned technical writer — and honestly,{" "}
        <span className="font-bold text-primary">the job hasn&apos;t changed that much.</span>
      </FadeLine>
      <FadeLine index={1} className="text-white/55">
        I still write about technology. Engineering. Software.
      </FadeLine>
      <FadeLine index={2} className="text-white/55">
        In plain words. While keeping it accurate. And somehow clear enough that you don&apos;t need a PhD or a CS degree to follow along:
      </FadeLine>
    </div>
  )
}
