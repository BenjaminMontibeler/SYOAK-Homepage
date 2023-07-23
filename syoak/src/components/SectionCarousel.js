import React from 'react';
import { ReactComponent as Illustration4 } from './images/illustration4.svg';
import { ReactComponent as ArrowLeft } from './images/Arrow-Left.svg';
import { ReactComponent as ArrowRight } from './images/Arrow-Right.svg';

function SectionCarousel() {
  return (
    <div className='section-carousel'>

      <div className='carousel-item'>

        <div className='carousel-button-container'>
          <button className='arrow-button'><ArrowLeft /></button>
          <div className='active-button-container'>
            <div className='button-circle-outline-active'>
              <button className='button-circle-active cursor-default' />
            </div>
            <span className='button-description'>Extraction</span>
          </div>
          <button className='arrow-button'><ArrowRight /></button>

          <hr/>

        </div>

        <div className='section-carousel-item-content'>

          <div className='section-carousel-item-paragraph'>

            <h2 className='header'>How We Do It</h2>
            <h3 className='content-title'>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</h3>
            <p className='content-paragraph'>We have a long and proud history givin emphasis to environment social and economic outcomes to deliver
              places that respond. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

          </div>

          <Illustration4 className='carousel-img' />

        </div>

      </div>

    </div>
  )
}

export default SectionCarousel
