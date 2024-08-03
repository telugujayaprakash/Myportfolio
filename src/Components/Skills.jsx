// import React from 'react'

// export default function Skills() {
//   return (
//     <div className='bg-gray-900 min-h-screen'>
//       <div className="space-y-5 max-w-4xl mx-auto text-center">
//         <h2 className="text-6xl text-white font-extrabold mx-auto md:text-5xl">
//           Skills
//         </h2>
//         <p className="max-w-2xl mx-auto text-gray-400">
//           <ul>
//             <li>Python</li>
//             <li>Javascript</li>
//             <li>React Js</li>
//             <li>Flutter Basics</li>
//             <li>Java</li>
//           </ul>
//         </p>
//       </div>
//     </div>
//   )
// }
import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🐍</div>
            <div className="skill-name">Python</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <div className="skill-name">JavaScript</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <div className="skill-name">React JS</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <div className="skill-name">Flutter Basics</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">☕</div>
            <div className="skill-name">Java</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📊</div>
            <div className="skill-name">Data Analysis</div>
          </div>
        </div>
      </div>
      {/* <div className="background-animations">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
      </div> */}
    </div>
  );
}
