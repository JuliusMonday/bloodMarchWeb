import "./GetInTouch.css"
const GetInTouch1 = () => {
  return (
    <div className="get-in-touch-main">
        <div className="container-for-mobile container-general first-inner-container">
            <div className="get-in-content">
                    <h1 className="get-in-header">
                    Get in Touch
                    </h1>
                    <p className="get-in-text">Have questions or feedback? Reach out to us and we&apos;ll be happy to assist.</p>
            </div>
            <div className="get-in-cards">
                    <div className="g-cards">
                        <p className="g-card-header">Support</p>
                        <p className="g-card-link">support@bloodmatch.com</p>
                        <p className="g-card-info">+1 (555) 123-4567</p>
                    </div>
                    <div className="g-cards">
                        <p className="g-card-header">Media</p>
                        <p className="g-card-link">media@bloodmatch.com</p>
                        <p className="g-card-info">+1 (555) 234-5678</p>
                    </div>
                    <div className="g-cards">
                        <p className="g-card-header">Partnerships</p>
                        <p className="g-card-link">partners@bloodmatch.com</p>
                        <p className="g-card-info">+1 (555) 345-6789</p>
                    </div>
                    <div className="g-cards">
                        <p className="g-card-header">General Inquiry</p>
                        <p className="g-card-link">info@bloodmatch.com</p>
                        <p className="g-card-info">+1 (555) 456-7890</p>
                    </div>
                </div>
        </div>
        <div className="second-inner-container container-general">
        <div className="get-in-content">
                <h1 className="get-in-header">
                Our Locations
                </h1>
                <p className="get-in-text">Find us in major cities across the country.</p>
            </div>
            <div className="get-in-cards">
                    <div className="g-cards">
                        <p className="g-card-header">San Francisco</p>
                        <p className="g-card-info">1234 BloodMatch St, San Francisco, CA 94103</p>
                    </div>
                    <div className="g-cards">
                        <p className="g-card-header">New York</p>
                        <p className="g-card-info">5678 Compatibility Ave, New York, NY 10001</p>
                    </div>
                    <div className="g-cards">
                        <p className="g-card-header">Nigeria</p>
                        <p className="g-card-info">Federal PolyTechnic, Oko Anambra State</p>
                    </div>
                    <div className="g-cards">
                        <p className="g-card-header">Los Angeles</p>
                        <p className="g-card-info">1213 Union Rd, Los Angeles, CA 90001</p>
                    </div>
                </div>    
        </div>
    </div>
  )
}

export default GetInTouch1;