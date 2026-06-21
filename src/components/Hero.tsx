import { Search, MapPin, SlidersHorizontal } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-[72px]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-secondary/[0.05] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-medium text-textSecondary tracking-wide uppercase">
              Over 2,400 homes available now
            </span>
          </div>

          <h1 className="font-heading font-800 text-4xl sm:text-5xl md:text-[64px] leading-[1.08] tracking-tight mb-6">
            Find a place that{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              feels like home
            </span>
          </h1>

          <p className="text-textSecondary text-base sm:text-lg max-w-[540px] mx-auto leading-relaxed mb-10">
            Browse curated rental homes with transparent pricing, virtual tours, and instant booking. No hidden fees, ever.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-2 sm:p-3 shadow-2xl shadow-black/20">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 bg-background rounded-xl px-4 py-3.5 border border-border focus-within:border-primary/40 transition-colors">
                <MapPin className="w-4 h-4 text-textSecondary shrink-0" />
                <input
                  type="text"
                  placeholder="City, neighborhood, or address"
                  className="bg-transparent text-sm text-text placeholder:text-textSecondary outline-none w-full"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 bg-background rounded-xl px-4 py-3.5 border border-border focus-within:border-primary/40 transition-colors">
                <Search className="w-4 h-4 text-textSecondary shrink-0" />
                <input
                  type="text"
                  placeholder="Property type, beds, budget"
                  className="bg-transparent text-sm text-text placeholder:text-textSecondary outline-none w-full"
                />
              </div>
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all hover:shadow-[0_0_32px_rgba(158,127,255,0.3)] shrink-0">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
            <SlidersHorizontal className="w-3.5 h-3.5 text-textSecondary" />
            <span className="text-xs text-textSecondary">Popular:</span>
            {['Studio', '2 Bedrooms', 'Pet Friendly', 'With Parking'].map((tag) => (
              <button
                key={tag}
                className="text-xs text-textSecondary hover:text-primary border border-border hover:border-primary/30 rounded-full px-3 py-1 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 sm:gap-12 mt-14">
          {[
            { value: '2.4k+', label: 'Homes Listed' },
            { value: '12k+', label: 'Happy Tenants' },
            { value: '4.9', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-700 text-2xl sm:text-3xl">{stat.value}</div>
              <div className="text-xs text-textSecondary mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
