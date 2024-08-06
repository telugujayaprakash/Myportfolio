import React from 'react';
import './Skills.css';
import py from '../Assets/python.png'
import js from '../Assets/js.png'
import java from '../Assets/java.png'
import web from '../Assets/web.png'
import react from '../Assets/atom.png'

export default function Skills() {
  return (
    <div className="skills-section bg-gray-900">
      <div className="skills-content">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon"><img src={py} alt="python"/></div>
            <div className="skill-name">Python</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><img src={js} alt="" /></div>
            <div className="skill-name">JavaScript</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><img src={react} alt="" /></div>
            <div className="skill-name">React JS</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <div className="skill-name">Flutter Basics</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><img src={java} alt="" /></div>
            <div className="skill-name">Java</div>
          </div>
          <div className="skill-card">
            <div className="skill-icon"><img src={web} alt="" /></div>
            <div className="skill-name">Web Development</div>
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
