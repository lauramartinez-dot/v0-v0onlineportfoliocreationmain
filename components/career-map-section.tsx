"use client"
import React from "react"
import Image from "next/image"
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
  FileText,
  Heart,
  ChevronDown,
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
      "Actively mentored a peer through their career development journey, providing guidance and support that led to their promotion to  Technical Writer—becoming the team's second Senior role two years after my own promotion. This demonstrated the effectiveness of knowledge transfer and leadership development.",
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
      "Joined at 300 employees as 𝗼𝗻𝗲 𝗼𝗳 𝘁𝗵𝗲 𝗳𝗶𝗿𝘀𝘁 𝗻𝗲𝗮𝗿-𝗻𝗮𝘁𝗶𝘃𝗲 𝗘𝗻𝗴𝗹𝗶𝘀𝗵 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝗹 𝗪𝗿𝗶𝘁𝗲𝗿𝘀 and helped scale the documentation team as the company grew from 300 to 2,000 in three years (hypergrowth).",
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
      "Temporarily served as a company-wide Spanish Localization Expert, providing guidance on localization best practices beyond documentation. Led UX writing improvements for the Spanish product interface, ensuring consistent terminology and natural language throughout the user experience while maintaining brand voice and clarity.",
    achievements: [],
    technologies: ["Localization", "UX Writing", "Spanish Language"],
    relevantSkills: ["Localization Expertise", "UX Writing"],
    color: "#9931e7",
    icon: Globe,
  },
  {
    id: "personio-tw-style-guide",
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
      "Created the first user-facing documentation style guide in the company. Together with the rest of founding near-native English Technical Writers, we created the first ever style guides for user-facing documentation. I also created the Spanish localization style guides based on my previous experience performing actual translation and translation QA.",
    achievements: [],
    technologies: ["Style Guide", "Documentation Standards", "Localization"],
    relevantSkills: ["Content Strategy", "Standards Development"],
    color: "#9931e7",
    icon: FileText,
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
  image?: string
  column?: number
  bulletPoints?: string[]
  tools?: string[]
}

