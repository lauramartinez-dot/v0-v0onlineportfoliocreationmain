"use client"

import { useState } from "react"
import Image from "next/image"
import { FileText, ExternalLink, Video, Newspaper, Mail, HelpCircle, Pen } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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
    label: "years as a Tech Writer",
    description: "Including 2+ years as a Senior",
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
    description: "English & Spanish C2, German B2",
  },
  {
    stat: "7+",
    label: "years translating",
    description: "English > Spanish content",
  },
]

// Writing samples data
interface WritingSample {
  title: string
  url: string
  company: string
}

interface ContentTypeData {
  id: string
  name: string
  description: string
  icon: any
  image: string
  audience: string
  samples: WritingSample[]
}

const contentTypes: ContentTypeData[] = [
  {
    id: "user-facing-pages",
    name: "User-facing documentation",
    description: "Step-by-step instructions and conceptual documentation for end users",
    icon: HelpCircle,
    image: "/user-facing-example.png",
    audience: "Business Users",
    samples: [
      {
        title: "Overview of permissions and employee roles",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        company: "Personio",
      },
      {
        title: "Summary of the homepage cards",
        url: "https://support.personio.de/hc/en-us/articles/360001268369-Summary-of-the-homepage-cards",
        company: "Personio",
      },
      {
        title: "Grant permissions for everyday tasks",
        url: "https://support.personio.de/hc/en-us/articles/28054432299549-Grant-permissions-for-everyday-tasks-in-Personio",
        company: "Personio",
      },
    ],
  },
  {
    id: "internal-facing-pages",
    name: "Internal-facing documentation",
    description: "Internal documentation and knowledge base articles for teams",
    icon: FileText,
    image: "/internal-facing-example.png",
    audience: "Internal Teams",
    samples: [],
  },
  {
    id: "video-content",
    name: "Video content",
    description: "Educational videos and tutorials in multiple languages",
    icon: Video,
    image: "/video-example-personio.png",
    audience: "Business Users",
    samples: [
      {
        title: "Overview of permissions and employee roles (English)",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        company: "Personio",
      },
      {
        title: "Overview of permissions and employee roles (German)",
        url: "https://support.personio.de/hc/de/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        company: "Personio",
      },
      {
        title: "Overview of the Analytics area (English)",
        url: "https://support.personio.de/hc/en-us/articles/15717723889437-Overview-of-the-Analytics-area",
        company: "Personio",
      },
      {
        title: "Overview of the Analytics area (German)",
        url: "https://support.personio.de/hc/de/articles/15717723889437-%C3%9Cberblick-%C3%BCber-den-Bereich-Analysen",
        company: "Personio",
      },
    ],
  },
  {
    id: "ux-writing",
    name: "UX writing",
    description: "In-product copy, microcopy, and user interface text",
    icon: Pen,
    image: "/ux-writing-example.png",
    audience: "Business Users",
    samples: [],
  },
  {
    id: "newsletter",
    name: "Newsletter",
    description: "Product updates, announcements, and engagement communications",
    icon: Mail,
    image: "/newsletter-example.png",
    audience: "Business Users",
    samples: [],
  },
  {
    id: "release-notes",
    name: "Release notes",
    description: "Product updates and feature announcements",
    icon: Mail,
    image: "/release-notes-example.png",
    audience: "Business Users",
    samples: [
      {
        title: "Personio product updates",
        url: "https://web.archive.org/web/20260308130635/https://support.personio.de/hc/en-us/articles/6018676072733-Personio-Product-Updates",
        company: "Personio",
      },
    ],
  },
  {
    id: "journalism",
    name: "Foundational tech journalism writing",
    description: "Science and technology articles for leading publications",
    icon: Newspaper,
    image: "/tech-journalism-example.png",
    audience: "General Public",
    samples: [
      {
        title: "A day in the life of an online content moderator",
        url: "https://www.businessinsider.com/a-day-in-the-life-of-an-online-content-moderator-2019-6",
        company: "Business Insider Spain",
      },
      {
        title: "Working at tech companies in Dublin: free beer and laundry",
        url: "https://www.businessinsider.es/wework-dublin-trabaja-cerveza-gratis-oficina-435405147000",
        company: "Business Insider Spain",
      },
      {
        title: "Why we still don't fully understand how planes stay in the air",
        url: "https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire",
        company: "Xataka",
      },
      {
        title: "First evidence of cosmic inflation found",
        url: "https://www.muyinteresante.es/ciencia/articulo/hallan-la-primera-evidencia-de-la-expansion-del-universo-131395147000",
        company: "Muy Interesante",
      },
      {
        title: "What would happen if we traveled at the speed of light?",
        url: "https://www.muyinteresante.es/ciencia/articulo/que-nos-pasaria-si-viajaramos-a-la-velocidad-de-la-luz-131395147000",
        company: "Muy Interesante",
      },
      {
        title: "Spanish satellite Deimos-2 is now in orbit",
        url: "https://www.muyinteresante.es/ciencia/articulo/el-satelite-espanol-deimos-2-esta-ya-en-orbita-341403272930",
        company: "Muy Interesante",
      },
    ],
  },
]

