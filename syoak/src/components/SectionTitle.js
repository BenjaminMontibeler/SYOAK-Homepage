import React, { useState } from 'react';
import { ReactComponent as Arrow } from './images/Arrow-title.svg';

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
        <div className='section-title'>
            <h1 className='title'>Our bussines takes the industry of oil & gass to a new level.</h1>
            <p className='title-paragraph'>We have a long and proud history givin emphasis to environment social and economic outcomes
                to deliver places that respond</p>
            <button className='button-fill'><Arrow />Learn more</button>

            <div className='timeline-container'>

                <div className='active-button-container'>
                    <div className={`${button1 ? 'button-circle-outline-active' : 'button-circle-outline'}`}>
                        <button className={`${button1 ? 'button-circle-active' : 'button-circle'}`} onClick={toggleButtonAppearance1} />
                    </div>
                    <span className={`button-description ${button1 ? '' : 'button-description-inactive'}`}>Extraction</span>
                </div>

                <hr/>

                <div className='active-button-container'>
                    <div className={`${button2 ? 'button-circle-outline-active' : 'button-circle-outline'}`}>
                        <button className={`${button2 ? 'button-circle-active' : 'button-circle'}`} onClick={toggleButtonAppearance2} />
                    </div>
                    <span className={`button-description ${button2 ? '' : 'button-description-inactive'}`}>Transport</span>
                </div>

                <hr/>

                <div className='active-button-container'>
                    <div className={`${button3 ? 'button-circle-outline-active' : 'button-circle-outline'}`}>
                        <button className={`${button3 ? 'button-circle-active' : 'button-circle'}`} onClick={toggleButtonAppearance3} />
                    </div>
                    <span className={`button-description ${button3 ? '' : 'button-description-inactive'}`}>Refining</span>
                </div>

                <hr/>

                <div className='active-button-container'>
                    <div className={`${button4 ? 'button-circle-outline-active' : 'button-circle-outline'}`}>
                        <button className={`${button4 ? 'button-circle-active' : 'button-circle'}`} onClick={toggleButtonAppearance4} />
                    </div>
                    <span className={`button-description ${button4 ? '' : 'button-description-inactive'}`}>Export</span>
                </div>

            </div>
        </div>
    )
}

export default SectionTitle
