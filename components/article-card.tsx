"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, BookOpen } from "lucide-react"

export function ArticleCard() {
  const [now, setNow] = useState(false)
  return (
    <figure className="w-full">
      <button type="button" aria-label="Show current technical writing instead of the magazine article" aria-pressed={now}
        onPointerEnter={(event) => { if (event.pointerType === "mouse") setNow(true) }}
        onPointerLeave={(event) => { if (event.pointerType === "mouse") setNow(false) }}
        onClick={() => setNow(value => !value)}
        className="relative block aspect-[3/2] w-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-background text-foreground [perspective:1200px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <Image src="/now-tech-docs.png" alt="Documentation page titled What is an API? on a laptop screen" fill sizes="(max-width: 767px) 90vw, 672px" className="object-cover" />
        <span className={`absolute inset-0 origin-left bg-background transition-transform duration-700 ease-in-out motion-reduce:transition-none ${now ? "[transform:rotateY(-96deg)]" : "[transform:rotateY(0deg)]"}`}>
          <Image src="/then-airplane-article.png" alt="Magazine article titled How do planes stay in the air?" fill sizes="(max-width: 767px) 90vw, 672px" className="object-cover" />
        </span>
        <span aria-hidden="true" className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-semibold text-foreground"><BookOpen className="size-4" />{now ? "Now" : "Before"}</span>
      </button>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
        <span className="hidden [@media(hover:hover)]:inline">Hover to turn the page</span><span className="[@media(hover:hover)]:hidden">Tap to turn the page</span>
        <a className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-foreground" href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire" target="_blank" rel="noopener noreferrer">Read the article<ArrowUpRight aria-hidden="true" className="size-4" /><span className="sr-only"> (opens in a new tab)</span></a>
      </figcaption>
    </figure>
  )
}
