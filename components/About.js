export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              About Us
            </h3>
            <p className="text-gray-600 mb-4 text-lg">
              Noble Chartered Professional Accountants is dedicated to providing expert accounting and tax solutions to small businesses in the Langley, BC area.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Led by Tushar Jindal, CPA, our firm combines deep industry knowledge with personalized service to help your business thrive financially.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              We believe in building long-term relationships with our clients and taking pride in their financial success.
            </p>
            <div className="space-y-3">
              <p className="text-gray-700">✓ Certified Professional Accountants</p>
              <p className="text-gray-700">✓ 10+ Years of Industry Experience</p>
              <p className="text-gray-700">✓ Personalized Client Service</p>
              <p className="text-gray-700">✓ Competitive Pricing</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary to-blue-900 rounded-lg p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Meet Tushar Jindal, CPA</h4>
            <p className="mb-4">
              Tushar is a Chartered Professional Accountant with extensive experience in tax preparation, audits, and financial consulting.
            </p>
            <p className="mb-4">
              With a commitment to excellence and attention to detail, Tushar helps businesses navigate complex tax situations and optimize their financial strategies.
            </p>
            <p>
              When not helping clients, Tushar enjoys staying current with the latest accounting standards and tax regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
