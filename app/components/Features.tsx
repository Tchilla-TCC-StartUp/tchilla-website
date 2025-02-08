import { Calendar, Users, Bell, Zap, Map, Share2 } from "lucide-react"

const features = [
  {
    name: "Smart Notifications",
    description: "Get timely reminders for tasks, deadlines, and event updates right on your phone.",
    icon: Bell,
  },
  {
    name: "Offline Access",
    description: "Access your event details even without internet connection.",
    icon: Zap,
  },
  {
    name: "Location Services",
    description: "Find venues and navigate to events with integrated maps.",
    icon: Map,
  },
  {
    name: "Real-time Collaboration",
    description: "Share event details and coordinate with co-planners instantly.",
    icon: Share2,
  },
  {
    name: "Guest Management",
    description: "Send invites and track RSVPs directly through the app.",
    icon: Users,
  },
  {
    name: "Dynamic Timeline",
    description: "Interactive timeline with drag-and-drop scheduling.",
    icon: Calendar,
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features at Your Fingertips</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Everything you need to plan successful events, right in your pocket
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
          {features.map((feature) => (
            <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <feature.icon className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">{feature.name}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

