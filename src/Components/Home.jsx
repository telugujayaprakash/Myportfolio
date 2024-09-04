import React from 'react';
// import Navbar from './Navbar';
import Profile from '../Assets/pp.jpg';
import '../App.css'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* <Navbar /> */}
      <div className="flex flex-1 items-center justify-between px-12 w-full">
        <div>
          <h2 className="text-7xl font-bold mb-2">Hi</h2>
          <h1 className="text-7xl font-bold">This is Jayaprakash</h1>
        </div>
        <div className="flex flex-col items-center justify-center text-center mr-10">
          <div className="border-2 border-dashed border-gray-500 p-4 rounded-lg">
            <img src={Profile} alt="Profile" className="rounded-full mx-auto w-80 h-80 object-cover mb-4" />
            <div className="flex space-x-4 justify-around">
              <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Hire Me</button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Resume ↓</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

