export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Noble Chartered Professional Accountants
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Expert Tax Solutions for Small Businesses
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 text-sm text-blue-100">
          <p>📍 Langley, BC | 📧 tushar@noblecpa.ca | 📞 778-700-4084</p>
        </div>
      </div>
    </section>
  )
}
