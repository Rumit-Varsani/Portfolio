const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Image + Name */}
        <div className="font-mono text-lg text-blue-400">
          <span className="text-white">&lt;</span>
          <span className="text-blue-400">
            <a href="#home">Rumit Varsani</a>
          </span>
          <span className="text-white">/&gt;</span>
        </div>

        {/* Right Side: Nav Links */}
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-blue-400 transition">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            <a href="#experience">Experience</a>
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
