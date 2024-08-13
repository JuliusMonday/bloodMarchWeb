import BloodImage4 from "../assets/bloodImage4.jpeg";
import "./Usage.css";
const Usage = () => {
  return (
    <div className="usage-main-container">
        <div className="usage-container container-general">
            <div className="usage-image">
                <img src={BloodImage4} alt="blood-image" />
            </div>
            <div className="usage-steps">
                <h1 className="usage-header">How to Use BloodMatch</h1>
                <div className="steps">
                    <div className="usage-contents">
                        <p className="step">01.</p>
                        <p className="step-text">Input your blood group details in the comparison tool.</p>
                    </div>
                </div>
                
                <div className="steps">
                    <div className="usage-contents">
                        <p className="step">02.</p>
                        <p className="step-text">Compare your blood group with your partner&apos;s to check compatibility.</p>
                    </div>
                </div>
                
                <div className="steps">
                    <div className="usage-contents">
                        <p  className="step">03.</p>
                        <p className="step-text">Read detailed information and recommendations based on your results.</p>
                    </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Usage;