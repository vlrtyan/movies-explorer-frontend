import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { getMovies } from '../../utils/MoviesApi';
import { getSavedMovies, saveMovie, deleteMovie } from '../../utils/MainApi';
import { numberOfMoviesOnScreen } from '../../utils/constants';

function Movies() {
    const [movies, setMovies] = React.useState([]);
    const [moviesOnScreen, setMoviesOnScreen] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const handleShowMore = () => {
        const moreMovies = moviesOnScreen.concat(movies.splice(0, numberOfMoviesOnScreen()[1]));
        setMoviesOnScreen(moreMovies);
    }

    const handleSearchMovies = async (input, slider) => {
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
            localStorage.setItem('movies', JSON.stringify(filteredMovies));
            setMovies(filteredMovies);
            setMoviesOnScreen(filteredMovies.splice(0, numberOfMoviesOnScreen()[0]));
        } catch (err) {
            console.log(err);
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
            }
        } else {
            try {
                await saveMovie(clickedMovie)
                getMyMovies()
            } catch (err) {
                console.log(err)
            }
        }
    }

    const getMyMovies = async () => {
        const res = await getSavedMovies()
        try {
            setSavedMovies(res);
        } catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => {
        getSavedMovies()
            .then(res => setSavedMovies(res))
            .catch(err => console.log(err));
        if (localStorage.getItem('movies')) {
            const storedMovies = JSON.parse(localStorage.getItem('movies'));
            setLoading(false);
            setMovies(storedMovies);
            setMoviesOnScreen(storedMovies.splice(0, numberOfMoviesOnScreen()[0]));
        }
    }, [])

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
                onMovieSave={handleSaveMovie}
            />}
        </>
    )
}

export default Movies