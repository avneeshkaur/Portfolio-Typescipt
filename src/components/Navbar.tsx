import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Avneesh</div>
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;