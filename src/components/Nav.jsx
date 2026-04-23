import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/lplogo.png"; // replace with your logo

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Gold Accent Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#D4AF37] z-[60]" />

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-[2px] left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="G&G Balaj Construction"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-[13px] font-semibold tracking-[0.12em] uppercase text-[#0B1C3D] hover:text-[#D4AF37] transition duration-300"
              >
                {item}

                {/* subtle dot indicator instead of underline */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 text-[13px] font-semibold tracking-wide border border-[#0B1C3D] text-[#0B1C3D] rounded-full transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button className="text-[#0B1C3D] text-2xl">
              ☰
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}