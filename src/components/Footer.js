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
      
        
        // <div style={footerStyles} >  <Typography variant="overline">
        //     © 2023 Etherrio | All rights reserved
        //   </Typography>
        // <div>
        //     <a href="mailto:103535741@student.swin.edu.au" style={{ textDecoration: 'none', color: 'inherit' }}>
        //         <Typography variant="overline">Contact us</Typography>
        //     </a>
            
        //   </div>
        // </div>
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