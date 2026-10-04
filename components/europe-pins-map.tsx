"use client"

import { useEffect, useRef } from "react"

export function EuropePinsMap({ autoplay = false }: { autoplay?: boolean }) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const visibleRef = useRef(autoplay)

  const send = (command: "play" | "stop") => {
    frameRef.current?.contentWindow?.postMessage({ europePins: command }, window.location.origin)
  }

  useEffect(() => {
    const frame = frameRef.current
    if (!frame || autoplay) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting
        if (nowVisible === visibleRef.current) return
        visibleRef.current = nowVisible
        send(nowVisible ? "play" : "stop")
      },
      { threshold: 0.35 },
    )
    observer.observe(frame)
    return () => observer.disconnect()
  }, [autoplay])

  return (
    <iframe
      ref={frameRef}
      src="/europe-pins.html"
      title="Animated map of Europe with pins on the four countries I've lived in"
      tabIndex={-1}
      onLoad={() => {
        if (visibleRef.current) send("play")
      }}
      className="absolute inset-0 h-full w-full border-0 bg-transparent"
      style={{ colorScheme: "normal" }}
    />
  )
}
