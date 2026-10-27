export function AudienceRangeCard({ title, detail }: { title: string; detail?: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 text-center md:px-10 md:py-10">
      <p className="font-sans text-xl leading-snug text-balance text-white md:text-2xl">{title}</p>
      {detail ? <p className="font-sans text-base leading-relaxed text-pretty text-white/70 md:text-lg">{detail}</p> : null}
    </div>
  )
}
