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
      <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-background text-foreground">
        <Image src={src} alt={alt} fill sizes="(max-width: 767px) 90vw, 672px" className={stage === "Now" ? "object-cover object-[50%_47%]" : "object-cover"} />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0f131c]/90 via-[#0f131c]/45 to-transparent" />
        <figcaption className="absolute bottom-0 left-0 p-5 text-xl font-bold tracking-tight text-primary-foreground md:p-6 md:text-2xl">
          {stage === "Before" ? "Before" : "After"}<span className="sr-only">: {role}</span>
        </figcaption>
      </figure>
      {stage === "Before" && (
        <p className="mt-3 text-right text-sm text-muted-foreground">
          <a className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-foreground" href="https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire" target="_blank" rel="noopener noreferrer">Read the article on Xataka<ArrowUpRight aria-hidden="true" className="size-4" /><span className="sr-only"> (opens in a new tab)</span></a>
        </p>
      )}
    </div>
  )
}
