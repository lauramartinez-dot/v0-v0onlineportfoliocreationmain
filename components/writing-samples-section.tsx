"use client"

import Image from "next/image"
import { FileText, ExternalLink, Code, Newspaper } from "lucide-react"

interface WritingSample {
  title: string
  url: string
  company: string
  type: string
}

interface CategoryData {
  id: string
  name: string
  description: string
  icon: any
  image: string
  samples: WritingSample[]
}

const categories: CategoryData[] = [
  {
    id: "technology-writing",
    name: "Technology Writing",
    description: "Technical documentation, how-to guides, and product content for software companies",
    icon: Code,
    image: "/vr-person-blue-tech.png",
    samples: [
      {
        title: "Overview of permissions and employee roles",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        company: "Personio",
        type: "Conceptual Guide",
      },
      {
        title: "Summary of the homepage cards",
        url: "https://support.personio.de/hc/en-us/articles/360001268369-Summary-of-the-homepage-cards",
        company: "Personio",
        type: "Conceptual Guide",
      },
      {
        title: "Grant permissions for everyday tasks",
        url: "https://support.personio.de/hc/en-us/articles/28054432299549-Grant-permissions-for-everyday-tasks-in-Personio",
        company: "Personio",
        type: "How-to Guide",
      },
      {
        title: "Personio Product Updates",
        url: "https://support.personio.de/hc/en-us/articles/6018676072733-Personio-Product-Updates",
        company: "Personio",
        type: "Release Notes",
      },
      {
        title: "Overview of permissions (Video EN)",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        company: "Personio",
        type: "Video",
      },
      {
        title: "Overview of permissions (Video DE)",
        url: "https://support.personio.de/hc/de/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        company: "Personio",
        type: "Video",
      },
    ],
  },
  {
    id: "media-journalism",
    name: "Media & Journalism",
    description: "Science and technology journalism across leading Spanish-language publications",
    icon: Newspaper,
    image: "/startup-workspace.jpg",
    samples: [
      {
        title: "A day in the life of an online content moderator",
        url: "https://www.businessinsider.com/a-day-in-the-life-of-an-online-content-moderator-2019-6",
        company: "Business Insider Spain",
        type: "Feature Article",
      },
      {
        title: "Working at tech companies in Dublin: Free beer and laundry",
        url: "https://www.businessinsider.es/wework-dublin-trabaja-cerveza-gratis-oficina-435405147000",
        company: "Business Insider Spain",
        type: "Feature Article",
      },
      {
        title: "Why we still don't fully understand how planes stay in the air",
        url: "https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire",
        company: "Xataka",
        type: "Science Article",
      },
      {
        title: "First evidence of cosmic inflation found",
        url: "https://www.muyinteresante.es/ciencia/articulo/hallan-la-primera-evidencia-de-la-expansion-del-universo-131395147000",
        company: "Muy Interesante",
        type: "Science Article",
      },
      {
        title: "What would happen if we traveled at the speed of light?",
        url: "https://www.muyinteresante.es/ciencia/articulo/que-nos-pasaria-si-viajaramos-a-la-velocidad-de-la-luz-131395147000",
        company: "Muy Interesante",
        type: "Science Article",
      },
      {
        title: "Spanish satellite Deimos-2 is now in orbit",
        url: "https://www.muyinteresante.es/ciencia/articulo/el-satelite-espanol-deimos-2-esta-ya-en-orbita-341403272930",
        company: "Muy Interesante",
        type: "Science Article",
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
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-lg shadow-purple-900/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 ring-1 ring-primary/20">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-primary/60 uppercase tracking-wider">{sample.type}</span>
              <span className="text-xs text-foreground/40">|</span>
              <span className="text-xs font-medium text-foreground/50">{sample.company}</span>
            </div>
            <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
              {sample.title}
            </h4>
          </div>
          <ExternalLink className="h-4 w-4 text-foreground/40 group-hover:text-primary transition-colors shrink-0" />
        </div>
      </div>
    </a>
  )
}

const CategoryCard = ({ category }: { category: CategoryData }) => {
  const Icon = category.icon
  
  return (
    <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-purple-950/30 via-background to-pink-950/20 shadow-xl shadow-primary/10 overflow-hidden">
      {/* Category Image Header */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/40 via-purple-500/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-primary/30">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{category.name}</h3>
              <p className="text-white/70 text-sm md:text-base">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Samples Grid */}
      <div className="p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {category.samples.map((sample, i) => (
            <SampleCard key={i} sample={sample} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function WritingSamplesSection() {
  return (
    <section id="writing-samples" className="scroll-mt-20 py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Top Writing Samples</h2>
          <p className="text-muted-foreground text-lg">Work samples organized by type</p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
