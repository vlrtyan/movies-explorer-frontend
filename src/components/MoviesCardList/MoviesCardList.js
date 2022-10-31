import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <main className='card-list'>
            <div className='card-list__grid'>
                {props.moviesOnScreen.map((movie) => (
                <MoviesCard 
                movie={movie}
                key={movie.id}
                />
            ))}
            </div>
            {props.movies.length > 0 &&
            <button className='card-list__button' type='button' onClick={props.onShowMore}>Ещё</button> }
        </main>
    )
}

export default MoviesCardList