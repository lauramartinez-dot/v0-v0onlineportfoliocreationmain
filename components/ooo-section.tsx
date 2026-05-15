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
    <section id="ooo" className="relative px-4 py-24 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Me while OOO
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A little more about me outside of work
          </p>
        </div>

        {/* Three bubbles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {oooActivities.map((activity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circular image with ring */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                {/* Inner shadow ring */}
                <div className="absolute inset-2 rounded-full shadow-lg overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {activity.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/60 leading-relaxed max-w-xs">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
