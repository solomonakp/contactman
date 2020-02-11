import React from 'react';
// components
import Contacts from './components/Contacts';
import Header from './components/Header.js';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// css
import './App.css';

function App() {
  // all components to be rendered on DOM goes here
  return (
    <div className='App'>
      {/* header component */}
      <Header brandName='ContactMan'></Header>
      <div className='container'>
        {/* contacts component */}
        <Contacts></Contacts>
      </div>
    </div>
  );
}

export default App;
