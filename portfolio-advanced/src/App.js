import './App.css';
import Nav from './components/Nav/Nav';
import About from './pages/about/about';
import Home from './pages/home/home';
import BG from './bg1.jpeg';
import React, { useState, useEffect } from 'react';
import Projects from './pages/projects/projects';
import { ContactUs } from './pages/contact/contact';


function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <ContactUs />
      <img 
      src={BG} 
      alt='bg' 
      className='background' 
      />
    </div>
  );
}

export default App;
