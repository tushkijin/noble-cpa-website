import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // In production, connect to email service
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setLoading(false)
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Have questions? Let's discuss your accounting needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-md transition">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold text-secondary mb-2">Location</h3>
            <p className="text-gray-dark">Langley, BC, Canada</p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-md transition">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-secondary mb-2">Email</h3>
            <a href="mailto:tushar@noblecpa.ca" className="text-primary hover:underline font-medium">
              tushar@noblecpa.ca
            </a>
          </div>

          <div className="bg-white rounded-lg p-8 text-center border border-gray-200 hover:shadow-md transition">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-secondary mb-2">Phone</h3>
            <a href="tel:778-700-4084" className="text-primary hover:underline font-medium">
              778-700-4084
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 md:p-12 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitted && (
              <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded">
                <p className="font-semibold">Thank you for reaching out!</p>
                <p className="text-sm">I'll get back to you within 24 hours.</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-secondary mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-semibold text-secondary mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-secondary mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="(778) 000-0000"
                />
              </div>
              <div>
                <label className="block font-semibold text-secondary mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition"
                >
                  <option value="">Select a service</option>
                  <option value="tax-prep">Tax Preparation</option>
                  <option value="audit">Audit Services</option>
                  <option value="bookkeeping">Bookkeeping</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-secondary mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition resize-none"
                placeholder="Tell me about your accounting needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary text-lg py-4 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
