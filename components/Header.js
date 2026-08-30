import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Noble CPA
            </Link>
            <p className="text-xs text-gray-dark mt-1">Chartered Professional Accountants</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="text-gray-dark hover:text-primary font-medium transition">
              Services
            </Link>
            <Link href="#about" className="text-gray-dark hover:text-primary font-medium transition">
              About
            </Link>
            <Link href="#faq" className="text-gray-dark hover:text-primary font-medium transition">
              FAQ
            </Link>
            <Link href="#contact" className="btn-primary text-sm">
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-dark"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <Link href="#services" className="block py-2 text-gray-dark hover:text-primary font-medium">
              Services
            </Link>
            <Link href="#about" className="block py-2 text-gray-dark hover:text-primary font-medium">
              About
            </Link>
            <Link href="#faq" className="block py-2 text-gray-dark hover:text-primary font-medium">
              FAQ
            </Link>
            <Link href="#contact" className="btn-primary text-sm mt-4 w-full text-center">
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
