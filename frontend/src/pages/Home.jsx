import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import SpiralImage from "../assets/spiral.jpg";
import BtnImage from "../assets/btnPix3.jpg";
import BtnImage2 from "../assets/btnPix4.jpg";
import CoupleImage from "../assets/couple.jpeg";
import {FaHeart, FaRegNewspaper, FaUserCheck } from "react-icons/fa";
import { AiOutlineInfoCircle } from 'react-icons/ai'
import "./Home.css"
import LatestArticles from '../components/LatestArticles';
import Usage from "../components/Usage";
import GetInTouch1 from '../components/GetInTouch1';
import Footer from '../components/Footer';

const Home = () => {

    const scrollRevealOption = {
        distance: '50px',
        duration: 1000,
    };
    
    useEffect(() => {
        const sr = ScrollReveal();
    
        // Reveal each element one by one
        sr.reveal('.hero-right-image img', {
        ...scrollRevealOption,
        origin: 'right',
        delay: 100, // Delay for the first element
        });
        sr.reveal('.head', {
            ...scrollRevealOption,
            origin: 'right',
            delay: 100,
            });
        sr.reveal('.para', {
            ...scrollRevealOption,
            origin: 'left',
            delay: 300,
            });
        sr.reveal(".hero-section",{
            ...scrollRevealOption,
            origin: 'bottom',
            delay: 300,
        });
        sr.reveal(".usage-container", {
            ...scrollRevealOption,
            origin: 'bottom',
            delay: 300,
        });
        sr.reveal(".steps", {
            ...scrollRevealOption,
            origin: 'left',
            delay: 300,
        });
        sr.reveal(".footer-sub-container",{
            ...scrollRevealOption,
            origin: 'bottom',
            delay: 300,
        });
        sr.reveal(".get-in-touch-main",{
            ...scrollRevealOption,
            origin: 'bottom',
            delay: 300,
        });
        sr.reveal(".get-in-touch-sec1",{
            ...scrollRevealOption,
            origin: 'left',
            delay: 300,
        });
        sr.reveal(".get-in-touch-sec2", {
            ...scrollRevealOption,
            origin: 'right',
            delay: 300,
        });
        sr.reveal(".footer-main-container",{
            ...scrollRevealOption,
            origin: 'bottom',
            delay: 300,
        });
        sr.reveal(".footer-logo-and-time",{
            ...scrollRevealOption,
            origin: 'left',
            delay: 300,
        });
        sr.reveal(".footer-flex-container",{
            ...scrollRevealOption,
            origin: 'right',
            delay: 300,
        })
    }, []);
  return (
    <>
        <Navbar/>
        <div className="hero-section container-general">
            <div className="hero-left">
                <div className="header1">
                    <div className="image1"><img src={SpiralImage} alt="SpiralImage" /></div>
                    <div className="image2"><img src={BtnImage} alt="BtnImage" /></div>
                </div>
                <div className="header2">
                    <h1>Welcome to <span>BloodMatch</span></h1>
                </div>
                <div className="header3"><img src={BtnImage2} alt="" /></div>
                <div className="buttons">
                    <button className="btn1">Get Started</button>
                    <button className="btn2">Learn More</button>
                </div>
                <div className="paragraph">
                    <p>Discover the importance of blood group compatibility for a healthy marriage.</p>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-right-image">
                    <img src={CoupleImage} alt="CoupleImage" />
                </div>
                <div className="card">
                    <h2 className="card-header">Your Guide to Blood Group Compatibility</h2>
                    <p className="card-text">Learn how blood groups can influence marital harmony and health.</p>
                </div>
            </div>
        </div>
        {/* END OF HERO SECTION */}
        <div className="key-features-section container-general">
            <h2 className="key-header">Why BloodMatch?</h2>
            <h1 className="key-header2">Key Features✨</h1>
            <div className="key-paragraph">BloodMatch offers essential tools and information to help you understand blood group compatibility for marriage.</div>
            <div className="key-features">
                <div className="feature-section1">
                    <div className="feature">
                        <h1 className="head"><FaHeart className='info-icon'/> Blood Group Comparison</h1>
                        <p className="para">Easily Compare your blood group with others to find out if you are compatible.</p>
                    </div>
                    <div className="feature">
                        <h1 className="head"><AiOutlineInfoCircle className='info-icon'/> Comprehensive Information</h1>
                        <p className="para">Access detailed information about different blood groups.</p>
                    </div>
                    <div className="feature">
                        <h1 className="head"><FaRegNewspaper className='info-icon'/> Latest Blog Posts</h1>
                        <p className="para">Stay updated with the latest news and facts about blood groups.</p>
                    </div>
                    <div className="feature">
                        <h1 className="head"><FaUserCheck  className='info-icon'/> User-Friendly Interface</h1>
                        <p className="para">Navigate the site with ease and find what you&apos;re looking for quickly.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* END OF KEY FEATURES SECTION */}
        <LatestArticles/>
        {/* End of latest articles section */}
        <Usage/>
        {/* end of usage section */}
        <GetInTouch1/>
        {/* End of get in touch section */}
        <Footer/>
    </>
  )
}

export default Home;