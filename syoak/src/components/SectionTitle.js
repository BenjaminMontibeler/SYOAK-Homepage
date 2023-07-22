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

                {button1 ? (
                    <div className='active-button-container'>
                        <div className='button-circle-outline-active'>
                            <button className='button-circle-active' onClick={toggleButtonAppearance1} />
                        </div>
                        <span className='button-description'>Extraction</span>
                    </div>
                ) : (
                    <div className='button-circle-outline'>
                        <button className='button-circle' onClick={toggleButtonAppearance1} />
                    </div>
                )}

                <hr />

                {button2 ? (
                    <div className='active-button-container'>
                        <div className='button-circle-outline-active'>
                            <button className='button-circle-active' onClick={toggleButtonAppearance2} />
                        </div>
                        <span className='button-description'>Transport</span>
                    </div>
                ) : (
                    <div className='button-circle-outline'>
                        <button className='button-circle' onClick={toggleButtonAppearance2} />
                    </div>
                )}

                <hr />

                {button3 ? (
                    <div className='active-button-container'>
                        <div className='button-circle-outline-active'>
                            <button className='button-circle-active' onClick={toggleButtonAppearance3} />
                        </div>
                        <span className='button-description'>Refining</span>
                    </div>
                ) : (
                    <div className='button-circle-outline'>
                        <button className='button-circle' onClick={toggleButtonAppearance3} />
                    </div>
                )}

                <hr />

                {button4 ? (
                    <div className='active-button-container'>
                        <div className='button-circle-outline-active'>
                            <button className='button-circle-active' onClick={toggleButtonAppearance4} />
                        </div>
                        <span className='button-description'>Export</span>
                    </div>
                ) : (
                    <div className='button-circle-outline'>
                        <button className='button-circle' onClick={toggleButtonAppearance4} />
                    </div>
                )}




                {/* <div className='active-button-container'>
                    <div className='button-circle-outline-active'>
                        <button className='button-circle-active' />
                    </div>
                    <span className='button-description'>Extraction</span>
                </div>

                <hr />

                <div className='button-circle-outline'>
                    <button className='button-circle' />
                </div>

                <hr />

                <div className='button-circle-outline'>
                    <button className='button-circle' />
                </div>

                <hr />

                <div className='button-circle-outline'>
                    <button className='button-circle' />
                </div> */}
            </div>
        </div>
    )
}

export default SectionTitle
