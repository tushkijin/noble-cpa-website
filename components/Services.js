const services = [
  {
    title: 'Tax Preparation',
    description: 'Professional tax return preparation for individuals and small businesses to minimize tax liability.',
    icon: '📋'
  },
  {
    title: 'Audit Services',
    description: 'Independent audits of financial statements to ensure accuracy and compliance with standards.',
    icon: '✓'
  },
  {
    title: 'Review Engagements',
    description: 'Limited scope reviews of financial statements providing moderate assurance of accuracy.',
    icon: '🔍'
  },
  {
    title: 'Compilation Services',
    description: 'Preparation of financial statements without providing assurance or audit procedures.',
    icon: '📊'
  },
  {
    title: 'Bookkeeping',
    description: 'Professional bookkeeping and accounting services to keep your finances organized.',
    icon: '📚'
  },
  {
    title: 'Business Consulting',
    description: 'Strategic financial consulting to help your business grow and succeed.',
    icon: '💼'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Services
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive accounting and tax services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold text-secondary mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
