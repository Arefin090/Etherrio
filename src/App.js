import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import TransactionHistory from './components/TransactionHistory';
import Balance from './components/Balance';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Visualisation from './components/Visualisation';

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const BalanceRef = useRef(null);
  const transactionHistoryRef = useRef(null);

  const handleSearch = (inputValue) => {
    const hardcodedWalletAddress = "0x1234567890"; 
    if (inputValue === hardcodedWalletAddress) {
      setShowDetails(true);
    }
  };

  const handleBalanceClick = () => {
    if (BalanceRef.current) {
      BalanceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleTransactionsClick = () => {
    if (transactionHistoryRef.current) {
      transactionHistoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const darkTheme = createTheme({
    palette: { mode: 'dark' },
  });

  return (
    <Router>
      <div className="App">
        <BackToTopButton />
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar handleSearch={handleSearch} />
                {showDetails && (
                  <>
                    <div ref={BalanceRef}>
                      <Balance />
                    </div>
                    <div ref={transactionHistoryRef}>
                      <TransactionHistory />
                    </div>
                  </>
                )}
              </>
            } />
            <Route path="/visualisation" element={<Visualisation />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
