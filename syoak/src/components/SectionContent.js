import React from 'react';
import { ReactComponent as Illustration1 } from './images/illustration1.svg';
import { ReactComponent as Illustration2 } from './images/illustration2.svg';
import { ReactComponent as Illustration3 } from './images/illustration3.svg';

function SectionContent() {
    return (
        <div className='section-content'>
            <div className='section-header'>
                <h2 className='header'>
                    SYOAK Solution
                </h2>

                <p className='paragraph'>
                    SYOAK industry consists of companies that own and operate extensive networks of pipeline assets to connect producers of oil,
                    natural gas and natural gas liquids from the prolific North American resources to key markets. We also distribute natural gas to a
                    growing base of industrial and residential customers through transmission pipelines.
                </p>
            </div>

            <div className='section-image'>
                <div className='text-container'>
                    <h3 className='content-title'>
                        Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk.
                    </h3>
                    <p className='content-paragraph'>
                        We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

                <div className='image-container'>
                    <Illustration1 className='img' />
                    <button className='button-circle-fill position-1' />
                    <button className='button-circle-fill position-2' />
                </div>
            </div>

            <div className='section-image'>
                <div className='image-container'>
                    <Illustration2 className='img' />
                    <button className='button-circle-fill position-3' />
                    <button className='button-circle-fill position-4' />
                </div>

                <div className='text-container'>
                    <h3 className='content-title'>
                        Our bussines takes the industry of oil and gass to a new level.
                    </h3>
                    <p className='content-paragraph'>
                        We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>

            <div className='section-image'>
                <div className='text-container'>
                    <h3 className='content-title'>
                        Syoak serves more than 2,500 petrol stations globally.
                    </h3>
                    <p className='content-paragraph'>
                        We have a long and proud history givin emphasis to environment social and economic outcomes to deliver
                        places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

                <div className='image-container'>
                    <Illustration3 className='img' />
                    <button className='button-circle-fill position-5' />
                    <button className='button-circle-fill position-6' />
                </div>
            </div>
        </div>
    )
}

export default SectionContent
