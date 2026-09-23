"use client"

import { Maximize2 } from "lucide-react"
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
    readers: "devs, architects",
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
    readers: "consultants, technical PMs",
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
    readers: "business users",
    sample: {
      title: "Product help center",
      caption:
        "A searchable help center — category landing pages, getting-started guides, and troubleshooting articles written for everyday users.",
      image: "/sample-help-center.png",
      href: "#",
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
            The same topic, written three ways &mdash; matched to how technical the reader is. Click any sample to open
            it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          {audiences.map(({ level, readers, sample }) => (
            <Dialog key={level}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group relative flex aspect-[3/4.4] w-full flex-col overflow-hidden rounded-[2rem] bg-[#f6f4f0] p-3 text-left shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:ring-primary/40 hover:shadow-[0_44px_100px_-40px_rgba(217,42,205,0.5)]"
                >
                  {/* Image fills most of the card, framed by the light card */}
                  <div className="relative flex-1 overflow-hidden rounded-[1.4rem]">
                    <img
                      src={sample.image || "/placeholder.svg"}
                      alt={`Preview of ${sample.title}`}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />

                    {/* Expand affordance */}
                    <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/70 text-white backdrop-blur-md ring-1 ring-white/15 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Maximize2 className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Minimal label on the cream footer - technicality is the main text */}
                  <div className="w-full px-5 pb-4 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8391]">Technical audience</p>
                    <p className="mt-1.5 text-3xl font-bold leading-none text-primary md:text-4xl">{level}</p>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#6b6472]">({readers})</p>
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
                      Technical audience: {level} &middot; {readers}
                    </span>
                    <DialogTitle className="text-2xl font-bold text-white text-balance">{sample.title}</DialogTitle>
                    <DialogDescription className="text-base leading-relaxed text-white/65 text-pretty">
                      {sample.caption}
                    </DialogDescription>
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
