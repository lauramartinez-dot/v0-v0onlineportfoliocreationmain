"use client"

import { Download, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null)

  return (
    <section id="home" className="relative flex flex-col items-center justify-center px-4 pt-52 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Purple/pink gradient orb - top left */}
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent blur-3xl" />
        {/* Pink gradient orb - bottom right */}
        <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-pink-500/25 via-purple-500/15 to-transparent blur-3xl" />
        {/* Center subtle accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl w-full">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="order-1 animate-slide-in-left">
            <div className="relative">
              {/* Large blurred circle - bottom left */}
              <div className="absolute -bottom-8 -left-12 h-40 w-40 md:h-52 md:w-52 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl" />
              {/* Small blurred circle - top right */}
              <div className="absolute -top-6 -right-6 h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-bl from-pink-500/25 to-purple-500/25 blur-2xl" />
              {/* Small accent circle - bottom right */}
              <div className="absolute bottom-4 -right-4 h-16 w-16 md:h-20 md:w-20 rounded-full bg-pink-500/20 blur-xl" />

              {/* Profile image */}
              <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden ring-2 ring-border shadow-xl hover:shadow-2xl hover:ring-primary/30 transition-all duration-300 z-10">
                <Image
                  src="/main-headshot.jpg"
                  alt="Laura Martínez - Senior Technical Writer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left order-2 animate-slide-in-right">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              Laura Martínez
            </h1>

            <h4 className="mb-6 text-2xl font-semibold md:text-3xl lg:text-4xl text-primary">
              Senior Technical Writer
            </h4>

            <p className="mb-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              <span className="flex flex-col gap-2">
                <span>🇪🇸 From Spain</span>
                <span>💬 Bilingual (English / Spanish)</span>
                <span>📍 Based in Barcelona</span>
              </span>
              <br />
              <span className="inline-flex flex-wrap items-center gap-2">
                <span className="text-foreground font-medium">{"Target audience:"}</span>
                <button
                  onClick={() => setSelectedAudience("recruiter")}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedAudience === "recruiter"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110"
                      : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:scale-105 hover:shadow-md"
                  }`}
                >
                  recruiter
                </button>

                <button
                  onClick={() => setSelectedAudience("family")}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedAudience === "family"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110"
                      : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:scale-105 hover:shadow-md"
                  }`}
                >
                  family member
                </button>

                <button
                  onClick={() => setSelectedAudience("friend")}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedAudience === "friend"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110"
                      : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:scale-105 hover:shadow-md"
                  }`}
                >
                  friend
                </button>
              </span>
              {/* </CHANGE> */}
              <br />
              <br />
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button
                size="lg"
                className="group rounded-full px-8 py-6 text-base font-medium bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 border-0"
                asChild
              >
                <a href="https://www.linkedin.com/in/lauramartinezmontero/" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group rounded-full px-8 py-6 text-base font-medium border-2 border-purple-500/50 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-0.5 mt-40">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}
