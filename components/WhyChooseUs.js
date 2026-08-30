export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="section-title">Why Choose Noble CPA?</h2>
            <p className="text-gray-dark mb-6 text-lg leading-relaxed">
              With over 10 years of experience in accounting and tax services, Tushar Jindal, CPA, brings deep expertise and dedication to every client engagement.
            </p>

            <div className="space-y-5">
              {[
                { title: 'Certified Professional', desc: 'Chartered Professional Accountant with proven expertise' },
                { title: 'Personalized Service', desc: 'Tailored solutions designed specifically for your needs' },
                { title: 'Competitive Rates', desc: 'Transparent pricing without hidden fees' },
                { title: 'Trusted Partner', desc: 'Long-term relationships built on trust and results' },
                { title: 'Proactive Planning', desc: 'Tax planning strategies to maximize your returns' },
                { title: 'Local Expertise', desc: 'Deep knowledge of BC business environment' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-2xl font-bold text-primary flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary bg-opacity-10">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{item.title}</h4>
                    <p className="text-gray-dark text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-lg p-8">
              <h3 className="text-4xl font-bold mb-2">10+</h3>
              <p className="text-lg opacity-90">Years of Industry Experience</p>
            </div>

            <div className="bg-gray-light rounded-lg p-8 border-l-4 border-primary">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-lg text-gray-dark">Satisfied Clients & Growing</p>
            </div>

            <div className="bg-gray-light rounded-lg p-8 border-l-4 border-primary">
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-lg text-gray-dark">Client Satisfaction Rate</p>
            </div>

            <div className="bg-gray-light rounded-lg p-8">
              <p className="text-sm text-gray-dark italic">
                "Tushar is professional, knowledgeable, and always willing to explain tax matters in simple terms. Highly recommended for any small business owner."
              </p>
              <p className="text-primary font-semibold mt-3">- A Satisfied Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
