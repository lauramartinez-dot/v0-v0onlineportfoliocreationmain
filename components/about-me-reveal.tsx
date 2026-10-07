import Image from "next/image"
import type { ReactNode } from "react"
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

function StoryRow({
  children,
  media,
  mediaSide,
  mediaWide = false,
}: {
  children: ReactNode
  media: ReactNode
  mediaSide: "left" | "right"
  mediaWide?: boolean
}) {
  const textCols = mediaWide ? "md:col-span-4" : "md:col-span-5"
  const mediaCols = mediaWide ? "md:col-span-6" : "md:col-span-5"
  return (
    <div className="grid items-center gap-10 md:grid-cols-10 md:gap-14">
      <div className={`${textCols} ${mediaSide === "left" ? "md:order-2" : ""}`}>{children}</div>
      <div className={`${mediaCols} ${mediaSide === "left" ? "md:order-1" : ""}`}>{media}</div>
    </div>
  )
}

const pressLogos = [
  { name: "Business Insider", src: "/logos/business-insider.png" },
  { name: "Xataka", src: "/logos/xataka.png" },
  { name: "Muy Interesante", src: "/logos/muy-interesante.png" },
]

export function AboutMeIntro() {
  return (
    <StaggerReveal className="mx-auto flex w-full max-w-7xl flex-col gap-24 rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-16 md:gap-32 md:px-12 md:py-24">
      <StoryRow
        mediaSide="right"
        media={
          <ul className="flex flex-col items-center justify-center gap-10 py-4 md:items-start md:gap-12">
            {pressLogos.map((logo) => (
              <li key={logo.name} className="relative h-14 w-full max-w-sm md:h-20">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="384px"
                  className="object-contain object-center brightness-0 invert md:object-left"
                />
              </li>
            ))}
          </ul>
        }
      >
        <div className="flex flex-col gap-6">
          <p className={storyLineClass}>I&apos;m a tech journalist turned technical writer.</p>
          <p className="text-xl font-semibold leading-snug text-white/70 text-pretty md:text-2xl">
            I used to write for media such as:
          </p>
        </div>
      </StoryRow>

      <div className="flex flex-col gap-10 md:gap-12">
        <p className={`${storyLineClass} ml-auto max-w-3xl md:text-right`}>
          I still write about technology. Engineering. Software. In plain words. While keeping it accurate. And
          somehow clear enough that you don&apos;t need a PhD or a CS degree to follow along.
        </p>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <ArticleCard
            era="10 years ago"
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

      <div id="why" className="flex scroll-mt-32 flex-col gap-10 border-t border-white/10 pt-16 md:pt-20">
        <p className={storyLineClass}>I am also:</p>
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
        I still write about technology. Engineering. Software.
      </FadeLine>
      <FadeLine index={2} className="text-white/55">
        In plain words. While keeping it accurate. And somehow clear enough that you don&apos;t need a PhD or a CS degree to follow along:
      </FadeLine>
    </div>
  )
}
