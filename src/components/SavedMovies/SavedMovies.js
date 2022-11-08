import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { getSavedMovies, deleteMovie } from '../../utils/MainApi';
import { numberOfMoviesOnScreen } from '../../utils/constants';

function SavedMovies() {
    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [moviesOnScreen, setMoviesOnScreen] = React.useState([]);

    const getMyMovies = async () => {
        try {
            const res = await getSavedMovies();
            setSavedMovies(res);
            setMoviesOnScreen(res);
            setMovies(res);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }

    };

    const handleShowMore = () => {
        const moreMovies = moviesOnScreen.concat(movies.splice(0, numberOfMoviesOnScreen()[1]));
        setMoviesOnScreen(moreMovies);
    }

    const handleDelete = async (movie) => {
        try {
            setLoading(false);
            await deleteMovie(movie);
            getMyMovies();
        } catch (err) {
            console.log(err)
        }
    }

    const handleSearchMovies = (input) => {
        getMyMovies()
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
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getMyMovies();
    }, []);

    return (
        <>
            <SearchForm
                onSearchMovies={handleSearchMovies}
            />
            {loading && <Preloader />}
            {!loading && <MoviesCardList
                movies={movies}
                moviesOnScreen={moviesOnScreen}
                savedMovies={savedMovies}
                onShowMore={handleShowMore}
                onMovieDelete={handleDelete}
            />}
        </>
    )
}

export default SavedMovies