"use client"

import { Award, TrendingUp, Users, FileText, Globe, Zap, PenTool, Newspaper, BookOpen } from "lucide-react"
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
    icon: PenTool,
    title: "15 Years Writing About Tech",
    description: "Either as tech journalist or technical writer",
  },
  {
    icon: Newspaper,
    title: "200+ Articles Written",
    description: "For major tech media including Business Insider",
  },
  {
    icon: BookOpen,
    title: "100+ Documentation Pages",
    description: "Owned simultaneously across products",
  },
]

// Column 2: Building achievements (placeholder - update with your content)
const buildingAchievements = [
  {
    icon: Users,
    title: "3x Early Hire",
    description: "Joined three scale-ups as an early technical writing hire",
  },
  {
    icon: Zap,
    title: "Scale-Up Specialist",
    description: "Helped companies grow from 100 to 1,000+ employees",
  },
  {
    icon: FileText,
    title: "15+ Years Experience",
    description: "Over a decade and a half making complex tech accessible",
  },
]

// Column 3: Translate achievements (placeholder - update with your content)
const translateAchievements = [
  {
    icon: Globe,
    title: "4 Countries",
    description: "Lived and worked across Spain, France, Ireland, and Germany",
  },
  {
    icon: Award,
    title: "C2 English Proficiency",
    description: "Near-native English acquired through international experience",
  },
  {
    icon: TrendingUp,
    title: "8M+ Monthly Readers",
    description: "Wrote for tech publications reaching millions of readers worldwide",
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
                
                {/* Content */}
                <div className="relative flex flex-col items-center justify-center px-6 py-8 min-h-[140px] text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <achievement.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-[21px] text-purple-100 leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {achievement.description}
                  </p>
                </div>
                
                {/* Bottom subtle glow on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-300 pointer-events-none" />
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
                
                {/* Content */}
                <div className="relative flex flex-col items-center justify-center px-6 py-8 min-h-[140px] text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <achievement.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-[21px] text-purple-100 leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {achievement.description}
                  </p>
                </div>
                
                {/* Bottom subtle glow on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-300 pointer-events-none" />
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
                
                {/* Content */}
                <div className="relative flex flex-col items-center justify-center px-6 py-8 min-h-[140px] text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <achievement.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-[21px] text-purple-100 leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {achievement.description}
                  </p>
                </div>
                
                {/* Bottom subtle glow on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
