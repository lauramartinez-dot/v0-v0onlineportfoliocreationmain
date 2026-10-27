type AudienceRangeCardProps = {
  era: "Before" | "Now"
  title: string
  detail?: string
}

export function AudienceRangeCard({ era, title, detail }: AudienceRangeCardProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:px-8 md:py-8">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{era}</span>
      <p className="text-pretty text-lg font-medium leading-snug text-white md:text-xl">{title}</p>
      {detail ? <p className="text-pretty text-sm leading-relaxed text-white/60 md:text-base">{detail}</p> : null}
    </div>
  )
}
