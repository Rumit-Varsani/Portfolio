const Projects = () => {
  const projects = [
    {
      title: "Leaderboard App",
      description:
        "A simple and interactive leaderboard application built using HTML, CSS, and JavaScript. Users can add participants, assign scores, and view rankings. Fully responsive and styled with modern UI.",
      tech: [
        "Vanilla JavaScript",
        "Responsive CSS",
        "Dynamic DOM Manipulation",
      ],
      github: "https://github.com/Rumit-Varsani/Leaderboard_App",
      demo: "https://rumit-varsani-leaderboard.netlify.app/",
      image: "src/assets/Swiggy.png",
    },
    {
      title: "Food Ordering App",
      description:
        "A React-based Swiggy clone featuring dynamic restaurant menus, cart functionality, and state management using Redux. Styled with Tailwind and fully responsive.",
      tech: ["React", "Redux", "Tailwind CSS", "Live API Integration"],
      github: "https://github.com/Rumit-Varsani/Food_ordering_app",
      demo: "https://food-ordering-app-theta-nine.vercel.app/",
      image: "/assets/Food_ordering.png",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built using React and Tailwind CSS. It showcases my projects, skills, and experience with smooth animations and a modern UI design.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/Rumit-Varsani/portfolio",
      demo: "https://rumitvarsani.vercel.app/",
      image: "/assets/Portfolio.png",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0F172A] px-6 md:px-20 py-16"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-16">
        Projects
      </h2>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-10 items-center max-w-6xl mx-auto`}
          >
            {/* Project Info */}
            <div className="w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-blue-300">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-400">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="flex gap-4 justify-center md:justify-start pt-2">
                <a
                  href={project.github}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="w-full md:w-1/2 group">
              <img
                src="src/assets/Swiggy.png"
                alt="Food Ordering App Preview"
                className="rounded-xl shadow-lg border border-gray-700 w-full max-w-[500px] md:max-w-[600px] mx-auto md:mx-0 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
