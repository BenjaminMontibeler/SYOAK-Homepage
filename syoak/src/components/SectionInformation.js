import React from 'react';
import { ReactComponent as Icon1 } from './images/icon1.svg';
import { ReactComponent as Icon2 } from './images/icon2.svg';
import { ReactComponent as Icon3 } from './images/icon3.svg';
import { ReactComponent as Icon4 } from './images/icon4.svg';
import './sectionInformation.css';
import '../general/typography.css';

function SectionInformation() {
    return (
        <div className='section-information'>

            <div className='section-information__header'>
                <h2>Our Achievements</h2>
                <p>SYOAK industry consists of companies that own and operate extensive networks of pipeline assets to connect producers of oil,
                    natural gas and natural gas liquids from the prolific North American resources to key markets. We also distribute natural gas to
                    a growing base of industrial and residential customers through transmission pipelines.
                </p>
            </div>

            <div className='section-information__cards-container'>

                <div className='section-information__card'>
                    <Icon1 className='section-information__card__icon' />
                    <div className='section-information__card__body'>
                        <h3>2562</h3>
                        <p>Square Meters Built</p>
                    </div>
                </div>

                <div className='section-information__card'>
                    <Icon2 className='section-information__card__icon' />
                    <div className='section-information__card__body'>
                        <h3>184</h3>
                        <p>Completed Projects</p>
                    </div>
                </div>

                <div className='section-information__card'>
                    <Icon3 className='section-information__card__icon' />
                    <div className='section-information__card__body'>
                        <h3>351</h3>
                        <p>Work With Us</p>
                    </div>
                </div>

                <div className='section-information__card'>
                    <Icon4 className='section-information__card__icon' />
                    <div className='section-information__card__body'>
                        <h3>65</h3>
                        <p>Ideas Realized</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SectionInformation
