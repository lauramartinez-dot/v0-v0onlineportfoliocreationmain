import Image from "next/image"

const oooActivities = [
  {
    title: "Hiking around",
    description:
      "I love hiking and long-distance treks. I've done Camino de Santiago several times and plan to hike the Dolomites.",
    image: "/ooo-hiking.jpg",
  },
  {
    title: "Attending AI events",
    description:
      "I love going to AI events and meetups in Barcelona, especially when they mix AI and philosophy.",
    image: "/ooo-ai-events.jpg",
  },
  {
    title: "Advocating for women",
    description:
      "I co-founded Personio's Women Committee and hosted several events to foster knowledge sharing.",
    image: "/ooo-women.jpg",
  },
]

export function OOOSection() {
  return (
    <section id="ooo" className="relative px-4 pt-24 pb-32 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header - matching other sections */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Me while OOO
          </h2>
        </div>

        {/* Three bubbles - bigger size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {oooActivities.map((activity, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              {/* Circular image with ring - larger size */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8">
                {/* Outer ring with primary color */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/50 transition-colors duration-300" />
                {/* Inner image container */}
                <div className="absolute inset-3 rounded-full overflow-hidden shadow-xl">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle overlay for consistency */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {activity.title}
              </h3>

              {/* Description */}
              <p className="text-[19px] text-foreground/60 leading-relaxed max-w-sm">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
