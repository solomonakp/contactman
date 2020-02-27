import React from 'react';
// Context api
import Provider from './context';
// components
import Contacts from './components/Contacts';
import Header from './components/Header.js';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// css
import './App.scss';

function App() {
  // all components to be rendered on DOM goes here
  return (
    // Provider
    <Provider>
      <div className='App'>
        {/* header component */}
        <Header brandName='ContactMan' />
        <div className='container'>
          {/* contacts component */}
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
