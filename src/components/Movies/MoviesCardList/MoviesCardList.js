import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <section className='card-list'>
            <MoviesCard />
            {/* {props.cards.map((card) => (
                <MoviesCard 
                card={card}
                key={card._id}
                />
            ))} */}
        </section>
    )
}

export default MoviesCardList