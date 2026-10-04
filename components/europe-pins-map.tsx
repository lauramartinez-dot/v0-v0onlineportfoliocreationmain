"use client"

import { useEffect, useRef } from "react"

export function EuropePinsMap() {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const visibleRef = useRef(false)
  const readyRef = useRef(false)

  const send = (command: "play" | "stop") => {
    frameRef.current?.contentWindow?.postMessage({ europePins: command }, window.location.origin)
  }

  const syncPlayback = () => {
    if (readyRef.current) send(visibleRef.current ? "play" : "stop")
  }

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting
        if (nowVisible === visibleRef.current) return
        visibleRef.current = nowVisible
        syncPlayback()
      },
      { threshold: 0.35 },
    )
    observer.observe(frame)
    return () => observer.disconnect()
  }, [])

  // The map's script is injected asynchronously after the iframe's load event,
  // so a "play" sent on load can land before its message listener exists.
  // Poll until the render loop has drawn its first frame, then sync once.
  const waitForMapReady = () => {
    const frame = frameRef.current
    if (!frame) return
    const started = performance.now()
    const tick = () => {
      const world = frame.contentDocument?.getElementById("world")
      if (world?.hasAttribute("transform")) {
        readyRef.current = true
        syncPlayback()
        return
      }
      if (performance.now() - started < 8000) window.setTimeout(tick, 100)
    }
    tick()
  }

  return (
    <iframe
      ref={frameRef}
      src="/europe-pins.html"
      title="Animated map of Europe with pins on the four countries I've lived in"
      tabIndex={-1}
      onLoad={waitForMapReady}
      className="absolute inset-0 h-full w-full border-0 bg-transparent"
      style={{ colorScheme: "normal" }}
    />
  )
}
