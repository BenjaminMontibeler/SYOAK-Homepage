import React, { useState } from 'react';
import { ReactComponent as Illustration4 } from './images/illustration4.svg';
import { ReactComponent as Illustration5 } from './images/illustration5.svg';
import { ReactComponent as Illustration6 } from './images/illustration6.svg';
import { ReactComponent as Illustration7 } from './images/illustration7.svg';
import { ReactComponent as ArrowLeft } from './images/Arrow-Left.svg';
import { ReactComponent as ArrowRight } from './images/Arrow-Right.svg';
import './sectionCarousel.css'
import '../general/typography.css';

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
    <div className='carousel'>


      <div className='carousel__container' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {items.map((item) => {
          return <div className='carousel__card'>

            <div className='card__button-container'>
              <button className='arrow-button' onClick={() => {
                updateIndex(activeIndex - 1)
              }}><ArrowLeft /></button>
              <div className='active-button-container'>
                <div className='button-round-outline button-circle-outline-active'>
                  <button className='button-round button-circle-active cursor-default' />
                </div>
                <span className='button-font button-description'>{item.buttontag}</span>
              </div>
              <button className='arrow-button' onClick={() => {
                updateIndex(activeIndex + 1)
              }}><ArrowRight /></button>

              <hr />

            </div>

            <div className='card__figure'>

              <div className='card__body'>

                <h2>{item.title}</h2>
                <h3>{item.header}</h3>
                <p>{item.description}</p>

              </div>

              <item.image className='card__image' />

            </div>

          </div>
        })}
      </div>

    </div>
  )
}

export default SectionCarousel
