import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Noble CPA</h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="#services" className="text-gray-700 hover:text-primary transition">
            Services
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-primary transition">
            About
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-primary transition">
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Services
            </Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              About
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
