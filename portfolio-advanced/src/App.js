import './App.css';
import Nav from './components/Nav/Nav';
import BG from './background.jpeg';
import About from './pages/about/about';
import Img from './components/img-fade/img-fade';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <img src={BG} className='background'/>
    </div>
  );
}

export default App;
