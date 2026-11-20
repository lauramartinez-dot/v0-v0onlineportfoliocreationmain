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
      <figure className="overflow-hidden rounded-3xl border border-border bg-background text-foreground">
        <figcaption className="bg-primary/5 px-5 py-3">
          <strong className="block text-xl leading-tight">{stage}</strong>
          <span className="text-sm text-muted-foreground">{role}</span>
        </figcaption>
        <div className="relative aspect-[3/2]">
          <Image src={src} alt={alt} fill sizes="(max-width: 767px) 90vw, 672px" className="object-cover" />
        </div>
      </figure>
      {stage === "Before" && (
        <p className="mt-3 text-right text-sm text-muted-foreground">
          <a className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-foreground" href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire" target="_blank" rel="noopener noreferrer">Read the article on Xataka<ArrowUpRight aria-hidden="true" className="size-4" /><span className="sr-only"> (opens in a new tab)</span></a>
        </p>
      )}
    </div>
  )
}
