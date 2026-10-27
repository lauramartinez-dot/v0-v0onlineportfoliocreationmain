type AudienceRangeCardProps = {
  era: string
  /** Portion of the technical-knowledge spectrum this audience covers, 0–100 from the left. */
  coverage: number
  readers: string
}

export function AudienceRangeCard({ era, coverage, readers }: AudienceRangeCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:px-6 md:py-5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-bold uppercase tracking-wider text-white/50">{era}</span>
        <span className="text-right text-sm font-medium text-white/70 md:text-base">{readers}</span>
      </div>

      <div
        className="relative h-2 w-full overflow-hidden rounded-full bg-white/10"
        role="img"
        aria-label={`${era}: audience covers ${coverage}% of the technical-knowledge range, starting from low technical knowledge`}
      >
        <div className="absolute inset-y-0 left-0 rounded-full bg-primary" style={{ width: `${coverage}%` }} />
      </div>

      <div className="flex justify-between gap-4 text-xs font-medium uppercase tracking-wider text-white/40">
        <span>Low technical knowledge</span>
        <span className="text-right">Deep technical knowledge</span>
      </div>
    </div>
  )
}
