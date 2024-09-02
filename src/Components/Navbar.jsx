import React from 'react';

export default function Navbar() {
  return (
      <nav className="sticky top-5 bg-black text-white px-10 py-3  flex justify-between border rounded-full border-gray-500 ms-10 me-10">
      <h2 className="text-lg font-bold">Jp</h2>
      <ul className="flex gap-10">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#home" className="hover:text-gray-400">About</a></li>
        <li><a href="#home" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#home" className="hover:text-gray-400">Projects</a></li>
      </ul>
    </nav>
  );
}
