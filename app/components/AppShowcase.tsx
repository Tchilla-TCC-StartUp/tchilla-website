import Image from "next/image"

const screenshots = [
  {
    title: "Event Dashboard",
    description: "Get a quick overview of all your upcoming events",
    image: "/placeholder.svg?height=500&width=240",
  },
  {
    title: "Guest Management",
    description: "Manage RSVPs and guest lists effortlessly",
    image: "/placeholder.svg?height=500&width=240",
  },
  {
    title: "Timeline View",
    description: "Keep track of all event activities",
    image: "/placeholder.svg?height=500&width=240",
  },
]

export default function AppShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Beautiful, Intuitive Interface</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Designed to make event planning a delightful experience
            </p>
          </div>
        </div>
        <div className="mt-16 flex gap-8 overflow-x-auto pb-8 px-4 sm:justify-center">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative flex-none w-[240px] transform transition-transform hover:scale-105">
              <Image
                src={screenshot.image || "/placeholder.svg"}
                alt={screenshot.title}
                width={240}
                height={500}
                className="rounded-[2rem] border-8 border-background shadow-xl"
              />
              <div className="mt-4 text-center">
                <h3 className="font-semibold">{screenshot.title}</h3>
                <p className="text-sm text-gray-500">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

