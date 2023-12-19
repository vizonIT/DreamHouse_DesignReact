// import logo from './logo.svg';
import Navbar from './Navbar'
import Title from './Title'
import './App.css';
import Hero from './Hero.js';
import arrowLeft from './arrowLeft.svg'
import arrowRight from './arrowRight.svg'
import SampleImgs from './SampleImgs.js'
import OurValue from './OurValue.js'
import Testimonial from './Testimonial.js'
import DreamBuild from './DreamBuild.js'
import MyPartners from './MyPartners.js'
import Footer from './Footer.js'


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
      <SampleImgs />
      <OurValue />
      <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}>
        <button style={{ backgroundColor: '#FD665E', borderRadius: '4px', color: '#FFFFFF', border: 'none', padding: '10px 32px', marginBottom: '50px' }}>
          Free Consultation
        </button>
      </div>
      <h2 style={{ margin: '30px 70px', marginLeft: '110px' }}>Sound Too Good <br /> To Be True?</h2>
      <Testimonial />
      <DreamBuild />
      <MyPartners />
      <hr style={{ size: '2px solid', margin: '30px 0', opacity: '0.4' }} />
      <Footer />



    </div>
  );
}

export default App;
