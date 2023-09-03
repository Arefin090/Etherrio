import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './global/Navbar';
import Footer from './global/footer/Footer';
import BackToTopButton from './global/BackToTopButton';
import CssBaseline from '@mui/material/CssBaseline';
import Visualisation from './components/Visualisation';
import Home from './components/Home';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="App" >
      <BackToTopButton />
      <CssBaseline />
      <Navbar showSpendings={showDetails} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='Overview' element={<Home />} />
        <Route path='Transactions' element={<Home />} />
        <Route path='Spendings' element={<Visualisation />} />
        <Route path='Transactions' element={<Home />} />
        <Route path='About' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;