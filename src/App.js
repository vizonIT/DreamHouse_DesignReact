// import logo from './logo.svg';
import Navbar from './Navbar'
import Title from './Title'
import './App.css';
import Hero from './Hero.js';
import arrowLeft from './arrowLeft.svg'
import arrowRight from './arrowRight.svg'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Hero />
      <div className="swipe">
        <p className="valueText">
          Build professional <br />
          valuable room
        </p>
        <div className="swipebtns">
          <img className='rightarrow' src={arrowRight} alt="arrow right" />
          <img className='leftarrow' src={arrowLeft} alt="arrow left" />
        </div>
      </div>

    </div>
  );
}

export default App;
