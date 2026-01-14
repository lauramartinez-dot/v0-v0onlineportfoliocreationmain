"use client"

import { useState } from "react"
import { Video, Newspaper, BookOpen, ListChecks } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface WritingSample {
  title: string
  company: string
  year: string
  url: string
  role?: string
  image?: string
}

interface CategoryData {
  id: string
  title: string
  icon: any
  description: string
  samples: WritingSample[]
}

const categories: CategoryData[] = [
  {
    id: "functional-documentation",
    title: "Functional Documentation",
    icon: BookOpen,
    description:
      "Comprehensive overviews explaining how systems work, covering permissions, roles, and feature capabilities.",
    samples: [
      {
        title: "Overview of permissions and employee roles (Admin)",
        company: "Personio",
        year: "2021",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        role: "Admin",
        image: "/hr-software-permissions-dashboard.jpg",
      },
      {
        title: "Summary of the homepage cards (Admin)",
        company: "Personio",
        year: "2021",
        url: "https://support.personio.de/hc/en-us/articles/360001268369-Summary-of-the-homepage-cards",
        role: "Admin",
        image: "/hr-dashboard-homepage-cards.jpg",
      },
      {
        title: "Log in and explore your new Personio account (End-users)",
        company: "Personio",
        year: "2021",
        url: "https://support.personio.de/hc/en-us/articles/209984985-Log-in-and-explore-your-new-Personio-account",
        role: "End-user",
        image: "/employee-login-welcome-screen.jpg",
      },
    ],
  },
  {
    id: "task-based-documentation",
    title: "Task-Based Documentation",
    icon: ListChecks,
    description:
      "Step-by-step guides helping users accomplish specific tasks, from granting permissions to troubleshooting issues.",
    samples: [
      {
        title: "Grant permissions for everyday tasks in Personio (Admin)",
        company: "Personio",
        year: "2021",
        url: "https://support.personio.de/hc/en-us/articles/28054432299549-Grant-permissions-for-everyday-tasks-in-Personio",
        role: "Admin",
        image: "/hr-permissions-settings-interface.jpg",
      },
      {
        title: "Troubleshoot issues with report creation as an Administrator (Admin)",
        company: "Personio",
        year: "2021",
        url: "https://support.personio.de/hc/en-us/articles/30194753521565-Troubleshoot-issues-with-report-creation-as-an-Administrator",
        role: "Admin",
        image: "/analytics-reports-troubleshooting.jpg",
      },
      {
        title: "Troubleshoot issues with report creation as a Supervisor (Supervisor)",
        company: "Personio",
        year: "2021",
        url: "https://support.personio.de/hc/en-us/articles/30194829123613-Troubleshoot-issues-with-report-creation-as-a-Supervisor",
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
    samples: [
      {
        title: "Overview of permissions and employee roles",
        company: "Personio",
        year: "2021",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        image: "/video-tutorial-permissions-thumbnail.jpg",
      },
      {
        title: "Overview of the Analytics area",
        company: "Personio",
        year: "2021",
        url: "https://support.personio.de/hc/en-us/articles/15717723889437-Overview-of-the-Analytics-area",
        image: "/video-analytics-dashboard-thumbnail.jpg",
      },
    ],
  },
  {
    id: "technology-writing",
    title: "Technology Writing",
    icon: Newspaper,
    description:
      "Tech journalism and articles for leading Spanish media outlets, covering innovation, science, and technology trends.",
    samples: [
      {
        title:
          "Execution videos, sex in the office, PTSD and ISIS sing-alongs: A day in the life of an online content moderator",
        company: "Business Insider Spain",
        year: "2020",
        url: "https://www.businessinsider.com/a-day-in-the-life-of-an-online-content-moderator-2019-6",
        image: "/content-moderation-article.jpg",
      },
      {
        title:
          "Nos savemos las canciones del ISIS de memoria: Así es el día a día de quienes revisan los vídeos que reportas en las redes sociales",
        company: "Business Insider Spain",
        year: "2020",
        url: "https://www.businessinsider.es/dia-dia-revisores-contenidos-redes-sociales-431333",
        image: "/social-media-content-review-article.jpg",
      },
      {
        title: "Cerveza gratis, servicio de lavandería y billar: Así se trabaja en las tecnológicas de moda en Dublín",
        company: "Business Insider Spain",
        year: "2020",
        url: "https://www.businessinsider.es/wework-dublin-trabaja-cerveza-gratis-oficina-435405",
        image: "/tech-office-dublin-workspace.jpg",
      },
      {
        title: "Es 2020 y todavía no entendemos del todo por qué los aviones se mantienen en el aire",
        company: "Xataka",
        year: "2014",
        url: "https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire",
        image: "/airplane-flight-physics-science.jpg",
      },
      {
        title:
          "Esto lo que sabemos de ByteDance, la enigmática dueña de TikTok y la startup más valorada en todo el mundo",
        company: "Xataka",
        year: "2014",
        url: "#",
        image: "/tiktok-bytedance-tech-startup.jpg",
      },
      {
        title: "10 aplicaciones para sobrevivir a un festival de música",
        company: "Xataka",
        year: "2014",
        url: "#",
        image: "/music-festival-mobile-apps.jpg",
      },
      {
        title: "Hallan la primera evidencia de la inflación cósmica",
        company: "Muy Interesante",
        year: "2014",
        url: "https://www.muyinteresante.es/ciencia/articulo/hallan-la-primera-evidencia-de-la-expansion-del-universo-131395147000",
        image: "/cosmic-inflation-universe-science.jpg",
      },
      {
        title: "¿Qué nos pasaría si viajáramos a la velocidad de la luz?",
        company: "Muy Interesante",
        year: "2014",
        url: "https://www.muyinteresante.es/ciencia/articulo/que-nos-pasaria-si-viajaramos-a-la-velocidad-de-la-luz-131395147000",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "El satélite español Deimos-2 está ya en órbita",
        company: "Muy Interesante",
        year: "2014",
        url: "https://www.muyinteresante.es/ciencia/articulo/el-satelite-espanol-deimos-2-esta-ya-en-orbita-341403272930",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Los gamers que acosan a las jugadoras son, literalmente, unos perdedores",
        company: "Europa Press",
        year: "2014",
        url: "https://www.europapress.es/portaltic/videojuegos/noticia-gamers-acosan-jugadoras-son-literalmente-perdedores-20150725115934.html",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Google quiere que grabes todos tus recuerdos como en un capítulo de Black Mirror",
        company: "Europa Press",
        year: "2014",
        url: "#",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "10 aplicaciones para sobrevivir a un festival de música",
        company: "Europa Press",
        year: "2014",
        url: "#",
        image: "/placeholder.svg?height=200&width=400",
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
        className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-gray-200/80 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{category.title}</h3>
            </div>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">{category.description}</p>

          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <span>View {category.samples.length} samples</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.samples.map((sample, idx) => (
              <a
                key={idx}
                href={sample.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={sample.image || "/placeholder.svg?height=200&width=400"}
                    alt={sample.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                      {sample.company}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {sample.year}
                    </span>
                    {sample.role && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                        {sample.role}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors line-clamp-3">
                    {sample.title}
                  </h4>
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
    <section id="writing-samples" className="scroll-mt-20 py-20 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            My Work
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Top Writing Samples</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of technical documentation, articles, and videos organized by content type
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
