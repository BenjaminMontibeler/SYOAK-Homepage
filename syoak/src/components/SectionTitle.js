import React, { useState } from 'react';
import { ReactComponent as Arrow } from './images/Arrow-title.svg';
import './sectionTitle.css';
import '../general/typography.css';

function SectionTitle() {

    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [button4, setButton4] = useState(false);

    const toggleButtonAppearance1 = () => {
        setButton1(!button1);
    };

    const toggleButtonAppearance2 = () => {
        setButton2(!button2);
    };

    const toggleButtonAppearance3 = () => {
        setButton3(!button3);
    };

    const toggleButtonAppearance4 = () => {
        setButton4(!button4);
    };

    return (
        <div className='section-header'>
            <h1>Our bussines takes the industry of oil & gass to a new level.</h1>
            <p>We have a long and proud history givin emphasis to environment social and economic outcomes
                to deliver places that respond</p>
            <button className='button-font button-fill'><Arrow />Learn more</button>

            <div className='section-header__timeline-container'>

                <div className='active-button-container'>
                    <div className={`button-round-outline ${button1 ? 'button-circle-outline-active' : 'button-circle-outline'}`}>
                        <button className={`button-round ${button1 ? 'button-circle-active' : 'button-circle'}`} onClick={toggleButtonAppearance1} />
                    </div>
                    <span className={`button-font ${button1 ? '' : 'button-description-inactive'}`}>Extraction</span>
                </div>

                <hr/>

                <div className='active-button-container'>
                    <div className={`button-round-outline ${button2 ? 'button-circle-outline-active' : 'button-circle-outline'}`}>
                        <button className={`button-round ${button2 ? 'button-circle-active' : 'button-circle'}`} onClick={toggleButtonAppearance2} />
                    </div>
                    <span className={`button-font ${button2 ? '' : 'button-description-inactive'}`}>Transport</span>
                </div>

                <hr/>

                <div className='active-button-container'>
                    <div className={`button-round-outline ${button3 ? 'button-circle-outline-active' : 'button-circle-outline'}`}>
                        <button className={`button-round ${button3 ? 'button-circle-active' : 'button-circle'}`} onClick={toggleButtonAppearance3} />
                    </div>
                    <span className={`button-font ${button3 ? '' : 'button-description-inactive'}`}>Refining</span>
                </div>

                <hr/>

                <div className='active-button-container'>
                    <div className={`button-round-outline ${button4 ? 'button-circle-outline-active' : 'button-circle-outline'}`}>
                        <button className={`button-round ${button4 ? 'button-circle-active' : 'button-circle'}`} onClick={toggleButtonAppearance4} />
                    </div>
                    <span className={`button-font ${button4 ? '' : 'button-description-inactive'}`}>Export</span>
                </div>

            </div>
        </div>
    )
}

export default SectionTitle
