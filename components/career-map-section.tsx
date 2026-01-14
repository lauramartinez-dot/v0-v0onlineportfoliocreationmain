"use client"

import { useState } from "react"
import { GraduationCap, Plane, Newspaper, TrendingUp, Globe, Award, Users, Video, FileText } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Experience {
  id: string
  title: string
  company: string
  workType: string
  logo: string
  headerImage?: string // Optional header banner image, falls back to logo if not provided
  year: string
  location: string
  country: string
  countryFlag: string
  type: "work" | "education" | "freelance"
  description: string
  achievements: string[]
  liveLinks: { label: string; url: string; role?: string; contentType?: "article" | "video" }[]
  technologies: string[]
  relevantSkills: string[]
  color: string
  icon: any
}

const experiences: Experience[] = [
  {
    id: "erasmus",
    title: "Erasmus Scholarship",
    company: "European Commission",
    workType: "Academic",
    logo: "/images/erasmus-logo.png",
    year: "2012",
    location: "Nice",
    country: "France",
    countryFlag: "🇫🇷",
    type: "education",
    description:
      "Awarded an **Erasmus scholarship** to complete the final nine months of my degree in Nice, France—launching my international, multilingual career.",
    achievements: [
      "Completed 9-month international exchange program",
      "Studied journalism in French academic environment",
      "Expanded international network and cultural perspective",
    ],
    liveLinks: [],
    technologies: ["International Studies", "Journalism", "French Language", "CMS", "SEO", "InDesign"],
    relevantSkills: ["Remote Collaboration", "Self-Driven Learning"],
    color: "#9931e7",
    icon: Plane,
  },
  {
    id: "journalism-degree",
    title: "Journalism Degree",
    company: "Universidad Complutense de Madrid",
    workType: "Academic",
    logo: "/universidad-complutense-logo.png",
    year: "2013",
    location: "Madrid",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "education",
    description:
      "Graduated in Journalism from Madrid's second most prestigious university, **specializing early** in tech and science communication.",
    achievements: [
      "Completed 5-year Bachelor's degree in Journalism",
      "Hosted Science and Technology radio program",
      "Specialized in technology and science communication",
    ],
    liveLinks: [],
    technologies: ["Journalism", "Science Communication", "Radio Broadcasting", "CMS", "SEO", "InDesign"],
    relevantSkills: ["True Non-Tech User Empathy", "Strong Technical Knowledge"],
    color: "#9931e7",
    icon: GraduationCap,
  },
  {
    id: "berlin-journalism-grant",
    title: "Journalism Research Grant",
    company: "Berlin Senate Chancellery",
    workType: "Operational", // Changed from "Hands-on writing" to "Operational" to move to achievements section
    logo: "/berlin-science-week-logo.png", // Keep original logo for bubble
    headerImage: "/images/berlin-science-week-event.jpg", // Use event photo for header
    year: "2020",
    location: "Berlin",
    country: "Germany",
    countryFlag: "🇩🇪",
    type: "freelance",
    description:
      "Awarded a **Journalism Research Grant** by the Berlin Senate Chancellery to cover Berlin Science Week 2020 for Spanish media.",
    achievements: [],
    liveLinks: [],
    technologies: ["Science Journalism", "Research", "Event Coverage"],
    relevantSkills: ["True Non-Tech User Empathy", "Strong Technical Knowledge"],
    color: "#9931e7",
    icon: Award,
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
    type: "work",
    description:
      "Authored **200+** Spanish articles for Muy Interesante, the second most read monthly magazine in Spain.",
    achievements: [
      "Wrote 200+ articles on science and technology topics",
      "Managed Twitter when Muy Interesante became the first Spanish media to surpass 1M followers",
      "Covered diverse topics from astronomy to neuroscience",
    ],
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
    technologies: ["Science Journalism", "Social Media Management", "Tech Writing", "CMS", "SEO", "InDesign"],
    relevantSkills: ["Strong Technical Knowledge", "True Non-Tech User Empathy"],
    color: "#9931e7",
    icon: Newspaper,
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
    type: "freelance",
    description:
      "Authored **50+** Spanish articles for Europa Press's technology site—Spain's leading private news agency.",
    achievements: [],
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
    technologies: ["Journalism", "Gaming", "Consumer Tech", "SEO"],
    relevantSkills: ["True Non-Tech User Empathy", "Strong Technical Knowledge"],
    color: "#9931e7",
    icon: Newspaper,
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
    type: "freelance",
    description:
      "Authored original Spanish articles for Xataka, Spain's leading tech media with **+12M monthly users**.",
    achievements: [],
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
    technologies: ["Journalism", "Gaming", "Consumer Tech", "SEO"],
    relevantSkills: ["Strong Technical Knowledge", "True Non-Tech User Empathy"],
    color: "#9931e7",
    icon: Newspaper,
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
    type: "work",
    description:
      "Authored original Spanish articles for Business Insider, with one article **reaching the front page** of BI USA.",
    achievements: [
      "Created original Spanish content for Business Insider Spain",
      "Translated U.S. Business Insider articles to Spanish",
      "Balanced journalism with full-time tech support role",
    ],
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
    technologies: ["Tech Journalism", "Translation", "Content Creation", "CMS", "SEO"],
    relevantSkills: ["Strong Technical Knowledge", "True Non-Tech User Empathy"],
    color: "#9931e7",
    icon: Newspaper,
  },
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
    type: "work",
    description:
      "Authored and maintained **100+** high-quality English articles for user-facing documentation, each tailored to specific business roles.",
    achievements: [
      "Created comprehensive documentation for complex articles",
      "Covered diverse topics from analytics to API integrations",
      "Maintained high quality standards across 100+ articles",
    ],
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
    technologies: ["Technical Writing", "API Documentation", "User Guides", "Software Documentation"],
    relevantSkills: ["Strong Technical Knowledge", "Multi-Audience Documentation", "Business Acumen"],
    color: "#9931e7",
    icon: FileText,
  },
  {
    id: "team-building",
    title: "Building International Documentation Team",
    company: "Personio",
    workType: "Operational",
    logo: "/images/personio-team.jpg",
    year: "2021",
    location: "Dresden & Barcelona",
    country: "Germany & Spain",
    countryFlag: "🇩🇪",
    type: "work",
    description:
      "Joined Personio as the **first Spanish-native** Technical Writer and built the Spanish user-facing documentation from scratch.",
    achievements: [
      "Joined as first Spanish-native Technical Writer",
      "Built Spanish documentation from scratch",
      "Expanded team from 3 to 10 writers",
      "Transformed German-only to international team",
      "Supported company growth from 300 to 2,000 employees",
    ],
    liveLinks: [{ label: "Personio Help Center", url: "https://support.personio.de" }],
    relevantSkills: ["Team Building", "Hiring", "Mentorship", "Cross-Cultural Communication"],
    color: "#9931e7",
    icon: Users,
  },
  {
    id: "team-scaling-hypergrowth",
    title: "Scaling Documentation Team During Hypergrowth",
    company: "Personio",
    workType: "Operational",
    logo: "/images/personio-team.jpg",
    year: "2021",
    location: "Dresden & Barcelona",
    country: "Germany & Spain",
    countryFlag: "🇩🇪",
    type: "work",
    description:
      "Helped scale a 3-writer, German-only team into a 10-writer, international team, supporting the company's hypergrowth from **300 to 2,000 people** in 3 years.",
    achievements: [
      "Scaled team from 3 to 10 writers in 3 years",
      "Transformed German-only team into international function",
      "Supported hypergrowth from 300 to 2,000 employees",
      "Built cross-functional collaboration processes",
      "Established scalable documentation workflows",
    ],
    liveLinks: [{ label: "Personio Help Center", url: "https://support.personio.de" }],
    relevantSkills: ["Team Scaling", "Process Design", "Hypergrowth Management", "International Expansion"],
    color: "#9931e7",
    icon: TrendingUp,
  },
  {
    id: "localization-expansion",
    title: "Documentation Localization Expansion",
    company: "Personio",
    workType: "Operational",
    logo: "/images/personio-team.jpg",
    year: "2021",
    location: "Dresden & Barcelona",
    country: "Germany & Spain",
    countryFlag: "🇩🇪",
    type: "work",
    description:
      "Expanded Personio's user-facing documentation from **3 to 6 languages** through outsourced translation and localization.",
    achievements: [
      "Doubled language coverage from 3 to 6 languages",
      "Established vendor management processes for translation",
      "Ensured quality and consistency across all language versions",
    ],
    liveLinks: [{ label: "Personio Help Center", url: "https://support.personio.de" }],
    relevantSkills: ["Project Management", "Cross-Cultural Communication", "Quality Control"],
    color: "#9931e7",
    icon: Globe,
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
    countryFlag: "🇩🇪",
    type: "work",
    description:
      "Authored and fully produced English **AI-assisted instructional videos**, and translated them into German and Spanish.",
    achievements: [
      "Developed video content strategy to reduce support contacts",
      "Leveraged AI tools to scale video production",
      "Responded to customer feedback for visual learning materials",
    ],
    liveLinks: [
      {
        label: "Overview of permissions and employee roles",
        url: "https://support.personio.de/hc/en-us/articles/29339334542109-Overview-of-permissions-and-employee-roles",
      },
      {
        label: "Overview of the Analytics area",
        url: "https://support.personio.de/hc/en-us/articles/15717723889437-Overview-of-the-Analytics-area",
      },
    ],
    technologies: ["Video Production", "AI Tools", "Content Strategy", "Customer Support Optimization"],
    relevantSkills: ["AI-Driven Operations", "Multi-Audience Documentation", "Entrepreneurial Mindset"],
    color: "#9931e7",
    icon: Video,
  },
  {
    id: "mogi-spanish-team",
    title: "Spanish Tech Support & Localization Team Lead",
    company: "Mogi",
    workType: "Operational",
    logo: "/images/mogi-logo.png",
    year: "2018",
    location: "Dublin",
    country: "Ireland",
    countryFlag: "🇮🇪",
    type: "work",
    description:
      "Joined Mogi as the **first in-house, Spanish-native** support and localization specialist, eventually supervising a 15-member, globally distributed team.",
    achievements: [
      "First in-house Spanish-native support specialist at Mogi",
      "Managed 15-member globally distributed team",
      "Maintained operational consistency and high productivity",
    ],
    liveLinks: [],
    technologies: ["Team Management", "Tech Support", "Localization", "Operations Management"],
    relevantSkills: ["Business Acumen", "Remote Collaboration", "True Non-Tech User Empathy"],
    color: "#9931e7",
    icon: Users,
  },
  {
    id: "mogi-international-team",
    title: "International Tech Support Team Lead",
    company: "Personio",
    workType: "Operational",
    logo: "/images/personio-team.jpg",
    year: "2023",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Oversaw daily operations for a 10-writer, globally distributed team, eventually becoming Personio's **first Senior Technical Writer**.",
    achievements: [
      "Managed 10-member international distributed team",
      "Maintained operational consistency across global team",
      "Led international tech support operations",
    ],
    liveLinks: [],
    technologies: ["Global Team Management", "Tech Support", "Distributed Operations", "Cross-Cultural Leadership"],
    relevantSkills: ["Business Acumen", "Remote Collaboration", "True Non-Tech User Empathy"],
    color: "#9931e7",
    icon: Globe,
  },
  {
    id: "sysnet-specialist",
    title: "Spanish-Native Support & Localization Specialist",
    company: "Sysnet",
    workType: "Operational",
    logo: "/images/sysnet-logo.png",
    year: "2017",
    location: "Dublin",
    country: "Ireland",
    countryFlag: "🇮🇪",
    type: "work",
    description:
      "Joined Sysnet as the **second, in-house Spanish-native** support and localization specialist, contributing to the expansion into the Latin American market.",
    achievements: [
      "Second in-house Spanish-native support specialist at Sysnet",
      "Contributed to Latin American market expansion",
      "Provided technical support and localization expertise",
    ],
    liveLinks: [],
    technologies: ["Tech Support", "Localization", "Spanish Market Expansion"],
    relevantSkills: ["Business Acumen", "True Non-Tech User Empathy"],
    color: "#9931e7",
    icon: Globe,
  },
]

