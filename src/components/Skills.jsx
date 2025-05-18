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
    SiApollographql  // for REST API substitute (or SiRest for REST if available)
  } from "react-icons/si";
  
  const Skills = () => {
    return (
      <section id="skills" className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            My Skills
          </h2>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
            {/* Existing techs */}
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiHtml5 size={48} className="text-orange-600" />
              <p className="text-lg font-semibold text-gray-700">HTML</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiCss3 size={48} className="text-blue-600" />
              <p className="text-lg font-semibold text-gray-700">CSS</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiJavascript size={48} className="text-yellow-400" />
              <p className="text-lg font-semibold text-gray-700">JavaScript</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiReact size={48} className="text-cyan-500" />
              <p className="text-lg font-semibold text-gray-700">React</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiTailwindcss size={48} className="text-teal-400" />
              <p className="text-lg font-semibold text-gray-700">Tailwind CSS</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiGit size={48} className="text-red-600" />
              <p className="text-lg font-semibold text-gray-700">Git</p>
            </div>
  
            {/* New techs */}
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiPython size={48} className="text-blue-700" />
              <p className="text-lg font-semibold text-gray-700">Python</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiRedux size={48} className="text-purple-700" />
              <p className="text-lg font-semibold text-gray-700">Redux</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiPostman size={48} className="text-orange-500" />
              <p className="text-lg font-semibold text-gray-700">Postman</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiBootstrap size={48} className="text-purple-600" />
              <p className="text-lg font-semibold text-gray-700">Bootstrap</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              <SiMysql size={48} className="text-blue-800" />
              <p className="text-lg font-semibold text-gray-700">MySQL</p>
            </div>
  
            <div className="flex flex-col items-center gap-3 p-6 shadow-md rounded-lg border hover:scale-105 transition-transform">
              {/* No direct REST API icon in react-icons, using Apollo GraphQL as alternative */}
              <SiApollographql size={48} className="text-pink-600" />
              <p className="text-lg font-semibold text-gray-700">REST API</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  