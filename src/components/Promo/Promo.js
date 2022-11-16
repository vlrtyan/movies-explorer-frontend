import React from 'react';
import './Promo.css';
import promoImage from '../../images/promo-image.svg';


function promo() {
    return (
        <section className='promo'>
            <h1 className='promo__title'>Учебный проект студентки факультета Веб&#8209;разработки.</h1>
            <img className='promo__image' src={promoImage} alt='Спираль' />
        </section>
    )
}

export default promo