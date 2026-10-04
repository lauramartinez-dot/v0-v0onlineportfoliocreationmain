"use client"

import Image from "next/image"
import type { ReactNode } from "react"
import { ArrowUpRight, Globe, Rocket, Telescope, type LucideIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
  icon: LucideIcon
  imageSrc: string
  imageAlt: string
  body: ReactNode
}

function ImageStatement({ imageSrc, children }: { imageSrc: string; children: ReactNode }) {
  return (
    <div className="relative flex min-h-[75vh] items-center justify-center overflow-hidden p-6 md:p-10">
      <Image src={imageSrc} alt="" fill sizes="(max-width: 1400px) 96vw, 1400px" className="object-cover" />
      <div className="absolute inset-0 bg-card/20" aria-hidden="true" />
      <div className="relative z-10 max-w-2xl rounded-3xl border border-white/10 bg-card/70 p-8 shadow-2xl backdrop-blur-md md:p-10">
        <p className="text-2xl font-semibold leading-snug text-white text-pretty md:text-3xl">{children}</p>
      </div>
    </div>
  )
}

const boxes: Box[] = [
  {
    title: "Ex-journalist",
    teaser: "15 years writing about tech.",
    imageSrc: "/then-airplane-article.png",
    imageAlt: "Magazine article titled How do planes stay in the air?",
    body: null,
  },
  {
    title: "Globetrotter",
    teaser: "Lived in 4 countries. Fluent in 3 languages.",
    icon: Globe,
    imageSrc: "/four-countries-bamberg.png",
    imageAlt: "Laura by the river in Bamberg, Germany, with the old town hall behind her",
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
          <EuropePinsMap autoplay />
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
    teaser: "Making tech knowledge open to everyone.",
    icon: Telescope,
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
    title: "Startup-minded",
    teaser: "Spent most of my career at startups. Love building stuff.",
    icon: Rocket,
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

const boxOrder = ["Mission-driven", "Globetrotter", "Startup-minded"]
const orderedBoxes = boxOrder.map((title) => boxes.find((box) => box.title === title)!)

export function AboutMeBoxes() {
  return (
    <StaggerReveal
      className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
      itemClassName="flex [&>*]:flex-1"
      step={250}
    >
      {orderedBoxes.map((box) => (
        <Dialog key={box.title}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="group relative flex h-full min-h-[300px] flex-col gap-5 overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.08] p-10 text-left transition-colors duration-300 hover:border-primary/50 hover:bg-primary/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <box.icon className="h-7 w-7" />
              </span>
              <span className="text-2xl font-bold leading-tight tracking-tight text-white text-balance md:text-3xl">
                {box.title}
              </span>
              <span className="text-base leading-relaxed text-white/70 text-pretty md:text-[17px]">{box.teaser}</span>
              <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary">
                Take a look
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
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
