import React from 'react';
import { Link } from 'react-router-dom'; // Step 1: Import Link

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
          Find<span className="text-gray-800">Help</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
  <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
  <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About Us</Link>
  <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</Link>
</nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon (optional) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
