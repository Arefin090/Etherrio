import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './global/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './global/Footer';
import BackToTopButton from './components/BackToTopButton';
import Visualisation from './components/Visualisation';
import BalanceAndTransactionTabs from './components/BalanceAndTransactionTabs';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handleSearch = (inputValue) => {
    const hardcodedWalletAddress = "0x1234567890"; 
    if (inputValue === hardcodedWalletAddress) {
      setShowDetails(true);
    }
  };

  return (
    <Router>
      <div className="App">
        <BackToTopButton />
          <Navbar showSpendings={showDetails} />
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar handleSearch={handleSearch} />
                {showDetails && <BalanceAndTransactionTabs />}
              </>
            } />
            <Route path="/visualisation" element={<Visualisation />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;

