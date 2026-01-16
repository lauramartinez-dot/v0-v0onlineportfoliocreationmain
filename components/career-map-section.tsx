"use client"
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

interface Achievement {
  id: string
  title: string
  description: string
  icon: any
  color: string
}

const operationalAchievements: Achievement[] = [
  {
    id: "scaled-teams",
    title: "Scaled Documentation & Support Teams Globally",
    description:
      "Built and expanded documentation and support teams from small local groups to 10+ globally distributed writers and support staff, mentoring peers and guiding promotions (Personio, MoGi Group, Sysnet).",
    icon: Users,
    color: "#9931e7",
  },
  {
    id: "ai-optimization",
    title: "Optimized Workflows with AI & Data",
    description:
      "Designed AI-powered and data-informed processes that: Reduced Spanish translation review time by 90%. Cleared 100+ outdated articles, improving content relevance. Generated operational reports 30% faster. Deprioritized low-impact tasks → saved 20% of release effort.",
    icon: Bot,
    color: "#9931e7",
  },
  {
    id: "reduced-support",
    title: "Directly Reduced Support Load & Improved Customer Experience",
    description:
      "Authored and owned key product feature documentation, leading to: 50% fewer support tickets in six months. Clearer user guidance and reduced friction for product adoption.",
    icon: BarChart,
    color: "#9931e7",
  },
  {
    id: "multilingual",
    title: "Built Multi-language & Localized Content from Scratch",
    description:
      "Created Spanish documentation from zero, managed 150+ translations per year, and localized content for global audiences, including tech journalism (Personio, Business Insider, Muy Interesante).",
    icon: Globe,
    color: "#9931e7",
  },
  {
    id: "mentorship",
    title: "Mentored & Developed Talent",
    description:
      "Promoted to Senior Technical Writer as the first on a 10-person team; mentored 10 team members and guided a peer to promotion, doubling senior-level coverage within the team.",
    icon: TrendingUp,
    color: "#9931e7",
  },
  {
    id: "cross-functional",
    title: "Led Cross-functional & Cultural Initiatives",
    description:
      "Acted as Culture Champion, Women Committee lead, and interviewer; ran workshops and trainings to upskill teams, aligning documentation strategy with business KPIs like adoption and retention.",
    icon: Target,
    color: "#9931e7",
  },
  {
    id: "tech-content",
    title: "Published High-impact Tech Content",
    description:
      "Authored 200+ articles on emerging tech and science, some featured on front pages; translated and localized content to reach broader audiences; recognized with a Journalism Research Grant.",
    icon: Award,
    color: "#9931e7",
  },
]

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  const Icon = achievement.icon
  return (
    <div
      key={achievement.id}
      className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-semibold text-foreground">{achievement.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function CareerMapSection() {
  return (
    <section id="top-achievements" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            What I Built
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Top Operational Achievements</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {operationalAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}
