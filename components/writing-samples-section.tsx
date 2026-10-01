"use client"

import { Maximize2, ExternalLink, Lock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

// Help center examples surfaced at the top of the "Low" dialog — specific
// Personio articles written for everyday employees.
const helpCenters = [
  {
    label: "Overview of permissions and employee roles",
    href: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
  },
  {
    label: "Summary of the homepage cards",
    href: "https://support.personio.de/hc/en-us/articles/360001268369-Summary-of-the-homepage-cards",
  },
  {
    label: "Grant permissions for everyday tasks",
    href: "https://support.personio.de/hc/en-us/articles/28054432299549-Grant-permissions-for-everyday-tasks-in-Personio",
  },
]

// Technology stories written for a general audience.
const mediaArticles = [
  {
    label: "A day in the life of an online content moderator",
    href: "https://www.businessinsider.com/a-day-in-the-life-of-an-online-content-moderator-2019-6",
  },
  {
    label: "Así es el día a día de quienes revisan los vídeos que reportas en redes sociales",
    href: "https://www.businessinsider.es/dia-dia-revisores-contenidos-redes-sociales-431333",
  },
  {
    label: "Cerveza gratis, lavandería y billar: así se trabaja en las tecnológicas de moda en Dublín",
    href: "https://www.businessinsider.es/wework-dublin-trabaja-cerveza-gratis-oficina-435405",
  },
  {
    label: "Es 2020 y todavía no entendemos del todo por qué los aviones se mantienen en el aire",
    href: "https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire",
  },
  {
    label: "Hallan la primera evidencia de la inflación cósmica",
    href: "https://web.archive.org/web/20221126190258/https://www.muyinteresante.es/ciencia/articulo/hallan-la-primera-evidencia-de-la-expansion-del-universo-131395147000",
  },
  {
    label: "El satélite español Deimos-2 está ya en órbita",
    href: "https://web.archive.org/web/20220811184721/https://www.muyinteresante.es/ciencia/articulo/el-satelite-espanol-deimos-2-esta-ya-en-orbita-341403272930",
  },
  {
    label: "Los gamers que acosan a las jugadoras son, literalmente, unos perdedores",
    href: "https://www.europapress.es/portaltic/videojuegos/noticia-gamers-acosan-jugadoras-son-literalmente-perdedores-20150725115934.html",
  },
]

// Each audience column showcases one real sample. Clicking the card opens a
// full preview of the actual piece.
const audiences = [
  {
    level: "High",
    readers: "for developers",
    audience: ["Developers", "IT staff"],
    assumes: "Readers who build software for a living. They want exact, complete technical detail.",
    sample: {
      title: "API developer portal",
      caption:
        "Reference documentation for developers — precise, complete, and structured so readers can find exactly what they need and put it to work.",
      image: "/sample-api-portal.png",
      href: "https://portal.omp.com/login?callback=/?_gl=1*1lxy9i7*_gcl_au*NDAzODQ3NDY3LjE3OTAyNzQ0ODk.",
    },
  },
  {
    level: "Medium",
    readers: "for consultants",
    audience: ["Consultants", "PMs", "Analysts"],
    assumes: "Readers who set up and adapt software for their work, sometimes with code, but don't come from IT.",
    sample: {
      title: "User manuals",
      caption:
        "Setup and configuration guides that explain the why behind each step — technical concepts made clear without assuming an engineering background.",
      image: "/sample-api-explainer.png",
      href: "https://portal.omp.com/login?callback=/?_gl=1*1lxy9i7*_gcl_au*NDAzODQ3NDY3LjE3OTAyNzQ0ODk.",
    },
  },
  {
    level: "Low",
    readers: "for everyday users",
  audience: ["Everyday users", "Media readers"],
  assumes: "Readers who use technology every day and want quick, clear answers.",
    // The Low dialog lists help center articles and technology stories.
    variant: "collection" as const,
    sample: {
      title: "Help center & technology stories",
      caption:
        "Help centers and technology stories in major media, written for everyday users in clear, everyday language.",
      image: "/sample-help-center.png",
      href: "",
    },
  },
]

// A minimal, text-only row that links out to a real published piece.
function LinkBox({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full items-start justify-between gap-4 rounded-xl border border-[#472444] bg-background/40 px-6 py-6 transition-colors hover:border-primary/60 hover:bg-primary/[0.06]"
    >
      <span className="text-lg font-semibold leading-relaxed tracking-[-0.01em] text-white text-pretty">{label}</span>
      <ExternalLink className="mt-1 h-[1.1rem] w-[1.1rem] shrink-0 text-white/30 transition-colors group-hover:text-primary" />
    </a>
  )
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-background ring-1 ring-white/10">
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/70 to-transparent" />
    </div>
  )
}

export function WritingSamplesSection() {
  return (
    <section id="writing-samples" className="relative px-4 py-24 md:py-32 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Writing samples<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - matches the other main section titles */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {audiences.map(({ level, readers, audience, assumes, sample, ...rest }, index) => {
            const isCollection = "variant" in rest && rest.variant === "collection"
            const filledBars = audiences.length - index
            return (
              <Dialog key={level}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="surface-card group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span
                      className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
                      aria-hidden="true"
                    />

                    <div className="flex flex-1 flex-col gap-6 p-8 md:p-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5" aria-label={`${level} technical knowledge`}>
                          {[1, 2, 3].map((segment) => (
                            <span
                              key={segment}
                              className={
                                "h-1.5 w-8 rounded-full transition-colors " +
                                (segment <= filledBars ? "bg-primary" : "bg-white/10")
                              }
                            />
                          ))}
                        </div>
                        <Maximize2
                          className="h-5 w-5 text-white/30 transition-colors group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl md:text-[1.7rem] font-bold leading-tight text-white text-balance">
                          {level} technical knowledge
                        </h3>
                        <p className="text-base md:text-[17px] leading-relaxed text-white/60 text-pretty">
                          {assumes}
                        </p>
                      </div>

                      <ul className="mt-auto flex flex-wrap gap-2" aria-label="For example">
                        {audience.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-lg bg-primary/15 px-3.5 py-1.5 text-[15px] font-semibold text-primary ring-1 ring-inset ring-primary/30"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                </DialogTrigger>

                <DialogContent className="flex max-h-[92vh] w-[95vw] max-w-6xl flex-col gap-0 overflow-y-auto border-white/10 bg-card p-0 sm:max-w-6xl sm:rounded-[1.75rem]">
                  {/* Header mirrors the clickable card */}
                  <DialogHeader className="flex flex-col gap-5 space-y-0 border-b border-white/10 px-8 pt-12 pb-10 text-left md:px-12">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      {[1, 2, 3].map((segment) => (
                        <span
                          key={segment}
                          className={
                            "h-1.5 w-8 rounded-full " + (segment <= filledBars ? "bg-primary" : "bg-white/10")
                          }
                        />
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      <DialogTitle className="text-3xl font-bold leading-tight text-white text-balance md:text-4xl">
                        {level} technical knowledge
                      </DialogTitle>
                      <DialogDescription className="max-w-2xl text-base leading-relaxed text-white/60 text-pretty md:text-[17px]">
                        {assumes}
                      </DialogDescription>
                    </div>
                    <ul className="flex flex-wrap gap-2" aria-label="For example">
                      {audience.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-lg bg-primary/15 px-3.5 py-1.5 text-[15px] font-semibold text-primary ring-1 ring-inset ring-primary/30"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </DialogHeader>

                  {/* Body — gated portal sample (High & Medium) */}
                  {!isCollection && (
                    <div className="grid items-center gap-8 px-8 py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-12 md:px-12 md:pb-12">
                      <SectionImage src={sample.image || "/placeholder.svg"} alt={`Preview of ${sample.title}`} />
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-xl font-semibold text-white text-balance">{sample.title}</h3>
                          <p className="text-base leading-relaxed text-white/55 text-pretty">{sample.caption}</p>
                        </div>
                      <a
                        href={sample.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 rounded-xl border border-[#472444] bg-background/40 px-5 py-5 transition-colors hover:border-primary/60 hover:bg-primary/[0.06]"
                      >
                        <span className="flex items-center gap-3">
                          <Lock className="h-5 w-5 shrink-0 text-primary" />
                          <span>
                            <span className="block text-[0.95rem] font-semibold text-white">Read on the OMP customer portal</span>
                            <span className="block text-sm text-white/50">Gated content — login required</span>
                          </span>
                        </span>
                        <ExternalLink className="h-4 w-4 shrink-0 text-white/30 transition-colors group-hover:text-primary" />
                      </a>
                      </div>
                    </div>
                  )}

                  {/* Body — the link collection (Low only) */}
                  {isCollection && (
                    <div className="flex flex-col gap-12 px-8 py-10 md:px-12 md:pb-14">
                      <section className="grid items-center gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-12">
                        <SectionImage src="/sample-help-center.png" alt="Preview of a Personio help center article" />
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl font-semibold text-white">Help center</h3>
                          <div className="grid gap-3">
                            {helpCenters.map((hc) => (
                              <LinkBox key={hc.href} label={hc.label} href={hc.href} />
                            ))}
                          </div>
                        </div>
                      </section>

                      <section className="grid items-center gap-8 border-t border-white/10 pt-12 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-12">
                        <SectionImage src="/sample-tech-stories.png" alt="Preview of a technology story published in the media" />
                        <div className="flex flex-col gap-4">
                          <h3 className="text-xl font-semibold text-white">Technology stories</h3>
                          <div className="grid gap-3">
                            {mediaArticles.map((article) => (
                              <LinkBox key={article.href} label={article.label} href={article.href} />
                            ))}
                          </div>
                        </div>
                      </section>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </section>
  )
}
