import { useState } from 'react'

const faqs = [
  {
    q: 'What documents do I need for tax preparation?',
    a: 'Typically, you\'ll need T4s, T5s, receipts for deductions, mortgage interest statements, and any other income documents. I\'ll provide a complete checklist when you book.'
  },
  {
    q: 'How much do your services cost?',
    a: 'Pricing varies based on complexity. I offer competitive rates with transparent pricing. Contact me for a free quote based on your specific needs.'
  },
  {
    q: 'Do you offer virtual consultations?',
    a: 'Yes! I work with clients via phone, email, and video conferencing for your convenience.'
  },
  {
    q: 'When should I start tax planning?',
    a: 'The best time is now. Year-round tax planning helps minimize liability. Contact me early in the year to discuss strategies.'
  },
  {
    q: 'Are you CRA certified?',
    a: 'Yes, I\'m certified to e-file tax returns directly with Canada Revenue Agency.'
  },
  {
    q: 'What if I need help with past years\' returns?',
    a: 'I can help file back taxes and handle CRA correspondence. Let\'s discuss your situation.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section-py bg-white">
      <div className="container-max">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-premium overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-light transition-colors duration-300"
              >
                <span className="font-bold text-dark text-lg">{faq.q}</span>
                <span className={`text-primary text-xl transition-transform duration-300 flex-shrink-0 ${
                  open === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              {open === index && (
                <div className="px-8 py-6 bg-gray-light border-t border-gray-200 text-gray-700 leading-relaxed animate-on-scroll">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
