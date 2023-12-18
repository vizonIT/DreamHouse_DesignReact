import img06 from './img06.svg'
import cloudLft from './cloudLft.svg'
import cloudRgt from './cloudRgt.svg'

const DreamBuild = () => {
  return (
    <div className="dreamProject">
      <div className="imgBuild">
        <img className='cloudLft' src={cloudLft} alt="" />
        <img src={img06} alt="" />
        <img className='cloudRgt' src={cloudRgt} alt="" />
      </div>

      <div className="dreamTxt">
        <h2>Realize your
          dream project
          with <span>Archmove</span>
        </h2>
        <button style={{ backgroundColor: '#FD665E', borderRadius: '4px', color: '#FFFFFF', border: 'none', padding: '10px 32px', marginBottom: '50px' }}>
          Free Consultation
        </button>
      </div>


    </div>
  );
}

export default DreamBuild;