import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to optimize your accounting and tax strategy? Contact us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-2">📍 Location</h4>
              <p className="text-gray-600">Langley, BC</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-2">📧 Email</h4>
              <a href="mailto:tushar@noblecpa.ca" className="text-primary hover:underline">
                tushar@noblecpa.ca
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-2">📞 Phone</h4>
              <a href="tel:778-700-4084" className="text-primary hover:underline">
                778-700-4084
              </a>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Available For:</h4>
              <ul className="space-y-1 text-sm">
                <li>✓ Consultations</li>
                <li>✓ Tax Planning</li>
                <li>✓ Audit Services</li>
                <li>✓ Bookkeeping</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                Thank you! We'll get back to you soon.
              </div>
            )}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Tell us about your needs..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
