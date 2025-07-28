import profileImg from "/Rumit.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-4rem)] bg-[#0F172A] flex items-center justify-center py-10"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-6">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hi, I’m Rumit Varsani
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-6">
            Frontend Developer
          </p>
          <a href="https://drive.google.com/file/d/1xPUB3yyln17gaW7xqhsdU6IKuC-LOFH4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all">
              Resume
            </button>
          </a>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="Rumit img"
            className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover shadow-2xl ring-4 ring-white ring-opacity-30"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
