import { Search, FileCheck, Key } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Browse & Discover',
    description: 'Search by location, budget, or amenities. Filter results to find properties that match your exact needs.',
  },
  {
    icon: FileCheck,
    number: '02',
    title: 'Apply Online',
    description: 'Submit your application in minutes with our secure digital form. Get approved within 24 hours.',
  },
  {
    icon: Key,
    number: '03',
    title: 'Move In',
    description: 'Sign your lease digitally, pay your first month, and get your keys. Welcome home.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">Simple Process</span>
          <h2 className="font-heading font-700 text-3xl sm:text-4xl mt-2 tracking-tight">
            Three steps to your new home
          </h2>
          <p className="text-textSecondary mt-4 text-base">
            No paperwork headaches. No weeks of waiting. Just a smooth path from search to move-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-[72px] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative text-center group">
                <div className="relative z-10 inline-flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center mb-6 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary/40 font-heading font-800 text-xs tracking-widest uppercase mb-3">
                    Step {step.number}
                  </span>
                  <h3 className="font-heading font-600 text-xl mb-3">{step.title}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
