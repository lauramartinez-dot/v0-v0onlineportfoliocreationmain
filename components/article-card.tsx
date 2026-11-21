import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const samples = {
  Before: { role: "Tech journalism", src: "/then-airplane-article.png", alt: "Magazine article titled How do planes stay in the air?" },
  Now: { role: "Technical writing", src: "/now-tech-docs.png", alt: "Documentation page titled What is an API? on a laptop screen" },
}

export function ArticleCard({ stage }: { stage: keyof typeof samples }) {
  const { role, src, alt } = samples[stage]
  return (
    <div className="w-full">
      <figure className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-border bg-background text-foreground">
        <Image src={src} alt={alt} fill sizes="(max-width: 767px) 90vw, 672px" className={stage === "Now" ? "object-cover object-[50%_47%]" : "object-cover"} />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0f131c]/90 via-[#0f131c]/45 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 p-5 text-primary-foreground md:p-6">
          <span className="text-xl font-bold tracking-tight md:text-2xl">{stage === "Before" ? "Before" : "After"}<span className="sr-only">: {role}</span></span>
          {stage === "Before" && (
            <a className="inline-flex min-h-8 items-center gap-1 rounded-sm text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire" target="_blank" rel="noopener noreferrer">Read the article on Xataka<ArrowUpRight aria-hidden="true" className="size-4" /><span className="sr-only"> (opens in a new tab)</span></a>
          )}
        </figcaption>
      </figure>
    </div>
  )
}
