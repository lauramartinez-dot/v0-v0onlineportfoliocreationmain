"use client"

import { toolColumns } from "@/data/highlights"

function ToolCard({ tool }: { tool: string }) {
  // Check if this is a split tool (contains " / ")
  if (tool.includes(" / ")) {
    const [first, second] = tool.split(" / ")
    return (
      <div className="flex flex-col gap-3">
        {/* First card */}
        <div className="group relative rounded-2xl bg-card border border-primary/15 hover:border-primary/40 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="relative flex items-center justify-center px-6 py-6 min-h-[80px]">
            <h4 className="font-semibold text-foreground text-xl md:text-2xl leading-tight text-center group-hover:text-primary transition-colors duration-300">
              {first}
            </h4>
          </div>
        </div>
        {/* Second card */}
        <div className="group relative rounded-2xl bg-card border border-primary/15 hover:border-primary/40 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="relative flex items-center justify-center px-6 py-6 min-h-[80px]">
            <h4 className="font-semibold text-foreground text-xl md:text-2xl leading-tight text-center group-hover:text-primary transition-colors duration-300">
              {second}
            </h4>
          </div>
        </div>
      </div>
    )
  }

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

export function TopSkillsSection() {
  return (
    <section id="top-skills" className="relative px-4 pt-32 pb-24 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            What I&apos;ve used<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - matches the other main section titles */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: I write */}
          <div className="flex flex-col">
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
