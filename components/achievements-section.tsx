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
    image: "/startup-workspace.jpg",
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
    label: "years writing about tech",
    description: "Former Tech Journalist",
  },
  {
    stat: "200+",
    label: "articles written",
    description: "For major tech media including Business Insider",
  },
  {
    stat: "100+",
    label: "documentation pages written",
    description: "For international software companies",
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
    stat: "5+",
    label: "years as Technical Writer",
    description: "For international software companies",
  },
  {
    stat: "4x",
    label: "early hire",
    description: "Specialised in scale-ups and founding roles",
  },
]

// Column 3: Translate achievements
const translateAchievements = [
  {
    stat: "C2",
    label: "English proficiency",
    description: "Near-native English writing and speaking",
  },
  {
    stat: "3",
    label: "languages spoken weekly",
    description: "English & Spanish bilingual, German B2",
  },
  {
    stat: "7+",
    label: "years translating",
    description: "English > Spanish content",
  },
]

export function AchievementsSection() {
  return (
    <section id="top-achievements" className="relative py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <p className="text-[21px] text-foreground/90 leading-relaxed mb-12 text-center">
          My work in numbers:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {/* Image header card - thin subtle style, no text */}
            <div className="group relative h-[100px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={columnHeaders[0].image}
                alt={columnHeaders[0].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/25 via-purple-500/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            {writingAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-card border border-primary/15 shadow-lg shadow-purple-900/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                {/* Content - horizontal stat layout with fixed widths */}
                <div className="relative flex items-start gap-6 px-8 py-8">
                  <span className="text-5xl md:text-6xl font-bold text-primary min-w-[140px] text-right shrink-0 leading-none">
                    {achievement.stat}
                  </span>
                  <div className="flex flex-col flex-1 pt-2">
                    <span className="text-2xl font-semibold text-foreground leading-tight">
                      {achievement.label}
                    </span>
                    <p className="text-base text-foreground/60 mt-1 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {/* Image header card - thin subtle style, no text */}
            <div className="group relative h-[100px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={columnHeaders[1].image}
                alt={columnHeaders[1].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/40 via-purple-500/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            {buildingAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-card border border-primary/15 shadow-lg shadow-purple-900/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                {/* Content - horizontal stat layout with fixed widths */}
                <div className="relative flex items-start gap-6 px-8 py-8">
                  <span className="text-5xl md:text-6xl font-bold text-primary min-w-[140px] text-right shrink-0 leading-none">
                    {achievement.stat}
                  </span>
                  <div className="flex flex-col flex-1 pt-2">
                    <span className="text-2xl font-semibold text-foreground leading-tight">
                      {achievement.label}
                    </span>
                    <p className="text-base text-foreground/60 mt-1 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {/* Image header card - thin subtle style, no text */}
            <div className="group relative h-[100px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={columnHeaders[2].image}
                alt={columnHeaders[2].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/25 via-purple-500/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            {translateAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-card border border-primary/15 shadow-lg shadow-purple-900/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                {/* Content - horizontal stat layout with fixed widths */}
                <div className="relative flex items-start gap-6 px-8 py-8">
                  <span className="text-5xl md:text-6xl font-bold text-primary min-w-[140px] text-right shrink-0 leading-none">
                    {achievement.stat}
                  </span>
                  <div className="flex flex-col flex-1 pt-2">
                    <span className="text-2xl font-semibold text-foreground leading-tight">
                      {achievement.label}
                    </span>
                    <p className="text-base text-foreground/60 mt-1 leading-relaxed">
                      {achievement.description}
                    </p>
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
