export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="font-bold">NC</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Noble CPA</h3>
                <p className="text-xs text-gray-400">Professional Accountants</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Expert accounting and tax services for small businesses in Langley, BC.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-primary transition">Tax Preparation</a></li>
              <li><a href="#services" className="hover:text-primary transition">Audit Services</a></li>
              <li><a href="#services" className="hover:text-primary transition">Bookkeeping</a></li>
              <li><a href="#services" className="hover:text-primary transition">Consulting</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#process" className="hover:text-primary transition">Our Process</a></li>
              <li><a href="#faq" className="hover:text-primary transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📍</span>
                Langley, BC
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:tushar@noblecpa.ca" className="hover:text-primary transition">
                  tushar@noblecpa.ca
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:778-700-4084" className="hover:text-primary transition">
                  778-700-4084
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Noble Chartered Professional Accountants. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Professional Accounting • Tax Services • Business Consulting</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
