// import React from 'react';
// import './About.css';

// export default function About() {
//   return (
//     <section id="about-section" className="about-section bg-gray-900 min-h-screen ">
//       <div className="about-content">
//         <h2 className="about-title">About Me</h2>
//         <p className="about-description">
//           Welcome to my portfolio! I'm Jayaprakash, a dynamic and passionate Frontend Web Developer with a zest for creating unique and innovative designs. I'm a quick learner who's always eager to expand my skillset and stay ahead of the curve in this ever-evolving field.
//         </p>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about-section" className="about-section bg-gray-900 min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="about-content max-w-screen-lg mx-auto text-center">
        <h2 className="about-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">About Me</h2>
        <p className="about-description text-lg md:text-xl text-gray-300 leading-relaxed">
          Welcome to my portfolio! I'm Jayaprakash, a dynamic and passionate Frontend Web Developer with a zest for creating unique and innovative designs. I'm a quick learner who's always eager to expand my skillset and stay ahead of the curve in this ever-evolving field.
        </p>
      </div>
    </section>
  );
}
