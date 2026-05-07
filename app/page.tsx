import { HeroSection } from "@/components/hero-section"
import { OriginSection } from "@/components/origin-section"
import { AboutHeroSection } from "@/components/about-hero-section"
import { TransitionSection } from "@/components/transition-section"
import { HighlightsSection } from "@/components/highlights-section"
import { AchievementsSection } from "@/components/achievements-section"
import { TopSkillsSection } from "@/components/top-skills-section"

import { ScrollTransitionSection } from "@/components/scroll-transition-section"
import CareerMapSection from "@/components/career-map-section"
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
      {/* Why me? section with 3 images + mission */}
      <HighlightsSection />
      {/* Top Achievements */}
      <AchievementsSection />
      {/* Top Skills & Tools - merged with image headers */}
      <TopSkillsSection />
      <ScrollTransitionSection />
      <TransitionSection />
      <CareerMapSection />
      <Footer />
    </main>
  )
}
