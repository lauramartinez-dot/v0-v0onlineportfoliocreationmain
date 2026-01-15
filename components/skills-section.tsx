import { Wrench, Globe } from "lucide-react"

const tools = [
  "Zendesk",
  "Confluence",
  "Notion",
  "Jira / Trello",
  "HTML and CSS",
  "API documentation",
  "Markdown",
  "Figma",
  "Gen AI tools (e.g., ChatGPT, Clueso)",
  "Google Slides / Sheets",
  "Tableau",
  "CAT tools",
]

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "C2" },
  { name: "German", level: "B2" },
  { name: "French", level: "A2" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/30 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Tools & Languages Row */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Tools */}
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="mb-3 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Tools</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{tools.join(", ")}</p>
          </div>

          {/* Languages */}
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
