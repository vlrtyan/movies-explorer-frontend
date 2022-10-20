import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import accountIcon from '../../images/account-icon.svg';

function Navigation() {
    return (
        <nav className='navigation'>
            <div className='navigation__container'>
                <button className='navigation__close-button' type='button'></button>
                <div className='navigation__menu'>
                    <Link className='navigation__link navigation__link_clicked' to='/'>Главная</Link>
                    <Link className='navigation__link' to='/movies'>Фильмы</Link>
                    <Link className='navigation__link' to='/saved-movies'>Сохранённые фильмы</Link>
                </div>
                <div className='account-link'>
                    <Link className='navigation__link navigation__link_type_account' to='/profile'>Аккаунт</Link>
                    <img className='account-link__icon' src={accountIcon} alt='Иконка человека' />
                </div>
            </div>
        </nav>
    )
}

export default Navigation