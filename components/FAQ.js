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
    q: 'Are you CRA e-file certified?',
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
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Can't find what you're looking for? Contact us directly.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-gray-light hover:bg-opacity-50 transition font-semibold text-secondary flex justify-between items-center"
              >
                {faq.q}
                <span className={`text-primary text-xl transition transform ${open === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {open === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200 text-gray-dark leading-relaxed">
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
