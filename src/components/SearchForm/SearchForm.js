import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
    const [search, setSearch] = React.useState('');
    const handleSearchChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        props.onSearchMovies(search);
    }

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