/* Homepage of website. */

import React, { useState } from 'react';
import FeaturesSection from './Features';
import BalanceAndTransactionTabs from './BalanceAndTransactionTabs';
import SearchBar from './SearchBar';
import { Container, Typography } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import video from '../videos/wallpaper.mp4';
import Button from '@mui/material/Button';

function Home() {
    const [showDetails, setShowDetails] = useState(false);
    const [showTag, setShowTag] = useState(false);
    const [showFeatures, setShowFeatures] = useState(true);
    const handleButtonClick = () => {
      setShowTag(!showTag);
      setShowFeatures(false);
    };

    // Search bar with hardcoded wallet address for testing purposes
    const handleSearch = (inputValue) => {
        const hardcodedWalletAddress = "0x1234567890"; 
        if (inputValue === hardcodedWalletAddress) {
          setShowDetails(true);
        }
      };
      
    return (
      <div>
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='flex justify-center items-center space-x-0.0'>
                <video autoPlay loop muted style={{position:"absolute", width:"100%", left:"50%", top:"20%", height:"30%", objectFit:"cover", transform:"translate(-50%, -50%)", zIndex:"-1"}}><source src={video} type="video/mp4"/></video>
                <DiamondIcon style={{width:"70",height:"70",marginTop:"55", marginLeft: "-10px",color:"white", fontWeight:"bold"}}></DiamondIcon>
                <p style={{fontSize:"80px", marginTop:"40px",fontFamily:"Light",color:"white", fontWeight:"bold"}}>Etherrio</p>
            </div>
            <div>
                <section style={{fontSize:"20px", fontFamily:"Light", color:"white"}}>
                    <em>Step into the fascinating realm of Ethereum, a groundbreaking blockchain platform that has revolutionized the way we think about money, contracts, and decentralized applications.</em>
                </section>
                <br></br>
                {showTag ? null :(<Button variant="container" style={{backgroundColor:'#b22a00',color:'white'}} onClick={handleButtonClick}>Getting Started</Button>)}
            </div>
        </Container>
        <Container>
            {showFeatures && <FeaturesSection />}
        </Container>
            {showTag && <SearchBar handleSearch={handleSearch} />}
            {showDetails && <BalanceAndTransactionTabs />}
      </div>
    );
}

export default Home;