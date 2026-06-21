import { useState, useEffect } from 'react'
import { Home, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Listings', href: '#listings' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
            <Home className="w-[18px] h-[18px] text-primary" />
          </div>
          <span className="font-heading font-700 text-xl tracking-tight">Nest</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-textSecondary hover:text-text transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-textSecondary hover:text-text transition-colors font-medium px-4 py-2"
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-sm font-semibold bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl transition-all hover:shadow-[0_0_24px_rgba(158,127,255,0.25)]"
          >
            List Your Home
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-textSecondary hover:text-text transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-textSecondary hover:text-text py-3 px-3 rounded-xl hover:bg-background transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-border my-2" />
            <a href="#" className="text-sm text-textSecondary hover:text-text py-3 px-3 font-medium">
              Sign In
            </a>
            <a
              href="#"
              className="text-sm font-semibold bg-primary text-white px-5 py-3 rounded-xl text-center mt-1"
            >
              List Your Home
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
