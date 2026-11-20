"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowLeftRight, ArrowUpRight } from "lucide-react"

const wipe = "absolute inset-0 transition-[clip-path] duration-100 ease-out motion-reduce:transition-none"

export function ArticleCard() {
  const [split, setSplit] = useState(50)
  const center = split * 1.28 - 14
  const top = center + 14
  const bottom = center - 14
  const before = Math.round(split)

  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-3xl border border-border bg-background text-foreground has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-primary">
        <div className="flex items-center justify-between px-5 py-3 md:px-6">
          <div><strong className="block text-xl leading-tight">Before</strong><span className="text-sm text-muted-foreground">Tech journalism</span></div>
          <div className="text-right"><strong className="block text-xl leading-tight">Now</strong><span className="text-sm text-muted-foreground">Technical writing</span></div>
        </div>
        <div className="relative isolate aspect-[3/2] select-none overflow-hidden">
          <Image src="/now-tech-docs.png" alt="Documentation page titled What is an API? on a laptop screen" fill sizes="(max-width: 767px) 90vw, 672px" className="object-cover" />
          <div className={wipe} style={{ clipPath: `polygon(0 0, ${top}% 0, ${bottom}% 100%, 0 100%)` }}>
            <Image src="/then-airplane-article.png" alt="Magazine article titled How do planes stay in the air?" fill sizes="(max-width: 767px) 90vw, 672px" className="object-cover" />
          </div>
          <div aria-hidden="true" className={`${wipe} bg-foreground`} style={{ clipPath: `polygon(calc(${top}% - 1px) 0, calc(${top}% + 1px) 0, calc(${bottom}% + 1px) 100%, calc(${bottom}% - 1px) 100%)` }} />
          <span aria-hidden="true" className="absolute top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-[left] duration-100 ease-out motion-reduce:transition-none" style={{ left: `${center}%` }}><ArrowLeftRight className="size-4" /></span>
          <input type="range" min="0" max="100" step="1" value={before} aria-label="Compare tech journalism before and technical writing now" aria-valuetext={`${before} percent toward Before`}
            onChange={event => setSplit(event.currentTarget.valueAsNumber)}
            onPointerMove={event => {
              if (event.pointerType !== "mouse" || event.buttons) return
              const rect = event.currentTarget.getBoundingClientRect()
              setSplit(Math.max(0, Math.min(100, 100 * (event.clientX - rect.left) / rect.width)))
            }}
            className="absolute inset-0 m-0 h-full w-full cursor-ew-resize touch-pan-y opacity-0" />
        </div>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
        <span>Move left or right to compare</span>
        <a className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-foreground" href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire" target="_blank" rel="noopener noreferrer">Read the article<ArrowUpRight aria-hidden="true" className="size-4" /><span className="sr-only"> (opens in a new tab)</span></a>
      </figcaption>
    </figure>
  )
}
