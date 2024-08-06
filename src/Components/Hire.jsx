import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Jayaprakash</h2>
            <p className="text-gray-400">Crafting web experiences with creativity and passion.</p>
          </div>
        </div>



        {/* <div className="flex justify-center mt-4 md:mt-0">
            <a href="https://github.com/your-profile" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/your-profile" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/your-profile" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
          </div> */}


        <div className="text-center mt-8">
          <div className="flex flex-col md:flex-row items-center">
            <a href="mailto:jayaprakash@gmail.com" className="text-gray-400 hover:text-white mb-2 md:mb-0 mx-2">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="https://www.google.com/maps?q=Hyderabad" className="text-gray-400 hover:text-white mb-2 md:mb-0 mx-2">
              <i className="fas fa-map-marker-alt"></i> Address
            </a></div>
          <p className="text-gray-500 text-sm">&copy; 2024</p>
          <p className="text-gray-500 text-sm">Designed & Developed by Jayaprakash.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
