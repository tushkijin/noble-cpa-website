import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-95 backdrop-blur-md'
    }`}>
      <div className="container-max">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Gradient */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">NC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark group-hover:text-primary transition">Noble CPA</h1>
              <p className="text-xs text-gray-500">Professional Accountants</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#services" className="text-gray-600 hover:text-primary font-medium transition">
              Services
            </Link>
            <Link href="#process" className="text-gray-600 hover:text-primary font-medium transition">
              Process
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-primary font-medium transition">
              FAQ
            </Link>
            <Link href="#contact" className="btn-primary text-sm">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-light rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            <Link href="#services" className="block py-2 text-gray-600 hover:text-primary font-medium">
              Services
            </Link>
            <Link href="#process" className="block py-2 text-gray-600 hover:text-primary font-medium">
              Process
            </Link>
            <Link href="#faq" className="block py-2 text-gray-600 hover:text-primary font-medium">
              FAQ
            </Link>
            <Link href="#contact" className="btn-primary w-full text-center">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
