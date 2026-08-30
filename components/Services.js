const services = [
  {
    title: 'Tax Preparation',
    description: 'Comprehensive tax return preparation for individuals and small businesses to minimize tax liability and maximize refunds.',
    icon: '📋',
    details: ['Personal tax returns', 'Corporate returns', 'Tax optimization strategies']
  },
  {
    title: 'Audit Services',
    description: 'Independent, thorough audits of financial statements ensuring accuracy, compliance, and reliability.',
    icon: '✓',
    details: ['Financial statement audits', 'Internal controls review', 'Compliance verification']
  },
  {
    title: 'Review Engagements',
    description: 'Professional reviews providing moderate assurance on financial statement accuracy and presentation.',
    icon: '🔍',
    details: ['Financial reviews', 'Analytical procedures', 'Report preparation']
  },
  {
    title: 'Compilation Services',
    description: 'Expert preparation of financial statements, organized and formatted to professional standards.',
    icon: '📊',
    details: ['Statement compilation', 'Financial organization', 'Professional formatting']
  },
  {
    title: 'Bookkeeping',
    description: 'Professional bookkeeping and accounting services to keep your business finances organized and current.',
    icon: '📖',
    details: ['Monthly bookkeeping', 'Invoice management', 'Bank reconciliation']
  },
  {
    title: 'Business Consulting',
    description: 'Strategic financial consulting to help optimize operations, improve profitability, and drive business growth.',
    icon: '💼',
    details: ['Financial planning', 'Business analysis', 'Growth strategies']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive accounting and tax solutions tailored to your business needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-lg p-8 hover:border-primary hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition">
                {service.title}
              </h3>
              <p className="text-gray-dark mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-dark flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
