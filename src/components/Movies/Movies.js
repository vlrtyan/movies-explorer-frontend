import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
    return (
        <div>
            <Header />
            <section className='movies'>
                <SearchForm />
                <MoviesCardList />
            </section>
            <Footer />
        </div>
    )
}

export default Movies