const levels = [
  { level: "Low", fill: "bg-white/[0.02]" },
  { level: "Medium", fill: "bg-white/[0.05]" },
  { level: "High", fill: "bg-white/[0.08]" },
]

export function AudienceSpectrumCard() {
  return (
    <ul
      className="relative flex h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
      aria-label="A wider range of technical knowledge: low, medium and high"
    >
      {levels.map((item, index) => (
        <li key={item.level} className="relative flex flex-1 flex-col items-center justify-center gap-2 px-3 py-8 text-center md:py-10">
          <span
            aria-hidden
            className={`absolute inset-y-0 -inset-x-10 -skew-x-12 ${item.fill} ${index > 0 ? "border-l border-white/10" : ""}`}
          />
          <p className="relative font-sans text-xl leading-snug text-white md:text-2xl">{item.level}</p>
        </li>
      ))}
    </ul>
  )
}
