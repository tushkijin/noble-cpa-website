export default function Team() {
  return (
    <section className="section-py bg-gray-light">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Meet Your <span className="gradient-text">Expert</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional expertise you can trust
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-premium p-12 animate-on-scroll text-center">
            {/* Placeholder for photo */}
            <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-6xl shadow-glow-lg">
              👨‍💼
            </div>

            <h3 className="text-3xl font-bold text-dark mb-2">Tushar Jindal, CPA</h3>
            <p className="text-primary font-semibold text-lg mb-6">Chartered Professional Accountant</p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over 10 years of experience in accounting and tax services, Tushar brings expertise, dedication, and strategic insight to every client engagement. Committed to helping businesses succeed financially.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-3 gap-4 py-8 border-t border-b border-gray-200">
              <div>
                <p className="font-bold text-2xl text-primary">CPA</p>
                <p className="text-sm text-gray-600">Certified</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-primary">10+</p>
                <p className="text-sm text-gray-600">Years Exp</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-primary">100+</p>
                <p className="text-sm text-gray-600">Clients</p>
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-8 space-y-3 text-gray-600">
              <p className="flex items-center justify-center gap-2">
                <span>📧</span>
                <a href="mailto:tushar@noblecpa.ca" className="text-primary hover:underline">
                  tushar@noblecpa.ca
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📞</span>
                <a href="tel:778-700-4084" className="text-primary hover:underline">
                  778-700-4084
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📍</span>
                Langley, BC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
