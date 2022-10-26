import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import accountIcon from '../../images/account-icon.svg';
import menuIcon from '../../images/menu-icon.svg';

function Header() {
    return (
        <header className='header'>
            <img className='logo' src={logo} alt='Буква С' />
            <nav className='header__navigation'>
                <div className='header__films'>
                    <Link className='header__link header__link_type_films' to='/movies'>Фильмы</Link>
                    <Link className='header__link header__link_type_saved-films' to='/saved-movies'>Сохранённые фильмы</Link>
                </div>
                <div className='account-link'>
                    <Link className='header__link header__link_type_account' to='/profile'>Аккаунт</Link>
                    <img className='account-link__icon' src={accountIcon} alt='Иконка человека' />
                </div>
            </nav>
            <img className='header__menu-button' src={menuIcon} alt='Иконка "Гамбургер"' />
        </header>
    )
}

export default Header