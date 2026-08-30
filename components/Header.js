import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass py-3' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-accent-green rounded-xl flex items-center justify-center font-bold text-white group-hover:shadow-[0_0_20px_rgba(0,102,255,0.5)] transition-all">
              NC
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors">Noble CPA</div>
              <div className="text-xs text-gray-400 group-hover:text-accent transition-colors">Premium Accounting</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#work" className="text-gray-300 hover:text-primary transition-colors font-medium">
              How We Work
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-semibold hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all hover:scale-105">
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="lg:hidden flex flex-col gap-4 mt-6 pt-6 border-t border-gray-700">
            <a href="#services" className="text-gray-300 hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#work" className="text-gray-300 hover:text-primary transition-colors font-medium">
              How We Work
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-semibold">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
