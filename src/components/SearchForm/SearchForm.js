import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';

function SearchForm(props) {
    const { pathname } = useLocation();
    const [search, setSearch] = React.useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        props.onSearchMovies(search);
    }

    React.useEffect(() => {
        pathname === '/movies' && localStorage.getItem('input') ? setSearch(localStorage.getItem('input')) : setSearch('');
    }, [])

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
                    <input className='switch__checkbox' type='checkbox' id='slider' />
                    <label className='switch__slider' htmlFor='slider'></label>
                </div>
            </form>
        </section>
    )
}

export default SearchForm