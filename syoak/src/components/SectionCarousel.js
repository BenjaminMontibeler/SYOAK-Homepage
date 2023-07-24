import React, { useState } from 'react';
import { ReactComponent as Illustration4 } from './images/illustration4.svg';
import { ReactComponent as Illustration5 } from './images/illustration5.svg';
import { ReactComponent as Illustration6 } from './images/illustration6.svg';
import { ReactComponent as Illustration7 } from './images/illustration7.svg';
import { ReactComponent as ArrowLeft } from './images/Arrow-Left.svg';
import { ReactComponent as ArrowRight } from './images/Arrow-Right.svg';

function SectionCarousel() {
  const items = [
    {
      buttontag: "Extraction",
      title: "How We Do It",
      header: "Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk",
      description: "We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Illustration4,
    },

    {
      buttontag: "Transport",
      title: "Mode of Transport",
      header: "Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk",
      description: "We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Illustration5,
    },

    {
      buttontag: "Refining",
      title: "We Make it More Efficient",
      header: "Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk",
      description: "We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Illustration6,
    },

    {
      buttontag: "Export",
      title: "Where Does it Go",
      header: "Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk",
      description: "We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: Illustration7,
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  }

  return (
    <div className='section-carousel'>


      <div className='carousel-container' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {items.map((item) => {
          return <div className='carousel-item'>

            <div className='carousel-button-container'>
              <button className='arrow-button' onClick={() => {
                updateIndex(activeIndex - 1)
              }}><ArrowLeft /></button>
              <div className='active-button-container'>
                <div className='button-circle-outline-active'>
                  <button className='button-circle-active cursor-default' />
                </div>
                <span className='button-description'>{item.buttontag}</span>
              </div>
              <button className='arrow-button' onClick={() => {
                updateIndex(activeIndex + 1)
              }}><ArrowRight /></button>

              <hr />

            </div>

            <div className='section-carousel-item-content'>

              <div className='section-carousel-item-paragraph'>

                <h2 className='header'>{item.title}</h2>
                <h3 className='content-title'>{item.header}</h3>
                <p className='content-paragraph'>{item.description}</p>

              </div>

              <item.image className='carousel-img' />

            </div>

          </div>
        })}
      </div>

    </div>
  )
}

export default SectionCarousel
