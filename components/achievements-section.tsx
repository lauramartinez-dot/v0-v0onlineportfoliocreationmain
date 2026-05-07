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
    description: "Either as tech journalist or technical writer",
  },
  {
    stat: "200+",
    label: "articles written",
    description: "For major tech media including Business Insider",
  },
  {
    stat: "100+",
    label: "documentation pages",
    description: "Owned simultaneously at Personio",
  },
]

// Column 2: Building achievements (placeholder - update with your content)
const buildingAchievements = [
  {
    stat: "4x",
    label: "early hire",
    description: "Very specialised in scale ups",
  },
  {
    stat: "100+",
    label: "to 1,000+ employees",
    description: "Helped companies scale their documentation",
  },
  {
    stat: "15+",
    label: "years experience",
    description: "Making complex tech accessible",
  },
]

// Column 3: Translate achievements (placeholder - update with your content)
const translateAchievements = [
  {
    stat: "4",
    label: "countries",
    description: "Lived and worked across Spain, France, Ireland, and Germany",
  },
  {
    stat: "C2",
    label: "English proficiency",
    description: "Near-native English through international experience",
  },
  {
    stat: "8M+",
    label: "monthly readers",
    description: "Tech publications reaching millions worldwide",
  },
]

export function AchievementsSection() {
  return (
    <section id="top-achievements" className="relative py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <p className="text-[21px] text-foreground/90 leading-relaxed mb-12 text-center">
          Some things I&apos;m proud of:
        </p>

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
                
                {/* Content - clean stat layout */}
                <div className="relative flex flex-col items-center justify-center px-6 py-6 text-center">
                  <span className="text-4xl md:text-5xl font-bold text-primary mb-1">
                    {achievement.stat}
                  </span>
                  <span className="text-lg font-medium text-foreground mb-2">
                    {achievement.label}
                  </span>
                  <p className="text-sm text-foreground/60">
                    {achievement.description}
                  </p>
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
                
                {/* Content - clean stat layout */}
                <div className="relative flex flex-col items-center justify-center px-6 py-6 text-center">
                  <span className="text-4xl md:text-5xl font-bold text-primary mb-1">
                    {achievement.stat}
                  </span>
                  <span className="text-lg font-medium text-foreground mb-2">
                    {achievement.label}
                  </span>
                  <p className="text-sm text-foreground/60">
                    {achievement.description}
                  </p>
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
                
                {/* Content - clean stat layout */}
                <div className="relative flex flex-col items-center justify-center px-6 py-6 text-center">
                  <span className="text-4xl md:text-5xl font-bold text-primary mb-1">
                    {achievement.stat}
                  </span>
                  <span className="text-lg font-medium text-foreground mb-2">
                    {achievement.label}
                  </span>
                  <p className="text-sm text-foreground/60">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
