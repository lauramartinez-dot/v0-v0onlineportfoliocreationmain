"use client"

import Image from "next/image"
import { toolColumns } from "@/data/highlights"

// Column header images
const columnHeaders = [
  {
    title: "I write",
    image: "/vr-person-blue-tech.png",
  },
  {
    title: "I build",
    image: "/startup-workspace.jpg",
  },
  {
    title: "I translate",
    image: "/still-life-supply-chain.jpg",
  },
]

function ToolCard({ tool }: { tool: string }) {
  return (
    <div className="group relative rounded-2xl bg-card border border-primary/15 hover:border-primary/40 transition-all duration-300 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Content */}
      <div className="relative flex items-center justify-center px-6 py-5 min-h-[70px]">
        <h4 className="font-semibold text-foreground text-lg leading-tight text-center group-hover:text-primary transition-colors duration-300">
          {tool}
        </h4>
      </div>
    </div>
  )
}

function GroupLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px flex-1 bg-primary/20" />
      <span className="text-sm font-medium text-primary/70 uppercase tracking-wider whitespace-nowrap">
        {label}
      </span>
      <div className="h-px flex-1 bg-primary/20" />
    </div>
  )
}

export function TopSkillsSection() {
  return (
    <section id="top-skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-[21px] text-foreground/90 leading-relaxed mb-12 text-center">
          The skills and tools I use the most:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: I write */}
          <div className="flex flex-col">
            {/* Image header card */}
            <div className="group relative h-[100px] overflow-hidden rounded-xl shadow-lg mb-4">
              <Image
                src={columnHeaders[0].image}
                alt={columnHeaders[0].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            {toolColumns
              .find((c) => c.column === 1)
              ?.groups.map((group, gi) => (
                <div key={gi}>
                  <GroupLabel label={group.label} />
                  <div className="flex flex-col gap-3">
                    {group.tools.map((tool, ti) => (
                      <ToolCard key={ti} tool={tool} />
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Column 2: I build */}
          <div className="flex flex-col">
            {/* Image header card */}
            <div className="group relative h-[100px] overflow-hidden rounded-xl shadow-lg mb-4">
              <Image
                src={columnHeaders[1].image}
                alt={columnHeaders[1].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            {toolColumns
              .find((c) => c.column === 2)
              ?.groups.map((group, gi) => (
                <div key={gi}>
                  <GroupLabel label={group.label} />
                  <div className="flex flex-col gap-3">
                    {group.tools.map((tool, ti) => (
                      <ToolCard key={ti} tool={tool} />
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Column 3: I translate */}
          <div className="flex flex-col">
            {/* Image header card */}
            <div className="group relative h-[100px] overflow-hidden rounded-xl shadow-lg mb-4">
              <Image
                src={columnHeaders[2].image}
                alt={columnHeaders[2].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            {toolColumns
              .find((c) => c.column === 3)
              ?.groups.map((group, gi) => (
                <div key={gi}>
                  <GroupLabel label={group.label} />
                  <div className="flex flex-col gap-3">
                    {group.tools.map((tool, ti) => (
                      <ToolCard key={ti} tool={tool} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
