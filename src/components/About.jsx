const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-20 bg-[#0F172A] py-16"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl w-full">
        
        {/* Text Content */}
        <div className="text-white md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I'm a Front-End Developer based in Berlin with a Master’s degree in Data Analytics and strong hands-on experience in building fast, responsive, and scalable React.js applications. I specialize in modern JavaScript (ES6+), Redux, Tailwind CSS, and REST API integration, with a deep focus on clean architecture, performance optimization, and maintainable code.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            My background includes both industry work and personal projects that demonstrate a high level of technical proficiency, attention to UI/UX details, and collaborative development in Agile environments. I have deployed multiple full-featured apps using tools like Firebase, Netlify, and Vercel, and I actively use Git, GitHub, and Chrome DevTools in my workflow.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            I’m currently based in Berlin but open to opportunities across Germany. As I continue to improve my German (currently at B1 level), I’m seeking a role where I can contribute to impactful front-end projects, learn from experienced teams, and grow as a developer in Germany’s thriving tech ecosystem.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/cha.png"
            alt="Rumit Developer Illustration"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
