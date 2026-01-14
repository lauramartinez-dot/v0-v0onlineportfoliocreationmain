export function TransitionSection() {
  return (
    <section className="relative py-3 bg-transparent">
      <div
        className="absolute inset-0 blur-[60px] opacity-100"
        style={{
          background:
            "linear-gradient(90deg, rgba(153, 49, 231, 0.7) 0%, rgba(217, 70, 239, 0.7) 50%, rgba(153, 49, 231, 0.7) 100%)",
        }}
      />
    </section>
  )
}
