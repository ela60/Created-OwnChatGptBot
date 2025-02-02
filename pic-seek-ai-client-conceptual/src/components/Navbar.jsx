import { Link } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Brand */}
          <a className="text-2xl font-bold text-pink-700">Ela's ChatBot</a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6 text-lg text-pink-700 font-semibold">
            <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            <Link to="/generate" className="hover:text-blue-500 transition">Generate Images</Link>
          </ul>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 pb-4 text-center text-lg text-gray-700">
            <Link to="/" className="hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/generate" className="hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Generate Images</Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
