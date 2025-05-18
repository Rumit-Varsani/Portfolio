import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiPython,
  SiRedux,
  SiPostman,
  SiBootstrap,
  SiMysql,
  SiApollographql,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <SiHtml5 size={48} className="text-orange-600" />, name: "HTML" },
    { icon: <SiCss3 size={48} className="text-blue-600" />, name: "CSS" },
    {
      icon: <SiJavascript size={48} className="text-yellow-400" />,
      name: "JavaScript",
    },
    { icon: <SiReact size={48} className="text-cyan-500" />, name: "React" },
    {
      icon: <SiTailwindcss size={48} className="text-teal-400" />,
      name: "Tailwind CSS",
    },
    { icon: <SiGit size={48} className="text-red-600" />, name: "Git" },
    { icon: <SiPython size={48} className="text-blue-700" />, name: "Python" },
    { icon: <SiRedux size={48} className="text-purple-700" />, name: "Redux" },
    {
      icon: <SiPostman size={48} className="text-orange-500" />,
      name: "Postman",
    },
    {
      icon: <SiBootstrap size={48} className="text-purple-600" />,
      name: "Bootstrap",
    },
    { icon: <SiMysql size={48} className="text-blue-800" />, name: "MySQL" },
    {
      icon: <SiApollographql size={48} className="text-pink-600" />,
      name: "REST API",
    },
  ];

  return (
    <section id="skills" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
          {skills.map(({ icon, name }) => (
            <div
              key={name}
              tabIndex={0}
              className="flex flex-col items-center gap-3 p-6 shadow-lg rounded-xl border border-gray-200 
                hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                transition-transform duration-300 ease-in-out cursor-pointer"
              aria-label={`${name} skill`}
              role="img"
            >
              {icon}
              <p className="text-lg font-semibold text-gray-700">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
