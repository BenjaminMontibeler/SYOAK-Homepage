import React, {useState} from 'react';
import { ReactComponent as Exit } from './images/exit.svg';

function SectionCard(props) {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <div className='section__card'>
            <div className='card__header'>
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.description}
                </p>
            </div>

            <div className={`card__media card__media--${props.position}`}>
                <props.icon className='card__image' />
                <button className='button-round button-circle-fill' onClick={handleToggle} />
                <button className='button-round button-circle-fill' onClick={handleToggle} />
                {isOpen && (
                    <div className='card__tooltip'>
                        <button className='exit-button' onClick={handleCloseModal}><Exit /></button>
                        <p>{props.modalInfo}</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default SectionCard
