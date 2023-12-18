import Uturn from './Uturn.svg'
import NxtMove from './NxtMove.svg'
import PinPoint from './PinPoint.svg'
import Leafe from './Leafe.svg'
import Terra from './Terra.svg'
import Dune from './Dune.svg'

const MyPartners = () => {
  return (
    <div className="partnersWrap">
      <h2>Our Partners</h2>

      <div className="PrtnersList">
        <img className='partner' src={Uturn} alt="" />
        <img className='partner' src={NxtMove} alt="" />
        <img className='partner' src={PinPoint} alt="" />
        <img className='partner' src={Leafe} alt="" />
        <img className='partner' src={Terra} alt="" />
        <img className='partner' src={Dune} alt="" />
      </div>

    </div>
  );
}

export default MyPartners;