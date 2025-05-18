import { Briefcase, Building2, MapPin, CalendarDays, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "Glorious Infotech",
      type: "Full-time",
      duration: "Sep 2021 - Feb 2022",
      location: "Surat, Gujarat, India · On-site",
      points: [
        "Built mobile-friendly, responsive websites.",
        "Developed dynamic UIs using React JS and JavaScript.",
        "Styled with Bootstrap and Tailwind CSS.",
        "Ensured cross-browser compatibility.",
        "Optimized performance through clean code and assets.",
      ],
    },
    {
      title: "Frontend Web Developer Intern",
      company: "Glorious Infotech",
      type: "Internship",
      duration: "Mar 2021 - Aug 2021",
      location: "Surat, Gujarat, India · On-site",
      points: [
        "Practiced mobile-first responsive design.",
        "Worked with React JS and JavaScript.",
        "Utilized Bootstrap and Tailwind CSS.",
        "Tested across multiple browsers.",
        "Focused on performance optimization.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-4 sm:px-6 py-12 bg-[#0F172A] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-12 text-center">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1E293B] p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition duration-300 border border-blue-900"
            >
              {/* Job Title */}
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-blue-400" />
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-300">
                  {exp.title}
                </h3>
              </div>

              {/* Company & Type */}
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                <Building2 size={16} />
                <span>
                  {exp.company} • {exp.type}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-1 italic">
                <CalendarDays size={16} />
                <span>{exp.duration}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 italic">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </div>

              {/* Responsibilities */}
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Code size={14} className="mt-1 text-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
