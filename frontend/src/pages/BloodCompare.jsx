import Accordion from "../components/Accordion";
import BloodGroupComparison from "../components/BloodGroupComparison";
import Footer from "../components/Footer";
import HorizontalScrollingSvg from "../components/HorizontalScrollingSvg";
import Navbar from "../components/Navbar";
import Usage from "../components/Usage";
import "./BloodCompare.css"

const BloodCompare = () => {
  return (
    <>
      <Navbar/>
      <div className="blood-hero-section">
        <div className="overlay"></div>
        <div className="content-wrapper container-general">
          <h1>Compare Blood Groups for Marriage</h1>
          <p>Input your and your partner&apos;s blood groups to check compatibility.</p>
          <div className="informations">
            <div className="info-cards">
              <div className="header">1000+</div>
              <div className="content">Compatibility Checks</div>
            </div>
            <div className="info-cards">
              <div className="header">500+</div>
              <div className="content">Happy Couples</div>
            </div>
            <div className="info-cards">
              <div className="header">24/7</div>
              <div className="content">Expert Advice</div>
            </div>
            <div className="info-cards">
              <div className="header">Worldwide</div>
              <div className="content">Global Reach</div>
            </div>
          </div>
        </div>
      </div>
      <Usage/>
      <BloodGroupComparison/>
      <HorizontalScrollingSvg/>
      <Accordion/>
      <Footer/>
    </>
  )
}

export default BloodCompare;