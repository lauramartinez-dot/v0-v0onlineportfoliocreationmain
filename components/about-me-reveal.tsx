import type { ReactNode } from "react"
import { StaggerReveal } from "@/components/stagger-reveal"
import { ArticleCard } from "@/components/article-card"

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

const introClass =
  "mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-primary text-pretty md:text-4xl"

export function AboutMeIntro() {
  return (
    <StaggerReveal className="flex flex-col gap-10 px-4 pb-24 text-center md:gap-12 md:pb-32" step={350}>
      <p className={introClass}>I&apos;m a tech journalist turned technical writer.</p>
      <p className={introClass}>
        I still write about technology. Engineering. Software. In plain words. While keeping it accurate. And somehow
        clear enough that you don&apos;t need a PhD or a CS degree to follow along.
      </p>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-5 pt-4 text-left md:gap-6">
        <ArticleCard
          era="10 years ago"
          role="Tech journalist"
          imageSrc="/then-airplane-article.png"
          imageAlt="Magazine article titled How do planes stay in the air?"
          href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire"
        />
        <ArticleCard
          era="Now"
          role="Technical writer"
          imageSrc="/now-tech-docs.png"
          imageAlt="Documentation page titled What is an API? on a laptop screen"
        />
      </div>
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
