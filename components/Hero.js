export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-semibold mb-2 opacity-90">Welcome to Noble CPA</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Expert Tax & Accounting Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
          Professional accounting, tax preparation, and business consulting for small businesses in Langley, BC
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition text-lg"
          >
            Explore Services
          </a>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 pt-8 border-t border-white border-opacity-30 flex flex-col sm:flex-row justify-center gap-8">
          <div>
            <p className="text-sm opacity-75">📍 Location</p>
            <p className="font-semibold">Langley, BC</p>
          </div>
          <div>
            <p className="text-sm opacity-75">📧 Email</p>
            <a href="mailto:tushar@noblecpa.ca" className="font-semibold hover:underline">
              tushar@noblecpa.ca
            </a>
          </div>
          <div>
            <p className="text-sm opacity-75">📞 Phone</p>
            <a href="tel:778-700-4084" className="font-semibold hover:underline">
              778-700-4084
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
