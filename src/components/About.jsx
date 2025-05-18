const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-[#0F172A]"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full">
        {/* Left Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/public/cha.png"    
            alt="Rumit Developer Illustration"
            className="w-[350px] md:w-[450px] object-contain"
          />
        </div>

        {/* Right Text Content */}
        <div className="text-white md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I'm Rumit Varsani, a passionate Frontend Developer with a strong
            foundation in HTML, CSS, JavaScript, and React. I love building
            clean, responsive user interfaces and continuously learning new
            technologies.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            I'm also skilled in tools like Redux, Bootstrap, TailwindCSS, and
            REST API integrations. I aim to create seamless, user-focused
            applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
