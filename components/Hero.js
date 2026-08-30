import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-dark via-dark-secondary to-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container-max relative z-10 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-primary bg-opacity-10 px-4 py-2 rounded-full mb-6 border border-primary border-opacity-20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">Premium Accounting Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Professional <span className="gradient-text">Accounting</span> Made Simple
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Expert tax preparation, audits, and business consulting. We help small businesses optimize finances and grow confidently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary">
                Schedule Consultation
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-8 text-sm text-gray-300">
              <div>
                <p className="font-bold text-white text-2xl">10+</p>
                <p>Years Experience</p>
              </div>
              <div>
                <p className="font-bold text-white text-2xl">100+</p>
                <p>Satisfied Clients</p>
              </div>
              <div>
                <p className="font-bold text-white text-2xl">⭐ 5.0</p>
                <p>Client Rating</p>
              </div>
            </div>
          </div>

          {/* Right - Animated Cards */}
          <div className="relative h-96 md:h-full hidden lg:block">
            {/* Card 1 */}
            <div className="absolute top-0 left-0 w-72 h-48 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-glow-lg transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Tax Planning</h3>
              <p className="text-sm text-blue-100">Minimize tax liability strategically</p>
            </div>

            {/* Card 2 */}
            <div className="absolute top-32 right-0 w-72 h-48 bg-gradient-to-br from-accent to-primary-light rounded-2xl p-6 text-dark shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Audit Services</h3>
              <p className="text-sm">Comprehensive financial audits</p>
            </div>

            {/* Card 3 */}
            <div className="absolute bottom-0 left-12 w-72 h-48 bg-gradient-to-br from-primary-light to-primary rounded-2xl p-6 text-white shadow-glow-lg transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-bold mb-2">Consulting</h3>
              <p className="text-sm text-blue-100">Business growth strategies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
