import logoArch from './logoArch.svg'

const Footer = () => {
  return (
    <div className="footerWrap">
      <div className="leftList">
        <h5>About Us</h5>
        <h5>How it Works</h5>
        <h5>FAQ</h5>
        <h5>Contact Us</h5>
        <h5>Privacy Policy</h5>
      </div>
      <div className="logo2">
        <img className='logo' src={logoArch} alt="" />
      </div>
    </div>
  );
}

export default Footer;