"use client"

import { Children, useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

function RevealItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
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
      { threshold: 0.4, rootMargin: "0px 0px -12% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-[1400ms] ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-sm",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function StaggerReveal({
  children,
  className,
  itemClassName,
  step = 0,
}: {
  children: ReactNode
  className?: string
  itemClassName?: string
  step?: number
}) {
  return (
    <div className={className}>
      {Children.toArray(children).map((child, index) => (
        <RevealItem key={index} className={itemClassName} delay={index * step}>
          {child}
        </RevealItem>
      ))}
    </div>
  )
}
