const testimonials = [
  {
    text: "Noble CPA transformed how we handle our finances. Professional, proactive, and results-driven.",
    author: "Sarah Johnson",
    role: "CEO, Tech Startup",
    rating: 5,
  },
  {
    text: "Tushar's expertise saved us thousands in taxes. Highly recommended for any business owner.",
    author: "Michael Chen",
    role: "Business Owner",
    rating: 5,
  },
  {
    text: "The level of service and attention to detail is exceptional. Our trusted financial partner.",
    author: "Emma Williams",
    role: "Corporate Director",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-dark-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <div
              key={i}
              className="reveal group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="glass p-8 rounded-2xl backdrop-blur-xl h-full border border-gray-700 hover:border-accent transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "{testi.text}"
                </p>
                <div className="border-t border-gray-600 pt-4">
                  <div className="font-semibold text-white">{testi.author}</div>
                  <div className="text-sm text-gray-400">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
