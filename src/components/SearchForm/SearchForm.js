import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';

function SearchForm(props) {
    const { pathname } = useLocation();
    const [search, setSearch] = React.useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    }
    const handleSliderChange = () => {
        props.setSlider(!props.slider);
        localStorage.setItem('shortsSlider', !props.slider);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        props.onSearchMovies(search);
    }

    React.useEffect(() => {
        pathname === '/movies' && localStorage.getItem('shortsSlider') && props.setSlider(localStorage.getItem('shortsSlider') === 'true');
        pathname === '/movies' && localStorage.getItem('input') ? setSearch(localStorage.getItem('input')) : setSearch('');
    }, [])

    console.log(localStorage.getItem('shortsSlider'), props.slider)

    return (
        <section className='search'>
            <form className='search__form' noValidate onSubmit={handleSearchSubmit}>
                <div className='search__bar'>
                    <input
                        className='search__input'
                        type='text'
                        name='movie'
                        id='movie'
                        placeholder='Фильм'
                        value={search}
                        required
                        onChange={handleSearchChange}
                    />
                    <button className='search__icon' type='submit'></button>
                </div>
                <div className='switch'>
                    <label className='switch__name' htmlFor='slider'>Короткометражки</label>
                    <input
                        className='switch__checkbox'
                        type='checkbox'
                        id='slider'
                        checked={props.slider}
                        onChange={handleSliderChange}
                    />
                    <label className='switch__slider' htmlFor='slider'></label>
                </div>
            </form>
        </section>
    )
}

export default SearchForm