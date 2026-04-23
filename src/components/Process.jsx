import { useState } from "react";

export default function Process() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "Consultation",
      time: "Step 01",
      desc: "We begin by understanding your vision, requirements, and overall project goals to ensure clarity from the start.",
      points: [
        "Site inspection & feasibility review",
        "Client requirement analysis",
        "Budget discussion",
      ],
    },
    {
      title: "Planning & Design",
      time: "Step 02",
      desc: "We translate your ideas into structured plans, ensuring efficiency, accuracy, and cost-effectiveness.",
      points: [
        "Architectural layout planning",
        "Material selection guidance",
        "Project timeline creation",
      ],
    },
    {
      title: "Execution",
      time: "Step 03",
      desc: "Our team delivers precise construction with strict attention to detail, quality, and safety standards.",
      points: [
        "On-site project management",
        "Quality control & supervision",
        "Progress tracking & updates",
      ],
    },
    {
      title: "Final Delivery",
      time: "Step 04",
      desc: "We complete with thorough inspections, ensuring everything meets our quality benchmarks before handover.",
      points: [
        "Final inspection & corrections",
        "Client walkthrough",
        "Project handover & documentation",
      ],
    },
  ];

  return (
    <section className="bg-[#0B1C3D] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-24">
          <div className="w-16 h-[2px] bg-[#D4AF37] mb-6" />
          <h2 className="text-5xl md:text-7xl font-semibold leading-tight">
            Our <span className="text-[#D4AF37]">Process</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-xl">
            A structured approach designed to ensure precision, efficiency,
            and high-quality results at every stage of your project.
          </p>
        </div>

        {/* PROCESS LIST */}
        <div className="space-y-12">
          {steps.map((step, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              className="group cursor-pointer border-b border-white/10 pb-10"
            >
              <div className="grid md:grid-cols-12 gap-8">

                {/* LEFT INDEX */}
                <div className="md:col-span-2">
                  <span className="text-[#D4AF37] text-lg tracking-widest">
                    {step.time}
                  </span>
                </div>

                {/* RIGHT CONTENT */}
                <div className="md:col-span-10">

                  {/* TITLE */}
                  <h3
                    className={`text-3xl md:text-5xl font-semibold transition ${
                      active === i ? "text-white" : "text-white/40"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className={`mt-4 text-white/70 max-w-2xl transition-all duration-500 ${
                      active === i
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 h-0 overflow-hidden"
                    }`}
                  >
                    {step.desc}
                  </p>

                  {/* BULLET POINTS */}
                  <ul
                    className={`mt-6 space-y-2 text-sm text-white/60 transition-all duration-500 ${
                      active === i
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 h-0 overflow-hidden"
                    }`}
                  >
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#D4AF37]"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

              {/* Animated Progress Line */}
              <div
                className={`h-[2px] mt-6 bg-[#D4AF37] transition-all duration-500 ${
                  active === i ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}