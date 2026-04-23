import { motion } from "framer-motion";
import aboutImg from "../assets/hero4.png"; // replace with real image

export default function About() {
  return (
    <section id="about" className="relative bg-white py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT - IMAGE (OFFSET STYLE) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={aboutImg}
              alt="About G&G Balaj Construction"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Deep blue offset block */}
          <div className="absolute bottom-[-40px] left-[-40px] w-full h-full bg-[#0B1C3D] -z-10" />

          {/* Gold accent */}
          <div className="absolute top-[-20px] right-[-20px] w-20 h-20 border-t-2 border-r-2 border-[#D4AF37]" />
        </motion.div>

        {/* RIGHT - TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Tag */}
          <p className="text-xs tracking-[0.3em] text-[#D4AF37] uppercase mb-6">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#0B1C3D]">
            Built on Experience, <br />
            Driven by <span className="text-[#D4AF37]">Quality</span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-[#D4AF37] mt-6" />

          {/* Description */}
          <p className="mt-8 text-gray-600 leading-relaxed max-w-md">
            At G&G Balaj Construction, we bring together craftsmanship, 
            structural expertise, and a refined design approach to deliver 
            projects that stand the test of time.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
            From residential builds to commercial developments, our focus 
            remains on precision, durability, and attention to detail at 
            every stage.
          </p>

          {/* Stats / Highlights */}
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-semibold text-[#0B1C3D]">10+</h3>
              <p className="text-sm text-gray-500 mt-1">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#0B1C3D]">50+</h3>
              <p className="text-sm text-gray-500 mt-1">Projects Completed</p>
            </div>
          </div>

        </motion.div>
      </div>

      {/* BACKGROUND TEXT (editorial touch) */}
      <div className="absolute top-10 right-6 text-[80px] md:text-[140px] font-semibold text-[#0B1C3D]/5 select-none">
        ABOUT
      </div>

    </section>
  );
}