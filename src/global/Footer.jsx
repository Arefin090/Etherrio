import React from 'react';
import '../App.css'; 
import ItemsContainer from '../components/ItemsContainer';
import { ReactComponent as Icon1 } from '../images/fb.svg';
import { ReactComponent as Icon2 } from '../images/twitter.svg';
import { ReactComponent as Icon3 } from '../images/ig.svg';
import { ReactComponent as Icon4 } from '../images/yt.svg';
import { ReactComponent as Icon5 } from '../images/linkedin.svg';

const Footer = () => {
  return (<footer className='bg-gray-600'>
    <div style={{ display: 'flex', alignItems: 'center'}} className='flex justify-center items-center space-x-4'>
      <Icon1 style={{width:"25",height:"25",marginTop:"30" }}/>
      <Icon2 style={{width:"25",height:"25",marginTop:"30"}}/>
      <Icon3 style={{width:"25",height:"25",marginTop:"30"}}/>
      <Icon4 style={{width:"25",height:"25",marginTop:"30"}}/>
      <Icon5 style={{width:"25",height:"25",marginTop:"30"}}/>
    </div>
    <ItemsContainer />
    
    <div className='grid grids-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
    <hr className='border-t border-gray-800 w-3/4 mx-auto mb-2' />
      <span>
        The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
      </span>
      <span>
      © Etherrio - All rights reserved.
      </span>
    </div>
  </footer>
  );
};

export default Footer;
