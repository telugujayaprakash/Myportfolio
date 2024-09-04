// import React from 'react';
// import Storyimg from '../Assets/Story_site.png';
// import Java from '../Assets/java.png';
// import PP from '../Assets/pp.jpg';
// // import './Projects.css'

// export default function Projects() {
//   return (
//     <div className="container">
//       <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white" >&lt;Projects&gt;</h2>
      

// <div id="default-carousel" className="relative w-full" data-carousel="slide">
//     {/* <!-- Carousel wrapper --> */}
//     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//          {/* <!-- Item 1 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={Storyimg} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         {/* <!-- Item 2 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={PP} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         {/* <!-- Item 3 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={Storyimg} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         {/* <!-- Item 4 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={Java} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         {/* <!-- Item 5 --> */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={PP} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//     </div>
//     {/* <!-- Slider indicators --> */}
//     <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//     </div>
//     {/* <!-- Slider controls --> */}
//     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
//             </svg>
//             <span className="sr-only">Previous</span>
//         </span>
//     </button>
//     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
//             </svg>
//             <span className="sr-only">Next</span>
//         </span>
//     </button>
// </div>

//   <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white" >&lt;Projects&gt;</h2>
//   </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import Storyimg from '../Assets/Story_site.png';
import Java from '../Assets/java.png';
import PP from '../Assets/pp.jpg';

export default function AmazonStyleCarousel() {
  const images = [
    { src: Storyimg, title: 'Project 1', demo: '/shop-now-1' },
    { src: PP, title: 'Project 2', demo: '/shop-now-2' },
    { src: Java, title: 'Project 3', demo: '/shop-now-3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // const prevSlide = () => {
  //   setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  // };

  // const nextSlide = () => {
  //   setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  // };

  return (
    <div className="relative">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6" >&lt;Projects&gt;</h2>
      {/* Carousel Container */}
      <div className="overflow-hidden relative mx-20 h-96 aspect-video ml-80">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a href={image.demo}>
              <img
                src={image.src}
                alt={image.title}
                className="object-cover w-full h-full"
              />
            </a>
            {/* Text Overlay */}
            {/* <div className="absolute inset-0 bg-transparent bg-opacity-30 flex items-center justify-center text-center">
              <div>
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                  {image.title}
                </h2>
                <a
                  href={image.demo}
                  className="inline-block px-6 py-3 bg-yellow-100 text-black font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href={image.demo}
                  className="inline-block px-6 py-3 bg-yellow-100 text-black font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-600 transition"
                >
                  Github
                </a>
              </div>
            </div> */}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-yellow-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Prev/Next Controls */}
      {/* <button
        onClick={prevSlide}
        className="absolute border rounded-full top-1/2 left-40 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 hover:bg-opacity-70"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute border top-1/2 right-20 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70"
      >
        &#8594;
      </button> */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-10" >&lt;/Projects&gt;</h2>
    </div>
  );
}
