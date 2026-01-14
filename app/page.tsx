import { HeroSection } from "@/components/hero-section"
import { TransitionSection } from "@/components/transition-section"
import { HighlightsSection } from "@/components/highlights-section"
import { SkillsCoreSection } from "@/components/skills-core-section"
import { ScrollTransitionSection } from "@/components/scroll-transition-section"
import CareerMapSection from "@/components/career-map-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TransitionSection />
      <HighlightsSection />
      <SkillsCoreSection />
      <ScrollTransitionSection />
      <TransitionSection />
      <CareerMapSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
