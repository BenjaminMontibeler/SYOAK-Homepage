import './App.css';
import './general/reset.css';
import React from 'react';
import {ReactComponent as Logo} from './components/images/Logo.svg';
import {ReactComponent as ScrollArrow} from './components/images/arrowDown.svg';
import Navbar from './components/Navbar';
import SectionTitle from './components/SectionTitle';
import SectionContent from './components/SectionContent';
import SectionCarousel from './components/SectionCarousel';
import SectionInformation from './components/SectionInformation';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';
import 'focus-visible';

function App() {

  const scrollButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className='App'>
      <div className='sidebar'>
        <Logo className='sidebar__logo' />
        <button className='sidebar__button' onClick={scrollButton}><ScrollArrow/></button>
      </div>

      <div className='content'>
        <Navbar />
        <div className='content__container'>
          <SectionTitle />
          <SectionContent />
        </div>
        <SectionCarousel />
        <SectionInformation />
        <SectionContact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
