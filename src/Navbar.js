import logoArch from './logoArch.svg'
import Vector1 from './Vector1.svg'


const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logo">
        <img src={logoArch} alt="logo" />
      </div>
      <div className="links">
        <p>How it Works</p>
        <p>Design Gallery</p>
        <p>Architects</p>
        <p>Articles</p>
      </div>
      <div className="btn">
        <img src={Vector1} alt="Search Icon" />
        <button className='btn1'>Sign In</button>
        <button className='btn2'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;