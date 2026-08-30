export default function Stats() {
  const stats = [
    { value: '10+', label: 'Years', icon: '📅' },
    { value: '100+', label: 'Clients', icon: '👥' },
    { value: '$50M+', label: 'Managed', icon: '💰' },
    { value: '5.0★', label: 'Rating', icon: '⭐' },
  ]

  return (
    <section className="py-32 bg-gradient-to-r from-primary via-accent to-primary-light relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg to-dark-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="font-display text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg text-gray-900">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
