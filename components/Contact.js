import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 500)
  }

  return (
    <section id="contact" className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '📍', title: 'Location', content: 'Langley, BC, Canada' },
            { icon: '📧', title: 'Email', content: 'tushar@noblecpa.ca', link: 'mailto:tushar@noblecpa.ca' },
            { icon: '📞', title: 'Phone', content: '778-700-4084', link: 'tel:778-700-4084' },
          ].map((item, i) => (
            <div key={i} className="reveal group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="glass p-8 rounded-2xl backdrop-blur-xl text-center border border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.2)] hover:-translate-y-2 h-full">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-display font-bold text-white mb-2 text-xl">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-primary hover:text-accent transition-colors font-semibold">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto reveal">
          <div className="glass p-12 rounded-2xl backdrop-blur-xl border border-gray-700 hover:border-primary transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="bg-accent-green bg-opacity-20 border border-accent-green rounded-lg p-4 text-accent-green font-semibold animate-fadeInUp">
                  ✓ Thank you! We'll be in touch shortly.
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-dark-secondary border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-dark-secondary border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full bg-dark-secondary border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="w-full bg-dark-secondary border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-display font-bold text-lg hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] transition-all hover:scale-105 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
