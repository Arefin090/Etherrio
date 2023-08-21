import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import TransactionHistory from './components/TransactionHistory';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <TransactionHistory />
      <Footer />
     
      {/* Other components will go here */}
    </div>
  );
}

export default App;