"use client"

import { useState } from "react"
import Image from "next/image"
import { FileText, ExternalLink, Video, Newspaper, Mail, HelpCircle, Pen } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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
      className="group cursor-pointer rounded-xl overflow-hidden aspect-square relative"
    >
      {/* Background image */}
      <Image
        src={contentType.image}
        alt={contentType.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Purple tint overlay */}
      <div className="absolute inset-0 bg-purple-600/35" />
      {/* Dark gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
      
      {/* Sample count badge - only show if there are samples */}
      {contentType.samples.length > 0 && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold z-10">
          {contentType.samples.length} samples
        </div>
      )}
      
      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-[24px] font-bold text-white leading-snug">
          {contentType.name}
        </h3>
      </div>
    </div>
  )
}

export default function WritingSamplesSection() {
  const [selectedType, setSelectedType] = useState<ContentTypeData | null>(null)

  return (
    <section id="writing-samples" className="scroll-mt-20 py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[37px] font-bold tracking-tight">Top Writing Samples</h2>
        </div>

        {/* First 6 items in 3-column grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {contentTypes.slice(0, 6).map((contentType) => (
            <ContentTypeCard
              key={contentType.id}
              contentType={contentType}
              onClick={() => setSelectedType(contentType)}
            />
          ))}
        </div>
        
        {/* Last item centered */}
        <div className="mt-6 flex justify-center">
          <div className="w-full md:w-1/3">
            <ContentTypeCard
              contentType={contentTypes[contentTypes.length - 1]}
              onClick={() => setSelectedType(contentTypes[contentTypes.length - 1])}
            />
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
