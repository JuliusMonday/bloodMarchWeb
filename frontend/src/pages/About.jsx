import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './About.css';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      <h1>About Us</h1>
      <div className="founder-info">
        <h2>Meet the Founder</h2>
        <p>
          My name is <strong>Monday Chimaobi Julius</strong>, and I am the founder of <strong>JuTeLabs</strong>.
        </p>
        <p>
        <strong>At JuTeLabs</strong>, we are committed to developing innovative solutions that positively impact people&apos;s lives. One of our flagship products, <strong>BloodMatch</strong>, is a platform designed to check for blood group compatibility, and will also evolve into a comprehensive medium for facilitating blood donations in the future.
        </p>
      </div>
      <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          Our mission at JuTeLabs is to leverage technology to enhance healthcare accessibility and improve the lives of individuals. 
          We believe in the power of community and collaboration, and we strive to make a positive impact through our projects.
        </p>
      </div>
      <div className="vision-statement">
        <h2>Our Vision</h2>
        <p>
          We envision a world where technology bridges gaps in healthcare, ensuring that everyone has access to the support they need. 
          Through BloodMatch and future initiatives, we aim to foster a community of compassion and assistance.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
