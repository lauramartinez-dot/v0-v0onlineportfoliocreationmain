import { ArrowUpRight, Code2, Users, Briefcase } from "lucide-react"

// Samples grouped by how technical the intended reader is.
// Swap the titles and hrefs for real published pieces; the three groups themselves stay fixed.
const audiences = [
  {
    icon: Code2,
    label: "Highly technical",
    reader: "For developers",
    description: "Reference docs, SDK guides, and API specs written for people who ship code.",
    samples: [
      { title: "Authentication endpoints, documented end to end", href: "#" },
      { title: "SDK quickstart: install to first call", href: "#" },
      { title: "Webhook payloads and retry semantics", href: "#" },
    ],
  },
  {
    icon: Users,
    label: "Mildly technical",
    reader: "For consultants",
    description: "Implementation playbooks and integration guides for technical-adjacent teams.",
    samples: [
      { title: "Integration playbook for solution partners", href: "#" },
      { title: "Configuring the platform for a new client", href: "#" },
      { title: "Data migration checklist and rollback plan", href: "#" },
    ],
  },
  {
    icon: Briefcase,
    label: "Non-technical",
    reader: "For business users",
    description: "Explainers, help articles, and release notes written without the jargon.",
    samples: [
      { title: "How webhooks actually work", href: "#" },
      { title: "Getting started without touching code", href: "#" },
      { title: "What changed this release, in plain English", href: "#" },
    ],
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
            The same product, written three ways &mdash; matched to how technical the reader is.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {audiences.map(({ icon: Icon, label, reader, description, samples }) => (
            <div
              key={label}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#472444] bg-card/50 p-8 transition-all duration-300 hover:border-primary/50 md:p-10"
            >
              {/* Top hairline picks up the accent on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Group header - the audience this column speaks to */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                <Icon className="h-6 w-6" />
              </div>

              <span className="mt-6 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {label}
              </span>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white text-balance">{reader}</h3>

              <p className="mt-3 text-base font-medium leading-relaxed text-white/65 text-pretty">{description}</p>

              {/* The samples for this audience */}
              <ul className="mt-8 flex flex-col gap-3 border-t border-[#472444] pt-6">
                {samples.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="group/link flex items-start justify-between gap-3 rounded-lg py-1 text-left transition-colors"
                    >
                      <span className="text-base font-medium leading-snug text-white/85 text-pretty transition-colors group-hover/link:text-primary">
                        {title}
                      </span>
                      <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-white/30 transition-colors group-hover/link:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
