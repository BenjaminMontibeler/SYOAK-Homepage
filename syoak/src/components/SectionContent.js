import React, {useState} from 'react';
import './buttonPositions.css'
import { ReactComponent as Illustration1 } from './images/illustration1.svg';
import { ReactComponent as Illustration2 } from './images/illustration2.svg';
import { ReactComponent as Illustration3 } from './images/illustration3.svg';
import { ReactComponent as Exit } from './images/exit.svg';

function SectionContent() {
    const [description1, setDescription1] = useState(false);
    const [description2, setDescription2] = useState(false);
    const [description3, setDescription3] = useState(false);

    const toggleDescription1 = () => {
        setDescription1(!description1);
    };

    const toggleDescription2 = () => {
        setDescription2(!description2);
    };

    const toggleDescription3 = () => {
        setDescription3(!description3);
    };

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
                    <button className='button-circle-fill position-1' onClick={toggleDescription1} />
                    <button className='button-circle-fill position-2' onClick={toggleDescription1}/>
                    <div className={`content-paragraph ${description1 ? 'image-description-active' : 'image-description-inactive'}`}>
                        <button className='exit-button' onClick={toggleDescription1}><Exit/></button>
                        <p>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</p>
                    </div>
                </div>
            </div>

            <div className='section-image'>
                <div className='image-container'>
                    <Illustration2 className='img' />
                    <button className='button-circle-fill position-3' onClick={toggleDescription2}/>
                    <button className='button-circle-fill position-4' onClick={toggleDescription2}/>
                    <div className={`content-paragraph ${description2 ? 'image-description-active' : 'image-description-inactive'}`}>
                        <button className='exit-button' onClick={toggleDescription2}><Exit/></button>
                        <p>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</p>
                    </div>
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
                    <button className='button-circle-fill position-5' onClick={toggleDescription3}/>
                    <button className='button-circle-fill position-6' onClick={toggleDescription3}/>
                    <div className={`content-paragraph ${description3 ? 'image-description-active' : 'image-description-inactive'}`}>
                        <button className='exit-button' onClick={toggleDescription3}><Exit/></button>
                        <p>Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionContent
