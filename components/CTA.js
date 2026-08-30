export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8">
          Ready to Transform Your <span className="gradient-text">Finances</span>?
        </h2>
        <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Schedule a free consultation and discover how Noble CPA can help your business thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-display font-bold text-lg hover:shadow-[0_0_50px_rgba(0,102,255,0.5)] transition-all hover:scale-105 duration-300">
            Schedule Now
          </button>
          <button className="px-10 py-5 glass text-white font-display font-bold text-lg rounded-lg border-2 border-primary border-opacity-50 hover:border-opacity-100 hover:bg-opacity-20 transition-all duration-300">
            Call: 778-700-4084
          </button>
        </div>
      </div>
    </section>
  )
}