const operationalAchievements: Achievement[] = [
  // Column 1: Writing achievements
  {
    id: "style-guide",
    title: "Created Personio's first-ever documentation style guides",
    description:
      "Created style guides for English source content, setting consistent standards across a team of 10 technical writers.",
    icon: FileText,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&auto=format&fit=crop&q=60",
    column: 1,
    tools: ["Confluence", "Notion", "Google Docs"],
  },
  {
    id: "product-areas",
    title: "Created documentation for 3+ product areas at the same time",
    description:
      "Managed documentation across multiple major product areas simultaneously, ensuring comprehensive coverage and consistency.",
    icon: FileText,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    column: 1,
    tools: ["Zendesk", "Jira", "Figma"],
  },
  {
    id: "content-ownership",
    title: "Owned and maintained 100+ documentation pages",
    description:
      "Managed and was responsible for over 100 pages of user-facing product documentation covering multiple product features and apps, including analytics and account set up.",
    icon: FileText,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    column: 1,
    tools: ["Zendesk", "Jira", "Figma"],
  },
  {
    id: "support-volume",
    title: "Reduced a product area's support volume by over 50% (Apr–Sep 2025)",
    description:
      "Improved documentation quality and coverage to significantly reduce support ticket volume for specific product areas.",
    icon: TrendingUp,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    column: 1,
  },
  {
    id: "ai-tools",
    title: "Used Gen AI tools to create new pages in under 4h",
    description:
      "Used AI-powered tools to dramatically accelerate documentation creation while maintaining quality standards.",
    icon: Bot,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    column: 1,
    tools: ["ChatGPT", "Claude", "Cursor"],
  },
  {
    id: "subaudiences",
    title: "Created documentation tailored to 5+ audiences / end-users",
    description:
      "Developed tailored documentation for diverse user groups within business users (business admins, HR managers, supervisors, employees, and more) and supported the creation of role-based navigation.",
    icon: Users,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    column: 1,
  },
  // Column 2: Build/Operations achievements
  {
    id: "scaled-teams",
    title: "Grew a local 3-writer documentation team into a global team of 10",
    description:
      "I joined Personio at around 300 people as one of the first Technical Writers and built the team from scratch — growing it from 3 writers into a global team of 10+ across Germany, Ireland, and Spain.",
    icon: Users,
    color: "#9931e7",
    image: "/images/team-collaboration.jpeg",
    column: 2,
  },
  {
    id: "first-senior-promotion",
    title: "Became Personio's first Senior Technical Writer",
    description:
      "First Technical Writer on a 10-person team to be promoted to Senior.",
    icon: Award,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
    column: 2,
  },
  {
    id: "mentored-teammates",
    title: "Mentored 10 teammates on a global, remote-first team",
    description:
      "Provided mentorship and guidance to teammates across multiple time zones and locations.",
    icon: Users,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    column: 2,
  },
  {
    id: "peer-promotion",
    title: "Mentored a peer to their promotion to our 2nd Senior Technical Writer",
    description:
      "Mentored and supported a colleague through their growth journey, resulting in their promotion to Senior.",
    icon: TrendingUp,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
    column: 2,
  },
  {
    id: "deprioritize-tasks",
    title: "Enabled the team to deprioritize 20% of feature release tasks with low audience impact",
    description:
      "Used data analysis to identify low-impact documentation tasks, allowing the team to focus on higher-value work.",
    icon: TrendingUp,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    column: 2,
  },
  {
    id: "outdated-articles",
    title: "Enabled removal of 20% of outdated Help Center articles (+100), improving content relevance",
    description:
      "Identified and removed over 100 outdated articles from the Help Center, improving overall content quality and user experience.",
    icon: FileText,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    column: 2,
  },
  {
    id: "tableau-reports",
    title: "Enabled the team to generate reports 30% faster by enhancing Tableau dashboards",
    description:
      "Worked with Data Analysts to enhance Tableau dashboards, streamlining the reporting process for the documentation team.",
    icon: Bot,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    column: 2,
  },
  {
    id: "womens-committee",
    title: "Co-founded Personio's first Women's Committee",
    description:
      "Co-founded Personio's first Women's Committee, hosting informal lunches on topics like salary negotiation, assertive communication, and financial investment to empower female colleagues and spark knowledge sharing.",
    icon: Heart,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop&q=60",
    column: 2,
  },
  // Column 3: Translate/Global achievements
  {
    id: "localization-expansion",
    title: "Grew documentation from 3 to 6 languages",
    description:
      "Grew user-facing product documentation from 3 to 6 supported languages by managing external translation vendors (Smartling and Phrase) and handling the day-to-day work of getting content translated, reviewed, and published.",
    icon: Globe,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&fit=crop&q=60",
    column: 3,
    tools: ["Smartling", "Phrase", "Zendesk Localization"],
  },
  {
    id: "spanish-localization-guides",
    title: "Created Personio's first-ever Spanish localization style guides",
    description:
      "Developed the company's first Spanish localization guides, establishing standards and best practices for translating product content into Spanish for the growing Spanish-speaking user base.",
    icon: FileText,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1551279076-6887dee32c7e?w=800&auto=format&fit=crop&q=60",
    column: 3,
    tools: ["Confluence", "Google Docs", "Phrase"],
  },
  {
    id: "spanish-docs-site",
    title: "Built the Spanish user-facing documentation site from scratch",
    description:
      "Built and maintained the complete Spanish-language documentation site, ensuring comprehensive coverage for Spanish-speaking users from initial setup through ongoing content management.",
    icon: Globe,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&fit=crop&q=60",
    column: 3,
    tools: ["Zendesk", "Phrase", "Smartling"],
  },
  {
    id: "ai-translation-assistant",
    title: "Created an AI assistant for Spanish translation review, reducing review time by 90%",
    description:
      "Built a custom AI-powered assistant to streamline the Spanish translation review process, dramatically reducing the time needed to review and approve translated content.",
    icon: Bot,
    color: "#9931e7",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    column: 3,
  },
]

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  const Icon = achievement.icon
  const [isExpanded, setIsExpanded] = React.useState(false)
  const hasBulletPoints = achievement.bulletPoints && achievement.bulletPoints.length > 0
  const hasTools = achievement.tools && achievement.tools.length > 0

  return (
    <div
      key={achievement.id}
      className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-5 flex flex-col">
        {/* Always visible: Title + Chevron */}
        <div className="flex items-start gap-3">
          <h3 className="flex-1 text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
            {achievement.title}
          </h3>
          <ChevronDown className={`w-5 h-5 text-primary/60 shrink-0 transition-transform duration-300 mt-0.5 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>

        {/* Expandable content: Description + Bullet points */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100 mt-3 pt-3 border-t border-primary/10' : 'max-h-0 opacity-0'}`}>
          <p className="text-sm text-foreground/70 leading-relaxed">{achievement.description}</p>

          {/* Bullet points if available */}
          {hasBulletPoints && (
            <ul className="mt-3 space-y-2">
              {achievement.bulletPoints?.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Top Achievements</h2>
        </div>

        {/* OMP Company Card */}
        <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-purple-950/40 via-background to-pink-950/30 p-8 md:p-10 shadow-2xl shadow-primary/20 mb-8 hover:border-primary/50 transition-all duration-300">
          {/* Company Header */}
          <div className="flex items-center gap-6 mb-8 pb-6 border-b border-primary/10">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center ring-2 ring-primary/30 shadow-lg">
              <Image src="/omp-logo.png" alt="OMP" fill className="object-contain p-2" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-foreground">OMP</h3>
              <p className="text-lg text-foreground/60">Senior Technical Writer &middot; 2026 - Present</p>
            </div>
            {/* Country Flag - top right */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-lg" title="Belgium">🇧🇪</span>
              <span className="text-xs font-medium text-foreground/70">Belgium</span>
            </div>
          </div>

          {/* Achievement Grid */}
          <div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Column 1 - Writing */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                {/* Full background image */}
                <Image src="/vr-person-blue-tech.png" alt="Writing Skills" fill className="object-cover" />
                {/* Gradient overlay - stronger at top, subtle behind cards */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/50 via-background/70 to-background/85" />
                {/* Subtle label - centered, elegant */}
                <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">I write</span>
                </div>
                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  {/* Header spacer for visible image area */}
                  <div className="h-14" />
                  {/* Cards area */}
                  <div className="p-5 flex flex-col gap-5 items-center justify-center min-h-[80px]">
                    <p className="text-foreground/50 text-base italic text-center">WIP - still getting onboarded</p>
                  </div>
                </div>
              </div>
              {/* Column 2 - Operations */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                {/* Full background image */}
                <Image src="/startup-workspace.jpg" alt="Operations Skills" fill className="object-cover" />
                {/* Gradient overlay - stronger at top, subtle behind cards */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/50 via-background/70 to-background/85" />
                {/* Subtle label - centered, elegant */}
                <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">I build</span>
                </div>
                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  {/* Header spacer for visible image area */}
                  <div className="h-14" />
                  {/* Cards area */}
                  <div className="p-5 flex flex-col gap-5 items-center justify-center min-h-[80px]">
                    <p className="text-foreground/50 text-base italic text-center">WIP - still getting onboarded</p>
                  </div>
                </div>
              </div>
              {/* Column 3 - Global */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                {/* Full background image */}
                <Image src="/still-life-supply-chain.jpg" alt="Global Skills" fill className="object-cover" />
                {/* Gradient overlay - stronger at top, subtle behind cards */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/50 via-background/70 to-background/85" />
                {/* Subtle label - centered, elegant */}
                <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">I translate</span>
                </div>
                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  {/* Header spacer for visible image area */}
                  <div className="h-14" />
                  {/* Cards area */}
                  <div className="p-5 flex flex-col gap-5 items-center justify-center min-h-[80px]">
                    <p className="text-foreground/50 text-base italic text-center">WIP - still getting onboarded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personio Company Card */}
        <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-purple-950/40 via-background to-pink-950/30 p-8 md:p-10 shadow-2xl shadow-primary/20 hover:border-primary/50 transition-all duration-300">
          {/* Company Header */}
          <div className="flex items-center gap-6 mb-8 pb-6 border-b border-primary/10">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center ring-2 ring-primary/30 shadow-lg">
              <Image src="/personio-icon-black.png" alt="Personio" fill className="object-contain p-2" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-foreground">Personio</h3>
              <p className="text-lg text-foreground/60">Senior Technical Writer &middot; 2021 - 2025</p>
            </div>
            {/* Country Flag - top right */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-lg" title="Germany">🇩🇪</span>
              <span className="text-xs font-medium text-foreground/70">Germany</span>
            </div>
          </div>

          {/* Achievement Grid */}
          <div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Column 1 - Writing */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                {/* Full background image */}
                <Image src="/vr-person-blue-tech.png" alt="Writing Skills" fill className="object-cover" />
                {/* Gradient overlay - stronger at top, subtle behind cards */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/50 via-background/70 to-background/85" />
                {/* Subtle label - centered, elegant */}
                <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">I write</span>
                </div>
                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  {/* Header spacer for visible image area */}
                  <div className="h-14" />
                  {/* Cards area */}
                  <div className="p-5 flex flex-col gap-5">
                    {operationalAchievements
                      .filter((a) => a.column === 1)
                      .map((achievement) => (
                        <AchievementCard key={achievement.id} achievement={achievement} />
                      ))}
                  </div>
                </div>
              </div>
              {/* Column 2 - Operations */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                {/* Full background image */}
                <Image src="/startup-workspace.jpg" alt="Operations Skills" fill className="object-cover" />
                {/* Gradient overlay - stronger at top, subtle behind cards */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/50 via-background/70 to-background/85" />
                {/* Subtle label - centered, elegant */}
                <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">I build</span>
                </div>
                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  {/* Header spacer for visible image area */}
                  <div className="h-14" />
                  {/* Cards area */}
                  <div className="p-5 flex flex-col gap-5">
                    {operationalAchievements
                      .filter((a) => a.column === 2)
                      .map((achievement) => (
                        <AchievementCard key={achievement.id} achievement={achievement} />
                      ))}
                  </div>
                </div>
              </div>
              {/* Column 3 - Global */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                {/* Full background image */}
                <Image src="/still-life-supply-chain.jpg" alt="Global Skills" fill className="object-cover" />
                {/* Gradient overlay - stronger at top, subtle behind cards */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/50 via-background/70 to-background/85" />
                {/* Subtle label - centered, elegant */}
                <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">I translate</span>
                </div>
                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  {/* Header spacer for visible image area */}
                  <div className="h-14" />
                  {/* Cards area */}
                  <div className="p-5 flex flex-col gap-5">
                    {operationalAchievements
                      .filter((a) => a.column === 3)
                      .map((achievement) => (
                        <AchievementCard key={achievement.id} achievement={achievement} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
