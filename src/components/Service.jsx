export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      desc: "Custom-built homes designed with precision, comfort, and long-term value in mind.",
    },
    {
      title: "Commercial Projects",
      desc: "Scalable environments tailored for performance and modern business needs.",
    },
    {
      title: "Renovation & Remodeling",
      desc: "Transforming outdated structures into refined, functional spaces.",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* LEFT SIDE (BIG STATEMENT) */}
        <div className="sticky top-32 h-fit">
          <div className="w-12 h-[2px] bg-[#D4AF37] mb-8" />

          <p className="text-xs tracking-[0.3em] text-[#D4AF37] uppercase mb-6">
            Our Services
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold leading-[1.05] text-[#0B1C3D]">
            Built to <br />
            Last. <br />
            Designed to <span className="text-[#D4AF37]">Stand Out</span>
          </h2>

          <p className="mt-8 text-gray-600 max-w-md">
            We combine structural expertise with modern design to create spaces
            that feel as good as they function.
          </p>
        </div>

        {/* RIGHT SIDE (SERVICES LIST) */}
        <div className="flex flex-col divide-y divide-black/10">

          {services.map((service, i) => (
            <div
              key={i}
              className="group py-10 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-6">

                {/* TEXT */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#0B1C3D] group-hover:text-[#D4AF37] transition">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-600 max-w-md">
                    {service.desc}
                  </p>
                </div>

                {/* INDEX NUMBER */}
                <span className="text-4xl font-semibold text-black/10 group-hover:text-[#D4AF37] transition">
                  0{i + 1}
                </span>
              </div>

              {/* HOVER LINE */}
              <div className="mt-6 h-[1px] bg-black/20 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}