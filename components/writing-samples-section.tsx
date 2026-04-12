"use client"

import { FileText, ExternalLink } from "lucide-react"
import Image from "next/image"

interface WritingSample {
  title: string
  url: string
  type: string
  column: number
}

interface CompanyData {
  id: string
  name: string
  role: string
  period: string
  logo: string
  samples: WritingSample[]
}

interface MediaSample extends WritingSample {
  publication: string
}

interface MediaGroupData {
  id: string
  name: string
  description: string
  samples: MediaSample[]
}

const companies: CompanyData[] = [
  {
    id: "personio",
    name: "Personio",
    role: "Senior Technical Writer",
    period: "2021 - 2025",
    logo: "/personio-icon-black.png",
    samples: [
      {
        title: "Overview of permissions and employee roles",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        type: "Conceptual Guide",
        column: 1,
      },
      {
        title: "Summary of the homepage cards",
        url: "https://support.personio.de/hc/en-us/articles/360001268369-Summary-of-the-homepage-cards",
        type: "Conceptual Guide",
        column: 1,
      },
      {
        title: "Grant permissions for everyday tasks",
        url: "https://support.personio.de/hc/en-us/articles/28054432299549-Grant-permissions-for-everyday-tasks-in-Personio",
        type: "How-to Guide",
        column: 2,
      },
      {
        title: "Personio Product Updates",
        url: "https://support.personio.de/hc/en-us/articles/6018676072733-Personio-Product-Updates",
        type: "Release Notes",
        column: 2,
      },
      {
        title: "Overview of permissions (Video EN)",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        type: "Video",
        column: 3,
      },
      {
        title: "Overview of permissions (Video DE)",
        url: "https://support.personio.de/hc/de/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        type: "Video",
        column: 3,
      },
    ],
  },
]

const mediaWriting: MediaGroupData = {
  id: "media-writing",
  name: "Media & Journalism",
  description: "Science and technology journalism across leading Spanish-language publications",
  samples: [
    {
      title: "A day in the life of an online content moderator",
      url: "https://www.businessinsider.com/a-day-in-the-life-of-an-online-content-moderator-2019-6",
      type: "Feature Article",
      publication: "Business Insider Spain",
      column: 1,
    },
    {
      title: "Working at tech companies in Dublin: Free beer and laundry",
      url: "https://www.businessinsider.es/wework-dublin-trabaja-cerveza-gratis-oficina-435405147000",
      type: "Feature Article",
      publication: "Business Insider Spain",
      column: 1,
    },
    {
      title: "Why we still don't fully understand how planes stay in the air",
      url: "https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire",
      type: "Science Article",
      publication: "Xataka",
      column: 1,
    },
    {
      title: "First evidence of cosmic inflation found",
      url: "https://www.muyinteresante.es/ciencia/articulo/hallan-la-primera-evidencia-de-la-expansion-del-universo-131395147000",
      type: "Science Article",
      publication: "Muy Interesante",
      column: 1,
    },
    {
      title: "What would happen if we traveled at the speed of light?",
      url: "https://www.muyinteresante.es/ciencia/articulo/que-nos-pasaria-si-viajaramos-a-la-velocidad-de-la-luz-131395147000",
      type: "Science Article",
      publication: "Muy Interesante",
      column: 1,
    },
    {
      title: "Spanish satellite Deimos-2 is now in orbit",
      url: "https://www.muyinteresante.es/ciencia/articulo/el-satelite-espanol-deimos-2-esta-ya-en-orbita-341403272930",
      type: "Science Article",
      publication: "Muy Interesante",
      column: 1,
    },
  ],
}

const MediaSampleCard = ({ sample }: { sample: MediaSample }) => {
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
              <span className="text-xs font-medium text-foreground/50">{sample.publication}</span>
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
            <span className="text-xs font-medium text-primary/60 uppercase tracking-wider">{sample.type}</span>
            <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mt-1">
              {sample.title}
            </h4>
          </div>
          <ExternalLink className="h-4 w-4 text-foreground/40 group-hover:text-primary transition-colors shrink-0" />
        </div>
      </div>
    </a>
  )
}

const CompanyCard = ({ company }: { company: CompanyData }) => {
  return (
    <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-purple-950/30 via-background to-pink-950/20 p-6 md:p-8 shadow-xl shadow-primary/10">
      {/* Company Header */}
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-primary/10">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center ring-2 ring-primary/30 shadow-md">
          <Image src={company.logo} alt={company.name} fill className="object-contain p-1" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">{company.name}</h3>
          <p className="text-foreground/60">
            {company.role} &middot; {company.period}
          </p>
        </div>
      </div>

      {/* Samples Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {company.samples.map((sample, i) => (
          <SampleCard key={i} sample={sample} />
        ))}
      </div>
    </div>
  )
}

const MediaGroupCard = ({ group }: { group: MediaGroupData }) => {
  return (
    <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-purple-950/30 via-background to-pink-950/20 p-6 md:p-8 shadow-xl shadow-primary/10">
      {/* Group Header */}
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-primary/10">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center ring-2 ring-primary/30 shadow-md">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">{group.name}</h3>
          <p className="text-foreground/60">{group.description}</p>
        </div>
      </div>

      {/* Samples Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {group.samples.map((sample, i) => (
          <MediaSampleCard key={i} sample={sample} />
        ))}
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
          <p className="text-muted-foreground text-lg">Work samples organized by company</p>
        </div>

        <div className="space-y-12">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
          <MediaGroupCard group={mediaWriting} />
        </div>
      </div>
    </section>
  )
}
