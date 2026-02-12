import { Star } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="relative px-4 py-20 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          My Mission
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border-2 border-primary/20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 px-8 py-6 shadow-sm backdrop-blur-sm max-w-3xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex-shrink-0">
              <Star className="w-6 h-6 text-white" />
            </div>
            <p className="text-lg leading-relaxed text-foreground opacity-[0.78] text-left">
              I help people gain tech literacy to stay relevant in today{"'"}s AI-fueled, more tech-driven-than-ever world — especially non-technical users and those historically less drawn to STEM, including women.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
