const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We understand your business, goals, and specific accounting needs in a free consultation.',
    icon: '🤝'
  },
  {
    number: '02',
    title: 'Assessment & Planning',
    description: 'We analyze your financial situation and develop a customized solution strategy.',
    icon: '📈'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We execute the plan with precision, keeping you informed every step of the way.',
    icon: '⚙️'
  },
  {
    number: '04',
    title: 'Support & Optimization',
    description: 'Ongoing support and optimization to ensure continued financial success and growth.',
    icon: '🎯'
  }
]

export default function Process() {
  return (
    <section id="process" className="section-py bg-white">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamlined, transparent, and results-focused
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative z-10">
                  {/* Number badge */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 font-bold text-2xl text-white shadow-glow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
