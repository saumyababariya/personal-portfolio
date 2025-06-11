// src/components/Navbar.tsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-pink-600 py-2 px-1 z-50 backdrop-blur-lg">
      <div className="flex justify-center space-x-8 text-white">
        <a href="#about" className="cursor-pointer hover:text-purple-200">
          About Me
        </a>
        <a href="#skills" className="cursor-pointer hover:text-purple-200">
          Skills
        </a>
        <a href="#projects" className="cursor-pointer hover:text-purple-200">
          Projects
        </a>
        <a href="#contact" className="cursor-pointer hover:text-purple-200">
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;  // Ensure you're using default export
