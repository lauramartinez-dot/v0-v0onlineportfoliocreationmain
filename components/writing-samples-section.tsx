"use client"

import { useState } from "react"
import { FileText, Video } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface WritingSample {
  id: string
  title: string
  company: string
  workType: string
  logo: string
  headerImage?: string
  year: string
  location: string
  country: string
  countryFlag: string
  description: string
  liveLinks: { label: string; url: string; role?: string; contentType?: "article" | "video" }[]
}

const writingSamples: WritingSample[] = [
  {
    id: "documentation-authoring",
    title: "Technical Documentation Author",
    company: "Personio",
    workType: "Documentation authoring",
    logo: "/images/personio-team.jpg",
    year: "2021",
    location: "Dresden & Barcelona",
    country: "Germany & Spain",
    countryFlag: "🇩🇪 🇪🇸",
    description:
      "Authored and maintained **100+** high-quality English articles for user-facing documentation, each tailored to specific business roles.",
    liveLinks: [
      {
        label: "Overview of permissions and employee roles (Admin)",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
      },
      {
        label: "Grant permissions for everyday tasks in Personio (Admin)",
        url: "https://support.personio.de/hc/en-us/articles/28054432299549-Grant-permissions-for-everyday-tasks-in-Personio",
      },
      {
        label: "Summary of the homepage cards (Admin)",
        url: "https://support.personio.de/hc/en-us/articles/360001268369-Summary-of-the-homepage-cards",
      },
      {
        label: "Troubleshoot issues with report creation as an Administrator (Admin)",
        url: "https://support.personio.de/hc/en-us/articles/30194753521565-Troubleshoot-issues-with-report-creation-as-an-Administrator",
      },
      {
        label: "Troubleshoot issues with report creation as a Supervisor (Supervisor)",
        url: "https://support.personio.de/hc/en-us/articles/30194829123613-Troubleshoot-issues-with-report-creation-as-a-Supervisor",
      },
      {
        label: "Log in and explore your new Personio account (End-users)",
        url: "https://support.personio.de/hc/en-us/articles/209984985-Log-in-and-explore-your-new-Personio-account",
      },
    ],
  },
  {
    id: "ai-video-content",
    title: "AI-Assisted Instructional Videos",
    company: "Personio",
    workType: "Hands-on writing",
    logo: "/images/personio-team.jpg",
    year: "2021",
    location: "Dresden & Barcelona",
    country: "Germany & Spain",
    countryFlag: "🇩🇪 🇪🇸",
    description:
      "Authored and fully produced English **AI-assisted instructional videos**, and translated them into German and Spanish.",
    liveLinks: [
      {
        label: "Overview of permissions and employee roles",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
        contentType: "video",
      },
      {
        label: "Overview of the Analytics area",
        url: "https://support.personio.de/hc/en-us/articles/15717723889437-Overview-of-the-Analytics-area",
        contentType: "video",
      },
    ],
  },
  {
    id: "business-insider-spain",
    title: "Tech Journalist",
    company: "Business Insider Spain",
    workType: "Hands-on writing",
    logo: "/business-insider-espana-logo.png",
    year: "2020",
    location: "Dresden",
    country: "Germany",
    countryFlag: "🇩🇪",
    description:
      "Authored original Spanish articles for Business Insider, with one article **reaching the front page** of BI USA.",
    liveLinks: [
      {
        label:
          "Execution videos, sex in the office, PTSD and ISIS sing-alongs: A day in the life of an online content moderator",
        url: "https://www.businessinsider.com/a-day-in-the-life-of-an-online-content-moderator-2019-6",
      },
      {
        label:
          "Nos savons las canciones del ISIS de memoria: Así es el día a día de quienes revisan los vídeos que reportas en las redes sociales",
        url: "https://www.businessinsider.es/dia-dia-revisores-contenidos-redes-sociales-431333",
      },
      {
        label: "Cerveza gratis, servicio de lavandería y billar: Así se trabaja en las tecnológicas de moda en Dublín",
        url: "https://www.businessinsider.es/wework-dublin-trabaja-cerveza-gratis-oficina-435405",
      },
    ],
  },
  {
    id: "xataka",
    title: "Tech Writer for Xataka",
    company: "Xataka",
    workType: "Hands-on writing",
    logo: "/xataka-logo.png",
    year: "2014",
    location: "Madrid",
    country: "Spain",
    countryFlag: "🇪🇸",
    description:
      "Authored original Spanish articles for Xataka, Spain's leading tech media with **+12M monthly users**.",
    liveLinks: [
      {
        label: "Es 2020 y todavía no entendemos del todo por qué los aviones se mantienen en el aire",
        url: "https://www.xataka.com/vehiculos/2020-todavia-no-entendemos-todo-que-aviones-se-mantienen-aire",
      },
      {
        label:
          "Esto lo que sabemos de ByteDance, la enigmática dueña de TikTok y la startup más valorada en todo el mundo",
        url: "#",
      },
      {
        label: "10 aplicaciones para sobrevivir a un festival de música",
        url: "#",
      },
    ],
  },
  {
    id: "muy-interesante",
    title: "Tech Science Journalist",
    company: "Muy Interesante",
    workType: "Hands-on writing",
    logo: "/muy-interesante-logo.png",
    year: "2014",
    location: "Madrid",
    country: "Spain",
    countryFlag: "🇪🇸",
    description:
      "Authored **200+** Spanish articles for Muy Interesante, the second most read monthly magazine in Spain.",
    liveLinks: [
      {
        label: "Hallan la primera evidencia de la inflación cósmica",
        url: "https://www.muyinteresante.es/ciencia/articulo/hallan-la-primera-evidencia-de-la-expansion-del-universo-131395147000",
      },
      {
        label: "¿Qué nos pasaría si viajáramos a la velocidad de la luz?",
        url: "https://www.muyinteresante.es/ciencia/articulo/que-nos-pasaria-si-viajaramos-a-la-velocidad-de-la-luz-131395147000",
      },
      {
        label: "El satélite español Deimos-2 está ya en órbita",
        url: "https://www.muyinteresante.es/ciencia/articulo/el-satelite-espanol-deimos-2-esta-ya-en-orbita-341403272930",
      },
    ],
  },
  {
    id: "europa-press",
    title: "Tech Journalist for Portaltic",
    company: "Europa Press",
    workType: "Hands-on writing",
    logo: "/europa-press-logo.png",
    year: "2014",
    location: "Madrid",
    country: "Spain",
    countryFlag: "🇪🇸",
    description:
      "Authored **50+** Spanish articles for Europa Press's technology site—Spain's leading private news agency.",
    liveLinks: [
      {
        label: "Los gamers que acosan a las jugadoras son, literalmente, unos perdedores",
        url: "https://www.europapress.es/portaltic/videojuegos/noticia-gamers-acosan-jugadoras-son-literalmente-perdedores-20150725115934.html",
      },
      {
        label: "Google quiere que grabes todos tus recuerdos como en un capítulo de Black Mirror",
        url: "#",
      },
      {
        label: "10 aplicaciones para sobrevivir a un festival de música",
        url: "#",
      },
    ],
  },
]

