import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Apple, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Personal Event Planner in Your Pocket
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Plan, organize, and manage your events with ease. Download the Tchilla app and make every event
                memorable.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-2">
                <Apple className="h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-5 w-5" />
                Get it on Android
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 relative">
            <div className="relative w-[280px] h-[580px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-[2.5rem] transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-[2.5rem] transform -rotate-6" />
              <Image
                src="/placeholder.svg?height=580&width=280"
                alt="Tchilla App Interface"
                width={280}
                height={580}
                className="relative rounded-[2.5rem] border-8 border-background shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

