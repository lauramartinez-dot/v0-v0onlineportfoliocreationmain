import Image from "next/image"
import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
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

// White-on-transparent knockouts of the outlets' logos, tinted with the brand colour via mask.
const mediaOutlets = [
  { name: "Business Insider España", src: "/media-business-insider.png" },
  { name: "Muy Interesante", src: "/media-muy-interesante.png" },
  { name: "Xataka", src: "/media-xataka.png" },
  { name: "Europa Press", src: "/media-europa-press.png" },
]

function MediaOutletsCard() {
  return (
    <ul
      className="grid aspect-[3/4] w-full grid-cols-2 content-center items-center gap-x-8 gap-y-10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 md:aspect-[5/4] md:gap-x-10 md:gap-y-12 md:px-10"
      aria-label="Media outlets I wrote for"
    >
      {mediaOutlets.map((outlet) => (
        <li key={outlet.name} className="h-12 w-full md:h-16">
          <span
            role="img"
            aria-label={outlet.name}
            className="block h-full w-full bg-primary"
            style={{
              maskImage: `url(${outlet.src})`,
              WebkitMaskImage: `url(${outlet.src})`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
        </li>
      ))}
    </ul>
  )
}

export function AboutMeIntro() {
  return (
    <StaggerReveal className="mx-auto flex w-full max-w-7xl flex-col gap-24 rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-16 md:gap-32 md:px-12 md:py-24">
      <p className={`${storyLineClass} mx-auto max-w-3xl text-center`}>
        I&apos;m a tech journalist turned technical writer.
      </p>

      <div className="grid grid-cols-2 items-end gap-4 md:gap-8">
        <div className="flex flex-col gap-6">
          <p className={storyLineClass}>I used to write for tech publications.</p>
          <MediaOutletsCard />
        </div>
        <div className="flex flex-col gap-6">
          <p className={storyLineClass}>Now I do it for tech companies.</p>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 md:aspect-[5/4]">
            <Image
              src="/now-tech-company.png"
              alt="A technical writer's desk at a software company, with developer documentation on a large monitor"
              fill
              sizes="(max-width: 768px) 50vw, 600px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:gap-12">
        <p className={`${storyLineClass} max-w-3xl`}>
          I still write about technology and software. And I still keep it accurate, yet somehow plain and clear
          enough that you don&apos;t need a PhD or a CS degree to follow along.
        </p>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
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

      {/* Pull this block closer to the Before/Now cards than the parent gap allows */}
      <div id="why" className="-mt-4 flex scroll-mt-32 flex-col gap-12 md:-mt-6 md:gap-14">
        <div className="flex items-center gap-6 md:gap-8">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" aria-hidden="true" />
          <p className={storyLineClass}>
            I am also<span className="text-primary">:</span>
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" aria-hidden="true" />
        </div>
        <p className="mx-auto -mt-4 flex max-w-xl items-center justify-center gap-2 text-center text-base text-white/60 text-pretty md:-mt-6 md:text-lg">
          Click a card to take a look.
          <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        </p>
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
