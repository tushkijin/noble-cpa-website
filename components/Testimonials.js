const testimonials = [
  {
    text: "Tushar helped us save thousands on our business taxes with his strategic planning. His attention to detail is exceptional.",
    author: "Sarah M.",
    business: "Small Business Owner",
    rating: 5
  },
  {
    text: "Professional, responsive, and knowledgeable. Tushar made the audit process smooth and stress-free.",
    author: "Michael K.",
    business: "Corporate Client",
    rating: 5
  },
  {
    text: "As a newcomer to Canada, Tushar's guidance on tax obligations and bookkeeping was invaluable. Highly recommended!",
    author: "Priya N.",
    business: "Freelancer",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real feedback from real clients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-dark mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-secondary">{testimonial.author}</p>
                <p className="text-sm text-gray-dark">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
