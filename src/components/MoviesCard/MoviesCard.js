import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
    const { pathname } = useLocation();
    const movie = props.movie;

    const movieDuration = () => {
        if (movie.duration < 60) {
            return (movie.duration + 'м')
        } else if (movie.duration % 60 === 0) {
            return (movie.duration / 60 + 'ч')
        } else {
            return (Math.floor(movie.duration / 60) + 'ч' + movie.duration % 60 + 'м')
        }
    };

    const isSaved = props.savedMovies.some(m => m.movieId === movie.id);
    const saveButtonClassName = `movies-card__save-button ${isSaved ? 'movies-card__save-button_type_saved' : ''}`;

    const handleSave = () => {
        const savedMovie = props.savedMovies.filter((m) => {
            return m.movieId === movie.id;
        })
        props.onMovieSave(savedMovie.length > 0 ? savedMovie[0] : movie, isSaved);
    }

    const handleDelete = () => {
        props.onMovieDelete(movie);
    }

    return (
        <div className='movies-card'>
            <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img className='movies-card__image' src={pathname === '/saved-movies' ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} alt='Обложка фильма' />
            </a>
            <div className='movies-card__container'>
                <p className='movies-card__name'>{movie.nameRU}</p>
                {pathname === '/saved-movies' ?
                    <button className='movies-card__save-button movies-card__save-button_type_remove' type='button' onClick={handleDelete}></button> :
                    <button className={saveButtonClassName} type='button' onClick={handleSave}></button>}
            </div>
            <p className='movies-card__duration'>{movieDuration()}</p>
        </div>
    )
}

export default MoviesCard