"use client"

import { useState } from "react"
import Image from "next/image"
import { FileText, ExternalLink, BookOpen, Video, Newspaper, Mail, HelpCircle, Pen } from "lucide-react"
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
    id: "help-guides",
    name: "Help Guides",
    description: "Step-by-step instructions and conceptual documentation for end users",
    icon: HelpCircle,
    image: "/help-guides-header.png",
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
    id: "video-content",
    name: "Video Content",
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
    id: "release-notes",
    name: "Release Notes",
    description: "Product updates and feature announcements",
    icon: Mail,
    image: "/release-notes-example.png",
    audience: "Business Users",
    samples: [
      {
        title: "Personio Product Updates",
        url: "https://support.personio.de/hc/en-us/articles/6018676072733-Personio-Product-Updates",
        company: "Personio",
      },
    ],
  },
  {
    id: "api-documentation",
    name: "API Documentation",
    description: "Technical reference documentation for developers and integrations",
    icon: BookOpen,
    image: "/vr-person-blue-tech.png",
    audience: "Developers",
    samples: [
      {
        title: "Personio API Documentation",
        url: "https://developer.personio.de/reference/introduction",
        company: "Personio",
      },
      {
        title: "Authentication Guide",
        url: "https://developer.personio.de/reference/authentication",
        company: "Personio",
      },
    ],
  },
  {
    id: "ux-writing",
    name: "UX Writing",
    description: "In-product copy, microcopy, and user interface text",
    icon: Pen,
    image: "/startup-workspace.jpg",
    audience: "Business Users",
    samples: [
      {
        title: "Personio Help Center In-App Guidance",
        url: "https://support.personio.de/hc/en-us",
        company: "Personio",
      },
    ],
  },
  {
  id: "journalism",
  name: "Foundational Tech Journalism Writing",
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
        title: "Working at tech companies in Dublin: Free beer and laundry",
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
  const Icon = contentType.icon

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl border border-primary/20 bg-card shadow-lg shadow-purple-900/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src={contentType.image}
          alt={contentType.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/40 via-purple-500/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Sample count badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold">
          {contentType.samples.length} samples
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {contentType.name}
          </h3>
        </div>
        <p className="text-sm text-foreground/60 leading-relaxed mb-4">{contentType.description}</p>
        
        {/* Audience */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Audience:</span>
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold">
            {contentType.audience}
          </span>
        </div>
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Top Writing Samples</h2>
          <p className="text-muted-foreground text-lg">Click on a content type to explore samples</p>
        </div>

        {/* 2-column grid of content types */}
        <div className="grid gap-6 md:grid-cols-2">
          {contentTypes.map((contentType) => (
            <ContentTypeCard
              key={contentType.id}
              contentType={contentType}
              onClick={() => setSelectedType(contentType)}
            />
          ))}
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
