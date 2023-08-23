import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import TransactionHistory from './components/TransactionHistory';
import Overview from './components/Overview';
import Overview2 from './components/Overview2'; 


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

      {/* Other components will go here */}
    </div>
  );
}

export default App;