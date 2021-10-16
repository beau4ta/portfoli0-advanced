import './App.css';
import Nav from './components/Nav/Nav';
import About from './pages/about/about';
import Home from './pages/home/home';
import BG from './bg1.jpeg';
import React, { useState, useEffect } from 'react';
import Projects from './pages/projects/projects';


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
      <img 
      src={BG} 
      alt='bg' 
      className='background' 
      style={{transform: `translateY(${offsetY * 0.5}px)`}}
      />
    </div>
  );
}

export default App;
