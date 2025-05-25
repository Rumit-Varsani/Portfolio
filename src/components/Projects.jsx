const Projects = () => {
  const projects = [
    {
      title: "Food Ordering App - Swiggy",
      description:
        "A fully responsive React-based food delivery web application inspired by Swiggy. It features dynamic restaurant listings, detailed menus, an interactive cart, and a smooth user experience.",
      tech: ["React, Redux, Tailwind CSS, Live API Integration"],
      features: [
        "Live restaurant and menu data via Swiggy API",
        "Cart with real-time state management",
        "Shimmer UI for loading effects",
        "Responsive layout with Tailwind CSS",
        "Reusable components and routing with React Router",
      ],
      github: "https://github.com/Rumit-Varsani/Food_ordering_app",
      demo: "https://food-ordering-app-theta-nine.vercel.app/",
      image: "/Swiggy.png",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal developer portfolio showcasing my projects, skills, and experience. Built with React and styled using Tailwind CSS, it features a modern layout and smooth animations powered by Framer Motion.",
      tech: ["React, Tailwind CSS, Framer Motion"],
      features: [
        "Fully responsive single-page layout",
        "Animated sections using Framer Motion",
        "Clean UI with easy navigation",
        "Modular component-based code structure",
      ],
      github: "https://github.com/Rumit-Varsani/portfolio",
      demo: "https://rumitvarsani.vercel.app/",
      image: "/portfolio.png",
    },
    {
      title: "GitHub Profile Viewer",
      description:
        "A lightweight web application that fetches and displays any GitHub user’s profile data using the GitHub API. Built using modern ES6 JavaScript, it showcases user details like avatar, bio, followers, repositories, and more—all with a clean, responsive UI.",
      tech: [
        "HTML, CSS, JavaScript (ES6), GitHub REST API"
      ],
      features: [
        "Real-time GitHub profile search",
        "Fetch and display user data using GitHub API",
        "Responsive design with clean layout",
        "Built with ES6+ features (fetch, async/await, arrow functions)",
      ],
      github: "https://github.com/Rumit-Varsani/github_finder_project",
      demo: "https://githubfinderproject-2ae83i5ia-rumit-varsanis-projects.vercel.app/",
      image: "/Git_hub.png",
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

              <div>
                <h4 className="text-lg font-semibold text-white mt-4">
                  Key Features:
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-400">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mt-4">
                  Tech Stack:
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-400">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>

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
                src={project.image}
                alt={`${project.title} Preview`}
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
