import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-mono text-lg text-blue-400">
          <span className="text-white">&lt;</span>
          <a href="#home" className="text-blue-400">Rumit Varsani</a>
          <span className="text-white">/&gt;</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {["home", "about", "skills", "experience", "projects","certificates","languages", "contact"].map(link => (
            <li key={link} className="cursor-pointer hover:text-blue-400 transition">
              <a href={`#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 pb-4 bg-gray-800 rounded-lg">
          {["home", "about", "skills", "experience", "projects","certificates","languages", "contact"].map(link => (
            <li key={link} className="cursor-pointer hover:text-blue-400 transition">
              <a href={`#${link}`} onClick={() => setIsOpen(false)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
