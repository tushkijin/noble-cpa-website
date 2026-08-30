export default function Specialties() {
  return (
    <section id="specialties" className="py-20 md:py-28 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Tailored Solutions For</h2>
          <p className="section-subtitle">We serve diverse business needs with specialized expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Small Businesses', emoji: '🏢' },
            { title: 'Freelancers', emoji: '👤' },
            { title: 'Newcomers to Canada', emoji: '🌍' },
            { title: 'Self-Employed', emoji: '💪' },
            { title: 'Startups', emoji: '🚀' },
            { title: 'Corporate Returns', emoji: '🏛️' },
            { title: 'Non-Profits', emoji: '🤝' },
            { title: 'Family-Owned Businesses', emoji: '👨‍👩‍👧‍👦' }
          ].map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-md transition border border-gray-200 hover:border-primary"
            >
              <div className="text-4xl mb-3">{specialty.emoji}</div>
              <h3 className="font-semibold text-gray-dark">{specialty.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
