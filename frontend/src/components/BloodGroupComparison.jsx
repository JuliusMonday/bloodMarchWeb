import { useState, useEffect } from 'react';
import axios from 'axios';
import './BloodGroupComparison.css'; 
import { Link } from 'react-router-dom';

const BloodGroupComparison = () => {
    const [bloodGroups, setBloodGroups] = useState([]);
    const [userBloodGroup, setUserBloodGroup] = useState('');
    const [partnerBloodGroup, setPartnerBloodGroup] = useState('');
    const [compatibility, setCompatibility] = useState(null);
    const [error, setError] = useState('');

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchBloodGroups = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/blood-groups`);
                if (response.status === 200) {
                    setBloodGroups(response.data);
                } else {
                    setError('Failed to fetch blood groups.');
                }
            } catch (error) {
                console.error('Error fetching blood groups:', error);
                setError('Error fetching blood groups. Please try again later.');
            }
        };
        fetchBloodGroups();
    }, [apiUrl]);

    const handleComparison = async () => {
        setError('');
        if (userBloodGroup && partnerBloodGroup) {
            try {
                const response = await axios.post(`${apiUrl}/api/check-compatibility`, {
                    userBloodGroup,
                    partnerBloodGroup,
                });

                setCompatibility(response.data);
            } catch (error) {
                console.error('Error checking compatibility:', error);
                setError('Error checking compatibility. Please try again.');
            }
        } else {
            setError('Both blood groups must be selected.');
        }
    };

    return (
        <div className='blood-container'>
            <h1 className="headerText">Check for Your Blood Compatibility</h1>
            <div className="sub-blood-container container-general">
                <div className="compatibility-section">
                    <h1>Blood Group Comparison</h1>
                    <div>
                        <label>Your Blood Group✨</label>
                        <select className="style-select" onChange={(e) => setUserBloodGroup(e.target.value)} value={userBloodGroup}>
                            <option value="">Select your blood group</option>
                            {bloodGroups.map((bg) => (
                                <option key={bg.id} value={bg.group}>
                                    {bg.group}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Choose another blood-group to compare(partner&apos;s blood group)💕</label>
                        <select className="style-select" onChange={(e) => setPartnerBloodGroup(e.target.value)} value={partnerBloodGroup}>
                            <option value="">Choose another blood-group to compare</option>
                            {bloodGroups.map((bg) => (
                                <option key={bg.id} value={bg.group}>
                                    {bg.group}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className='compatibility-btn' onClick={handleComparison}>Check Compatibility✔</button>
                    {error && <p className="error-message">{error}</p>}
                </div>
                <div className="result-display">
                    {compatibility && (
                        <div className='result-sub-section'>
                            <h3>Compatibility Status:</h3>
                            <div>
                                <h3>Your Blood Group: {userBloodGroup}</h3>
                                {compatibility.user && (
                                    <>
                                        <p>You Can Donate To: {compatibility.user.canDonateTo.join(', ')}</p>
                                        <p>You Can Receive From: {compatibility.user.canReceiveFrom.join(', ')}</p>
                                        <p className='health'>Health Considerations: {compatibility.user.diseases}</p>
                                    </>
                                )}
                            </div>
                            <div>
                                <h3>Partner&apos;s Blood Group: {partnerBloodGroup}</h3>
                                {compatibility.partner && (
                                    <>
                                        <p>You Can Donate To: {compatibility.partner.canDonateTo.join(', ')}</p>
                                        <p>You Can Receive From: {compatibility.partner.canReceiveFrom.join(', ')}</p>
                                        <p className='health'>Health Considerations: {compatibility.partner.diseases}</p>
                                    </>
                                )}
                            </div>
                            <div>
                                <h3>Compatibility Results:</h3>
                                <p>Can I Donate to My Partner : <span className='answer'>{compatibility.compatibility.canUserDonateToPartner ? 'Yes' : 'No'}</span></p>
                                <p>Can My Partner Donate to Me? : <span className='answer'>{compatibility.compatibility.canPartnerDonateToUser ? 'Yes' : 'No'}</span></p>
                            </div>
                        </div>
                    )}
                    <div className="blood-groups-btn">
                        <div className="blood-groups-btn">
                            <button className="groups"><Link to="/bloodA+" >A+</Link></button>
                            <button className="groups"><Link to="/bloodA-" >A-</Link></button>
                            <button className="groups"><Link to="/bloodB+" >B+</Link></button>
                            <button className="groups"><Link to="/bloodB-">B-</Link></button>
                            <button className="groups"><Link to="/bloodAB+" >AB+</Link></button>
                            <button className="groups"><Link to="/bloodAB-" >AB-</Link></button>
                            <button className="groups"><Link to="/bloodO+" >O+</Link></button>
                            <button className="groups"><Link to="/bloodO-" >O-</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodGroupComparison;
