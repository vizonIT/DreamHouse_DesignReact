import logoArch from './logoArch.svg'
import Vector1 from './Vector1.svg'
import tablerMenu from './tablerMenu.svg'


const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logo" style={{ display: 'inline' }}>
        <img src={logoArch} alt="logo" />
      </div>
      <div className="links">
        <p>How it Works</p>
        <p>Design Gallery</p>
        <p>Architects</p>
        <p>Articles</p>
      </div>
      <div className="btn">
        <img className='Search' src={Vector1} alt="Search Icon" />
        <img className='Menu' src={tablerMenu} alt="Menu Icon" />
        <button className='btn1'>Sign In</button>
        <button className='btn2'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;