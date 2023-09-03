import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./global/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./global/footer/Footer";
import BackToTopButton from "./global/BackToTopButton";
import Visualisation from "./components/Visualisation";
import FeaturesSection from "./components/Features";
import BalanceAndTransactionTabs from "./components/BalanceAndTransactionTabs";
import { Container, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import video from "./assets/videos/wallpaper.mp4";
import Button from "@mui/material/Button";

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const [showTag, setShowTag] = useState(false);

  const [showFeatures, setShowFeatures] = useState(true);

  const handleButtonClick = () => {
    setShowTag(!showTag);
    setShowFeatures(false);
  };

  const handleSearch = (inputValue) => {
    const hardcodedWalletAddress = "0x1234567890";
    if (inputValue === hardcodedWalletAddress) {
      setShowDetails(true);
    }
  };

  return (
    <Router>
       <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <BackToTopButton />
        <Navbar showSpendings={showDetails} />
        <div style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Container>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="flex justify-center items-center space-x-0.0"
                  >
                    {/* <video
                      autoPlay
                      loop
                      muted
                      style={{
                        position: "absolute",
                        width: "auto",
                        height: "auto",
                        objectFit: "fill",
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1",
                      }}
                    >
                      <source src={video} type="video/mp4" />
                    </video> */}
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
                {showFeatures && <FeaturesSection />}
                {showTag && <SearchBar handleSearch={handleSearch} />}
                {showDetails && <BalanceAndTransactionTabs />}
              </>
            }
          />
          <Route path="/spendings" element={<Visualisation />} />
        </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
