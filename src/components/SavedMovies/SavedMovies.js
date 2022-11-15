import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { getSavedMovies, deleteMovie } from '../../utils/MainApi';
import { getNumberOfMoviesOnScreen } from '../../utils/constants';

function SavedMovies() {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');
    const [movies, setMovies] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [moviesOnScreen, setMoviesOnScreen] = React.useState([]);

    const getMyMovies = async () => {
        try {
            const res = await getSavedMovies();
            setSavedMovies(res);
            setMoviesOnScreen(res);
        } catch (err) {
            console.log(err);
            setError('Подождите немного и попробуйте ещё раз');
        } finally {
            setLoading(false);
        }
    };

    const handleShowMore = () => {
        const moreMovies = moviesOnScreen.concat(movies.splice(0, getNumberOfMoviesOnScreen()[1]));
        setMoviesOnScreen(moreMovies);
    }

    const handleDelete = async (movie) => {
        try {
            setLoading(false);
            await deleteMovie(movie);
            getMyMovies();
        } catch (err) {
            console.log(err);
            setError('Подождите немного и попробуйте ещё раз');
        }
    }

    const handleSearchMovies = (input, slider) => {
        setError('');
        const filteredMovies =
            savedMovies.filter((movie) => {
                if (slider) {
                    // short movies
                    return String(movie.nameRU.toLowerCase()).includes(input) && movie.duration <= 40;
                } else {
                    // movies
                    return String(movie.nameRU.toLowerCase()).includes(input);
                }
            });
        filteredMovies.length === 0 ? setError('Ничего не найдено') : setError('');
        setMovies(filteredMovies);
        setMoviesOnScreen(filteredMovies.splice(0, getNumberOfMoviesOnScreen()[0]));
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
            {error !== '' && <ErrorMessage
                error={error}
            />}
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