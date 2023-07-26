import React from 'react';
import { ReactComponent as Icon1 } from './images/icon1.svg';
import { ReactComponent as Icon2 } from './images/icon2.svg';
import { ReactComponent as Icon3 } from './images/icon3.svg';
import { ReactComponent as Icon4 } from './images/icon4.svg';

function SectionInformation() {
    return (
        <div className='section-information'>

            <div className='text-container'>
                <h2 className='header'>Our Achievements</h2>
                <p className='content-paragraph'>SYOAK industry consists of companies that own and operate extensive networks of pipeline assets to connect producers of oil,
                    natural gas and natural gas liquids from the prolific North American resources to key markets. We also distribute natural gas to
                    a growing base of industrial and residential customers through transmission pipelines.
                </p>
            </div>

            <div className='cards-container'>

                <div className='card'>
                    <Icon1 className='icon' />
                    <div className='card-content'>
                        <h3 className='card-title'>2562</h3>
                        <p className='card-paragraph'>Square Meters Built</p>
                    </div>
                </div>

                <div className='card'>
                    <Icon2 className='icon' />
                    <div className='card-content'>
                        <h3 className='card-title'>184</h3>
                        <p className='card-paragraph'>Completed Projects</p>
                    </div>
                </div>

                <div className='card'>
                    <Icon3 className='icon' />
                    <div className='card-content'>
                        <h3 className='card-title'>351</h3>
                        <p className='card-paragraph'>Work With Us</p>
                    </div>
                </div>

                <div className='card'>
                    <Icon4 className='icon' />
                    <div className='card-content'>
                        <h3 className='card-title'>65</h3>
                        <p className='card-paragraph'>Ideas Realized</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SectionInformation
