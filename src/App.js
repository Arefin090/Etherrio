import React, { useState, useRef } from 'react';
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
    <div className="App">
      <BackToTopButton />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar 
          handleBalanceClick={handleBalanceClick} 
          handleTransactionsClick={handleTransactionsClick} 
        />
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
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
