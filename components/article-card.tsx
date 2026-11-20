"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowLeftRight, ArrowUpRight } from "lucide-react"

const label = "absolute bottom-4 rounded-full bg-background px-3 py-1.5 text-sm font-semibold text-foreground"

export function ArticleCard() {
  const [split, setSplit] = useState(50)
  const incline = Math.min(16, split, 100 - split)
  const top = split + incline
  const bottom = split - incline
  return (
    <figure className="w-full">
      <div className="relative isolate aspect-[3/2] w-full select-none overflow-hidden rounded-3xl border border-border bg-background text-foreground has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-primary">
        <Image src="/now-tech-docs.png" alt="Documentation page titled What is an API? on a laptop screen" fill sizes="(max-width: 767px) 90vw, 672px" className="object-cover" />
        <span className={`${label} right-4`}>Now</span>
        <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${top}% 0, ${bottom}% 100%, 0 100%)` }}>
          <Image src="/then-airplane-article.png" alt="Magazine article titled How do planes stay in the air?" fill sizes="(max-width: 767px) 90vw, 672px" className="object-cover" />
          <span className={`${label} left-4`}>Before</span>
        </div>
        {split > 0 && split < 100 && <>
          <div aria-hidden="true" className="absolute inset-0 bg-foreground" style={{ clipPath: `polygon(calc(${top}% - 1px) 0, calc(${top}% + 1px) 0, calc(${bottom}% + 1px) 100%, calc(${bottom}% - 1px) 100%)` }} />
          <span aria-hidden="true" className="absolute top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-md" style={{ left: `${split}%` }}><ArrowLeftRight className="size-4" /></span>
        </>}
        <input type="range" min="0" max="100" step="1" value={split} aria-label="Compare Before and Now images" aria-valuetext={`${split}% Before, ${100 - split}% Now`}
          onChange={event => setSplit(event.currentTarget.valueAsNumber)}
          onPointerMove={event => {
            if (event.pointerType !== "mouse") return
            const rect = event.currentTarget.getBoundingClientRect()
            setSplit(Math.max(0, Math.min(100, Math.round(100 * (event.clientX - rect.left) / rect.width))))
          }}
          className="absolute inset-0 m-0 h-full w-full cursor-ew-resize touch-pan-y opacity-0" />
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
        <span>Move left or right to compare</span>
        <a className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-foreground" href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire" target="_blank" rel="noopener noreferrer">Read the article<ArrowUpRight aria-hidden="true" className="size-4" /><span className="sr-only"> (opens in a new tab)</span></a>
      </figcaption>
    </figure>
  )
}
