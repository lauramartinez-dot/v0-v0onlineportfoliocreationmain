import { CheckCircle2, FolderOpen, Sparkles } from "lucide-react"

const experiences = [
  {
    company: "Personio",
    role: "Senior Technical Writer",
    location: "Barcelona, Spain",
    period: "2021 - 2025",
    duration: "5 years",
    highlights: [
      "Scaled documentation to support the company's transition from scale-up to mature.",
      "First Technical Writer on a 10-person team to be promoted to Senior.",
      "Maintained a split focus: 80% senior-level strategy and 20% core technical writing.",
      "Mentored 10 teammates, resulting in one being promoted to our second Senior role.",
    ],
    aiAchievements: [
      "Leveraged AI tools (e.g., ChatGPT, Langdock, Clueso) to produce new articles and videos in under 4h.",
      "Created an AI assistant for Spanish translation review, reducing review time by 90%.",
      "Enabled the team to deprioritize 20% of feature release tasks with low audience impact.",
      "Enabled removal of 20% of outdated Help Center articles (+100), improving content relevance.",
      "Enabled the team to generate reports 30% faster by working with Data Analysts to enhance Tableau data.",
    ],
  },
  {
    company: "Personio",
    role: "Technical Writer",
    location: "Dresden, Germany",
    period: "2019 - 2021",
    duration: "2.5 years",
    highlights: [
      "Scaled documentation during scale-up hypergrowth (300 > 2,000 employees in 3 yrs).",
      "Joined a 3-writer, German-only team and helped scaled it into a 10-writer global team.",
      "Remote, globally distributed team across three countries: Ireland, Spain, and Germany.",
      "Created clear software documentation in English for a non-technical audience.",
      "Expanded English documentation from 3 languages to 6 via translation and localization.",
      "Collaborated daily with Product Managers, Content Designers and Localization Experts.",
    ],
  },
  {
    company: "Business Insider (Freelance)",
    role: "Freelance Tech Journalist",
    location: "Dresden, Germany",
    period: "2017 - 2021",
    duration: "4 years",
    highlights: [
      "Freelanced primarily for Business Insider Spain while working full-time in Tech Support.",
      "Wrote original articles on complex topics, ranging from emerging startups to aeronautics.",
      "Translated and localized U.S.-published articles from English to Spanish.",
      "One of my research-based original articles in Spanish was featured on the U.S. front page.",
      "Awarded a Journalism Research Grant by the Berlin Senate Chancellery in 2020.",
    ],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-4 py-16 relative overflow-hidden">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9931e7]/5 via-background to-[#6EC1E4]/5" />

      <div className="mx-auto max-w-3xl relative z-10">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#9931e7]/10 to-[#6EC1E4]/10 border border-[#9931e7]/20">
              <FolderOpen className="h-5 w-5 text-[#9931e7]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-3">Portfolio Highlights</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Key achievements and career milestones that showcase my experience and impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-6 pl-7 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-gradient-to-b before:from-[#9931e7] before:via-[#9931e7]/50 before:to-[#6EC1E4]">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div
                className="absolute -left-7 top-1 h-4 w-4 rounded-full border-2 bg-background"
                style={{
                  borderColor: index % 2 === 0 ? "#9931e7" : "#6EC1E4",
                }}
              />

              <div className="rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md hover:border-[#9931e7]/30">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground text-[15px]">{exp.role}</h3>
                    <p className="text-sm font-medium bg-gradient-to-r from-[#9931e7] to-[#6EC1E4] bg-clip-text text-transparent">
                      {exp.company}
                    </p>
                    <p className="text-xs text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-full bg-gradient-to-r from-[#9931e7]/10 to-[#6EC1E4]/10 border border-[#9931e7]/20 px-2.5 py-0.5 text-xs font-medium text-[#9931e7]">
                      {exp.period}
                    </span>
                    <p className="mt-1 text-xs text-muted-foreground">({exp.duration})</p>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6EC1E4]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {exp.aiAchievements && (
                  <div className="mt-3 rounded-md bg-gradient-to-br from-[#9931e7]/5 to-[#6EC1E4]/5 border border-[#9931e7]/10 p-3">
                    <p className="mb-1.5 text-sm font-semibold text-foreground flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#9931e7]" />
                      Built AI-powered, data-informed processes to optimize team operations:
                    </p>
                    <ul className="space-y-1.5">
                      {exp.aiAchievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 text-[#6EC1E4] font-bold">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
