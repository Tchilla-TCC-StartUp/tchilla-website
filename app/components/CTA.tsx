import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Start Planning Your Next Event Today
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
              Join thousands of event planners who trust Tchilla to create unforgettable experiences.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" className="gap-2">
              <Apple className="h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Play className="h-5 w-5" />
              Get it on Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

