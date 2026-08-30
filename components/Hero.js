export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-accent-green rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="reveal">
            <div className="inline-block mb-6">
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                <span className="text-sm text-accent-green font-semibold">Welcome to Excellence</span>
              </div>
            </div>

            <h1 className="font-display text-6xl md:text-7xl font-bold leading-tight mb-8 text-white">
              Your Financial <span className="gradient-text">Partner</span> for Growth
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-xl">
              Modern accounting and tax solutions designed for businesses that want to grow confidently. Expert guidance, strategic planning, and peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-semibold hover:shadow-[0_0_40px_rgba(0,102,255,0.5)] transition-all hover:scale-105 duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 glass text-white font-semibold rounded-lg hover:bg-opacity-20 transition-all hover:border-primary border border-primary border-opacity-30">
                Learn More
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex gap-12">
              <div className="reveal" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="reveal" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="reveal" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold text-accent-green">⭐ 5.0</div>
                <div className="text-sm text-gray-400">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right content - Animated cards */}
          <div className="relative h-96 md:h-full hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 reveal">
              {/* Card 1 */}
              <div className="absolute top-0 left-0 w-80 h-56 glass rounded-2xl p-8 backdrop-blur-xl border-2 border-primary border-opacity-20 hover:border-opacity-100 transition-all hover:shadow-[0_0_40px_rgba(0,102,255,0.3)] hover:-translate-y-2 duration-300 group cursor-pointer" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors">Tax Planning</h3>
                <p className="text-gray-300 text-sm">Strategic tax optimization for maximum returns</p>
              </div>

              {/* Card 2 */}
              <div className="absolute top-32 right-0 w-80 h-56 glass rounded-2xl p-8 backdrop-blur-xl border-2 border-accent border-opacity-20 hover:border-opacity-100 transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] hover:-translate-y-2 duration-300 group cursor-pointer" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">Audits & Reviews</h3>
                <p className="text-gray-300 text-sm">Comprehensive financial statement audits</p>
              </div>

              {/* Card 3 */}
              <div className="absolute bottom-0 left-1/4 w-80 h-56 glass rounded-2xl p-8 backdrop-blur-xl border-2 border-accent-green border-opacity-20 hover:border-opacity-100 transition-all hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] hover:-translate-y-2 duration-300 group cursor-pointer" style={{ animationDelay: '0.6s' }}>
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent-green transition-colors">Consulting</h3>
                <p className="text-gray-300 text-sm">Strategic business growth guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
