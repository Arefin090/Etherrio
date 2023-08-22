import React from 'react';
import { Typography } from '@mui/material';

  const footerStyles = {
    backgroundColor: '#3f51b5', 
    padding: '3px',
    textAlign: 'center',
    color: '#fff', 
  };
  
  const Footer = () => {
    return (
      
        
        <div style={footerStyles}>
          <Typography variant="overline">
            © 2023 Etherrio | All rights reserved
          </Typography>
          <div>
            <Typography variant="overline">
              Contact us
            </Typography>
            
          </div>
        </div>
      
    );
  };
  
  export default Footer;