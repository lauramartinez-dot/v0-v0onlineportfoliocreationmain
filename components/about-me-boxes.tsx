"use client"

import Image from "next/image"
import type { ReactNode } from "react"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArticleCard } from "@/components/article-card"
import { EuropePinsMap } from "@/components/europe-pins-map"
import { StaggerReveal } from "@/components/stagger-reveal"

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Bilingual" },
  { name: "German", level: "B2" },
]

type Box = {
  title: string
  teaser: string
  imageSrc: string
  imageAlt: string
  body: ReactNode
}

function ImageStatement({ imageSrc, children }: { imageSrc: string; children: ReactNode }) {
  return (
    <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-8 py-20 md:px-16">
      <Image src={imageSrc} alt="" fill sizes="(max-width: 1024px) 95vw, 1152px" className="object-cover" />
      <div className="absolute inset-0 bg-card/80" aria-hidden="true" />
      <p className="relative mx-auto max-w-3xl text-center text-2xl font-medium leading-snug tracking-tight text-white text-pretty md:text-3xl lg:text-4xl">
        {children}
      </p>
    </div>
  )
}

const boxes: Box[] = [
  {
    title: "Former tech journalist",
    teaser: "From explaining tech in the news to explaining it in docs.",
    imageSrc: "/then-airplane-article.png",
    imageAlt: "Magazine article titled How do planes stay in the air?",
    body: (
      <div className="px-8 py-8 md:px-12">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5">
        <ArticleCard
          era="6 years ago"
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
      </div>
    ),
  },
  {
    title: "Globetrotter",
    teaser: "Four countries and three languages by my 30s.",
    imageSrc: "/globe-purple.png",
    imageAlt: "Purple globe",
    body: (
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 aspect-[71/100] h-full -translate-x-1/2"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, #000 18%, #000 78%, transparent 100%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, #000 18%, #000 78%, transparent 100%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
          aria-hidden="true"
        >
          <EuropePinsMap />
        </div>

        <div className="relative z-10 flex min-h-[75vh] flex-col justify-between gap-12 p-6 md:p-10">
          <div className="max-w-md self-start rounded-3xl border border-white/10 bg-card/70 p-8 shadow-2xl backdrop-blur-md">
            <p className="text-2xl font-semibold leading-snug text-white text-balance md:text-3xl">
              {"I'm also a globetrotter. By my 30s, I'd lived in four countries and become fluent in three languages."}
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col gap-6 self-end rounded-3xl border border-primary/40 bg-card/80 p-8 shadow-2xl shadow-primary/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold leading-snug text-white md:text-3xl">Languages</h3>
            <ul className="flex flex-col">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-baseline justify-between gap-6 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span className="text-xl font-semibold text-white md:text-2xl">{language.name}</span>
                  <span className="text-lg font-medium text-primary md:text-xl">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Mission-driven",
    teaser: "Making technical knowledge open to everyone.",
    imageSrc: "/cosmic-inflation-universe-expansion.jpg",
    imageAlt: "Expanding universe with galaxies",
    body: (
      <ImageStatement imageSrc="/cosmic-inflation-universe-expansion.jpg">
        {"The mission hasn't changed: "}
        <span className="font-bold text-primary">democratising access to technical knowledge.</span>{" "}
        The more people understand technology, use it, and help build it, the further we can push the frontiers of
        knowledge.
      </ImageStatement>
    ),
  },
  {
    title: "Startup",
    teaser: "Most of my career, including Personio.",
    imageSrc: "/modern-tech-office-workspace-with-beer-tap-dublin.jpg",
    imageAlt: "Modern tech office with a beer tap",
    body: (
      <ImageStatement imageSrc="/modern-tech-office-workspace-with-beer-tap-dublin.jpg">
        {"Most of my career has been at startups — including "}
        <span className="font-bold text-primary">{"Personio, one of Europe's unicorns."}</span>{" "}
        {"So I'm drawn to experimenting, trying new tools, and learning by doing."}
      </ImageStatement>
    ),
  },
]

export function AboutMeBoxes() {
  return (
    <StaggerReveal
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      itemClassName="flex [&>*]:flex-1"
      step={250}
    >
      {boxes.map((box) => (
        <Dialog key={box.title}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-[2rem] border border-white/10 text-left shadow-2xl shadow-black/30 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:aspect-[9/15]"
            >
              <Image
                src={box.imageSrc}
                alt={box.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f131c]/95 via-[#0f131c]/40 to-[#0f131c]/5" />
              <div className="relative mt-auto flex flex-col gap-3 p-7">
                <span className="text-3xl font-bold leading-tight tracking-tight text-white text-balance lg:text-[2.1rem]">
                  {box.title}
                </span>
                <span className="text-base leading-relaxed text-white/75 text-pretty">
                  {box.teaser}
                </span>
                <span className="mt-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  <Plus className="size-4" aria-hidden="true" />
                  Read more
                </span>
              </div>
            </button>
          </DialogTrigger>

          <DialogContent className="flex max-h-[94vh] w-[96vw] max-w-[1400px] flex-col gap-0 overflow-y-auto border-white/10 bg-card p-0 sm:max-w-[1400px] sm:rounded-[1.75rem]">
            <DialogHeader className="flex flex-col gap-3 space-y-0 border-b border-white/10 px-8 pt-10 pb-6 text-left md:px-12">
              <DialogTitle className="text-3xl font-bold leading-tight text-white text-balance md:text-4xl">
                {box.title}
              </DialogTitle>
              <DialogDescription className="max-w-2xl text-base leading-relaxed text-white/60 text-pretty">
                {box.teaser}
              </DialogDescription>
            </DialogHeader>
            {box.body}
          </DialogContent>
        </Dialog>
      ))}
    </StaggerReveal>
  )
}
