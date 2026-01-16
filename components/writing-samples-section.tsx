"use client"

import { useState } from "react"
import { Video, Newspaper, BookOpen, ListChecks, Database, FileText, MessageSquare, Mail } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface WritingSample {
  title: string
  company: string
  url: string
  role?: string
  image?: string
  germanUrl?: string
}

interface CategoryData {
  id: string
  title: string
  icon: any
  description: string
  samples: WritingSample[]
  headerImage?: string
  audience?: string
  subAudience?: string[]
}

const categories: CategoryData[] = [
  {
    id: "functional-documentation",
    title: "Conceptual Guides",
    icon: BookOpen,
    description:
      "Comprehensive overviews explaining how systems work, covering permissions, roles, and feature capabilities.",
    headerImage: "/abstract-conceptual-diagram-with-connected-nodes-a.jpg",
    audience: "Business users",
    subAudience: ["Admins", "Supervisors", "Employees"],
    samples: [
      {
        title: "Overview of permissions and employee roles",
        company: "Personio",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        role: "Admin",
        image: "/hr-software-permissions-dashboard.jpg",
      },
      {
        title: "Summary of the homepage cards",
        company: "Personio",
        url: "https://support.personio.de/hc/en-us/articles/360001268369-Summary-of-the-homepage-cards",
        role: "Admin",
        image: "/hr-dashboard-homepage-cards.jpg",
      },
      {
        title: "Log in and explore your new Personio account",
        company: "Personio",
        url: "https://support.personio.de/hc/en-us/articles/209984985-Log-in-and-explore-your-new-Personio-account",
        role: "Basic employee",
        image: "/employee-login-welcome-screen.jpg",
      },
    ],
  },
  {
    id: "task-based-documentation",
    title: "How-to Guides",
    icon: ListChecks,
    description:
      "Step-by-step guides helping users accomplish specific tasks, from granting permissions to troubleshooting issues.",
    headerImage: "/step-by-step-checklist-with-checkmarks-and-progres.jpg",
    audience: "Business users",
    subAudience: ["Admins", "Supervisors"],
    samples: [
      {
        title: "Grant permissions for everyday tasks in Personio",
        company: "Personio",
        url: "https://support.personio.de/hc/en-us/articles/28054432299549-Grant-permissions-for-everyday-tasks-in-Personio",
        role: "Admin",
        image: "/images/task-based-grant-permissions.png",
      },
      {
        title: "Troubleshoot issues with report creation as an Administrator",
        company: "Personio",
        url: "https://support.personio.de/hc/en-us/articles/30194753521565-Troubleshoot-issues-with-report-creation-as-an-Administrator",
        role: "Admin",
        image: "/analytics-reports-troubleshooting.jpg",
      },
      {
        title: "Troubleshoot issues with report creation as a Supervisor",
        company: "Personio",
        url: "https://support.personio.de/hc/de/articles/30194829123613-Troubleshoot-issues-with-report-creation-as-a-Supervisor",
        role: "Supervisor",
        image: "/supervisor-reports-interface.jpg",
      },
    ],
  },
  {
    id: "instructional-videos",
    title: "Instructional Videos",
    icon: Video,
    description:
      "AI-assisted instructional videos produced and translated into multiple languages for global audiences.",
    headerImage: "/video-tutorial-interface-with-play-button-and-scre.jpg",
    audience: "Business users",
    subAudience: ["Admins"],
    samples: [
      {
        title: "Overview of permissions and employee roles (English)",
        company: "Personio",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        role: "Admin",
        image: "/video-tutorial-permissions-thumbnail.jpg",
      },
      {
        title: "Overview of permissions and employee roles (German)",
        company: "Personio",
        url: "https://support.personio.de/hc/de/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        role: "Admin",
        image: "/video-tutorial-permissions-thumbnail.jpg",
      },
      {
        title: "Overview of the Analytics area (English)",
        company: "Personio",
        url: "https://support.personio.de/hc/en-us/articles/15717723889437-Overview-of-the-Analytics-area",
        role: "Admin",
        image: "/video-analytics-dashboard-thumbnail.jpg",
      },
      {
        title: "Overview of the Analytics area (German)",
        company: "Personio",
        url: "https://support.personio.de/hc/de/articles/15717723889437-Overview-of-the-Analytics-area",
        role: "Admin",
        image: "/video-analytics-dashboard-thumbnail.jpg",
      },
    ],
  },
  {
    id: "release-notes",
    title: "Release Notes",
    icon: FileText,
    description:
      "Clear, user-focused release notes explaining new features, improvements, and bug fixes in accessible language.",
    headerImage: "/software-release-announcement-with-version-number-.jpg",
    audience: "Business users",
    subAudience: ["Admins"],
    samples: [
      {
        title: "Personio Product Updates",
        company: "Personio",
        url: "https://support.personio.de/hc/en-us/articles/6018676072733-Personio-Product-Updates",
        role: "Admin",
      },
    ],
  },
  {
    id: "in-app-communications",
    title: "In-App Communications",
    icon: MessageSquare,
    description:
      "Microcopy, tooltips, banners, and in-product messaging designed to guide users through features and workflows.",
    headerImage: "/modern-app-interface-with-tooltip-popup-and-notifi.jpg",
    audience: "Business users",
    subAudience: ["All users"],
    samples: [],
  },
  {
    id: "internal-knowledge-base",
    title: "Internal Knowledge Base Articles",
    icon: Database,
    description:
      "Internal documentation for teams including process guides, best practices, and technical specifications for internal stakeholders.",
    headerImage: "/organized-knowledge-database-with-folders-and-docu.jpg",
    audience: "Internal teams",
    subAudience: ["Technical Writers", "Product Managers", "Engineers"],
    samples: [],
  },
  {
    id: "newsletter-writing",
    title: "Newsletter Writing",
    icon: Mail,
    description: "Engaging newsletter content for product updates, company announcements, and community engagement.",
    headerImage: "/newsletter-email-marketing-design-template.jpg",
    audience: "Business users",
    subAudience: ["Customers", "Subscribers"],
    samples: [],
  },
  {
    id: "technology-writing",
    title: "Foundational Technology Writing",
    icon: Newspaper,
    description:
      "Tech journalism and articles for leading Spanish media outlets, covering innovation, science, and technology trends.",
    headerImage: "/tech-journalism-newspaper-with-digital-elements-an.jpg",
    audience: "General public",
    subAudience: ["Tech enthusiasts", "Science readers"],
    samples: [
      {
        title:
          "Execution videos, sex in the office, PTSD and ISIS sing-alongs: A day in the life of an online content moderator",
        company: "Business Insider Spain",
        url: "https://www.businessinsider.com/a-day-in-the-life-of-an-online-content-moderator-2019-6",
        image: "/content-moderator-reviewing-social-media.jpg",
      },
      {
        title: "Cerveza gratis, servicio de lavandería y billar: Así se trabaja en las tecnológicas de moda en Dublín",
        company: "Business Insider Spain",
        url: "https://www.businessinsider.es/wework-dublin-trabaja-cerveza-gratis-oficina-435405147000",
        image: "/modern-tech-office-workspace-with-beer-tap-dublin.jpg",
      },
      {
        title: "Es 2020 y todavía no entendemos del todo por qué los aviones se mantienen en el aire",
        company: "Xataka",
        url: "https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire",
        image: "/airplane-in-flight-aerodynamics.jpg",
      },
      {
        title: "Hallan la primera evidencia de la inflación cósmica",
        company: "Muy Interesante",
        url: "https://www.muyinteresante.es/ciencia/articulo/hallan-la-primera-evidencia-de-la-expansion-del-universo-131395147000",
        image: "/cosmic-inflation-universe-expansion.jpg",
      },
      {
        title: "¿Qué nos pasaría si viajáramos a la velocidad de la luz?",
        company: "Muy Interesante",
        url: "https://www.muyinteresante.es/ciencia/articulo/que-nos-pasaria-si-viajaramos-a-la-velocidad-de-la-luz-131395147000",
        image: "/traveling-at-the-speed-of-light-space.jpg",
      },
      {
        title: "El satélite español Deimos-2 está ya en órbita",
        company: "Muy Interesante",
        url: "https://www.muyinteresante.es/ciencia/articulo/el-satelite-espanol-deimos-2-esta-ya-en-orbita-341403272930",
        image: "/satellite-in-orbit-around-earth.jpg",
      },
    ],
  },
]

