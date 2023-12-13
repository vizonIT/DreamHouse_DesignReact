import quote from './quote.svg'
import arrowLeft from './arrowLeft.svg'
import arrowRight from './arrowRight.svg'

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="quote">
        <img src={quote} alt="quotation mark" />
      </div>
      <div className="testimony">
        <p className="testimonyText">
          “We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.”
        </p>
        <div className="lowerBar">
          <div className="author">
            Adam Morph — CEO Alfatech
          </div>
          <div className="swipebtns">
            <img className='rightarrow' src={arrowRight} alt="arrow right" />
            <img className='leftarrow' src={arrowLeft} alt="arrow left" />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Testimonial;