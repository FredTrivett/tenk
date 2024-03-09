import React, { useState } from 'react';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // Assuming the button should be initially positioned in the center,
  // these values should be adjusted based on the parent container's dimensions.
  // For simplicity, I'm using 50% to represent the center,
  // but you might need to adjust this based on your specific layout.
  const [top, setTop] = useState('74%'); // Center vertically
  const [left, setLeft] = useState('50%'); // Center horizontally

  const moveButton = () => {
    const newTop = Math.random() * 80 + 10; // New top position
    const newLeft = Math.random() * 80 + 10; // New left position
    setTop(`${newTop}%`);
    setLeft(`${newLeft}%`);
  };

  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <h1 className="text-6xl font-bold pb-2">Oops!</h1>
      <p className="text-2xl font-light text-gray-400">I ate this Page</p>
      <img className="w-80 pb-24" src="/monster.png" alt="cute monster" />
      <div className="duration-400 p-6" style={{ transition: '300ms', position: 'absolute', top: top, left: left, transform: 'translate(-50%, -50%)' }}>
        <button
          className="bg-gradient-to-r from-cyan-400 to-indigo-400 py-2 px-6 text-white cursor-default rounded-xl cursor-pointer"
          onMouseEnter={moveButton}
        >
          Home
        </button>
      </div>
    </div>
  );
}
