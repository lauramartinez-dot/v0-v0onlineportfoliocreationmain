import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Contact */}
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground">You Can Reach Me At</h2>
          <p className="mb-6 text-muted-foreground">Looking for a Senior Technical Writer? Let's connect!</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full" asChild>
              <a href="mailto:lmartmont@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                lmartmont@gmail.com
              </a>
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent" asChild>
              <a href="https://linkedin.com/in/lauramartinezmontero/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
