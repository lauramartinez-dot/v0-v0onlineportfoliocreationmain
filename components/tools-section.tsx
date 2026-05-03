"use client"

const toolCategories = [
  {
    category: "Writing & Publishing",
    tools: ["SEO", "CMS", "HTML/CSS/Markdown", "Grammarly/LanguageTool", "Adobe InDesign/Photoshop"],
  },
  {
    category: "Documentation",
    tools: ["Zendesk", "Confluence", "Brandfolder", "Frontify"],
  },
  {
    category: "AI & Automation",
    tools: ["ChatGPT/Claude", "v0.app", "Loveable", "Clueso"],
  },
  {
    category: "Project Management",
    tools: ["Jira", "Trello", "Monday.com", "Miro"],
  },
  {
    category: "Design & Diagrams",
    tools: ["Figma", "Lucidchart", "Draw.io", "Adobe Photoshop"],
  },
  {
    category: "Localization",
    tools: ["Phrase", "Smartling", "Translation Management"],
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Top Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="inline-block rounded-full bg-card border border-primary/20 px-4 py-2 text-sm font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
