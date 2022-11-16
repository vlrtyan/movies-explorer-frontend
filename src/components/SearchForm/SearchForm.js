import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import { validation } from '../../utils/validation';

function SearchForm(props) {
    const { pathname } = useLocation();
    const [search, setSearch] = React.useState('');
    const [slider, setSlider] = React.useState(false);
    const [errors, setErrors] = React.useState({ search: '' });
    const isValid = errors.search === undefined;

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearch(value.toLowerCase());
        setErrors({ ...errors, [name]: validation(name, value) });
    }
    const handleSliderChange = () => {
        localStorage.setItem('shortsSlider', !slider);
        setSlider(!slider);
        props.onSearchMovies(search, !slider);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        props.onSearchMovies(search, slider);
    }

    React.useEffect(() => {
        pathname === '/movies' && localStorage.getItem('shortsSlider') && setSlider(localStorage.getItem('shortsSlider') === 'true');
        pathname === '/movies' && localStorage.getItem('input') ? setSearch(localStorage.getItem('input')) : setSearch('');
    }, [pathname])

    return (
        <section className='search'>
            <form className='search__form' noValidate onSubmit={handleSearchSubmit}>
                <div className='search__bar'>
                    <input
                        className='search__input'
                        type='text'
                        name='search'
                        id='movie'
                        placeholder='Фильм'
                        value={search}
                        required
                        onChange={handleSearchChange}
                    />
                    <button
                        className={`search__icon ${isValid ? 'search__icon_enabled' : ''}`}
                        type='submit'
                        disabled={!isValid}
                    ></button>
                </div>
                <div className='switch'>
                    <label className='switch__name' htmlFor='slider'>Короткометражки</label>
                    <input
                        className='switch__checkbox'
                        type='checkbox'
                        id='slider'
                        checked={slider}
                        onChange={handleSliderChange}
                    />
                    <label className='switch__slider' htmlFor='slider'></label>
                </div>
            </form>
        </section>
    )
}

export default SearchForm
