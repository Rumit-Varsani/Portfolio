const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#0F172A] px-6 md:px-20 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Projects</h2>

      <div className="flex flex-col-reverse md:flex-row gap-10 items-center max-w-6xl mx-auto">
        
        {/* Project Info */}
        <div className="w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-blue-300">Leaderboard App</h3>
          <p className="text-gray-300">
            A simple and interactive leaderboard application built using HTML, CSS, and JavaScript.
            Users can add participants, assign scores, and view rankings. Fully responsive and styled with modern UI.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-400">
            <li>Built with Vanilla JavaScript</li>
            <li>Responsive design using CSS</li>
            <li>Data management and dynamic rendering</li>
          </ul>
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <a
              href="https://github.com/Rumit-Varsani/React_Learning/tree/c0f8b3f62ffb8f58bc677239a08f5229dd63d462/Food_ordering_app"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="#" // Replace with your live demo URL
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project Image Preview */}
        <div className="w-full md:w-1/2">
          <img
            src="/cha.png"
            alt="Leaderboard App Preview"
            className="rounded-xl shadow-lg border border-gray-700 w-full max-w-[400px] mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
