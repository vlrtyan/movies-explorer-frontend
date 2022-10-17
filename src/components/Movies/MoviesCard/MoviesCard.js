import React from 'react';
import './MoviesCard.css';

function MoviesCard() {
    return (
        <div className='movies-card'>
            <img className='movies-card__image' src='https://www.rollingstone.com/wp-content/uploads/2018/06/rs-stand-by-me01-4fe82db8-ca20-430c-8353-760337b644ba.jpg' alt='' />
            <div className='movies-card__container'>
                <p className='movies-card__name'>33 слова о дизайне</p>
                <button className='movies-card__save-button movies-card__save-button_type_remove' type='button'></button>
            </div>
            <p className='movies-card__duration'>1ч42м</p>
        </div>
    )
}

export default MoviesCard