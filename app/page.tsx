import { HeroSection } from "@/components/hero-section"
import { HighlightsSection } from "@/components/highlights-section"
import { WritingPrinciplesSection } from "@/components/writing-principles-section"
import { WritingSamplesSection } from "@/components/writing-samples-section"
import CareerMapSection from "@/components/career-map-section"
import { PersonalProjectsSection } from "@/components/personal-projects-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      {/* About me */}
      <HighlightsSection />
      {/* Writing principles */}
      <WritingPrinciplesSection />
      {/* Work experience */}
      <CareerMapSection />
      {/* Writing samples */}
      <WritingSamplesSection />
      {/* Personal projects */}
      <PersonalProjectsSection />
      <Footer />
    </main>
  )
}
