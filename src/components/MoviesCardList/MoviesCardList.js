import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <main className='card-list'>
            <div className='card-list__grid'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            {/* {props.cards.map((card) => (
                <MoviesCard 
                card={card}
                key={card._id}
                />
            ))} */}
            <button className='card-list__button' type='button'>Ещё</button>
        </main>
    )
}

export default MoviesCardList