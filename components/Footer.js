export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-secondary border-t border-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center font-bold text-white">
                NC
              </div>
              <div>
                <div className="font-display font-bold text-white">Noble CPA</div>
                <div className="text-xs text-gray-400">Premium Accounting</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Expert accounting and tax services for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-primary transition-colors">Tax Preparation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Audits & Reviews</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Bookkeeping</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#work" className="hover:text-primary transition-colors">How We Work</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📍</span>
                Langley, BC
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:tushar@noblecpa.ca" className="hover:text-primary transition-colors">
                  tushar@noblecpa.ca
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:778-700-4084" className="hover:text-primary transition-colors">
                  778-700-4084
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Noble Chartered Professional Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
