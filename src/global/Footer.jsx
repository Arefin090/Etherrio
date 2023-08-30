// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#5c6767', color: 'white', padding: '2vh 0' }}>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Status</li>
              <li>Wallet Support</li>
              <li>Exchange Support</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Logo</h4>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
