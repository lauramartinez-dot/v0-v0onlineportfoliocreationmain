import { HeroSection } from "@/components/hero-section"
import { TransitionSection } from "@/components/transition-section"
import { HighlightsSection } from "@/components/highlights-section"
import { TopSkillsSection } from "@/components/top-skills-section"
import { OOOSection } from "@/components/ooo-section"
import { ScrollTransitionSection } from "@/components/scroll-transition-section"
import CareerMapSection from "@/components/career-map-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      {/* What I do + How I do it, with the proud-of numbers under each column */}
      <HighlightsSection />
      <TransitionSection />
      <ScrollTransitionSection />
      <TransitionSection />
      {/* Top Achievements per company */}
      <CareerMapSection />
      {/* Top Skills & Tools */}
      <TopSkillsSection />
      {/* My personal projects */}
      <OOOSection />
      <Footer />
    </main>
  )
}
