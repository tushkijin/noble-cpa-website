const services = [
  {
    icon: '📋',
    title: 'Tax Preparation',
    description: 'Comprehensive tax returns that minimize liability and maximize refunds for individuals and businesses.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: '✅',
    title: 'Audit Services',
    description: 'Independent audits ensuring accuracy, compliance, and reliability of financial statements.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: '🔍',
    title: 'Review Engagements',
    description: 'Professional reviews providing assurance on financial statement accuracy and presentation.',
    color: 'from-violet-600 to-violet-700',
  },
  {
    icon: '📊',
    title: 'Compilation Services',
    description: 'Expert preparation of organized, professionally formatted financial statements.',
    color: 'from-emerald-600 to-emerald-700',
  },
  {
    icon: '📚',
    title: 'Bookkeeping',
    description: 'Professional bookkeeping keeping your finances organized and current year-round.',
    color: 'from-orange-600 to-orange-700',
  },
  {
    icon: '💡',
    title: 'Business Consulting',
    description: 'Strategic financial consulting to optimize operations and drive sustainable growth.',
    color: 'from-pink-600 to-pink-700',
  }
]

export default function Services() {
  return (
    <section id="services" className="section-py bg-gray-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive accounting solutions designed for your business success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium p-8 group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold group-hover:gap-2 transition-all duration-300 gap-1">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
