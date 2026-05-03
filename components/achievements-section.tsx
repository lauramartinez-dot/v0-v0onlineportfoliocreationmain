"use client"

import { Award, TrendingUp, Users, FileText, Globe, Zap } from "lucide-react"

const achievements = [
  {
    icon: TrendingUp,
    title: "8M+ Monthly Readers",
    description: "Wrote for tech publications reaching millions of readers worldwide",
  },
  {
    icon: Users,
    title: "3x Early Hire",
    description: "Joined three scale-ups as an early technical writing hire",
  },
  {
    icon: Globe,
    title: "4 Countries",
    description: "Lived and worked across Spain, France, Ireland, and Germany",
  },
  {
    icon: FileText,
    title: "15+ Years Experience",
    description: "Over a decade and a half making complex tech accessible",
  },
  {
    icon: Zap,
    title: "Scale-Up Specialist",
    description: "Helped companies grow from 100 to 1,000+ employees",
  },
  {
    icon: Award,
    title: "C2 English Proficiency",
    description: "Near-native English acquired through international experience",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            Why me? Because:
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Top Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-primary/15 p-6 shadow-lg shadow-purple-900/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