const SampleCard = ({ sample }: { sample: WritingSample }) => {
  return (
    <a
      href={sample.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-4 rounded-xl border border-primary/20 bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 ring-1 ring-primary/20">
        <FileText className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {sample.title}
        </h4>
        <p className="text-sm text-foreground/50 mt-1">{sample.company}</p>
      </div>
      <ExternalLink className="h-4 w-4 text-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-1" />
    </a>
  )
}

const ContentTypeCard = ({ contentType, onClick }: { contentType: ContentTypeData; onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl overflow-hidden aspect-[4/3] relative border border-primary/15 hover:border-primary/40 transition-all duration-300"
    >
      {/* Background image */}
      <Image
        src={contentType.image}
        alt={contentType.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Sample count badge - only show if there are samples */}
      {contentType.samples.length > 0 && (
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold z-10">
          {contentType.samples.length} samples
        </div>
      )}

      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-base font-semibold text-white leading-snug">
          {contentType.name}
        </h3>
      </div>
    </div>
  )
}

export function AchievementsSection() {
  const [selectedType, setSelectedType] = useState<ContentTypeData | null>(null)

  return (
    <section id="top-achievements" className="relative py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <p className="text-[21px] text-foreground/90 leading-relaxed mb-12 text-center">
          My work in numbers:</p>

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
                className="group relative rounded-2xl bg-card border border-primary/15 hover:border-primary/40 transition-all duration-300 overflow-hidden"
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

            {/* Writing samples header */}
            <p className="text-lg font-semibold text-foreground/80 mt-6 mb-2">Writing samples:</p>
            
            {/* Writing samples - 2 per row */}
            <div className="grid grid-cols-2 gap-3">
              {contentTypes.map((contentType) => (
                <ContentTypeCard
                  key={contentType.id}
                  contentType={contentType}
                  onClick={() => setSelectedType(contentType)}
                />
              ))}
            </div>
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
                className="group relative rounded-2xl bg-card border border-primary/15 hover:border-primary/40 transition-all duration-300 overflow-hidden"
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
                className="group relative rounded-2xl bg-card border border-primary/15 hover:border-primary/40 transition-all duration-300 overflow-hidden"
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

      {/* Dialog for samples */}
      <Dialog open={!!selectedType} onOpenChange={(open) => !open && setSelectedType(null)}>
        <DialogContent className="!w-[90vw] !max-w-3xl max-h-[85vh] overflow-y-auto p-6">
          {selectedType && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                    <selectedType.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold">{selectedType.name}</DialogTitle>
                    <p className="text-foreground/60 text-sm mt-1">{selectedType.description}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-3">
                {selectedType.samples.map((sample, idx) => (
                  <SampleCard key={idx} sample={sample} />
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
