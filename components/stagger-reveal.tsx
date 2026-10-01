"use client"

import { Children, useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export function StaggerReveal({
  children,
  className,
  step = 900,
}: {
  children: ReactNode
  className?: string
  step?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {Children.toArray(children).map((child, index) => (
        <div
          key={index}
          style={{ transitionDelay: visible ? `${index * step}ms` : "0ms" }}
          className={cn(
            "transition-all duration-1000 ease-out motion-reduce:transition-none",
            visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm",
          )}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
