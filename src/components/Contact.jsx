import { useRef } from "react";

export default function Contact() {
  const formRef = useRef(null);

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">
          <div className="w-16 h-[2px] bg-[#D4AF37] mb-6" />

          <h2 className="text-5xl md:text-7xl font-semibold text-[#0B1C3D] leading-tight">
            Start Your <span className="text-[#D4AF37]">Project</span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-xl">
            Tell us about your project and we’ll get back to you with a clear plan,
            timeline, and cost estimate.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-16">

          {/* LEFT — FORM */}
          <div className="lg:col-span-7">

            <form ref={formRef} className="space-y-8">

              {/* NAME + PHONE */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b border-gray-300 focus:border-[#D4AF37] outline-none py-4 text-lg placeholder-gray-400 transition"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border-b border-gray-300 focus:border-[#D4AF37] outline-none py-4 text-lg placeholder-gray-400 transition"
                />
              </div>

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b border-gray-300 focus:border-[#D4AF37] outline-none py-4 text-lg placeholder-gray-400 transition"
              />

              {/* SERVICE */}
              <select className="w-full border-b border-gray-300 focus:border-[#D4AF37] outline-none py-4 text-lg text-gray-600">
                <option>Select Service</option>
                <option>Residential Construction</option>
                <option>Commercial Projects</option>
                <option>Renovation</option>
                <option>Consultation</option>
              </select>

              {/* MESSAGE */}
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full border-b border-gray-300 focus:border-[#D4AF37] outline-none py-4 text-lg placeholder-gray-400 resize-none"
              ></textarea>

              {/* SUBMIT */}
              <button
                type="submit"
                className="group mt-6 px-12 py-5 bg-[#0B1C3D] text-white font-semibold tracking-widest relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  SEND REQUEST
                  <span className="group-hover:translate-x-2 transition">→</span>
                </span>

                <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition duration-300"></span>
              </button>

            </form>
          </div>

          {/* RIGHT — INFO PANEL */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-[30px] bg-[#0B1C3D] text-white p-10 flex flex-col justify-between">

            {/* TOP */}
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-4">
                Contact Details
              </p>

              <h3 className="text-3xl font-semibold mb-6 leading-snug">
                Let’s Discuss Your Vision
              </h3>

              <p className="text-white/70 text-sm">
                Whether it’s a new build or renovation, our team is ready to bring
                your ideas to life with precision and quality.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-6 mt-10">

              <div className="border-l-2 border-[#D4AF37] pl-4">
                <p className="text-xs text-white/50 uppercase">Phone</p>
                <p className="text-lg font-semibold">+234 800 000 0000</p>
              </div>

              <div className="border-l-2 border-[#D4AF37] pl-4">
                <p className="text-xs text-white/50 uppercase">Email</p>
                <p className="text-lg font-semibold">info@yourcompany.com</p>
              </div>

              <div className="border-l-2 border-[#D4AF37] pl-4">
                <p className="text-xs text-white/50 uppercase">Location</p>
                <p className="text-lg font-semibold">Lagos, Nigeria</p>
              </div>

            </div>

            {/* BOTTOM TRUST */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-sm text-white/60">
                ✔ Free consultation  
                <br />
                ✔ Fast response time  
                <br />
                ✔ Trusted by 100+ clients  
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}