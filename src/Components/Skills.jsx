import React from 'react';
// import './Skills.css';
import py from '../Assets/python.png';
import js from '../Assets/js.png';
import java from '../Assets/java.png';
import web from '../Assets/web.png';
import react from '../Assets/atom.png';

export default function Skills() {
  return (
    <div className="skills-section py-12">
      <div className="skills-content max-w-screen-lg">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 ">&lt;Skills&gt;</h2>
        <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="skill-card  rounded-lg p-4 flex flex-col items-center">
            <div className="skill-icon mb-4"><img src={py} alt="python" className="w-16 h-16"/></div>
            <div className="skill-name  text-lg font-semibold">Python</div>
          </div>
          <div className="skill-card rounded-lg p-4 flex flex-col items-center">
            <div className="skill-icon mb-4"><img src={js} alt="JavaScript" className="w-16 h-16"/></div>
            <div className="skill-name   text-lg font-semibold">JavaScript</div>
          </div>
          <div className="skill-card  rounded-lg p-4 flex flex-col items-center">
            <div className="skill-icon mb-4"><img src={react} alt="React JS" className="w-16 h-16"/></div>
            <div className="skill-name   text-lg font-semibold">React JS</div>
          </div>
          <div className="skill-card  rounded-lg p-4 flex flex-col items-center">
            <div className="skill-icon mb-4 text-5xl">📱</div>
            <div className="skill-name   text-lg font-semibold">Flutter Basics</div>
          </div>
          <div className="skill-card  rounded-lg p-4 flex flex-col items-center">
            <div className="skill-icon mb-4"><img src={java} alt="Java" className="w-16 h-16"/></div>
            <div className="skill-name   text-lg font-semibold">Java</div>
          </div>
          <div className="skill-card rounded-lg p-4 flex flex-col items-center">
            <div className="skill-icon mb-4"><img src={web} alt="Web Development" className="w-16 h-16"/></div>
            <div className="skill-name   text-lg font-semibold">Web Development</div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-10">&lt;/Skills&gt;</h2>
      </div>
    </div>
  );
}
