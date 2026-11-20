import type { ReactNode } from "react"
import Image from "next/image"
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
function Lead({ children }: { children: ReactNode }) {
  return <p className="mx-auto w-full max-w-2xl text-left text-2xl font-bold leading-tight tracking-tight text-pretty text-white/70 md:text-3xl">{children}</p>
}

function Colon() {
  return <span className="text-primary">:</span>
}

const group = "mx-auto flex w-full max-w-2xl flex-col gap-6 md:gap-8"

export function AboutMeIntro() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-16 md:gap-28 md:px-12 md:py-24">
      <div className="mx-auto w-full max-w-2xl">
        <p className={`${storyLineClass} mx-auto max-w-md text-center md:max-w-lg`}>
          I&apos;m a tech journalist turned technical writer.
        </p>
      </div>

      <div className={group}>
        <Lead>I used to write about tech for publications like Business Insider, making complex topics accessible to everyday readers.</Lead>
        <ArticleCard stage="Before" />
      </div>

      <div className={group}>
        <Lead>15 years later, I still write about complex technology, but now I do it for tech companies:</Lead>
        <ArticleCard stage="Now" />
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        <div className={group}>
          <div className="flex flex-col gap-4">
            <Lead>These days, I&apos;m also less of a traditional writer and more of an editor-in-chief.</Lead>
            <Lead>My team is me and a brilliant but overconfident intern<Colon /></Lead>
          </div>
          <div className="relative mx-auto aspect-[3/2] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <Image
              src="/editor-in-chief.jpg"
              alt="Laura leaning over a desk and pointing at a monitor while an intern, whose face is replaced by an AI logo, works on a tablet"
              fill
              sizes="(min-width: 768px) 672px, 100vw"
              className="object-cover"
            />
          </div>
          <Lead>I decide who we’re writing for and what they need to know (content strategy). My intern can draft, but I check the facts, rewrite what’s unclear, and decide what’s ready to publish (editorial oversight). That split between what I delegate and what I keep is deliberate (workflow orchestration). When a mistake keeps coming up, I change how I ask for the next draft (prompt iteration).</Lead>
        </div>

        <div
          id="why"
          className="flex scroll-mt-32 flex-col gap-10 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:gap-12 md:px-12 md:py-14"
        >
          <p className={`${storyLineClass} text-center`}>
            I am also
            <Colon />
          </p>
          <AboutMeBoxes />
        </div>
      </div>
    </div>
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
