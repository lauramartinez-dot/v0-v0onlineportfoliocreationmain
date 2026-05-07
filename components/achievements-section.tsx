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
    <section id="top-achievements" className="relative py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Top Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: I write */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[26.95px] font-bold text-white text-center mb-2">I write</h3>
            {achievements.slice(0, 2).map((achievement, index) => (
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
          
          {/* Column 2: I build */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[26.95px] font-bold text-white text-center mb-2">I build</h3>
            {achievements.slice(2, 4).map((achievement, index) => (
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
          
          {/* Column 3: I translate */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[26.95px] font-bold text-white text-center mb-2">I translate</h3>
            {achievements.slice(4, 6).map((achievement, index) => (
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
