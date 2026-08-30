export default function Interactive() {
  return (
    <section id="work" className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A streamlined process designed for your success
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { num: '01', title: 'Consultation', desc: 'Understand your needs and goals' },
              { num: '02', title: 'Analysis', desc: 'Comprehensive financial assessment' },
              { num: '03', title: 'Strategy', desc: 'Develop tailored solutions' },
              { num: '04', title: 'Execute', desc: 'Implement with precision' },
            ].map((step, i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 font-display font-bold text-2xl text-white shadow-[0_0_40px_rgba(0,102,255,0.3)] group-hover:shadow-[0_0_60px_rgba(0,102,255,0.6)] transition-all">
                    {step.num}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