interface GroupedCareerCardProps {
  groupId: string
  title: string
  company: string
  logo: string
  headerImage: string // Added headerImage prop
  location: string
  countryFlag: string
  achievementCount: number
  summary: string
  experiences: Experience[]
  workType: string
}

const GroupedCareerCard = ({
  groupId,
  title,
  company,
  logo,
  headerImage, // Use headerImage for banner, fallback to logo
  location,
  countryFlag,
  achievementCount,
  summary,
  experiences,
  workType,
}: GroupedCareerCardProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-gray-200/80 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      >
        {/* Header Image */}
        <div className="relative h-64 border-b-2 border-gray-200/80 overflow-hidden bg-gray-50">
          <img
            src={headerImage || logo || "/placeholder.svg"}
            alt={`${company} image`}
            className="h-full w-full object-cover"
          />

          <div className="absolute top-4 right-4 w-40 h-40 rounded-full bg-white shadow-xl border-2 border-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src={logo || "/placeholder.svg"}
              alt={`${company} logo`}
              className="w-full h-full object-contain scale-[2]"
            />
          </div>
        </div>

        <div className="p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <p
            className="relative z-10 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-50 transition-colors duration-300"
            dangerouslySetInnerHTML={{
              __html: summary.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />

          <div className="relative z-10 mt-4 flex items-center gap-2 text-sm font-medium text-primary">
            <span>View {achievementCount} achievements</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!w-[75vw] !max-w-none max-h-[90vh] overflow-y-auto p-6 sm:!max-w-none md:!max-w-none lg:!max-w-none">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{company}</DialogTitle>
          </DialogHeader>

          {/* Modal Image */}
          <div className="mb-8 flex gap-6">
            {/* Description */}
            <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <p
                className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200"
                dangerouslySetInnerHTML={{
                  __html: summary.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            </div>

            {/* Image on the right */}
            {headerImage && (
              <div className="w-[480px] h-80 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                <img
                  src={headerImage || "/placeholder.svg"}
                  alt={`${company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Top achievements</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative flex flex-col p-3 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:border-primary/50 cursor-pointer overflow-hidden"
                onClick={(e) => {
                  e.stopPropagation()
                  if (exp.liveLinks?.[0]?.url) {
                    window.open(exp.liveLinks[0].url, "_blank")
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <p
                    className="text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: exp.description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                </div>

                {exp.liveLinks?.[0]?.url && (
                  <div className="relative z-10 mt-2 flex items-center gap-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View details</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Work Samples section */}
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Work Samples</h3>
            {(() => {
              const allLinks = experiences
                .filter((exp) => exp.liveLinks && exp.liveLinks.length > 0)
                .flatMap((exp) =>
                  exp.liveLinks.map((link) => {
                    const roleMatch = link.label.match(/$$([^)]+)$$/)
                    const role = roleMatch ? roleMatch[1] : undefined
                    const contentType =
                      link.url.includes("youtube.com") || link.url.includes("vimeo.com") || link.url.includes("video")
                        ? "video"
                        : "article"
                    return {
                      ...link,
                      role,
                      contentType,
                    }
                  }),
                )
              return allLinks.length > 0 ? (
                <div className="grid gap-3">
                  {allLinks.map((link, idx) => (
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
              ) : (
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400">No work samples available</p>
                </div>
              )
            })()}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

const CareerCard = ({ exp }: { exp: Experience }) => {
  return (
    <div
      key={exp.id}
      className="group relative cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 min-h-[100px]"
      onClick={(e) => {
        e.stopPropagation()
        if (exp.liveLinks?.[0]?.url) {
          window.open(exp.liveLinks[0].url, "_blank")
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <p
          className="text-sm leading-relaxed text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{
            __html: exp.description.replace(
              /\*\*(.*?)\*\*/g,
              "<strong class='text-foreground font-semibold'>$1</strong>",
            ),
          }}
        />
      </div>

      {exp.achievements && exp.achievements.length > 0 && (
        <ul className="space-y-1.5 mb-4">
          {exp.achievements.slice(0, 3).map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="text-primary mt-0.5">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}

      {exp.liveLinks?.[0]?.url && (
        <div className="relative z-10 flex items-center gap-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          <span>View details</span>
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  )
}

const RelocationIndicator = ({
  fromCountry,
  toCountry,
  fromFlag,
  toFlag,
}: { fromCountry: string; toCountry: string; fromFlag: string; toFlag: string }) => (
  <div className="flex items-start gap-6">
    <div className="w-28 flex-shrink-0" />
    <div className="relative mt-1.5 h-3 w-3 flex-shrink-0" />
    <div className="flex-1 pb-4">
      <div className="flex items-center gap-3 rounded-lg border border-purple-200 bg-purple-50/50 px-4 py-2 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <span className="text-lg">{fromFlag}</span>
          <span className="font-medium">{fromCountry}</span>
        </div>
        <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        <div className="flex items-center gap-2 text-gray-700">
          <span className="text-lg">{toFlag}</span>
          <span className="font-medium">{toCountry}</span>
        </div>
        <span className="ml-auto text-xs text-purple-600 font-medium">Relocated</span>
      </div>
    </div>
  </div>
)

export default function CareerMapSection() {
  const allSortedExperiences = experiences.sort((a, b) => {
    const yearA = a.year === "Present" ? 9999 : Number.parseInt(a.year)
    const yearB = b.year === "Present" ? 9999 : Number.parseInt(b.year)
    return yearB - yearA // Most recent first
  })

  const operationalExperiences = allSortedExperiences.filter((exp) => exp.workType === "Operational")

  return (
    <section id="top-achievements" className="scroll-mt-20 py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            What I Worked On
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Top Operational Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operationalExperiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 p-6"
              onClick={(e) => {
                e.stopPropagation()
                if (exp.liveLinks?.[0]?.url) {
                  window.open(exp.liveLinks[0].url, "_blank")
                }
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={exp.logo || "/placeholder.svg"}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{exp.countryFlag}</span>
                      <span>{exp.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <p
                  className="text-sm leading-relaxed text-muted-foreground mb-4"
                  dangerouslySetInnerHTML={{
                    __html: exp.description.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong class='text-foreground font-semibold'>$1</strong>",
                    ),
                  }}
                />
              </div>

              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="space-y-1.5 mb-4">
                  {exp.achievements.slice(0, 3).map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.liveLinks?.[0]?.url && (
                <div className="relative z-10 flex items-center gap-2 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View details</span>
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
