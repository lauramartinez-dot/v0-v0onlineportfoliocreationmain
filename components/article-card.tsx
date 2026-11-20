"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, RotateCw } from "lucide-react"

const sides = [
  { label: "Before", role: "Tech journalism", src: "/then-airplane-article.png", alt: "Magazine article titled How do planes stay in the air?" },
  { label: "Now", role: "Technical writing", src: "/now-tech-docs.png", alt: "Documentation page titled What is an API? on a laptop screen" },
]

export function ArticleCard() {
  const [side, setSide] = useState(0)
  const next = 1 - side
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-3xl border border-border bg-background text-foreground">
        <div className="flex" role="group" aria-label="Writing career stages">
          {sides.map(({ label, role }, i) => (
            <button key={label} type="button" aria-pressed={side === i} onClick={() => setSide(i)} className={`flex-1 cursor-pointer border-b-2 px-5 py-3 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary ${side === i ? "border-primary bg-primary/5" : "border-transparent"}`}>
              <strong className="block text-xl leading-tight">{label}</strong><span className="text-sm text-muted-foreground">{role}</span>
            </button>
          ))}
        </div>
        <button type="button" onClick={() => setSide(next)} aria-label={`Turn image to ${sides[next].label}: ${sides[next].role}`} aria-description={sides[side].alt} className="relative block aspect-[3/2] w-full cursor-pointer overflow-hidden [perspective:1400px] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary">
          <span aria-hidden="true" className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-500 ease-in-out motion-reduce:transition-none" style={{ transform: `rotateY(${side * 180}deg)` }}>
            {sides.map(({ label, src }, i) => (
              <span key={label} className="absolute inset-0 [backface-visibility:hidden]" style={{ transform: `rotateY(${i * 180}deg)` }}>
                <Image src={src} alt="" fill sizes="(max-width: 767px) 90vw, 672px" className="object-cover" />
              </span>
            ))}
          </span>
          <span aria-hidden="true" className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-semibold text-foreground"><RotateCw className="size-4" />Flip to {sides[next].label}</span>
        </button>
      </div>
      <figcaption className="mt-3 text-right text-sm text-muted-foreground">
        <a className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-foreground" href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire" target="_blank" rel="noopener noreferrer">Read the article<ArrowUpRight aria-hidden="true" className="size-4" /><span className="sr-only"> (opens in a new tab)</span></a>
      </figcaption>
    </figure>
  )
}
