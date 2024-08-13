import React from 'react';
import './HorizontalScrollingSvg.css'; // Import the CSS file

const HorizontalScrollingSvg = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <svg width="1200" height="100" xmlns="http://www.w3.org/2000/svg">
          <g>
            <circle cx="50" cy="50" r="40" fill="#FF9999" />
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="#000">A+</text>
          </g>
          <g transform="translate(100, 0)">
            <circle cx="50" cy="50" r="40" fill="#FF9999" />
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="#000">A-</text>
          </g>
          <g transform="translate(200, 0)">
            <circle cx="50" cy="50" r="40" fill="#FF9999" />
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="#000">B+</text>
          </g>
          <g transform="translate(300, 0)">
            <circle cx="50" cy="50" r="40" fill="#FF9999" />
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="#000">B-</text>
          </g>
          <g transform="translate(400, 0)">
            <circle cx="50" cy="50" r="40" fill="#FF9999" />
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="#000">AB+</text>
          </g>
          <g transform="translate(500, 0)">
            <circle cx="50" cy="50" r="40" fill="#FF9999" />
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="#000">AB-</text>
          </g>
          <g transform="translate(600, 0)">
            <circle cx="50" cy="50" r="40" fill="#FF9999" />
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="#000">O+</text>
          </g>
          <g transform="translate(700, 0)">
            <circle cx="50" cy="50" r="40" fill="#FF9999" />
            <text x="50" y="55" fontSize="20" textAnchor="middle" fill="#000">O-</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default HorizontalScrollingSvg;
