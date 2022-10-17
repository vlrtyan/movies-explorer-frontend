import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies () {
    return(
        <div>
            <Header />
            <section className='saved-movies'>
                <SearchForm />
                <MoviesCardList />
            </section>
            <Footer />
        </div>
    )
}

export default SavedMovies