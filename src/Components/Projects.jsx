// // import React from 'react'

// // export default function Projects() {
// //   return (
// //     <section class="bg-gray-900 min-h-screen">
// //   <div class="container px-5 py-24 mx-auto">
// //     <div class="flex flex-wrap -mx-4 -mb-10 text-center">
// //       <div class="sm:w-1/2 mb-10 px-24">
// //         <div class="rounded-lg h-64 overflow-hidden">
// //           <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501"/>
// //         </div>
// //         <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Buy YouTube Videos</h2>
// //         <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
// //         <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
// //       </div>
// //       <div class="sm:w-1/2 mb-10 px-24">
// //         <div class="rounded-lg h-64 overflow-hidden">
// //           <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502"/>
// //         </div>
// //         <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">The Catalyzer</h2>
// //         <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
// //         <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
// //       </div>
// //     </div>
// //   </div>
// // </section>
// //   )
// // }
// import React from 'react';
// import './Projects.css';
// import Storyimg from '../Assets/Story_site.png'

// export default function Projects() {
//   return (
//     <section className="projects-section bg-gray-900">
//       <div className="container">
//         <h2 className="section-title">My Projects</h2>
//         <div className="flex flex-wrap justify-center">
//           <div className="project-card">
//             <div className="image-container">
//               <img alt="Story_Site" className="project-image" src={Storyimg} />
//               <img src="" alt="" srcset="" />
//             </div>
//             <h3 className="project-title">Story Confessions</h3>
//             <p className="project-description">Dive Into the Worlds of Wonder and Adventure Stories.</p>
//             <button className="project-button"><a href="https://storyconfessions.vercel.app" target='blank'>Visit Site</a></button>
//           </div>
//           {/* <div className="project-card">
//             <div className="image-container">
//               <img alt="content" className="project-image" src="https://dummyimage.com/800x400" />
//             </div>
//             <h3 className="project-title">The Catalyzer</h3>
//             <p className="project-description">
//               Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
//             </p>
//             <button className="project-button">View Project</button>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import './Projects.css';
import Storyimg from '../Assets/Story_site.png';

export default function Projects() {
  return (
    <section className="projects-section bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl text-center text-white font-extrabold mb-8">My Projects</h2>
        <div className="flex flex-wrap justify-center">
          <div className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg m-4 max-w-xs">
            <div className="image-container">
              <img alt="Story_Site" className="project-image w-full h-48 object-cover" src={Storyimg} />
            </div>
            <div className="p-4">
              <h3 className="project-title text-xl text-white font-semibold mb-2">Story Confessions</h3>
              <p className="project-description text-gray-300 mb-4">Dive Into the Worlds of Wonder and Adventure Stories.</p>
              <button className="project-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                <a href="https://storyconfessions.vercel.app" target='_blank' rel="noopener noreferrer">Visit Site</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
