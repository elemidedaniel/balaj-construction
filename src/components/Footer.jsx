export default function Footer() {
  return (
    <footer className="bg-[#0B1C3D] text-white px-6 pt-24 pb-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP CTA */}
        <div className="mb-20 border-b border-white/10 pb-12">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
            Let’s build something <br />
            exceptional together.
          </h2>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#D4AF37] text-[#0B1C3D] font-semibold rounded-full hover:opacity-90 transition"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-20">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              G&G Balaj
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A refined approach to construction, combining structural expertise
              with modern design to create timeless spaces.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm tracking-widest text-gray-400 mb-4 uppercase">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37]">Home</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37]">Services</a></li>
              <li><a href="#projects" className="hover:text-[#D4AF37]">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37]">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm tracking-widest text-gray-400 mb-4 uppercase">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Renovation & Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm tracking-widest text-gray-400 mb-4 uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Ibadan, Nigeria</li>
              <li>+234 000 000 0000</li>
              <li>info@balaj.com</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 text-sm text-gray-400">

          <p>© {new Date().getFullYear()} G&G Balaj Construction. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#D4AF37]">LinkedIn</a>
            <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
            <a href="#" className="hover:text-[#D4AF37]">Twitter</a>
          </div>

        </div>

      </div>
    </footer>
  );
}