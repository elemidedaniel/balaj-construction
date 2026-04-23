import { useState } from "react";
import project1 from "../assets/hero1.png";
import project2 from "../assets/hero2.png";
import project3 from "../assets/hero4.png";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: "David Adeyemi",
      role: "Homeowner",
      quote:
        "The level of precision and professionalism was exceptional. Every detail was handled with care, and the final result exceeded our expectations.",
      project: "Luxury Residential Villa",
      result: "Completed in 6 weeks · 20% cost efficiency",
      img: project1,
    },
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      quote:
        "From planning to execution, the process was seamless. Communication was clear, and delivery was on schedule.",
      project: "Corporate Office Complex",
      result: "Delivered ahead of schedule · Zero delays",
      img: project2,
    },
    {
      name: "Michael Chen",
      role: "Property Developer",
      quote:
        "A reliable team that delivers quality consistently. Their attention to detail sets them apart in the industry.",
      project: "Interior Renovation",
      result: "High-end finish · Premium materials used",
      img: project3,
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-24">
          <div className="w-16 h-[2px] bg-[#D4AF37] mb-6" />
          <h2 className="text-5xl md:text-7xl font-semibold text-[#0B1C3D]">
            Client <span className="text-[#D4AF37]">Voices</span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT - IMAGE PANEL */}
          <div className="lg:col-span-6 relative h-[500px] rounded-[40px] overflow-hidden">

            <img
              src={testimonials[active].img}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D]/80 via-transparent to-transparent"></div>

            {/* Result Tag */}
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm tracking-widest text-[#D4AF37] mb-2">
                PROJECT RESULT
              </p>
              <p className="text-lg font-semibold">
                {testimonials[active].result}
              </p>
            </div>
          </div>

          {/* RIGHT - TEXT */}
          <div className="lg:col-span-6">

            {/* Big Quote */}
            <div className="text-[100px] text-[#D4AF37]/10 leading-none mb-6">
              “
            </div>

            <p className="text-2xl md:text-3xl text-[#0B1C3D] leading-relaxed">
              {testimonials[active].quote}
            </p>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-[#0B1C3D]">
                {testimonials[active].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[active].role}
              </p>

              <p className="mt-4 text-sm text-[#D4AF37] tracking-widest">
                {testimonials[active].project}
              </p>
            </div>

            {/* SWITCHER */}
            <div className="mt-12 space-y-4">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  className={`cursor-pointer flex justify-between items-center border-b pb-3 transition ${
                    active === i
                      ? "border-[#D4AF37]"
                      : "border-gray-200 hover:border-[#D4AF37]/50"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      active === i
                        ? "text-[#0B1C3D]"
                        : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </span>

                  <span className="text-xs text-gray-400">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}