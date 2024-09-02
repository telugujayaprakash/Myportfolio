import React from 'react';
// import './Projects.css';
import Storyimg from '../Assets/Story_site.png';

export default function Projects() {
  return (
    <section className="projects-section py-12">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">&lt;Projects&gt;</h2>
        <div className="flex flex-wrap justify-center">
          <div className="project-card  rounded-lg overflow-hidden shadow-lg m-4 max-w-xs">
            <div className="image-container">
              <img alt="Story_Site" className="project-image w-full h-48 object-cover" src={Storyimg} />
            </div>
            <div className="p-4">
              <h3 className="project-title text-center text-xl text-white font-semibold mb-2">Story Confessions</h3>
              <p className="project-description text-gray-300 mb-4 text-center hover:border-cyan-600">Dive Into the Worlds of Wonder and Adventure Stories.</p>
              <div className="flex justify-around">
              <button className="project-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                <a href="https://storyconfessions.vercel.app" target='_blank' rel="noopener noreferrer text-center">Visit Site</a>
              </button>
              <button className="project-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              <a href="https://github.com/telugujayaprakash/StoryConfessions" target='_blank' rel="noopener noreferrer text-center">github</a>
              </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">&lt;/Projects&gt;</h2>
      </div>
    </section>
  );
}

