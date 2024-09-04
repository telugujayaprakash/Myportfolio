// import './App.css';
// import Home from './Components/Home';
// import About from './Components/About';
// import Skills from './Components/Skills';
// import Projects from './Components/Projects';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Home/>
//       <About/>
//       <Skills/>
//       <Projects/>
//       <Footer/>
      
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'; // Import the Navbar component

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
