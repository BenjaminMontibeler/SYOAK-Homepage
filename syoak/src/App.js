import './App.css';
import './general/reset.css';
import React from 'react';
import {ReactComponent as Logo} from './components/images/Logo.svg';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <div className='layout-side'>
        <Logo className='layout-side-logo' />
      </div>

      <div className='layout-content'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
