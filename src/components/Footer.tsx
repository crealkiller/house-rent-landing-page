import { Home, Github, Twitter, Linkedin } from 'lucide-react'

const footerLinks = {
  'For Renters': ['Browse Listings', 'How It Works', 'Pricing', 'Neighborhood Guides', 'FAQ'],
  'For Owners': ['List Your Property', 'Owner Dashboard', 'Tenant Screening', 'Rental Insights'],
  Company: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                <Home className="w-4 h-4 text-primary" />
              </div>
              <span className="font-heading font-700 text-lg">Nest</span>
            </a>
            <p className="text-textSecondary text-sm leading-relaxed max-w-[240px] mb-6">
              Finding your perfect rental home should be simple, transparent, and enjoyable.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary/20 transition-all"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-600 text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-textSecondary hover:text-text transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-textSecondary text-xs">
            &copy; 2026 Nest. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-xs text-textSecondary hover:text-text transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
