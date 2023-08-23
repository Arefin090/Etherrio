import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import TransactionHistory from './components/TransactionHistory';
import Overview from './components/Overview';
import Overview2 from './components/Overview2'; 
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <hr />
      <Overview />
      <Overview2 />
      <hr />
      <TransactionHistory />
      <Footer />
      {/* Other components will go here */}
    </div>
  );
}

export default App;