const WritingSampleCard = ({ sample }: { sample: WritingSample }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-gray-200/80 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src={sample.logo || "/placeholder.svg"}
                alt={sample.company}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{sample.company}</h3>
              <p className="text-sm text-gray-600">
                {sample.year} • {sample.location}
              </p>
            </div>
          </div>

          <p
            className="text-sm text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{
              __html: sample.description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />

          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <span>View {sample.liveLinks.length} samples</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!w-[75vw] !max-w-none max-h-[90vh] overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{sample.company}</DialogTitle>
          </DialogHeader>

          <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <p
              className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200"
              dangerouslySetInnerHTML={{
                __html: sample.description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Writing Samples</h3>

          <div className="grid gap-3">
            {sample.liveLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {link.role && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                        {link.role}
                      </span>
                    )}
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        link.contentType === "video"
                          ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      }`}
                    >
                      {link.contentType === "video" ? (
                        <>
                          <Video className="h-3 w-3" />
                          <span>Video</span>
                        </>
                      ) : (
                        <>
                          <FileText className="h-3 w-3" />
                          <span>Article</span>
                        </>
                      )}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                    {link.label.replace(/\s*$$[^)]+$$\s*/, "")}
                  </span>
                </div>
                <svg
                  className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
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
            A selection of technical documentation, articles, and videos I've created across various roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writingSamples.map((sample) => (
            <WritingSampleCard key={sample.id} sample={sample} />
          ))}
        </div>
      </div>
    </section>
  )
}
