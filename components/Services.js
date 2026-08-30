const services = [
  {
    icon: '📋',
    title: 'Tax Preparation',
    description: 'Expert tax returns minimizing liability',
    color: 'from-blue-600 to-cyan-600',
    hoverColor: 'hover:shadow-[0_0_40px_rgba(0,102,255,0.3)]',
  },
  {
    icon: '✓',
    title: 'Audit Services',
    description: 'Thorough financial statement audits',
    color: 'from-cyan-500 to-green-500',
    hoverColor: 'hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]',
  },
  {
    icon: '🔍',
    title: 'Reviews',
    description: 'Professional financial reviews',
    color: 'from-purple-600 to-pink-600',
    hoverColor: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]',
  },
  {
    icon: '📊',
    title: 'Bookkeeping',
    description: 'Organized financial records',
    color: 'from-orange-600 to-yellow-600',
    hoverColor: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]',
  },
  {
    icon: '💡',
    title: 'Consulting',
    description: 'Strategic business growth guidance',
    color: 'from-green-600 to-emerald-600',
    hoverColor: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]',
  },
  {
    icon: '📈',
    title: 'Planning',
    description: 'Proactive financial planning',
    color: 'from-red-600 to-pink-600',
    hoverColor: 'hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored for your business success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`reveal group`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`glass p-8 rounded-2xl backdrop-blur-xl h-full border border-gray-700 hover:border-primary transition-all duration-300 ${service.hoverColor} cursor-pointer hover:-translate-y-3`}>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-lg">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-semibold">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
