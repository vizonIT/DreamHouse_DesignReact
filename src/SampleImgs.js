import img01 from './img01.svg'
import img02 from './img02.png'
import img03 from './img03.png'
import img04 from './img04.png'

const SampleImgs = () => {
  return (
    <div className="sampleImages">
      <img className='img1' src={img01} alt="sample image1" />
      <img className='img2' src={img02} alt="sample image2" />
      <img className='img3' src={img03} alt="sample image3" />
      <img className='img4' src={img04} alt="sample image4" />
    </div>
  );
}

export default SampleImgs;