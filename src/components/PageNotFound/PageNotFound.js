import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <main className='not-found'>
            <h3 className='not-found__title'>404</h3>
            <p className='not-found__message'>Страница не найдена</p>
            <Link className='not-found__button' to='/'>Назад</Link>
        </main>
    )
}

export default PageNotFound