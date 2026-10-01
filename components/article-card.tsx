import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type ArticleCardProps = {
  era: string
  role: string
  imageSrc: string
  imageAlt: string
  href?: string
}

export function ArticleCard({ era, role, imageSrc, imageAlt, href }: ArticleCardProps) {
  const content = (
    <>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0f131c]/90 via-[#0f131c]/45 to-transparent" />
      <div className="relative mt-auto flex items-end justify-between gap-4 p-6 md:p-8">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-semibold tracking-tight text-primary-foreground md:text-3xl">
            {era}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/80">
            {role}
          </span>
        </div>
        {href ? (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#0f131c]/50 text-primary-foreground backdrop-blur transition-colors group-hover:bg-primary">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        ) : null}
      </div>
    </>
  )

  const className =
    "group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl border border-white/10"

  if (!href) return <div className={className}>{content}</div>

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${era}, ${role}: read the article (opens in a new tab)`}
      className={`${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
    >
      {content}
    </a>
  )
}
