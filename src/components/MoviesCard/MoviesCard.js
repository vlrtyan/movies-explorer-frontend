import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const movie = props.movie;

    return (
        <div className='movies-card'>
            <img className='movies-card__image' src={`https://api.nomoreparties.co${movie.image.url}`} alt='Обложка фильма' />
            <div className='movies-card__container'>
                <p className='movies-card__name'>{movie.nameRU}</p>
                <button className='movies-card__save-button movies-card__save-button_type_remove' type='button'></button>
            </div>
            <p className='movies-card__duration'>{`${movie.duration} мин`}</p>
        </div>
    )
}

export default MoviesCard