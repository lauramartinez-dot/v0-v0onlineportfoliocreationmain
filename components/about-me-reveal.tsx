import type { ReactNode } from "react"
import Image from "next/image"
import { StaggerReveal } from "@/components/stagger-reveal"
import { ArticleCard } from "@/components/article-card"
import { AboutMeBoxes } from "@/components/about-me-boxes"

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

const storyLineClass = "text-3xl font-bold leading-tight tracking-tight text-white text-pretty md:text-4xl"
const storyDetailClass = "text-2xl font-bold leading-tight tracking-tight text-white text-pretty md:text-3xl"

function Lead({ children }: { children: ReactNode }) {
  return (
    <p className={`${storyDetailClass} mx-auto max-w-md px-6 text-center text-white/70 md:max-w-lg`}>{children}</p>
  )
}

function Colon() {
  return <span className="text-primary">:</span>
}

const pairGrid = "grid grid-cols-2 items-stretch gap-4 md:gap-8"
const group = "flex flex-col gap-8 md:gap-10"

export function AboutMeIntro() {
  return (
    <StaggerReveal className="mx-auto flex w-full max-w-7xl flex-col gap-20 rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-16 md:gap-28 md:px-12 md:py-24">
      <div className="mx-auto w-fit rounded-3xl border border-white/10 bg-white/[0.04] px-10 py-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:px-16 md:py-14">
        <p className={`${storyLineClass} mx-auto max-w-md text-center md:max-w-lg`}>
          I&apos;m a tech journalist turned technical writer.
        </p>
      </div>

      <div className={group}>
        <div className="flex flex-col gap-6 md:gap-8">
          <Lead>I still write about technology and software.</Lead>
          <Lead>Only now I do it for tech companies instead of the media.</Lead>
        </div>
        <div className={pairGrid}>
          <ArticleCard
            era="Before"
            imageSrc="/then-airplane-article.png"
            imageAlt="Magazine article titled How do planes stay in the air?"
            href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire"
          />
          <ArticleCard
            era="Now"
            imageSrc="/now-tech-docs.png"
            imageAlt="Documentation page titled What is an API? on a laptop screen"
          />
        </div>
      </div>

      <div className={group}>
        <p className={`${storyDetailClass} mx-auto max-w-2xl px-6 text-center text-white/70 md:max-w-3xl`}>
          These days, I&apos;m less of a {"\u201Cwriter\u201D"} and more of an editor-in-chief. My team is me and a
          brilliant but overconfident intern.
        </p>
        <div className="relative mx-auto aspect-[3/2] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <Image
            src="/editor-in-chief.jpg"
            alt="Laura leaning over a desk and pointing at a monitor while an intern, whose face is replaced by an AI logo, works on a tablet"
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>
        <p className={`${storyDetailClass} mx-auto max-w-2xl px-6 text-center text-white/70 md:max-w-3xl`}>
          So most of my time now goes into research, learning about the topic, talking to experts, briefing my intern
          on what I&apos;ve learned (aka prompting), and reviewing what they write.
        </p>
      </div>

      <div id="why" className={`${group} scroll-mt-32`}>
        <Lead>
          I am also
          <Colon />
        </Lead>
        <AboutMeBoxes />
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
            I still write about technology and software.
          </FadeLine>
          <FadeLine index={2} className="text-white/55">
            And I still keep it accurate, yet somehow plain and clear enough that you don&apos;t need a PhD or a CS degree to follow along:
      </FadeLine>
    </div>
  )
}
