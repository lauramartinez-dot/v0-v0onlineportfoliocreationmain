export function AudienceRangeCard({ title, detail }: { title: string; detail?: string }) {
  return (
    <div className="flex h-full min-h-28 flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 text-center md:min-h-32 md:px-10">
      <p className="text-xl font-bold leading-snug tracking-tight text-balance text-white md:text-2xl">{title}</p>
      {detail ? <p className="text-base leading-relaxed text-pretty text-white/70 md:text-lg">{detail}</p> : null}
    </div>
  )
}
