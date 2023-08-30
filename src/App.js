import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './global/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './global/Footer';
import BackToTopButton from './components/BackToTopButton';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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

  const darkTheme = createTheme({
    palette: { mode: 'dark' },
  });

  return (
    <Router>
      <div className="App">
        <BackToTopButton />
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
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
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;

