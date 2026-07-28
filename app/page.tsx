import { HeroSection } from "@/components/hero-section"
import { OriginSection } from "@/components/origin-section"
import { AboutHeroSection } from "@/components/about-hero-section"
import { TransitionSection } from "@/components/transition-section"
import { HighlightsSection } from "@/components/highlights-section"
import { AchievementsSection } from "@/components/achievements-section"
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
      {/* What I do - 3 images + mission */}
      <HighlightsSection />
      {/* My work in numbers */}
      <AchievementsSection />
      <TransitionSection />
      <OriginSection />
      <AboutHeroSection />
      <ScrollTransitionSection />
      <TransitionSection />
      {/* Top Achievements per company */}
      <CareerMapSection />
      {/* Top Skills & Tools */}
      <TopSkillsSection />
      {/* Me while OOO - personal section */}
      <OOOSection />
      <Footer />
    </main>
  )
}
