import { ArrowUpRight } from "lucide-react"

// Placeholder samples - swap the titles, blurbs, tags, and hrefs for real published pieces.
const samples = [
  {
    tag: "API reference",
    title: "Authentication endpoints, documented end to end",
    description:
      "A full reference for a REST auth flow — request/response schemas, error codes, and copy-paste examples in three languages.",
    href: "#",
  },
  {
    tag: "Tutorial",
    title: "Getting started in under ten minutes",
    description:
      "A hands-on onboarding guide that takes a first-time user from install to their first successful call without getting lost.",
    href: "#",
  },
  {
    tag: "Concept guide",
    title: "How webhooks actually work",
    description:
      "An explainer that builds the mental model first, then shows the implementation — written for people who aren't developers.",
    href: "#",
  },
  {
    tag: "Blog",
    title: "Making complex tech approachable",
    description:
      "A piece on cutting jargon and gatekeeping out of technical content, and why clearer docs push knowledge further.",
    href: "#",
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
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {samples.map(({ tag, title, description, href }) => (
            <li key={title}>
              <a
                href={href}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-[#472444] bg-card/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_28px_70px_-32px_rgba(217,42,205,0.5)] md:p-10"
              >
                {/* Top hairline picks up the accent on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-full border border-primary/40 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                    {tag}
                  </span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-white/40 transition-colors duration-300 group-hover:text-primary" />
                </div>

                <h3 className="text-2xl font-bold leading-tight text-white text-balance md:text-[1.75rem]">
                  {title}
                </h3>

                <p className="text-lg font-medium leading-relaxed text-white/70 text-pretty">
                  {description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
