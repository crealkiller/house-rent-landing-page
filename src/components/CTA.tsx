import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-surface border border-border rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 py-16 sm:py-20 px-8 sm:px-12 lg:px-16 text-center">
            <h2 className="font-heading font-700 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 max-w-2xl mx-auto leading-tight">
              Ready to find your next home?
            </h2>
            <p className="text-textSecondary text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
              Join 12,000+ renters who found their perfect place through Nest. Start browsing today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#listings"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all hover:shadow-[0_0_32px_rgba(158,127,255,0.3)]"
              >
                Browse All Listings
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-border hover:border-primary/30 text-textSecondary hover:text-text font-semibold text-sm px-7 py-3.5 rounded-xl transition-all"
              >
                List Your Property
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
