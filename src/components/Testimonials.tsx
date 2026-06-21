import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    text: 'Found my dream apartment in under a week. The virtual tours saved me so much time, and the lease signing was completely digital. Could not have been easier.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    text: 'As someone who moves frequently for work, Nest has been a game-changer. Transparent pricing and responsive support made the whole process stress-free.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    text: 'The pet-friendly filter helped me find a perfect place for me and my dog. The landlord was verified and the whole experience felt safe and trustworthy.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">Testimonials</span>
          <h2 className="font-heading font-700 text-3xl sm:text-4xl mt-2 tracking-tight">
            Loved by thousands of renters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-border rounded-2xl p-6 sm:p-7 hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-textSecondary text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-warning text-warning" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-heading font-600 text-sm">{t.name}</div>
                  <div className="text-textSecondary text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
