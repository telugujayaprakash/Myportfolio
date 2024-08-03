// import React from 'react'

// export default function About() {
//   return (
//     <div className="bg-gray-900 min-h-screen">
//       <div className="space-y-5 max-w-4xl mx-auto text-center">
//         <h2 className="text-6xl text-white font-extrabold mx-auto md:text-15xl">
//           About Me
//         </h2>
//         <p className="max-w-2xl mx-auto text-gray-400">
//           Welcome to my portfolio! I'm Jayaprakash, a dynamic and passionate Frontend Web Developer with a zest for creating unique and innovative designs. I'm a quick learner who's always eager to expand my skillset and stay ahead of the curve in this ever-evolving field.
//         </p>
//       </div>
//     </div>
//   )
// }
// About.jsx
import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about-section" className="about-section bg-gray-900 min-h-screen ">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Welcome to my portfolio! I'm Jayaprakash, a dynamic and passionate Frontend Web Developer with a zest for creating unique and innovative designs. I'm a quick learner who's always eager to expand my skillset and stay ahead of the curve in this ever-evolving field.
        </p>
      </div>
    </section>
  );
}
