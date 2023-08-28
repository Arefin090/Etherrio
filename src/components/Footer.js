import React from 'react';
import { Typography } from '@mui/material';

  const footerStyles = {
    backgroundColor: '#5c6767', 
    padding: '3px',
    textAlign: 'center',
    color: '#fff', 
  };
  
  const Footer = () => {
    return (
        <footer class="footer">
          <div class = "container">
            <div class="row">
              <div class="footer-col">
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Resources</h4>
                <ul>
                  <li>Status</li>
                  <li>Wallet Support</li>
                  <li>Exchange Support</li>
                </ul>
              </div>
              <div class="footer-col">
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