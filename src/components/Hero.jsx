import profileImg from "../assets/Rumit.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-4rem)] bg-gray-100 flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto px-6">
        {/* Profile Image */}

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I’m Rumit Varsani
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Frontend Developer
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all">
            Resume
          </button>
        </div>
        <div>
          <img
            src={profileImg}
            alt="Rumit img"
            className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
