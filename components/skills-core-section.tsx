"use client"

import { useState } from "react"
import { coreSkills, beyondCoreSkills } from "@/data/highlights"

function HoverExpandableCard({
  item,
}: {
  item: (typeof coreSkills)[number] | (typeof beyondCoreSkills)[number]
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      data-skill-title={item.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer rounded-xl bg-card border transition-all duration-300 ${
        isHovered
          ? "shadow-xl shadow-primary/20 scale-[1.03] border-primary/60 -translate-y-2"
          : "shadow-lg shadow-primary/5 border-border/70"
      }`}
    >
      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="flex shrink-0 items-center justify-center rounded-lg bg-primary/15 h-11 w-11 shadow-sm shadow-primary/10">
            <item.icon className="h-5 w-5 text-primary" />
          </div>

          <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-foreground text-xl leading-tight">{item.title}</h3>
          </div>
        </div>
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
        {/* Large blurred orbs */}
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-pink-500/25 via-purple-500/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            What I Do Best
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Top Skills &amp; Tools </h2>
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

          {/* Column 1: Under Journalist Background (Unique Background) */}
          <div className="relative flex flex-col gap-4 pt-12 z-10">
            <div className="text-center mb-6 px-2">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                Unique Background in Tech Journalism
              </h3>
            </div>
            {column1Skills.map((skill, index) => (
              <HoverExpandableCard key={index} item={skill} />
            ))}
          </div>

          {/* Column 2: Under Early-Stage Expert */}
          <div className="relative flex flex-col gap-4 pt-12 z-10">
            <div className="text-center mb-6 px-2">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                10 Years Focused on Early-Stage Tech
              </h3>
            </div>
            {column2Skills.map((skill, index) => (
              <HoverExpandableCard key={index} item={skill} />
            ))}
          </div>

          {/* Column 3: Under Global Career (International Experience) */}
          <div className="relative flex flex-col gap-4 pt-12 z-10">
            <div className="text-center mb-6 px-2">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                International Career In 4 Countries
              </h3>
            </div>
            {column3Skills.map((skill, index) => (
              <HoverExpandableCard key={index} item={skill} />
            ))}
            {beyondCoreSkills.map((skill, index) => (
              <HoverExpandableCard key={`beyond-${index}`} item={skill} />
            ))}
          </div>
        </div>

        {/* ... existing code for tools section ... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 relative z-10">
          {/* Column 1: Journalist-related tools + Technical knowledge */}
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                Documentation Tools
              </h3>
            </div>
            <div className="rounded-xl border border-border/50 bg-card shadow-md shadow-black/5 dark:shadow-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-border">
              <div className="flex flex-col gap-2">
                {[
                  "Content Management Systems",
                  "SEO",
                  "HTML / CSS / Markdown",
                  "Grammarly / LanguageTool",
                  "Adobe InDesign / Photoshop",
                  "ChatGPT, Clueso (Gen AI tools)",
                  "Zendesk, Confluence (Knowledge Base)",
                  "GitHub (Version Control)",
                  "Lucidchart, Draw.io (Diagramming)",
                  "JavaScript basics (Programming)",
                  "v0.app (AI-Assisted Development)",
                ].map((tool, index) => {
                  const parenIndex = tool.indexOf("(")
                  if (parenIndex === -1) {
                    return (
                      <span key={index} className="font-medium text-foreground">
                        {tool}
                      </span>
                    )
                  }
                  const name = tool.substring(0, parenIndex).trim()
                  const info = tool.substring(parenIndex)

                  return (
                    <span key={index}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground/50"> {info}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Technical documentation tools */}
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                Collaboration Tools
              </h3>
            </div>
            <div className="flex-1 rounded-xl border border-border/50 bg-card shadow-md shadow-black/5 dark:shadow-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-border">
              <div className="flex flex-col gap-2">
                {[
                  "Slack",
                  "Notion",
                  "Jira",
                  "Figma",
                  "Trello / Monday.com",
                  "Zoom / Google Meet",
                  "Google Slides / Sheets / Docs",
                  "Miro (Workshop organization)",
                  "Tableau (Data Analytics)",
                ].map((tool, index) => {
                  const parenIndex = tool.indexOf("(")
                  if (parenIndex === -1) {
                    return (
                      <span key={index} className="font-medium text-foreground">
                        {tool}
                      </span>
                    )
                  }
                  const name = tool.substring(0, parenIndex).trim()
                  const info = tool.substring(parenIndex)

                  return (
                    <span key={index}>
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground/50"> {info}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Column 3: Languages + CAT tools */}
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">Languages</h3>
            </div>
            <div className="rounded-xl border border-border/50 bg-card shadow-md shadow-black/5 dark:shadow-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-border">
              <div className="flex flex-col gap-3">
                {[
                  { name: "Spanish", level: "Native" },
                  { name: "English", level: "C2" },
                  { name: "German", level: "B2" },
                  { name: "French", level: "A2" },
                ].map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary border border-primary/20">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-6">
              <h3 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                Translation Tools
              </h3>
            </div>
            <div className="flex-1 rounded-xl border border-border/50 bg-card shadow-md shadow-black/5 dark:shadow-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-border">
              <div className="flex flex-col gap-2">
                <span className="font-medium text-foreground">Phrase</span>
                <span className="font-medium text-foreground">Smartling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
