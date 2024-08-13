import {Link} from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';
import { useState, useEffect } from 'react'
const Footer = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Update time every second
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

  }, []);

  return (
    <div className="footer-main-container">
        <div className="footer-sub-container">
            <div className="footer-logo-and-time">
                <img src="../../bloodMatchLogo.png" alt="" />
                <div className='timer'>
                    <p>Your Current Time: {time}</p>
                </div>
            </div>
            <div className="footer-flex-container">
            <div className="footer-socials">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin  className='footer-social-icons'/>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook  className='footer-social-icons'/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter  className='footer-social-icons'/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram  className='footer-social-icons'/>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub  className='footer-social-icons'/>
                </a>
            </div>
                <div className="footer-nav">
                    <ul className='footer-nav-menu'>
                        <li className="footer-nav-item">
                            <Link to="/" className="footer-nav-links">Home</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/about" className="footer-nav-links">About</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/compare" className="footer-nav-links">Compare Blood</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/blog" className="footer-nav-links">Blog</Link>
                        </li>
                        <li className="footer-nav-item">
                        <Link to="/contact" className="footer-nav-links">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    2024 © Blood Match. All Rights Reserved.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer