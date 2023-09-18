import React from 'react';
import './sectionContent.css';
import '../general/typography.css';
import SectionCard from './SectionCard.js';
import { ReactComponent as Illustration1 } from './images/illustration1.svg';
import { ReactComponent as Illustration2 } from './images/illustration2.svg';
import { ReactComponent as Illustration3 } from './images/illustration3.svg';

function SectionContent() {

    return (
        <div className='section'>
            <div className='section__header'>
                <h2>
                    SYOAK Solution
                </h2>

                <p>
                    SYOAK industry consists of companies that own and operate extensive networks of pipeline assets to connect producers of oil,
                    natural gas and natural gas liquids from the prolific North American resources to key markets. We also distribute natural gas to a
                    growing base of industrial and residential customers through transmission pipelines.
                </p>
            </div>

            <SectionCard
                position="first"
                title="Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk"
                description="We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that 
                respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                icon={Illustration1}
                modalInfo="Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk"
            />

            <SectionCard
                position="second"
                title="Our bussines takes the industry of oil and gass to a new level."
                description="We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that 
                respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                icon={Illustration2}
                modalInfo="Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk"
            />

            <SectionCard
                position="third"
                title="Syoak serves more than 2,500 petrol stations globally"
                description="We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places 
                that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                icon={Illustration3}
                modalInfo="Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk"
            />

        </div>
    )
}

export default SectionContent
