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

const editorialSkills = [
  ["Content strategy", "Choosing what we write and for whom"],
  ["Information architecture", "Structuring it for people and AI"],
  ["Content operations", "Building processes so my intern moves faster"],
  ["Content governance", "Deciding what actually gets published"],
] as const

function Colon() {
  return <span className="text-primary">:</span>
}

const careerStages = [
  { stage: "Before", caption: "I used to write about complex technology for publications like Business Insider, Xataka, and Muy Interesante:" },
  { stage: "Now", caption: "15 years later, I still write about complex technology, but now I do it for tech companies:" },
] as const

export function AboutMeIntro() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-16 md:gap-28 md:px-12 md:py-24">
      <section className="mx-auto w-full max-w-5xl" aria-labelledby="career-transition">
        <h3 id="career-transition" className="max-w-3xl text-pretty text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          I&apos;m a tech journalist turned technical writer.
        </h3>
        <div className="mt-8 flex flex-col gap-10 md:mt-10 lg:gap-16">
          {careerStages.map(({ stage, caption }) => (
            <div key={stage} className="grid items-center gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-x-16">
              <p className="text-xl leading-relaxed text-foreground/75 md:text-2xl md:leading-relaxed">{caption}</p>
              <div><ArticleCard stage={stage} /></div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-16 md:gap-24">
        <section className="mx-auto w-full max-w-5xl" aria-labelledby="editorial-role">
          <h3 id="editorial-role" className="max-w-3xl text-pretty text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            These days, I&apos;m also less of a traditional writer and more of an editor-in-chief.
          </h3>
          <div className="mt-8 grid items-start gap-y-10 md:mt-10 lg:grid-cols-2 lg:gap-x-16">
            <figure>
              <figcaption className="mb-4 text-xl leading-relaxed text-foreground/75 md:text-2xl md:leading-relaxed">My team is me and a brilliant but overconfident intern<Colon /></figcaption>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src="/editor-intern-v18.webp"
                  alt="Laura points to a monitor beside an intern whose face is covered by the Claude logo."
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <div>
              <p className="text-xl leading-relaxed text-foreground/75 md:text-2xl md:leading-relaxed">So I write less and spend more time on:</p>
              <ul className="mt-4 divide-y divide-foreground/10 border-y border-foreground/10">
                {editorialSkills.map(([skill, description]) => (
                  <li key={skill} className="flex flex-col gap-1 py-3">
                    <span className="text-base leading-relaxed text-foreground/80 md:text-lg">{description}</span>
                    <span className="text-base leading-snug text-primary/85">({skill.toLowerCase()})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

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
