import Image from "next/image"

// `wide` cards take two of the three columns, so each row reads as a 2 + 1 pair
// with the emphasis alternating side to side.
const differentiators = [
  {
    title: "Former Tech Journalist",
    body: "Worked as a tech journalist for 6 years (ex-Business Insider), then moved into the tech industry.",
    image: "/business-insider-desk-flatlay.png",
    // Keep the phone with the Business Insider logo centred in the wide crop
    imagePosition: "object-center",
    wide: true,
  },
  {
    title: "Work on API & Integrations",
    body: "Now I write about APIs in a way that makes sense to people who aren't devs.",
    image: "/api-integrations-isometric-tall.png",
    // Anchor to the top so the cloud, server, and API chip stay above the copy
    imagePosition: "object-top",
  },
  {
    title: "Hired Early by Startups",
    body: "Always hired as the first writer, or one of the first. Need no playbook.",
    image: "/differentiator-early-hire-welcome.jpg",
  },
  {
    title: "Worked at an Unicorn Startup",
    body: "Worked at Personio, the German company that became Europe's HR unicorn ($8.5B valuation).",
    image: "/differentiator-unicorn-personio.jpg",
    wide: true,
  },
  {
    title: "Lived in 4 Countries",
    body: "Born in Spain. Spent 9 years across France, Ireland, and Germany before returning to Spain.",
    image: "/european-journey-map-wide.png",
    // Keep the highlighted countries and flight paths centred in the wide crop
    imagePosition: "object-center",
    wide: true,
  },
  {
    title: "Speak 3 Languages",
    body: "Switching between English, Spanish and German almost daily.",
    image: "/three-languages-illustration-cream.png",
    // Anchor to the top so the three flag speech bubbles stay in frame above the copy
    imagePosition: "object-top",
  },
  {
    title: "Women in Tech Advocate",
    body: "Co-founded Personio's first Women's Committee. ",
    image: "/women-in-tech-collaboration.png",
    // Keep the group of women centred in the wide banner crop
    imagePosition: "object-center",
    full: true,
  },
]

export function DifferentiatorsSection() {
  return (
    <section id="differentiators" className="relative px-4 pt-24 pb-20 scroll-mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            What sets me apart<span className="text-primary">.</span>
          </h2>

          {/* Accent bar - separates the title from the cards */}
          <div className="mx-auto mt-8 h-1.5 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {differentiators.map(({ title, body, image, imagePosition, wide, full }) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-xl shadow-lg ring-2 ring-primary/20 transition-all duration-300 hover:-translate-y-2 hover:ring-primary/60 hover:shadow-[0_24px_70px_-16px_rgba(200,80,192,0.55)] ${
                full
                  ? "min-h-[520px] md:col-span-2 lg:col-span-3 lg:min-h-[560px]"
                  : wide
                    ? "min-h-[520px] md:col-span-2 lg:min-h-[620px]"
                    : "min-h-[520px] lg:min-h-[620px]"
              }`}
            >
              {/* Full-bleed image, or a tinted panel when the card has no photo yet */}
              {image ? (
                <>
                  <Image
                    src={image}
                    alt=""
                    fill
                    aria-hidden="true"
                    className={`object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 ${
                      imagePosition ?? ""
                    }`}
                  />
                  {/* Colour wash + scrim: solid black only at the very bottom, so the copy stays readable
                      while the upper two thirds of the photo keep their original brightness */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 via-45% to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-card" />
              )}

              {/* Copy anchored to the bottom, over the image */}
              <div
                className={`absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-4 p-8 ${
                  wide || full ? "lg:max-w-[70%] lg:p-10" : ""
                }`}
              >
                <h3
                  className={`font-bold leading-tight text-white text-balance ${
                    wide || full ? "text-4xl md:text-5xl lg:text-[3.25rem]" : "text-3xl md:text-4xl lg:text-[2.5rem]"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`font-medium leading-snug text-white/85 text-pretty ${
                    wide || full ? "text-xl md:text-2xl lg:text-[1.75rem]" : "text-lg md:text-xl"
                  }`}
                >
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
