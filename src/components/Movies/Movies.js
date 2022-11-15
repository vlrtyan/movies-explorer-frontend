import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { getMovies } from '../../utils/MoviesApi';
import { getSavedMovies, saveMovie, deleteMovie } from '../../utils/MainApi';
import { getNumberOfMoviesOnScreen } from '../../utils/constants';

function Movies() {
    const [movies, setMovies] = React.useState([]);
    const [moviesOnScreen, setMoviesOnScreen] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [numberOfMoviesOnScreen, setNumberOfMoviesOnScreen] = React.useState(getNumberOfMoviesOnScreen());

    React.useEffect(() => {
        const resize = () => setNumberOfMoviesOnScreen(getNumberOfMoviesOnScreen());
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    })

    const handleShowMore = () => {
        const moreMovies = moviesOnScreen.concat(movies.splice(0, numberOfMoviesOnScreen[1]));
        setMoviesOnScreen(moreMovies);
    }

    const handleSearchMovies = async (input, slider) => {
        setError('');
        setLoading(true);
        localStorage.setItem('input', input);
        try {
            const res = await getMovies();
            const filteredMovies =
                res.filter((movie) => {
                    if (slider) {
                        // short movies
                        return String(movie.nameRU.toLowerCase()).includes(input) && movie.duration <= 40;
                    } else {
                        // movies
                        return String(movie.nameRU.toLowerCase()).includes(input);
                    }
                });
            filteredMovies.length === 0 ? setError('Ничего не найдено') : setError('');
            localStorage.setItem('movies', JSON.stringify(filteredMovies));
            setMovies(filteredMovies);
            setMoviesOnScreen(filteredMovies.splice(0, numberOfMoviesOnScreen[0]));
        } catch (err) {
            console.log(err);
            setError('Подождите немного и попробуйте ещё раз')
            localStorage.removeItem('movies');
            localStorage.removeItem('shortsSlider');
        } finally {
            setLoading(false);
        }
    }

    const handleSaveMovie = async (clickedMovie, isSaved) => {
        if (isSaved) {
            try {
                await deleteMovie(clickedMovie)
                getMyMovies()
            } catch (err) {
                console.log(err)
                setError('Подождите немного и попробуйте ещё раз')
            }
        } else {
            try {
                await saveMovie(clickedMovie)
                getMyMovies()
            } catch (err) {
                console.log(err)
                setError('Подождите немного и попробуйте ещё раз')
            }
        }
    }

    const getMyMovies = async () => {
        const res = await getSavedMovies()
        try {
            setSavedMovies(res);
        } catch (err) {
            console.log(err)
            setError('Подождите немного и попробуйте ещё раз')
        }
    }

    React.useEffect(() => {
        getSavedMovies()
            .then(res => setSavedMovies(res))
            .catch(err => {
                console.log(err);
                setError('Подождите немного и попробуйте ещё раз')
            });
        if (localStorage.getItem('movies')) {
            const storedMovies = JSON.parse(localStorage.getItem('movies'));
            setLoading(false);
            setMovies(storedMovies);
            setMoviesOnScreen(storedMovies.splice(0, numberOfMoviesOnScreen[0]));
            storedMovies.length === 0 ? setError('Ничего не найдено') : setError('');
        }
    }, [numberOfMoviesOnScreen])

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
                onMovieSave={handleSaveMovie}
            />}
        </>
    )
}

export default Movies