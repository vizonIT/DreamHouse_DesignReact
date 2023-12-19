import HeroImg from './HeroImg.png'

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroLeft">
        <p>100% guaranteed build safe, <br />
          comfortable and transparent with a <br />
          project management for the best result
        </p>
        <button>Free Consultation</button>
      </div>
      <div className="heroImage">
        <img src={HeroImg} alt="Home Image" />
      </div>
    </div>
  );
}

export default Hero;