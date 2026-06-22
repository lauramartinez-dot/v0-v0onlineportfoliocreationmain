"use client"

import Image from "next/image"

// Column header images - same as skills section
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

// Column 1: Writing achievements
const writingAchievements = [
  {
    stat: "15",
    label: "years writing about technology non-stop",
  },
  {
    stat: "200+",
    label: "articles written as a former Tech Journalist",
  },
  {
    stat: "100+",
    label: "documentation pages written",
  },
  {
    stat: "5+",
    label: "audiences written for",
    description: "From media readers to software users"
  },
]

// Column 2: Building achievements
const buildingAchievements = [
  {
    stat: "10",
    label: "years in the tech industry",
    description: "Across Ireland, Germany and Spain",
  },
  {
    stat: "5+",
    label: "years as a Technical Writer",
    description: "Including 2+ years as a Senior",
  },
  {
    stat: "4x",
    label: "early hire",
    description: "Specialised in scale-ups and founding roles",
  },
  {
    stat: "10x",
    label: "team growth supported",
    description: "Across several companies",
  },
]

// Column 3: Translate achievements
const translateAchievements = [
  {
    stat: "C2",
    label: "English proficiency",
    description: "Near-native\nEnglish writing",
  },
  {
    stat: "3",
    label: "languages spoken weekly",
    description: "English, Spanish, and German",
  },
  {
    stat: "8+",
    label: "years translating",
    description: "English > Spanish documentation",
  },
  {
    stat: "8+",
    label: "years in remote-first teams",
    description: "Globally distributed teams",
  },
]

export function AchievementsSection() {
  return (
    <section id="top-achievements" className="relative pt-24 pb-2 px-4 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">What I'm proud of</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Writing */}
          <div className="flex flex-col gap-4">
            {/* Image header card - thin subtle style, no text */}
            <div className="group relative h-[100px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={columnHeaders[0].image}
                alt={columnHeaders[0].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            {writingAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/30 hover:border-primary/60 hover:shadow-[0_8px_40px_-8px_rgba(200,80,192,0.45)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                {/* Glow accent */}
                <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content - horizontal stat layout with fixed widths */}
                <div className="relative flex items-start gap-6 px-8 py-8">
                  <span className="text-6xl md:text-7xl font-extrabold text-primary min-w-[150px] text-right shrink-0 leading-none drop-shadow-[0_0_25px_rgba(200,80,192,0.55)]">
                    {achievement.stat}
                  </span>
                  <div className="flex flex-col flex-1 justify-center">
                    <span className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                      {achievement.label}
                      {achievement.description
                        ? `, ${achievement.description.replace(/\n/g, " ").toLowerCase()}`
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 - Building */}
          <div className="flex flex-col gap-4">
            {/* Image header card - thin subtle style, no text */}
            <div className="group relative h-[100px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={columnHeaders[1].image}
                alt={columnHeaders[1].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            {buildingAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/30 hover:border-primary/60 hover:shadow-[0_8px_40px_-8px_rgba(200,80,192,0.45)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                {/* Glow accent */}
                <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content - horizontal stat layout with fixed widths */}
                <div className={`relative flex items-start gap-6 px-8 py-8 ${index === 2 ? 'pb-[38px]' : ''}`}>
                  <span className="text-6xl md:text-7xl font-extrabold text-primary min-w-[150px] text-right shrink-0 leading-none drop-shadow-[0_0_25px_rgba(200,80,192,0.55)]">
                    {achievement.stat}
                  </span>
                  <div className="flex flex-col flex-1 justify-center">
                    <span className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                      {achievement.label}
                      {achievement.description
                        ? `, ${achievement.description.replace(/\n/g, " ").toLowerCase()}`
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 - Translate */}
          <div className="flex flex-col gap-4">
            {/* Image header card - thin subtle style, no text */}
            <div className="group relative h-[100px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={columnHeaders[2].image}
                alt={columnHeaders[2].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            {translateAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/30 hover:border-primary/60 hover:shadow-[0_8px_40px_-8px_rgba(200,80,192,0.45)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                {/* Glow accent */}
                <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content - horizontal stat layout with fixed widths */}
                <div className="relative flex items-start gap-6 px-8 py-8">
                  <span className="text-6xl md:text-7xl font-extrabold text-primary min-w-[150px] text-right shrink-0 leading-none drop-shadow-[0_0_25px_rgba(200,80,192,0.55)]">
                    {achievement.stat}
                  </span>
                  <div className="flex flex-col flex-1 justify-center">
                    <span className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
                      {achievement.label}
                      {achievement.description
                        ? `, ${achievement.description.replace(/\n/g, " ").toLowerCase()}`
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
