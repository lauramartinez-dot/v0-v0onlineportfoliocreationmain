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
    sample: {
      title: "API developer portal",
      caption:
        "A full API reference portal — authentication, endpoints, parameters, and copy-paste request examples documented end to end.",
      image: "/sample-api-portal.png",
      href: "https://portal.omp.com/login?callback=/?_gl=1*1lxy9i7*_gcl_au*NDAzODQ3NDY3LjE3OTAyNzQ0ODk.",
    },
  },
  {
    level: "Medium",
    readers: "for consultants",
    sample: {
      title: "User manuals",
      caption:
        "A plain-language explainer that gets a non-engineer from zero to understanding how two apps talk to each other — no CS degree required.",
      image: "/sample-api-explainer.png",
      href: "https://portal.omp.com/login?callback=/?_gl=1*1lxy9i7*_gcl_au*NDAzODQ3NDY3LjE3OTAyNzQ0ODk.",
    },
  },
  {
    level: "Low",
    readers: "for everyday users",
    // The Low dialog lists help center articles and technology stories.
    variant: "collection" as const,
    sample: {
      title: "Help center & technology stories",
      caption:
        "Writing for people with no technical background — searchable help centers and technology stories in major media, all in plain language.",
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

export function WritingSamplesSection() {
  return (
    <section id="writing-samples" className="relative px-4 pt-32 pb-32 scroll-mt-32">
      <div className="mx-auto max-w-[88rem]">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Writing samples<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - matches the other main section titles */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          {audiences.map(({ level, readers, sample, ...rest }) => {
            const isCollection = "variant" in rest && rest.variant === "collection"
            return (
              <Dialog key={level}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative flex aspect-[3/4.4] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
                  >

                    {/* Image fills most of the card */}
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={sample.image || "/placeholder.svg"}
                        alt={`Preview of ${sample.title}`}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />

                      {/* Scrim that fades the image bottom into the footer for a seamless blend */}
                      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/70 to-transparent" />
                      {/* Primary glaze that warms up on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Expand affordance */}
                      <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
                        <Maximize2 className="h-5 w-5" />
                      </span>
                    </div>

                    {/* Footer label sitting on the gradient - technicality is the hero */}
                    <div className="relative flex items-end gap-4 px-6 pb-6 pt-2">
                      {/* Accent bar keys the label to the brand color */}
                      <span className="mb-1.5 h-14 w-1 shrink-0 rounded-full bg-gradient-to-b from-primary to-primary/30" />
                      <div>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/50">
                          Tech knowledge
                        </p>
                        <p className="mt-1 bg-gradient-to-r from-white via-white to-primary/80 bg-clip-text text-4xl font-bold leading-none text-transparent md:text-5xl">
                          {level}
                        </p>
                        <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-white/45">{readers}</p>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                <DialogContent
                  className={
                    "flex max-h-[90vh] w-[95vw] flex-col gap-0 overflow-hidden border-[#472444] bg-card p-0 sm:rounded-[1.75rem] " +
                    (isCollection ? "max-w-6xl sm:max-w-6xl" : "max-w-4xl sm:max-w-4xl")
                  }
                >
                  {/* Sample image — banner with the title overlaid at the bottom */}
                  <div className="relative h-56 shrink-0 overflow-hidden bg-[#0f0b13] md:h-72">
                    <img
                      src={sample.image || "/placeholder.svg"}
                      alt={`Preview of ${sample.title}`}
                      className="h-full w-full object-cover object-top"
                    />
                    {/* Strong bottom scrim so the overlaid title stays legible */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/85 to-transparent" />

                    <DialogHeader className="absolute inset-x-0 bottom-0 space-y-0 px-8 pb-6 text-left md:px-12">
                      <span className="inline-flex w-fit items-center rounded-full bg-primary/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary ring-1 ring-primary/30 backdrop-blur-sm">
                        {readers}
                      </span>
                      <DialogTitle className="mt-3 text-3xl font-bold leading-tight text-white text-balance md:text-4xl">
                        {level} technical knowledge
                      </DialogTitle>
                      <p className="mt-1.5 text-base font-medium text-white/60 text-pretty md:text-lg">
                        {sample.title}
                      </p>
                      <DialogDescription className="sr-only">{sample.caption}</DialogDescription>
                    </DialogHeader>
                  </div>

                  {/* Body — gated portal link (High & Medium) */}
                  {!isCollection && (
                    <div className="px-8 pt-8 pb-12 md:px-12">
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
                  )}

                  {/* Body — the link collection (Low only) */}
                  {isCollection && (
                    <div className="flex min-h-0 flex-1 flex-col gap-9 overflow-y-auto px-8 pt-8 pb-16 md:px-12">
                      <section>
                        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Help center
                        </h3>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {helpCenters.map((hc) => (
                            <LinkBox key={hc.href} label={hc.label} href={hc.href} />
                          ))}
                        </div>
                      </section>

                      <section>
                        <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Technology stories
                        </h3>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {mediaArticles.map((article) => (
                            <LinkBox key={article.href} label={article.label} href={article.href} />
                          ))}
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
