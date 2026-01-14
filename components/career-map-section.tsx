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
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Documentation authoring",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona (relocated from Germany)",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Early hire — joined at 300 employees as **one of the first near-native English Technical Writers** and helped scale the documentation team as the company grew from 300 to 2,000 in three years (hypergrowth).",
    achievements: [
      "First Technical Writer on a 10-person team to be promoted to Senior",
      "Mentored a peer to promotion, who became our team's second Senior role two years after my promotion",
      "Guided a peer to promotion, who became our team's second Senior role two years after my promotion",
      "Led training sessions and workshops (Miro, Google Slides) to upskill writers on new tools and processes",
      "Partnered with leadership to align content with key metrics: product adoption and customer retention",
      "Built AI-powered processes to optimize team operations",
      "Created an AI assistant for Spanish translation review, reducing review time by 90%",
      "Enabled the team to deprioritize 20% of feature release tasks with low audience impact",
      "Enabled removal of 20% of outdated Help Center articles (+100), improving content relevance",
      "Improved data availability and enabled team to generate reports 30% faster",
      "Continued delivering release documentation through collaboration with cross-functional teams",
      "Owned content for a key product feature (Analytics), reducing tickets by over 50% (Apr–Sep 2025)",
      "Leveraged AI tools (ChatGPT, Claude, Gemini, Clueso) to produce new articles and videos in under 4h",
      "Continued as the only remaining member of Personio's Women Committee (EWG)",
      "Appointed as Culture Champion Barcelona Lead, led initiatives that boosted office attendance",
      "Appointed as Culture Interviewer, conducted 20 company-wide culture interviews per quarter",
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
    technologies: ["Technical Writing", "API Documentation", "User Guides", "Software Documentation", "AI Tools"],
    relevantSkills: [
      "Strong Technical Knowledge",
      "Multi-Audience Documentation",
      "Business Acumen",
      "AI-Driven Operations",
    ],
    color: "#9931e7",
    icon: FileText,
  },
  {
    id: "team-building",
    title: "Building International Documentation Team",
    company: "Personio",
    workType: "Operational",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2021-2023",
    location: "Dresden & Barcelona",
    country: "Germany & Spain",
    countryFlag: "🇩🇪 🇪🇸",
    type: "work",
    description:
      "Joined Personio as the **first Spanish-native** Technical Writer and helped build the Spanish user-facing documentation from scratch.",
    achievements: [
      "Joined as first Spanish-native Technical Writer",
      "Built Spanish documentation from scratch",
      "Helped expand team from 3 to 10 writers",
      "Transformed German-only to international team",
      "Supported company growth from 300 to 2,000 employees",
    ],
    liveLinks: [{ label: "Personio Help Center", url: "https://support.personio.de" }],
    technologies: ["Technical Writing", "Team Building", "Localization", "Documentation Strategy"],
    relevantSkills: ["Team Building", "Hiring", "Mentorship", "Cross-Cultural Communication"],
    color: "#9931e7",
    icon: Users,
  },
  {
    id: "team-scaling-hypergrowth",
    title: "Scaling Documentation Team During Hypergrowth",
    company: "Personio",
    workType: "Operational",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2021-2023",
    location: "Dresden & Barcelona",
    country: "Germany & Spain",
    countryFlag: "🇩🇪 🇪🇸",
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
    technologies: ["Team Scaling", "Process Design", "Documentation Operations", "Cross-functional Collaboration"],
    relevantSkills: ["Team Scaling", "Process Design", "Hypergrowth Management", "International Expansion"],
    color: "#9931e7",
    icon: TrendingUp,
  },
  {
    id: "localization-expansion",
    title: "Documentation Localization Expansion",
    company: "Personio",
    workType: "Operational",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2021-2023",
    location: "Dresden & Barcelona",
    country: "Germany & Spain",
    countryFlag: "🇩🇪 🇪🇸",
    type: "work",
    description:
      "Expanded Personio's user-facing documentation from **3 to 6 languages** through outsourced translation and localization.",
    achievements: [
      "Doubled language coverage from 3 to 6 languages",
      "Established vendor management processes for translation",
      "Ensured quality and consistency across all language versions",
    ],
    liveLinks: [{ label: "Personio Help Center", url: "https://support.personio.de" }],
    technologies: ["Localization", "Translation Management", "Quality Assurance", "Vendor Management"],
    relevantSkills: ["Project Management", "Cross-Cultural Communication", "Quality Control"],
    color: "#9931e7",
    icon: Globe,
  },
  {
    id: "ai-video-content",
    title: "AI-Assisted Instructional Videos",
    company: "Personio",
    workType: "Hands-on writing",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
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
  {
    id: "personio-senior-tw",
    title: "Senior Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Operational",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2023-2025",
    location: "Barcelona",
    country: "Spain",
    countryFlag: "🇪🇸",
    type: "work",
    description:
      "Continued scaling documentation to support the company's transition from a scale-up to a mature org. Promoted to Senior, with an increased focus on content operations and strategy:",
    achievements: [
      "**Content ops (80%):**",
      "• First Technical Writer on a 10-person team to be promoted to Senior",
      "• Mentored 10 teammates across Ireland, Spain, and Germany",
      "• Guided a peer to promotion, who became our team's second Senior role two years after my promotion",
      "• Led training sessions and workshops (Miro, Google Slides) to upskill writers on new tools and processes",
      "• Partnered with leadership to align content with key metrics: product adoption and customer retention",
      "• Built AI-powered, data-informed processes to optimize team operations:",
      "→ Created an AI assistant for Spanish translation review, reducing review time by 90%",
      "→ Enabled the team to deprioritize 20% of feature release tasks with low audience impact",
      "→ Enabled removal of 20% of outdated Help Center articles (+100), improving content relevance",
      "→ Improved data availability and enabled team to generate reports 30% faster",
      "",
      "**Hands-on writing and translation (20%):**",
      "• Continued delivering release documentation through collaboration with cross-functional teams",
      "• Owned content for a key product feature (Analytics), reducing tickets by over 50% (Apr–Sep 2025)",
      "• Leveraged AI tools (ChatGPT, Claude, Gemini, Clueso) to produce new articles and videos in under 4h",
      "",
      "**Other roles:**",
      "• Continued as the only remaining member of Personio's Women Committee (EWG)",
      "• Appointed as Culture Champion Barcelona Lead, led initiatives that boosted office attendance",
      "• Appointed as Culture Interviewer, conducted 20 company-wide culture interviews per quarter",
    ],
    liveLinks: [],
    technologies: ["Technical Writing", "Content Operations", "AI Tools", "Team Leadership", "Data-Driven Strategy"],
    relevantSkills: ["AI-Driven Operations", "Business Acumen", "Team Leadership", "Multi-Audience Documentation"],
    color: "#9931e7",
    icon: FileText,
  },
  {
    id: "personio-technical-writer",
    title: "Technical Writer | Bilingual (EN/ES)",
    company: "Personio",
    workType: "Operational",
    logo: "/personio-logo.png",
    headerImage: "/images/personio-team.jpg",
    year: "2021-2023",
    location: "Dresden",
    country: "Germany",
    countryFlag: "🇩🇪",
    type: "work",
    description:
      "Early hire — joined at 300 employees as **one of the first near-native English Technical Writers** and helped scale the documentation team as the company grew from 300 to 2,000 in three years (hypergrowth). Hybrid role spanning content ops and hands-on writing:",
    achievements: [
      "**Content ops (50%):**",
      "• Joined a 3-writer German-only team and helped scale it into a 10-writer, globally distributed team",
      "• Expanded English documentation from 3 languages to 6 via translation and localization",
      "• Built the Spanish documentation from scratch. Managed 150+ EN>ES translations annually",
      "• Temporarily acted as a company-wide Spanish Localization Expert and led UX improvements",
      "",
      "**Hands-on writing (50%):**",
      "• Authored English documentation for Personio's SaaS platform",
      "• Collaborated with cross-functional teams to deliver release documentation",
      "• Created user guides, admin documentation, and troubleshooting articles",
      "",
      "**Other roles:**",
      "• Joined Personio's Women Committee (EWG) as an active member",
      "• Contributed to diversity and inclusion initiatives across the company",
    ],
    liveLinks: [],
    technologies: ["Technical Writing", "Localization", "Team Scaling", "Documentation Strategy", "SaaS Documentation"],
    relevantSkills: [
      "Strong Technical Knowledge",
      "Multi-Audience Documentation",
      "Team Building",
      "Cross-Cultural Communication",
    ],
    color: "#9931e7",
    icon: FileText,
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
            <span>{experiences[0]?.year}</span>
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
                    className="text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: exp.description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
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

  const operationalExperiences = allSortedExperiences.filter((exp) => exp.workType === "Operational")

  const groupedByCompany = operationalExperiences.reduce(
    (acc, exp) => {
      const key = exp.company
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(exp)
      return acc
    },
    {} as Record<string, Experience[]>,
  )

  const companyCards = Object.entries(groupedByCompany).map(([company, exps]) => {
    const mainExp = exps[0] // Use first experience for main details
    const achievementCount = exps.reduce((sum, exp) => sum + (exp.achievements?.length || 0), 0)
    return {
      groupId: company.toLowerCase().replace(/\s+/g, "-"),
      title: mainExp.title,
      company,
      logo: mainExp.logo,
      headerImage: mainExp.headerImage || mainExp.logo, // Use headerImage if available, fallback to logo
      location: mainExp.location,
      countryFlag: mainExp.countryFlag,
      achievementCount,
      summary: mainExp.description,
      experiences: exps,
      workType: mainExp.workType,
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
          <GroupedCareerCard
            company="Personio"
            title="Senior Technical Writer | Bilingual (EN/ES)"
            location="Barcelona"
            countryFlag="🇪🇸"
            years="2023-2025"
            logo="/personio-logo.png"
            headerImage="/images/personio-team.jpg"
            summary="Continued scaling documentation to support the company's transition from a scale-up to a mature org. Promoted to Senior, with an increased focus on content operations and strategy."
            experiences={experiences.filter((exp) => exp.id === "personio-senior-technical-writer")}
          />

          <GroupedCareerCard
            company="Personio"
            title="Technical Writer | Bilingual (EN/ES)"
            location="Dresden, Germany"
            countryFlag="🇩🇪"
            years="2021-2023"
            logo="/personio-logo.png"
            headerImage="/images/personio-team.jpg"
            summary="Early hire — joined at 300 employees as one of the first near-native English Technical Writers and helped scale the documentation team as the company grew from 300 to 2,000 in three years (hypergrowth)."
            experiences={experiences.filter((exp) => exp.id === "personio-technical-writer")}
          />

          {/* Other company cards */}
          {Object.entries(
            experiences
              .filter((exp) => exp.company !== "Personio")
              .reduce(
                (acc, exp) => {
                  if (!acc[exp.company]) {
                    acc[exp.company] = []
                  }
                  acc[exp.company].push(exp)
                  return acc
                },
                {} as Record<string, typeof experiences>,
              ),
          ).map(([company, companyExps]) => {
            const mainExp = companyExps[0]
            const achievementCount = companyExps.reduce((sum, exp) => sum + (exp.achievements?.length || 0), 0)
            return (
              <GroupedCareerCard
                key={company.toLowerCase().replace(/\s+/g, "-")}
                groupId={company.toLowerCase().replace(/\s+/g, "-")}
                title={mainExp.title}
                company={company}
                logo={mainExp.logo}
                headerImage={mainExp.headerImage || mainExp.logo}
                location={mainExp.location}
                countryFlag={mainExp.countryFlag}
                achievementCount={achievementCount}
                summary={mainExp.description}
                experiences={companyExps}
                workType={mainExp.workType}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
