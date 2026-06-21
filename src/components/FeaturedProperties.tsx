import { Heart, BedDouble, Bath, Maximize, MapPin } from 'lucide-react'
import { useState } from 'react'

const properties = [
  {
    id: 1,
    title: 'Sunlit Loft in Williamsburg',
    location: 'Brooklyn, NY',
    price: 2800,
    beds: 2,
    baths: 1,
    sqft: 950,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    tag: 'New',
    tagColor: 'bg-primary',
  },
  {
    id: 2,
    title: 'Cozy Cottage Near the Park',
    location: 'Portland, OR',
    price: 1950,
    beds: 1,
    baths: 1,
    sqft: 680,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
    tag: 'Pet Friendly',
    tagColor: 'bg-success',
  },
  {
    id: 3,
    title: 'Modern Flat with City Views',
    location: 'Austin, TX',
    price: 2200,
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
    tag: 'Featured',
    tagColor: 'bg-secondary',
  },
  {
    id: 4,
    title: 'Charming Brownstone Unit',
    location: 'Charleston, SC',
    price: 1750,
    beds: 1,
    baths: 1,
    sqft: 720,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    tag: 'Popular',
    tagColor: 'bg-accent',
  },
  {
    id: 5,
    title: 'Spacious Family Home',
    location: 'Denver, CO',
    price: 3400,
    beds: 4,
    baths: 3,
    sqft: 2200,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    tag: 'New',
    tagColor: 'bg-primary',
  },
  {
    id: 6,
    title: 'Minimalist Studio Downtown',
    location: 'Seattle, WA',
    price: 1450,
    beds: 1,
    baths: 1,
    sqft: 480,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
    tag: 'No Deposit',
    tagColor: 'bg-warning',
  },
]

function PropertyCard({ property }: { property: typeof properties[0] }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 ${property.tagColor} text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg`}>
          {property.tag}
        </span>
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-9 h-9 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-black/60 transition-colors"
          aria-label={liked ? 'Remove from saved' : 'Save property'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${liked ? 'fill-accent text-accent' : 'text-white'}`}
          />
        </button>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="font-heading font-700 text-2xl text-white">
            ${property.price.toLocaleString()}
            <span className="text-sm font-body font-normal text-white/70">/mo</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading font-600 text-lg mb-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center gap-1.5 text-textSecondary text-sm mb-4">
          <MapPin className="w-3.5 h-3.5" />
          {property.location}
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-textSecondary text-xs">
            <BedDouble className="w-3.5 h-3.5" />
            {property.beds} {property.beds > 1 ? 'Beds' : 'Bed'}
          </div>
          <div className="flex items-center gap-1.5 text-textSecondary text-xs">
            <Bath className="w-3.5 h-3.5" />
            {property.baths} {property.baths > 1 ? 'Baths' : 'Bath'}
          </div>
          <div className="flex items-center gap-1.5 text-textSecondary text-xs">
            <Maximize className="w-3.5 h-3.5" />
            {property.sqft.toLocaleString()} ft&sup2;
          </div>
        </div>
      </div>
    </article>
  )
}

export default function FeaturedProperties() {
  return (
    <section id="listings" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">Curated Selection</span>
            <h2 className="font-heading font-700 text-3xl sm:text-4xl mt-2 tracking-tight">
              Featured rentals
            </h2>
          </div>
          <a href="#" className="text-sm text-textSecondary hover:text-primary transition-colors font-medium shrink-0">
            View all listings &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
