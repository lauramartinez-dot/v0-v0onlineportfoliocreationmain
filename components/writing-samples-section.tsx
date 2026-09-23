"use client"

import { Code2, Users, Briefcase, Maximize2 } from "lucide-react"
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
    icon: Code2,
    label: "Highly technical",
    reader: "For developers",
    description: "Reference docs, SDK guides, and API specs written for people who ship code.",
    sample: {
      title: "API developer portal",
      caption:
        "A full API reference portal — authentication, endpoints, parameters, and copy-paste request examples documented end to end.",
      image: "/sample-api-portal.png",
      href: "#",
    },
  },
  {
    icon: Users,
    label: "Mildly technical",
    reader: "For consultants",
    description: "Explainers and integration guides for technical-adjacent teams.",
    sample: {
      title: "What is an API, and how do you work with it?",
      caption:
        "A plain-language explainer that gets a non-engineer from zero to understanding how two apps talk to each other — no CS degree required.",
      image: "/sample-api-explainer.png",
      href: "#",
    },
  },
  {
    icon: Briefcase,
    label: "Non-technical",
    reader: "For business users",
    description: "Help articles and release notes written without the jargon.",
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
    <section id="writing-samples" className="relative px-4 pt-24 pb-24 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Writing samples<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - matches the other main section titles */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />

          {/* Lead-in explaining the split */}
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-white/70 text-pretty">
            The same product, written three ways &mdash; matched to how technical the reader is. Click any sample to
            open it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {audiences.map(({ icon: Icon, label, reader, description, sample }) => (
            <Dialog key={label}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#472444] bg-card/50 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_28px_70px_-32px_rgba(217,42,205,0.5)]"
                >
                  {/* Cover image - a real preview of the sample */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={sample.image || "/placeholder.svg"}
                      alt={`Preview of ${sample.title}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Wash so the image sits in the card's palette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                    {/* Expand affordance */}
                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-white backdrop-blur-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-8 md:p-10">
                    {/* Group header - the audience this column speaks to */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="mt-6 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {label}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold leading-tight text-white text-balance">{reader}</h3>

                    <p className="mt-3 text-base font-medium leading-relaxed text-white/65 text-pretty">
                      {description}
                    </p>

                    {/* Featured sample title */}
                    <div className="mt-8 border-t border-[#472444] pt-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Sample</span>
                      <p className="mt-2 text-lg font-semibold leading-snug text-white/90 text-pretty transition-colors group-hover:text-primary">
                        {sample.title}
                      </p>
                    </div>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-4xl overflow-hidden border-[#472444] bg-card p-0">
                <div className="max-h-[85vh] overflow-y-auto">
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
                      {label} &middot; {reader}
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
