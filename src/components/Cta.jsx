export default function CTA() {
  return (
    <section className="relative bg-[#0B1C3D] text-white py-32 px-6 overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-[#D4AF37] blur-[120px] top-[-100px] right-[-100px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* SMALL TAG */}
        <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-6">
          Limited Availability
        </p>

        {/* HEADLINE */}
        <h2 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-8">
          Let’s Build Something
          <br />
          <span className="text-[#D4AF37]">Exceptional</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
          We take on a limited number of projects to ensure quality.
          Secure your slot today and get a detailed consultation tailored
          to your vision.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">

          {/* PRIMARY */}
          <button className="group relative px-12 py-5 bg-[#D4AF37] text-[#0B1C3D] font-semibold tracking-widest overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              GET A FREE QUOTE
              <span className="group-hover:translate-x-2 transition">→</span>
            </span>

            {/* hover overlay */}
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition duration-300"></span>
          </button>

          {/* SECONDARY */}
          <button className="px-12 py-5 border border-white/30 text-white font-semibold tracking-widest hover:bg-white hover:text-[#0B1C3D] transition">
            📞 CALL NOW
          </button>

        </div>

        {/* TRUST BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-10">

          {[
            { number: "15+", label: "Years Experience" },
            { number: "1200+", label: "Projects Completed" },
            { number: "5★", label: "Client Rating" },
            { number: "24/7", label: "Support" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-2xl font-semibold text-[#D4AF37]">
                {item.number}
              </p>
              <p className="text-xs text-white/50 uppercase tracking-widest">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]"></div>

    </section>
  );
}