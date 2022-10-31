import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const movie = props.movie;
    const duration = () => {
        if (movie.duration < 60) {
            return (movie.duration + 'м')
        } else if (movie.duration % 60 === 0) {
            return (movie.duration / 60 + 'ч')
        } else {
            return (Math.floor(movie.duration / 60) + 'ч' + movie.duration % 60 + 'м')
        }
    };

    const isSaved = false;
    const saveButtonClassName = `movies-card__save-button ${isSaved ? 'movies-card__save-button_type_saved' : ''}`; 
    const handleLike = () => {

    }

    return (
        <div className='movies-card'>
            <a href={movie.trailerLink} target='_blank'>
                <img className='movies-card__image' src={`https://api.nomoreparties.co${movie.image.url}`} alt='Обложка фильма' />
            </a>
            <div className='movies-card__container'>
                <p className='movies-card__name'>{movie.nameRU}</p>
                <button className={saveButtonClassName} type='button' onClick={handleLike}></button>
            </div>
            <p className='movies-card__duration'>{duration()}</p>
        </div>
    )
}

export default MoviesCard