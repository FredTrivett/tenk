import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const listenToScrollEvent = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrollEvent);

    return () => window.removeEventListener("scroll", listenToScrollEvent);
  }, []);

  return (
    <nav className='sticky top-0 z-50'>
      <div className='flex items-center justify-between py-4 px-4 md:px-28 bg-background shadow-lg'>
        <Link to="/">
          <img src="tenk-logo.png" alt="Home" className="z-50" />
        </Link>

        <button onClick={toggleMenu} className="lg:hidden z-50 flex flex-col justify-center h-6 w-6 gap-1" aria-label="Toggle navigation">
          <span className={`block w-6 h-0.5 bg-foreground transform ${isOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0'}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transform ${isOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0'}`}></span>
        </button>

        {/* Using ul for semantic list of navigation links */}
        <div className={`flex-col lg:flex-row flex gap-3 px-6 py-12 h-screen lg:h-fit lg:py-0 absolute lg:static top-0 right-0 bg-background shadow-md lg:shadow-none z-40 w-48 lg:w-auto ${isOpen ? "flex" : "lg:flex hidden"}`}>
          <ul className="list-none flex gap-6 m-0 p-0">
            <li><a href="#" className="text-foreground">Link 1</a></li>
            <li><a href="#" className="text-foreground">Link 2</a></li>
            <li><a href="#" className="text-foreground">Link 3</a></li>
          </ul>
        </div>
      </div>
      {/* Progress Bar */}
      <div className='relative h-2 bg-background'>
        <div className='h-1 bg-primary z-50 absolute top-0 left-0' style={{
          width: `${scrollProgress}%`,
          transition: 'width 0.2s ease-out',
        }}></div>
      </div>
    </nav>
  );
}
