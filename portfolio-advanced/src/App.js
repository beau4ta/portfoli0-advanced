import './App.css';
import Nav from './components/Nav/Nav';
import BG from './background.jpeg';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <img src={BG} className='background'/>
    </div>
  );
}

export default App;
