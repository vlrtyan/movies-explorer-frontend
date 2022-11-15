import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import accountIcon from '../../images/account-icon.svg';

function Navigation(props) {
    return (
        <section className={`navigation ${props.isMenuOpened ? 'navigation_opened' : ''}`}>
            <div className='navigation__container'>
                <button className='navigation__close-button' type='button' onClick={props.onCloseButtonClick}></button>
                <div className='navigation__menu'>
                    <NavLink className='navigation__link' activeClassName='navigation__link_clicked' exact to='/'>Главная</NavLink>
                    <NavLink className='navigation__link' activeClassName='navigation__link_clicked' to='/movies'>Фильмы</NavLink>
                    <NavLink className='navigation__link' activeClassName='navigation__link_clicked' to='/saved-movies'>Сохранённые фильмы</NavLink>
                </div>
                <div className='navigation__account'>
                    <Link className='navigation__link navigation__link_type_account' to='/profile'>Аккаунт</Link>
                    <img className='navigation__account-icon' src={accountIcon} alt='Иконка человека' />
                </div>
            </div>
        </section>
    )
}

export default Navigation