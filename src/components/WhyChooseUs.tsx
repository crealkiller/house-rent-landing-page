import { Shield, Zap, Headphones, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'Every property is personally inspected and verified by our team before going live. No scams, no surprises.',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Skip the back-and-forth. Book your next home in minutes with our streamlined digital lease process.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Our team is here 7 days a week to help with maintenance requests, questions, and everything in between.',
  },
  {
    icon: CreditCard,
    title: 'Transparent Pricing',
    description: 'What you see is what you pay. No hidden fees, no surprise charges. Monthly rent includes all listed amenities.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-surface border border-border rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/[0.06] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/[0.04] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl mb-12">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">Why Nest</span>
              <h2 className="font-heading font-700 text-3xl sm:text-4xl mt-2 tracking-tight">
                Renting made effortless
              </h2>
              <p className="text-textSecondary mt-4 text-base leading-relaxed max-w-lg">
                We handle the complexity so you can focus on making your new house feel like home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="group bg-background border border-border rounded-2xl p-6 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-600 text-lg mb-2">{feature.title}</h3>
                    <p className="text-textSecondary text-sm leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
