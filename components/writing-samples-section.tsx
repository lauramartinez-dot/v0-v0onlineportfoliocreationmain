"use client"

import { Maximize2, ExternalLink, LifeBuoy, Newspaper } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

// Help center examples surfaced at the top of the "Low" dialog.
const helpCenters = [
  {
    name: "Personio Help Center",
    blurb:
      "Category landing pages, getting-started guides, and troubleshooting articles written for everyday HR and business users.",
    href: "https://support.personio.de/hc/es",
  },
]

// Technology stories written for a general audience, grouped by outlet.
const mediaArticles = [
  {
    outlet: "Business Insider",
    reach: "Front-page reach on BI USA",
    articles: [
      {
        label: "A day in the life of an online content moderator",
        url: "https://www.businessinsider.com/a-day-in-the-life-of-an-online-content-moderator-2019-6",
      },
      {
        label: "Así es el día a día de quienes revisan los vídeos que reportas en redes sociales",
        url: "https://www.businessinsider.es/dia-dia-revisores-contenidos-redes-sociales-431333",
      },
      {
        label: "Cerveza gratis, lavandería y billar: así se trabaja en las tecnológicas de moda en Dublín",
        url: "https://www.businessinsider.es/wework-dublin-trabaja-cerveza-gratis-oficina-435405",
      },
    ],
  },
  {
    outlet: "Xataka",
    reach: "Spain's leading tech media, +12M monthly users",
    articles: [
      {
        label: "Es 2020 y todavía no entendemos del todo por qué los aviones se mantienen en el aire",
        url: "https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire",
      },
    ],
  },
  {
    outlet: "Muy Interesante",
    reach: "2nd most-read monthly magazine in Spain",
    articles: [
      {
        label: "Hallan la primera evidencia de la inflación cósmica",
        url: "https://www.muyinteresante.es/ciencia/articulo/hallan-la-primera-evidencia-de-la-expansion-del-universo-131395147000",
      },
      {
        label: "¿Qué nos pasaría si viajáramos a la velocidad de la luz?",
        url: "https://www.muyinteresante.es/ciencia/articulo/que-nos-pasaria-si-viajaramos-a-la-velocidad-de-la-luz-131395147000",
      },
      {
        label: "El satélite español Deimos-2 está ya en órbita",
        url: "https://www.muyinteresante.es/ciencia/articulo/el-satelite-espanol-deimos-2-esta-ya-en-orbita-341403272930",
      },
    ],
  },
  {
    outlet: "Portaltic — Europa Press",
    reach: "Spain's leading private news agency",
    articles: [
      {
        label: "Los gamers que acosan a las jugadoras son, literalmente, unos perdedores",
        url: "https://www.europapress.es/portaltic/videojuegos/noticia-gamers-acosan-jugadoras-son-literalmente-perdedores-20150725115934.html",
      },
    ],
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
      href: "#",
    },
  },
  {
    level: "Medium",
    readers: "for technical PMs",
    sample: {
      title: "What is an API, and how do you work with it?",
      caption:
        "A plain-language explainer that gets a non-engineer from zero to understanding how two apps talk to each other — no CS degree required.",
      image: "/sample-api-explainer.png",
      href: "#",
    },
  },
  {
    level: "Low",
    readers: "for everyday users",
    // The Low dialog is expanded: help center examples first, media stories below.
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

          {/* Lead-in explaining the split */}
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-white/70 text-pretty">
            The same topic, written three ways &mdash; matched to how much the reader already knows. Click any sample to
            open it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          {audiences.map(({ level, readers, sample, ...rest }) => {
            const isCollection = "variant" in rest && rest.variant === "collection"
            return (
              <Dialog key={level}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative flex aspect-[3/4.4] w-full flex-col overflow-hidden rounded-[1.75rem] text-left shadow-[0_24px_70px_-28px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:ring-primary/50 hover:shadow-[0_50px_110px_-40px_rgba(217,42,205,0.6)]"
                  >
                    {/* Gradient frame backdrop - gives the whole card depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a2e] via-[#1c1420] to-[#0f0b13]" />

                    {/* Image fills most of the card */}
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={sample.image || "/placeholder.svg"}
                        alt={`Preview of ${sample.title}`}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />

                      {/* Scrim that fades the image bottom into the footer for a seamless blend */}
                      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#160f1a] via-[#160f1a]/70 to-transparent" />
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

                <DialogContent className="max-w-5xl overflow-hidden border-[#472444] bg-card p-0">
                  <div className="max-h-[88vh] overflow-y-auto">
                    {isCollection ? (
                      <div className="p-6 md:p-8">
                        <DialogHeader className="space-y-3 text-left">
                          <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            Tech knowledge: {level} &middot; {readers}
                          </span>
                          <DialogTitle className="text-2xl font-bold text-white text-balance">
                            {sample.title}
                          </DialogTitle>
                          <DialogDescription className="text-base leading-relaxed text-white/65 text-pretty">
                            {sample.caption}
                          </DialogDescription>
                        </DialogHeader>

                        {/* Help centers */}
                        <div className="mt-8">
                          <div className="flex items-center gap-2.5">
                            <LifeBuoy className="h-5 w-5 text-primary" />
                            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                              Help center
                            </h3>
                          </div>
                          <div className="mt-4 grid gap-3">
                            {helpCenters.map((hc) => (
                              <a
                                key={hc.name}
                                href={hc.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start justify-between gap-4 rounded-2xl border border-[#472444] bg-background/60 p-5 transition-colors hover:border-primary/60 hover:bg-primary/5"
                              >
                                <div>
                                  <p className="font-semibold text-white">{hc.name}</p>
                                  <p className="mt-1 text-sm leading-relaxed text-white/60 text-pretty">{hc.blurb}</p>
                                </div>
                                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-primary" />
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Media stories */}
                        <div className="mt-10">
                          <div className="flex items-center gap-2.5">
                            <Newspaper className="h-5 w-5 text-primary" />
                            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                              Technology stories in media
                            </h3>
                          </div>
                          <div className="mt-4 grid gap-5">
                            {mediaArticles.map((outlet) => (
                              <div
                                key={outlet.outlet}
                                className="rounded-2xl border border-[#472444] bg-background/60 p-5"
                              >
                                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                                  <p className="font-semibold text-white">{outlet.outlet}</p>
                                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                                    {outlet.reach}
                                  </p>
                                </div>
                                <ul className="mt-3 grid gap-2">
                                  {outlet.articles.map((article) => (
                                    <li key={article.label}>
                                      <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-2 text-sm leading-relaxed text-white/70 transition-colors hover:text-primary"
                                      >
                                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/30 transition-colors group-hover:text-primary" />
                                        <span className="text-pretty">{article.label}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* The actual sample */}
                        <div className="border-b border-[#472444] bg-background">
                          <img
                            src={sample.image || "/placeholder.svg"}
                            alt={`Full preview of ${sample.title}`}
                            className="w-full"
                          />
                        </div>

                        <DialogHeader className="space-y-3 p-6 text-left md:p-8">
                          <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            Tech knowledge: {level} &middot; {readers}
                          </span>
                          <DialogTitle className="text-2xl font-bold text-white text-balance">
                            {sample.title}
                          </DialogTitle>
                          <DialogDescription className="text-base leading-relaxed text-white/65 text-pretty">
                            {sample.caption}
                          </DialogDescription>
                          {sample.href && sample.href !== "#" && (
                            <a
                              href={sample.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                              View live example
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </DialogHeader>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </section>
  )
}
