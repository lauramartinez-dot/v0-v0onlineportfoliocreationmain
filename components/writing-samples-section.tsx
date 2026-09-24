"use client"

import { Maximize2, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

// Each audience column showcases one real sample. Clicking the card opens a
// full preview of the actual piece. Swap the image/title/href for real work.
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
    sample: {
      title: "Personio Help Center",
      caption:
        "A searchable help center — category landing pages, getting-started guides, and troubleshooting articles written for everyday users. This is the live Personio Help Center I contributed to.",
      image: "/sample-help-center.png",
      href: "https://support.personio.de/hc/es",
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
          {audiences.map(({ level, readers, sample }) => (
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
                    <DialogTitle className="text-2xl font-bold text-white text-balance">{sample.title}</DialogTitle>
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
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
