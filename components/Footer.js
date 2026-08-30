export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Noble CPA</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional accounting and tax services for small businesses in Langley, BC.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Tax Preparation</a></li>
              <li><a href="#services" className="hover:text-white transition">Audit Services</a></li>
              <li><a href="#services" className="hover:text-white transition">Bookkeeping</a></li>
              <li><a href="#services" className="hover:text-white transition">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-1">📍 Langley, BC</p>
            <p className="text-sm text-gray-400 mb-1">📧 <a href="mailto:tushar@noblecpa.ca" className="hover:text-white transition">tushar@noblecpa.ca</a></p>
            <p className="text-sm text-gray-400">📞 <a href="tel:778-700-4084" className="hover:text-white transition">778-700-4084</a></p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Noble Chartered Professional Accountants. All rights reserved.</p>
          <p className="mt-2">Professional Accounting • Tax Services • Business Consulting</p>
        </div>
      </div>
    </footer>
  )
}
