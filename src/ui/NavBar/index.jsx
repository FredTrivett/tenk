import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex items-center justify-between py-4 px-8 bg-background shadow-lg'>
      <Link to="/"> <img src="tenk-logo.png" alt="Home" className="z-50" /> </Link>

      {/* Toggle button for smaller screens */}
      <button
        onClick={toggleMenu}
        className="lg:hidden z-50 flex flex-col justify-center h-6 w-6 gap-1"
        aria-label="Toggle navigation"
      >
        <span className={`block w-6 h-0.5 bg-foreground ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-foreground ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-foreground ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Navigation Links */}
      <div className={`flex-col lg:flex-row flex gap-3 px-6 py-12 h-screen lg:h-fit lg:py-0 absolute lg:static top-0 right-0 bg-background shadow-md lg:shadow-none z-40 w-48 lg:w-auto ${isOpen ? "flex" : "lg:flex hidden"}`}>
        <a href="#" className="text-foreground">Link 1</a>
        <a href="#" className="text-foreground">Link 2</a>
        <a href="#" className="text-foreground">Link 3</a>
      </div>
    </nav>
  );
}