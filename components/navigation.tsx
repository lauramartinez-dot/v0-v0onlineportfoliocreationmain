"use client"

import { useState } from "react"
import { Menu, X, Sparkles, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "What I do", href: "#top-differentiators" },
    { label: "What differentiates me", href: "#differentiators" },
    { label: "Where I've worked", href: "#company-highlights" },
    { label: "My personal projects", href: "#personal-projects" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pb-[30px]">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-8 rounded-full border-[3px] border-primary/60 bg-background/80 backdrop-blur-md px-10 py-6 mt-5">
          <a href="#home" className="flex shrink-0 items-center gap-2.5 hover:opacity-80 transition-opacity">
            <Sparkles className="h-6 w-6 shrink-0 text-primary" />
            <span className="whitespace-nowrap font-semibold text-primary text-lg">Laura Martínez</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-base text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden shrink-0 md:flex items-center gap-3">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-purple-500/50 bg-transparent text-base text-foreground/80 hover:bg-primary/10 hover:text-foreground"
              asChild
            >
              <a href="https://www.linkedin.com/in/lauramartinezmontero/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4 text-primary" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-purple-500/50 bg-transparent text-base text-foreground/80 hover:bg-primary/10 hover:text-foreground"
              asChild
            >
              <a href="https://drive.google.com/file/d/1jxEkccyHsJgQvur5cm6PiNiX9yS0H9bI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4 text-primary" />
                <span className="whitespace-nowrap">Download CV</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-foreground/70 hover:text-foreground md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto max-w-4xl mt-2">
          <div className="rounded-2xl border-2 border-primary/50 bg-background/95 backdrop-blur-md p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-primary/10 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Button
                size="sm"
                variant="outline"
                className="mt-2 rounded-full border-2 border-purple-500/50 bg-transparent text-foreground/80 hover:bg-primary/10 hover:text-foreground"
                asChild
              >
                <a href="https://www.linkedin.com/in/lauramartinezmontero/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4 text-primary" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-2 border-purple-500/50 bg-transparent text-foreground/80 hover:bg-primary/10 hover:text-foreground"
                asChild
              >
                <a href="https://drive.google.com/file/d/1jxEkccyHsJgQvur5cm6PiNiX9yS0H9bI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 text-primary" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
