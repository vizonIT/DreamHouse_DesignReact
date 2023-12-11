import img05 from './img05.png'
import icon1 from './icon1.svg'
import icon2 from './icon2.svg'
import icon3 from './icon3.svg'

const OurValue = () => {
  return (
    <div className="ourValue">
      <div className="valueImage">
        <img src={img05} alt="image" />
      </div>
      <div className="valueRange">
        <h2>Build your needs
          with Archmove
        </h2>
        <div className="completion">
          <img src={icon1} alt="icon" />
          <div className='value1Texts'>
            <h4>100% guaranteed project completion</h4>
            <p>Build safe, comfortable and <br />
              transparent with a project management <br />
              application with a joint account.
            </p>
          </div>
        </div>
        <div className="trueCost">
          <img src={icon2} alt="icon" />
          <div className='value2Texts'>
            <h4>No additional fees</h4>
            <p>There are no hidden costs. The value <br />
              of the offer you get is the value <br />
              you paid.
            </p>
          </div>
        </div>
        <div className="monitoring">
          <img src={icon3} alt="icon" />
          <div className='value3Texts'>
            <h4>Get escort from the Team</h4>
            <p>Monitor reports from the Arsitag team <br />
              who check directly in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValue;