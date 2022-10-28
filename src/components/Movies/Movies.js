import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { getMovies } from '../../utils/MoviesApi';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [moviesOnScreen, setMoviesOnScreen] = useState([]);
    const [loading, setLoading] = useState(true);

    const numberOfMoviesOnScreen = () => {
        //[number of shown movies, number of added movies]
        if (document.documentElement.clientWidth >= 1280) {
            return [12, 4]
        } else if (document.documentElement.clientWidth >= 768) {
            return [8, 2]
        } else if (document.documentElement.clientWidth >= 320) {
            return [5, 2]
        }
    }

    const handleShowMore = () => {
        const moreMovies = moviesOnScreen.concat(movies.splice(0, numberOfMoviesOnScreen()[1]));
        setMoviesOnScreen(moreMovies);
    }

    const handleSearchMovies = (input) => {
        setLoading(false);
        getMovies()
            .then((res) => {
                const filteredMovies =
                    res.filter((movie) => {
                        if (input === '') {
                            return 'Поле пустое';
                        }
                        else {
                            return String(movie.nameRU.toLowerCase()).includes(input);
                        }
                    });
                setMovies(filteredMovies);
                setMoviesOnScreen(filteredMovies.splice(0, numberOfMoviesOnScreen()[0]))
            })
            .catch()
    }

    return (
        <>
            <SearchForm
                onSearchMovies={handleSearchMovies}
            />
            {loading && <Preloader />}
            {!loading && <MoviesCardList
                movies={movies}
                moviesOnScreen={moviesOnScreen}
                onShowMore={handleShowMore}
            />}
        </>
    )
}

export default Movies