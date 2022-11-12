import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import accountIcon from '../../images/account-icon.svg';
import menuIcon from '../../images/menu-icon.svg';

function Header({ loggedIn }) {
    return (
        <header className={`header ${loggedIn ? '' : 'header_color_pink'}`}>
            <Link to='/'>
                <img className='logo' src={logo} alt='Буква С' />
            </Link>
            {loggedIn ?
                <nav className='header__navigation header__navigation_logged-in'>
                    <div className='header__links'>
                        <div className='header__films'>
                            <Link className='header__link header__link_type_films' to='/movies'>Фильмы</Link>
                            <Link className='header__link header__link_type_saved-films' to='/saved-movies'>Сохранённые фильмы</Link>
                        </div>
                        <div className='account-link'>
                            <Link className='header__link header__link_type_account' to='/profile'>Аккаунт</Link>
                            <img className='account-link__icon' src={accountIcon} alt='Иконка человека' />
                        </div>
                    </div>
                    <img className='header__menu-button' src={menuIcon} alt='Иконка "Гамбургер"' />
                </nav>
                :
                <nav className='header__navigation'>
                    <Link className='header__signup-button' to='/signup'>Регистрация</Link>
                    <Link className='header__singnin-button' to='/signin'>Войти</Link>
                </nav>}
        </header>
    )
}

export default Header