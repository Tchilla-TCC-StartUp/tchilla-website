import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for occasional events",
    features: ["Up to 2 events", "Basic guest list", "Event timeline", "Community support"],
  },
  {
    name: "Pro",
    price: "$4.99",
    description: "For regular event planners",
    features: [
      "Unlimited events",
      "Advanced guest management",
      "Custom event templates",
      "Priority support",
      "Offline access",
    ],
  },
  {
    name: "Teams",
    price: "$9.99",
    description: "For professional planners",
    features: ["Everything in Pro", "Team collaboration", "Analytics dashboard", "API access", "Dedicated support"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that works best for you
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between p-6 bg-background rounded-lg shadow-lg border"
            >
              <div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-6" variant={plan.name === "Pro" ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

