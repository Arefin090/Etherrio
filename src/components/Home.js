/* Homepage of website. */

import React, { useState } from 'react';
import FeaturesSection from './Features';
import BalanceAndTransactionTabs from './BalanceAndTransactionTabs';
import SearchBar from './SearchBar';
import { Container, Typography } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
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
      <div className='flex flex-col min-h-screen'>
        <Container>
            <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            className="flex justify-center items-center space-x-0.0"
            >
            <DiamondIcon
                style={{
                width: "70",
                height: "70",
                marginTop: "55",
                marginLeft: "-10px",
                color: "black",
                fontWeight: "bold",
                }}
            ></DiamondIcon>
            <p
                style={{
                fontSize: "80px",
                marginTop: "40px",
                fontFamily: "Light",
                color: "black",
                fontWeight: "bold",
                }}
            >
                Etherrio
            </p>
            </div>
            <div>
            <section
                style={{
                fontSize: "20px",
                fontFamily: "Light",
                color: "black",
                }}
            >
                <em>
                Step into the fascinating realm of Ethereum, a
                groundbreaking blockchain platform that has
                revolutionized the way we think about money, contracts,
                and decentralized applications.
                </em>
            </section>
            {showTag ? null : (
                <Button
                variant="container"
                style={{ backgroundColor: "#b22a00", color: "white", marginTop: "20px"}}
                onClick={handleButtonClick}
                >
                Getting Started
                </Button>
            )}
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