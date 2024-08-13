import logo from "../../bloodMatchLogo.png"
import { Link } from "react-router-dom"
import { FaArrowRight,FaTimes, FaBars } from 'react-icons/fa';
import { useState } from "react";
import "./Navbar.css"
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
  return (
    <nav className="navbar">
      <div className="navbar-container ">
        <div className="navbar-logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleClick}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={handleClick}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/compare" className="nav-links" onClick={handleClick}>Compare Blood</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={handleClick}>Blog</Link>
          </li>
          <li className="nav-item" id="mobile-contact">
          <Link to="/contact" className="nav-links" onClick={handleClick}>Contact Us <FaArrowRight/></Link>
          </li>
        </ul>
        <div className="contact-btn">
          <button className="btn-contact">
            <Link to="/contact" className="nav-links" onClick={handleClick}>Contact Us →</Link>
          </button>
        </div>
         <div className="mobile-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;