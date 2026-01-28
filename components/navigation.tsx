"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "My Role", href: "#highlights" },
    { label: "Top Differentiators", href: "#top-differentiators" },
    { label: "Top Skills & Tools", href: "#skills-core" },
    { label: "Top Writing Samples", href: "#writing-samples" },
    { label: "Top Achievements", href: "#top-achievements" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-white backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">Laura Martínez</span>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" className="ml-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="https://drive.google.com/file/d/1g9MzcfAskCh9WSMVoVKDWphIJRvgZ5E3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-muted-foreground hover:text-foreground md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-border/50 bg-white p-4 shadow-lg backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-2 max-w-6xl mx-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" className="rounded-full mt-2" asChild>
              <a href="https://drive.google.com/file/d/1g9MzcfAskCh9WSMVoVKDWphIJRvgZ5E3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
