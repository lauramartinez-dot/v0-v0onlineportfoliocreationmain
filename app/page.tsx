import { HeroSection } from "@/components/hero-section"
import { TransitionSection } from "@/components/transition-section"
import { HighlightsSection } from "@/components/highlights-section"
import { WritingPrinciplesSection } from "@/components/writing-principles-section"
import { WritingSamplesSection } from "@/components/writing-samples-section"
import { ScrollTransitionSection } from "@/components/scroll-transition-section"
import CareerMapSection from "@/components/career-map-section"
import { OOOSection } from "@/components/ooo-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      {/* What I do + why */}
      <HighlightsSection />
      {/* Writing principles */}
      <WritingPrinciplesSection />
      <TransitionSection />
      <ScrollTransitionSection />
      <TransitionSection />
      {/* Work experience */}
      <CareerMapSection />
      {/* Writing samples */}
      <WritingSamplesSection />
      {/* Side projects */}
      <OOOSection />
      <Footer />
    </main>
  )
}
