"use client"

import { useState } from "react"
import { coreSkills } from "@/data/highlights"

function SkillCard({
  item,
}: {
  item: (typeof coreSkills)[number]
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      data-skill-title={item.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer rounded-xl bg-card border transition-all duration-300 ${isHovered
        ? "shadow-xl shadow-primary/20 scale-[1.03] border-primary/60 -translate-y-2"
        : "shadow-lg shadow-primary/5 border-border/70"
        }`}
    >
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/15 h-11 w-11 shadow-sm shadow-primary/10">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-foreground text-xl leading-tight">{item.title}</h3>
          </div>
        </div>
        {item.tools && item.tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.tools.map((tool, i) => (
              <span
                key={i}
                className="inline-block rounded-full bg-primary/8 border border-primary/15 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function SkillsCoreSection() {
  const column1Skills = coreSkills.filter((s) => s.column === 1)
  const column2Skills = coreSkills.filter((s) => s.column === 2)
  const column3Skills = coreSkills.filter((s) => s.column === 3)

  return (
    <section id="skills-core" className="relative px-4 overflow-hidden py-[70px]">
      {/* Purple gradient background - matching hero section style */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-purple-500/20" />
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-pink-500/25 via-purple-500/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            What I Do Best
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Me?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute left-0 right-0 -top-16 bottom-0 pointer-events-none">
            <div className="grid grid-cols-3 gap-8 h-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200/60 to-gray-200/70 dark:from-transparent dark:via-gray-800/50 dark:to-gray-800/60 rounded-lg" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200/60 to-gray-200/70 dark:from-transparent dark:via-gray-800/50 dark:to-gray-800/60 rounded-lg" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200/60 to-gray-200/70 dark:from-transparent dark:via-gray-800/50 dark:to-gray-800/60 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Column 1: A Foundation in Tech Journalism */}
          <div className="relative flex flex-col gap-4 pt-12 z-10">
            <div className="text-center mb-6 px-2">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                A Foundation in Tech Journalism
              </h3>
            </div>
            {column1Skills.map((skill, index) => (
              <SkillCard key={index} item={skill} />
            ))}
          </div>

          {/* Column 2: 3x Early Hire in Tech Scale-Ups */}
          <div className="relative flex flex-col gap-4 pt-12 z-10">
            <div className="text-center mb-6 px-2">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                3x Early Hire in Tech Scale-Ups
              </h3>
            </div>
            {column2Skills.map((skill, index) => (
              <SkillCard key={index} item={skill} />
            ))}
          </div>

          {/* Column 3: An International Career Across 4 Countries */}
          <div className="relative flex flex-col gap-4 pt-12 z-10">
            <div className="text-center mb-6 px-2">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                An International Career Across 4 Countries
              </h3>
            </div>
            {column3Skills.map((skill, index) => (
              <SkillCard key={index} item={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
