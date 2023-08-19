import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Button from './components/Button';
import Overview from './components/Overview';
import MoreInfo from './components/MoreInfo';
import Transactions from './components/Transactions';

function App() {

    return (
        <div className = "App">
          <Navbar/>
          <Search/>
          <Overview/>
          <MoreInfo/>
          <Button/>
          <Transactions/>
        </div>
    );
}

export default App;
