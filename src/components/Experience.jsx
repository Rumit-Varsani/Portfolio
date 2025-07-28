import { Briefcase, Building2, MapPin, CalendarDays, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "Glorious Infotech",
      type: "Full-time",
      duration: "October 2021 – August 2022",
      location: "Surat, Gujarat, India · On-site",
      points: [
        "Developed and maintained over 3 production-ready web applications using React.js and modern JavaScript (ES6+)",
        "Integrated REST APIs to dynamically render data and create seamless user interactions",
        "Designed clean and responsive UIs using Tailwind CSS and Bootstrap, ensuring cross-device compatibility",
        "Optimized application performance and reduced load times by up to 20% through code splitting and lazy loading",
        "Collaborated in Agile sprints using Git and GitHub for version control and efficient team workflows",
      ],
    },
    {
      title: "Junior Game Developer",
      company: "Glorious Infotech",
      type: "Full-time",
      duration: "July 2021 – September 2021",
      location: "Surat, Gujarat, India · On-site",
      points: [
        "Assisted in developing interactive mobile games using Unity3D and C#",
        "Implemented game logic, scoreboards, and in-game UI elements to enhance user experience",
        "Worked closely with senior developers to refine gameplay mechanics and fix bugs across multiple devices",
        "Participated in internal QA and testing cycles to ensure performance and user flow",
        "Improved loading and animation speed using Unity’s optimization features",
      ],
    },
    {
      title: "Game Development Intern",
      company: "Glorious Infotech",
      type: "Internship",
      duration: "January 2021 – June 2021",
      location: "Surat, Gujarat, India · On-site",
      points: [
        "Gained hands-on experience in Unity3D for both 2D and 3D game environments",
        "Developed mini-game prototypes as part of a collaborative learning environment",
        "Learned animation, basic physics, and scripting fundamentals in C# under mentorship",
        "Built interactive UI screens for game menus and scoreboards",
        "Participated in brainstorming and creative discussions for game design and level mechanics",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0F172A] text-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Experience
        </h2>

        <div className="relative border-l-4 border-blue-500 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 pb-12">
              {/* Dot */}
              <span className="absolute -left-[10px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0F172A]"></span>

              {/* Card */}
              <div className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-blue-900 hover:shadow-blue-500/30 transition duration-300">
                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-300">
                    {exp.title}
                  </h3>
                </div>

                {/* Company & Type */}
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                  <Building2 size={16} />
                  <span>
                    {exp.company} • {exp.type}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm italic text-gray-400 mb-1">
                  <CalendarDays size={16} />
                  <span>{exp.duration}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm italic text-gray-400 mb-4">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>

                {/* Points */}
                <ul className="space-y-2 text-gray-200 text-[15px]">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Code size={16} className="text-blue-400 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
