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
const storyDetailClass = "text-2xl font-bold leading-tight tracking-tight text-white text-pretty md:text-3xl"

type Logo = { name: string; src: string; scale?: string }

// Logos with transparent backgrounds, tinted with the brand colour via mask.
const mediaOutlets: Logo[] = [
  { name: "Business Insider España", src: "/media-business-insider.png" },
  { name: "Muy Interesante", src: "/media-muy-interesante.png" },
  { name: "Xataka", src: "/media-xataka.png" },
  { name: "Europa Press", src: "/media-europa-press.png" },
]

const techCompanies: Logo[] = [
  // Personio's file has padding baked in; scaling it up makes the two wordmarks render the same width.
  { name: "Personio", src: "/personio-wordmark.png", scale: "scale-[1.3]" },
  { name: "OMP", src: "/omp-wordmark.png" },
]

function LogoCard({ logos, label, columns }: { logos: Logo[]; label: string; columns: 1 | 2 }) {
  const layout =
    columns === 2
      ? "grid-cols-2 gap-x-10 gap-y-12 md:gap-x-14 md:gap-y-14 [&>li]:h-12 md:[&>li]:h-16"
      : "grid-cols-1 gap-y-14 md:gap-y-16 [&>li]:h-16 md:[&>li]:h-20 [&>li]:mx-auto [&>li]:w-56"
  return (
    <ul className={`grid w-full items-center px-4 py-6 md:px-8 md:py-8 ${layout}`} aria-label={label}>
      {logos.map((logo) => (
        <li key={logo.name} className="w-full">
          <span
            role="img"
            aria-label={logo.name}
            className={`block h-full w-full bg-primary ${logo.scale ?? ""}`}
            style={{
              maskImage: `url(${logo.src})`,
              WebkitMaskImage: `url(${logo.src})`,
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
      <p className={`${storyLineClass} mx-auto px-6 py-10 text-center md:py-16`}>
        I&apos;m a tech journalist
        <br />
        turned technical writer.
      </p>

      <div className="grid grid-cols-2 items-start gap-4 md:gap-8">
        <div className="flex flex-col gap-6">
          <p className={storyDetailClass}>I used to write for tech publications.</p>
          <LogoCard logos={mediaOutlets} label="Media outlets I wrote for" columns={2} />
        </div>
        <div className="flex flex-col gap-6">
          <p className={storyDetailClass}>Now I do it for tech companies.</p>
          <LogoCard logos={techCompanies} label="Tech companies I have written for" columns={1} />
        </div>
      </div>

      <div className="flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className={`${storyLineClass} mx-auto px-6 py-10 text-center md:py-16`}>
            I still write about
            <br />
            technology and software.
          </p>
          <p className={`${storyDetailClass} max-w-4xl`}>
            And I still keep it accurate, yet somehow plain and clear enough that you don&apos;t need a PhD or a CS
            degree to follow along.
          </p>
        </div>
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
