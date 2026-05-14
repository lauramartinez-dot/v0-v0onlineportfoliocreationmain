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
    image: "/3d-graph-computer-illustration.jpg",
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
      <div className="relative flex items-center justify-center px-6 py-6 min-h-[80px]">
        <h4 className="font-semibold text-foreground text-xl md:text-2xl leading-tight text-center group-hover:text-primary transition-colors duration-300">
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

function DiagonalSplitColumn({ 
  topGroups, 
  bottomGroups 
}: { 
  topGroups: { label: string; tools: string[] }[]
  bottomGroups: { label: string; tools: string[] }[]
}) {
  return (
    <div className="relative">
      {/* Top half */}
      <div className="relative rounded-t-2xl border border-b-0 border-primary/20 bg-card/50 p-4 pb-8">
        {topGroups.map((group, gi) => (
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
      
      {/* Diagonal divider */}
      <div className="relative h-12 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,100 0,0" className="fill-card/50" />
          <polygon points="0,0 100,100 0,100" className="fill-primary/5" />
          <line x1="0" y1="0" x2="100" y2="100" className="stroke-primary/30" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      
      {/* Bottom half */}
      <div className="relative rounded-b-2xl border border-t-0 border-primary/20 bg-primary/5 p-4 pt-4">
        {bottomGroups.map((group, gi) => (
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
  )
}

export function TopSkillsSection() {
  return (
    <section id="top-skills" className="relative px-4 py-24 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Skills and tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: I write - with diagonal split */}
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
            <DiagonalSplitColumn
              topGroups={toolColumns.find((c) => c.column === 1)?.groups.slice(0, 2) || []}
              bottomGroups={toolColumns.find((c) => c.column === 1)?.groups.slice(2) || []}
            />
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
