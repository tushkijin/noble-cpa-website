const stats = [
  { value: '10+', label: 'Years Experience', icon: '📅' },
  { value: '100+', label: 'Happy Clients', icon: '😊' },
  { value: '$50M+', label: 'Tax Managed', icon: '💰' },
  { value: '24/7', label: 'Support Available', icon: '🌐' },
]

export default function Stats() {
  return (
    <section className="section-py bg-gradient-to-r from-dark to-dark-secondary text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-on-scroll group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
              <div className="text-5xl font-bold mb-2 gradient-text">{stat.value}</div>
              <p className="text-xl text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