const CategoryCard = ({ category }: { category: CategoryData }) => {
  const [open, setOpen] = useState(false)
  const Icon = category.icon

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-50">
          <Image
            src={
              category.headerImage || `/.jpg?key=cghrj&height=300&width=600&query=${encodeURIComponent(category.title)}`
            }
            alt={category.title}
            fill
            className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 via-purple-400/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {category.title}
          </h3>

          <p className="text-base text-muted-foreground leading-relaxed mb-5 min-h-[60px]">{category.description}</p>

          {category.audience && (
            <div className="mb-5 space-y-3">
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                  Audience
                </span>
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold shadow-md">
                  {category.audience}
                </span>
              </div>
              {category.subAudience && category.subAudience.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                    Sub-audience
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {category.subAudience.map((subAud, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                      >
                        {subAud}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
            <span>View {category.samples.length} samples</span>
            <svg
              className="h-4 w-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!w-[75vw] !max-w-none max-h-[90vh] overflow-y-auto p-6">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <DialogTitle className="text-3xl font-bold">{category.title}</DialogTitle>
            </div>
          </DialogHeader>

          <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              {category.description}
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Samples</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.samples.map((sample, idx) => (
              <a
                key={idx}
                href={sample.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {category.id === "technology-writing" && (
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={sample.image || "/placeholder.svg?height=200&width=400"}
                      alt={sample.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium">
                      {sample.company}
                    </span>
                    {sample.role && (
                      <span className="text-sm px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">
                        {sample.role}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors leading-snug">
                    {sample.title}
                  </h4>
                  {sample.germanUrl && (
                    <a
                      href={sample.germanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-2 mt-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>🇩🇪 German version</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default function WritingSamplesSection() {
  return (
    <section id="writing-samples" className="scroll-mt-20 py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            What I Wrote
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Top Writing Samples</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
