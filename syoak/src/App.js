import './App.css';
import './general/reset.css';
import React from 'react';
import {ReactComponent as Logo} from './components/images/Logo.svg';
import Navbar from './components/Navbar';
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <div className='App'>
      <div className='layout-side'>
        <Logo className='layout-side-logo' />
      </div>

      <div className='layout-content'>
        <Navbar />
        <div className='layout-content-container'>
          <SectionTitle />
        </div>
      </div>
    </div>
  );
}

export default App;
