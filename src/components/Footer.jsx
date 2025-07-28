import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-10 px-4 sm:px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-6 md:flex-row justify-between items-center">
        {/* Left: Name/Brand */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white">Rumit Varsani</h4>
          <p className="text-sm text-gray-400">
            Frontend Developer | React & JavaScript Enthusiast
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#projects" className="hover:text-white">
            Certificates
          </a>
          <a href="#projects" className="hover:text-white">
            Languages
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Right: Social Links */}
        <div className="flex justify-center space-x-6 text-xl">
          <a href="mailto:varsanirumit@gmail.com" className="hover:text-white">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Rumit-Varsani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rumit-varsani/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Rumit Varsani. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
