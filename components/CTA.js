export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Optimize Your Finances?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Let's discuss your accounting and tax needs. Schedule a consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get Started Now
          </a>
          <a
            href="tel:778-700-4084"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition text-lg"
          >
            Call: 778-700-4084
          </a>
        </div>
      </div>
    </section>
  )
}
