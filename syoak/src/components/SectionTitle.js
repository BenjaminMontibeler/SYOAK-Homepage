import React from 'react';
import {ReactComponent as Arrow} from './images/Arrow-title.svg';

function SectionTitle() {
  return (
    <div className='section-title'>
      <h1 className='title'>Our bussines takes the industry of oil & gass to a new level.</h1>
      <p className='paragraph'>We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond</p>
      <button className='button-fill'><Arrow/>Learn more</button>
    </div>
  )
}

export default SectionTitle
