export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-lg font-semibold mb-4">Noble CPA</h5>
            <p className="text-gray-400">Expert Tax Solutions for Small Businesses</p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
            <p className="text-gray-400 mb-2">📧 tushar@noblecpa.ca</p>
            <p className="text-gray-400">📞 778-700-4084</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Noble Chartered Professional Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
