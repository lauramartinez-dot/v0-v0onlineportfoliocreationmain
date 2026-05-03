"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { coreSkills } from "@/data/highlights"
import { X } from "lucide-react"

function SkillCard({ item }: { item: (typeof coreSkills)[number] }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <div
        className="group relative rounded-2xl bg-card border border-primary/15 shadow-lg shadow-purple-900/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 cursor-default overflow-hidden"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Content */}
        <div className="relative flex items-center justify-center px-6 py-6 min-h-[80px]">
          <h4 className="font-semibold text-purple-100 text-[21px] leading-tight text-center group-hover:text-primary transition-colors duration-300">{item.title}</h4>
        </div>

        {/* Bottom subtle glow on hover */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-300 pointer-events-none" />
      </div>

      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg rounded-2xl bg-background border border-border shadow-2xl shadow-purple-500/20 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>

            <div className="p-6 md:p-8">
              <div className="mb-5">
                <h3 className="font-bold text-foreground text-2xl md:text-3xl leading-tight">{item.title}</h3>
              </div>

              {item.description && (
                <p className="text-lg text-foreground leading-relaxed mb-5">{item.description}</p>
              )}

              {item.tools && item.tools.length > 0 && (
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 block">Tools</span>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-full bg-purple-500/20 border border-purple-400/40 px-3.5 py-1.5 text-sm font-semibold text-purple-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export function TopSkillsSection() {
  return (
    <section id="top-skills" className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-2.5">
            {coreSkills
              .filter((s) => s.column === 1)
              .map((skill, i) => (
                <SkillCard key={i} item={skill} />
              ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2.5">
            {coreSkills
              .filter((s) => s.column === 2)
              .map((skill, i) => (
                <SkillCard key={i} item={skill} />
              ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2.5">
            {coreSkills
              .filter((s) => s.column === 3)
              .map((skill, i) => (
                <SkillCard key={i} item={skill} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
