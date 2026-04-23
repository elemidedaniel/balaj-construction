import project1 from "../assets/hero3.png";
import project2 from "../assets/hero2.png";
import project3 from "../assets/hero1.png";

export default function Projects() {
  const projects = [
    {
      title: "Luxury Residential Villa",
      category: "Residential",
      img: project1,
    },
    {
      title: "Corporate Office Complex",
      category: "Commercial",
      img: project2,
    },
    {
      title: "Modern Interior Renovation",
      category: "Renovation",
      img: project3,
    },
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-24">
          <div className="w-16 h-[2px] bg-[#D4AF37] mb-6" />

          <h2 className="text-5xl md:text-7xl font-semibold leading-[1.05] text-[#0B1C3D]">
            Selected <span className="text-[#D4AF37]">Projects</span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-xl">
            A curated selection of our finest construction and renovation work,
            built with precision and attention to detail.
          </p>
        </div>

        {/* FEATURED PROJECT */}
        <div className="group cursor-pointer relative mb-24">

          <div className="relative overflow-hidden rounded-[40px]">
            <img
              src={projects[0].img}
              className="w-full h-[450px] md:h-[650px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Hover Content */}
            <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="flex items-center justify-between text-white">
                <span className="text-sm tracking-widest text-[#D4AF37]">
                  VIEW PROJECT
                </span>

                <div className="w-10 h-10 border border-white flex items-center justify-center group-hover:translate-x-2 transition">
                  →
                </div>
              </div>
            </div>

            {/* Index */}
            <div className="absolute top-8 left-8 text-white text-6xl font-light opacity-20">
              01
            </div>
          </div>

          <div className="mt-8 flex justify-between items-end">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-[#0B1C3D] mb-2">
                {projects[0].title}
              </h3>
              <p className="text-gray-500">
                High-end architectural execution with premium finishing.
              </p>
            </div>

            <span className="text-sm text-[#D4AF37] tracking-widest">
              {projects[0].category}
            </span>
          </div>
        </div>

        {/* GRID PROJECTS */}
        <div className="grid md:grid-cols-2 gap-16">
          {projects.slice(1).map((project, i) => (
            <div key={i} className="group cursor-pointer">

              <div className="relative overflow-hidden rounded-[30px]">

                <img
                  src={project.img}
                  className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0B1C3D]/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Index */}
                <div className="absolute top-6 left-6 text-white text-4xl font-light opacity-20">
                  0{i + 2}
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white border border-white px-6 py-2 tracking-widest text-sm">
                    VIEW
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-semibold text-[#0B1C3D]">
                  {project.title}
                </h3>

                <span className="text-sm text-[#D4AF37] tracking-widest">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}