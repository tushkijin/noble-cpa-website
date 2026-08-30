export default function CTA() {
  return (
    <section className="section-py bg-gradient-to-r from-primary via-primary-dark to-accent relative overflow-hidden">
      {/* Animated decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="container-max relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your accounting and tax needs. Schedule a free consultation with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-glow-lg transform hover:-translate-y-1 transition-all duration-300">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-300">
              Call: 778-700-4084
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
