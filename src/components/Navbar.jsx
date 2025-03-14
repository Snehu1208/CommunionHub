import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 to-blue-500 shadow-md py-4 px-6 flex items-center justify-between z-50">
      <div className="flex items-center space-x-3">
        <img
          src="image/LOGO.avif"
          alt="CommunionHub Logo"
          className="w-14 h-14 rounded-lg border border-gray-300 shadow-sm"
        />
      </div>

      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-12 text-lg text-white">
          <li><Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link></li>
          <li><Link to="/events" className="hover:text-gray-300 transition duration-300">Events</Link></li>
        </ul>
      </div>

      <button className="text-white text-2xl md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={`absolute md:hidden top-16 left-0 w-full bg-blue-900 shadow-md transition-all duration-300 ease-in ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 text-lg text-white py-4">
          <li><Link to="/" className="hover:text-gray-300 transition duration-300" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 transition duration-300" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/events" className="hover:text-gray-300 transition duration-300" onClick={() => setMenuOpen(false)}>Events</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
