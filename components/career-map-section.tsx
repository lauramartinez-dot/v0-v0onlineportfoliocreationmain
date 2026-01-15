"use client"

import { useState } from "react"
import {
  GraduationCap,
  Plane,
  Newspaper,
  TrendingUp,
  Globe,
  Award,
  Users,
  Target,
  Bot,
  BarChart,
  Trash,
  FileSpreadsheet,
} from "lucide-react"
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
    id: "personio-senior-first-promoted",
    title: "Promoted to Senior",
    company: "Personio",
    workType: "Content operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona (relocated from Germany)",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Continued scaling documentation to support the company’s transition from a scale-up to a mature org. Promoted to Senior, with an increased focus on content operations and strategy:",
    achievements: [],
    technologies: ["Leadership", "Mentorship", "Career Development"],
    relevantSkills: ["Leadership", "Technical Excellence"],
    color: "#9931e7",
    icon: Award,
  },
  {
    id: "personio-senior-mentorship",
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Content operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Led mentorship initiatives for 10 teammates across a global, remote-first team spanning Ireland, Spain, and Germany. Provided guidance on technical writing best practices, content strategy, and career development, fostering a culture of continuous learning and professional growth.",
    achievements: [],
    technologies: ["Mentorship", "Remote Collaboration", "Team Development"],
    relevantSkills: ["Mentorship", "Cross-Cultural Communication"],
    color: "#9931e7",
    icon: Users,
  },
  {
    id: "personio-senior-peer-promotion",
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Content operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Actively mentored a peer through their career development journey, providing guidance and support that led to their promotion to Senior Technical Writer—becoming the team's second Senior role two years after my own promotion. This demonstrated the effectiveness of knowledge transfer and leadership development.",
    achievements: [],
    technologies: ["Mentorship", "Career Development", "Leadership"],
    relevantSkills: ["Mentorship", "Leadership"],
    color: "#9931e7",
    icon: TrendingUp,
  },
  {
    id: "personio-senior-training",
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Content operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Designed and facilitated training sessions and workshops using Miro and Google Slides to upskill writers on new tools, processes, and documentation methodologies. These sessions improved team efficiency, standardized workflows, and ensured consistent adoption of best practices across the globally distributed team.",
    achievements: [],
    technologies: ["Miro", "Google Slides", "Training", "Workshop Facilitation"],
    relevantSkills: ["Training", "Process Design"],
    color: "#9931e7",
    icon: GraduationCap,
  },
  {
    id: "personio-senior-leadership-alignment",
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Content operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Collaborated directly with leadership to align content strategy with business objectives, focusing on key metrics like product adoption and customer retention. This partnership ensured documentation efforts directly supported company goals and demonstrated measurable impact on user success and business outcomes.",
    achievements: [],
    technologies: ["Content Strategy", "Product Analytics", "Customer Success"],
    relevantSkills: ["Business Acumen", "Strategic Thinking"],
    color: "#9931e7",
    icon: Target,
  },
  {
    id: "personio-senior-ai-translation",
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "AI-powered operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Developed an AI-powered assistant specifically designed for Spanish translation review, streamlining the quality assurance process. This innovation reduced review time by 90%, allowing the team to scale translation operations efficiently while maintaining high quality standards and freeing up resources for strategic content initiatives.",
    achievements: [],
    technologies: ["AI", "Machine Learning", "Python", "Translation", "Automation"],
    relevantSkills: ["AI-Driven Operations", "Process Optimization"],
    color: "#9931e7",
    icon: Bot,
  },
  {
    id: "personio-senior-task-prioritization",
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Data-informed operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Implemented data-driven analysis to identify and deprioritize 20% of feature release documentation tasks that had minimal audience impact. This optimization allowed the team to focus resources on high-value content, improving overall documentation quality and team efficiency while maintaining comprehensive coverage of critical features.",
    achievements: [],
    technologies: ["Data Analytics", "Product Analytics", "Content Strategy"],
    relevantSkills: ["Data-Driven Decision Making", "Process Optimization"],
    color: "#9931e7",
    icon: BarChart,
  },
  {
    id: "personio-senior-content-cleanup",
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Data-informed operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Led a comprehensive content audit that identified and removed over 100 outdated Help Center articles (20% of total content). This cleanup significantly improved content relevance, reduced user confusion, enhanced search accuracy, and streamlined maintenance efforts while ensuring users found accurate, up-to-date information.",
    achievements: [],
    technologies: ["Content Audit", "Data Analytics", "Content Strategy"],
    relevantSkills: ["Content Strategy", "Data-Driven Operations"],
    color: "#9931e7",
    icon: Trash,
  },
  {
    id: "personio-senior-reporting",
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Data-informed operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Enhanced data infrastructure and reporting capabilities, enabling the team to generate performance reports 30% faster. Improved data availability and accessibility empowered data-driven decision making, accelerated response times to content issues, and provided better visibility into documentation effectiveness and user engagement metrics.",
    achievements: [],
    technologies: ["Data Analytics", "Reporting", "Process Automation"],
    relevantSkills: ["Data Operations", "Process Optimization"],
    color: "#9931e7",
    icon: FileSpreadsheet,
  },
  {
    id: "personio-tw-team-scaling",
    title: "Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Content operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2021-2023",
    location: "Dresden",
    country: "Germany",
    countryFlag: "🇩🇪",
    type: "work",
    description:
      "joined at 300 employees as 𝗼𝗻𝗲 𝗼𝗳 𝘁𝗵𝗲 𝗳𝗶𝗿𝘀𝘁 𝗻𝗲𝗮𝗿-𝗻𝗮𝘁𝗶𝘃𝗲 𝗘𝗻𝗴𝗹𝗶𝘀𝗵 𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗮𝗹 𝗪𝗿𝗶𝘁𝗲𝗿𝘀 and helped scale the documentation team as the company grew from 300 to 2,000 in three years (hypergrowth).",
    achievements: [],
    technologies: ["Team Building", "Scaling", "International Collaboration"],
    relevantSkills: ["Team Building", "Cross-Cultural Communication"],
    color: "#9931e7",
    icon: Users,
  },
  {
    id: "personio-tw-language-expansion",
    title: "Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Content operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2021-2023",
    location: "Dresden",
    country: "Germany",
    countryFlag: "🇩🇪",
    type: "work",
    description:
      "Led the expansion of English documentation from 3 languages to 6 through strategic translation and localization initiatives. This expansion doubled Personio's language coverage, significantly increasing market reach and ensuring users across Europe could access comprehensive documentation in their native languages, supporting the company's international growth.",
    achievements: [],
    technologies: ["Translation", "Localization", "Content Strategy"],
    relevantSkills: ["Multilingual Content", "Localization"],
    color: "#9931e7",
    icon: Globe,
  },
  {
    id: "personio-tw-spanish-docs",
    title: "Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Hands-on writing",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2021-2023",
    location: "Dresden",
    country: "Germany",
    countryFlag: "🇩🇪",
    type: "work",
    description:
      "Built Personio's entire Spanish documentation library from the ground up, creating a comprehensive resource for Spanish-speaking users. Managed 150+ English-to-Spanish translations annually, ensuring consistent terminology, cultural adaptation, and high-quality content that met the needs of the growing Spanish market.",
    achievements: [],
    technologies: ["Documentation", "Spanish Translation", "Content Creation"],
    relevantSkills: ["Technical Writing", "Translation Management"],
    color: "#9931e7",
    icon: Newspaper,
  },
  {
    id: "personio-tw-localization-expert",
    title: "Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Content operations",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2021-2023",
    location: "Dresden",
    country: "Germany",
    countryFlag: "🇩🇪",
    type: "work",
    description:
      "Temporarily expanded role to serve as the company-wide Spanish Localization Expert, collaborating with product, design, and engineering teams. Led UX improvements specific to Spanish-speaking markets, ensuring product interfaces and documentation maintained linguistic and cultural accuracy while delivering optimal user experiences across all Spanish locales.",
    achievements: [],
    technologies: ["Localization", "UX Design", "Cross-Functional Collaboration"],
    relevantSkills: ["Localization Strategy", "UX Writing"],
    color: "#9931e7",
    icon: Award,
  },
  {
    id: "mogi-spanish-team",
    title: "Spanish Tech Support & Localization Team Lead",
    company: "Mogi",
    workType: "Operational",
    logo: "/mogi-logo.png",
    headerImage: "/modern-tech-support-office-team-collaboration.jpg",
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
    company: "Mogi",
    workType: "Operational",
    logo: "/mogi-logo.png",
    headerImage: "/modern-tech-support-office-team-collaboration.jpg",
    year: "2018",
    location: "Dublin",
    country: "Ireland",
    countryFlag: "🇮🇪",
    type: "work",
    description:
      "Supervised a 10-member internationally distributed team, maintaining operational consistency across time zones and high productivity standards.",
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
    logo: "/sysnet-logo.png",
    headerImage: "/customer-support-technology-workspace.jpg",
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
  years: string // Added years prop
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
  years, // Added years prop
}: GroupedCareerCardProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
      >
        {/* Header image with logo bubble */}
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <img
            src={headerImage || "/placeholder.svg"}
            alt={company}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          {/* Logo bubble overlay */}
          <div className="absolute top-4 right-4 h-32 w-32 overflow-hidden rounded-full border-4 border-background bg-background shadow-lg">
            <img
              src={logo || "/placeholder.svg"}
              alt={`${company} logo`}
              className="h-full w-full object-contain p-1"
            />
          </div>
        </div>

        {/* Card content */}
        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
          {/* Date and location info */}
          <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
            <span>{countryFlag}</span>
            <span>{location}</span>
            <span>•</span>
            <span>{years}</span>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">{summary}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">
              {achievementCount} achievement{achievementCount !== 1 ? "s" : ""}
            </span>
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              View details →
            </span>
          </div>
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
                className="group relative flex flex-col p-3 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <p
                    className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3"
                    dangerouslySetInnerHTML={{
                      __html: exp.description.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong class='text-foreground font-semibold'>$1</strong>",
                      ),
                    }}
                  />
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
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
    const yearA = a.year === "Present" ? 9999 : Number.parseInt(a.year.split("-")[0])
    const yearB = b.year === "Present" ? 9999 : Number.parseInt(b.year.split("-")[0])
    return yearB - yearA // Most recent first
  })

  const operationalExperiences = allSortedExperiences.filter(
    (exp) =>
      exp.workType === "Operational" ||
      exp.workType === "Content operations" ||
      exp.workType === "AI-powered operations" ||
      exp.workType === "Data-informed operations",
  )

  const groupedByCompanyAndTitle = operationalExperiences.reduce(
    (acc, exp) => {
      const key = `${exp.company}-${exp.title}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(exp)
      return acc
    },
    {} as Record<string, Experience[]>,
  )

  const companyCards = Object.entries(groupedByCompanyAndTitle).map(([key, exps]) => {
    const mainExp = exps[0] // Use first experience for main details
    const achievementCount = exps.length // Count individual sub-achievements
    return {
      groupId: key.toLowerCase().replace(/\s+/g, "-"),
      title: mainExp.title,
      company: mainExp.company,
      logo: mainExp.logo,
      headerImage: mainExp.headerImage || mainExp.logo, // Use headerImage if available, fallback to logo
      location: mainExp.location,
      countryFlag: mainExp.countryFlag,
      achievementCount,
      summary: mainExp.description,
      experiences: exps,
      workType: mainExp.workType,
      years: mainExp.year, // Added years
    }
  })

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
          {companyCards.map((card) => (
            <GroupedCareerCard key={card.groupId} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
