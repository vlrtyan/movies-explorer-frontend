import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    const { pathname } = useLocation();

    return (
        <main className='card-list'>
            <div className='card-list__grid'>
                {!props.slider ?
                    props.moviesOnScreen.map((movie) => (
                        <MoviesCard
                            movie={movie}
                            key={movie.id || movie.movieId}
                            savedMovies={props.savedMovies}
                            onMovieSave={props.onMovieSave}
                            onMovieDelete={props.onMovieDelete}
                        />
                    )) :
                    props.shortMovies.map((movie) => (
                        <MoviesCard
                            movie={movie}
                            key={movie.id || movie.movieId}
                            savedMovies={props.savedMovies}
                            onMovieSave={props.onMovieSave}
                            onMovieDelete={props.onMovieDelete}
                        />
                    ))
                }
            </div>
            {props.movies.length > 0 && pathname === '/movies' &&
                <button className='card-list__button' type='button' onClick={props.onShowMore}>Ещё</button>}
        </main>
    )
}

export default MoviesCardList