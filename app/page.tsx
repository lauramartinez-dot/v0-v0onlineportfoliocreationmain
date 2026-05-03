import { HeroSection } from "@/components/hero-section"
import { OriginSection } from "@/components/origin-section"
import { AboutHeroSection } from "@/components/about-hero-section"
import { TransitionSection } from "@/components/transition-section"
import { HighlightsSection } from "@/components/highlights-section"
import { TopSkillsSection } from "@/components/top-skills-section"
import { MissionSection } from "@/components/mission-section"
import { ScrollTransitionSection } from "@/components/scroll-transition-section"
import CareerMapSection from "@/components/career-map-section"
import WritingSamplesSection from "@/components/writing-samples-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OriginSection />
      <AboutHeroSection />
      <TransitionSection />
      <HighlightsSection />
      <TopSkillsSection />
      <MissionSection />
      <ScrollTransitionSection />
      <TransitionSection />
      <CareerMapSection />
      <WritingSamplesSection />
      <Footer />
    </main>
  )
}
