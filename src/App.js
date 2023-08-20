import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BalanceSection from './components/BalanceSection';
import TransactionGraph from './components/TransactionGraph';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <BalanceSection />
      <TransactionGraph />
     
      {/* Other components will go here */}
    </div>
  );
}

export default App;
