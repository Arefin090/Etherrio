import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './global/Navbar';
import Footer from './global/footer/Footer';
import BackToTopButton from './global/BackToTopButton';
import Visualisation from './components/Visualisation';
import Home from './components/Home';

function App() {
  return (
    <div className="App" >
      <BackToTopButton />
      <Navbar/>
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