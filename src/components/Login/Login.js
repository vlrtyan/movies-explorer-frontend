import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
    return (
        <div className='login'>
            <img className='login__logo' src={logo} alt='Буква С' />
            <p className='login__greeting'>Рады видеть!</p>
            <form className='login__form'>
                <label className='login__input-label'>E-mail</label>
                <input
                    className='login__input'
                    type='email'
                    placeholder='Введите e-mail'
                    name='email'
                    id='email'
                    required
                ></input>
                <label className='login__input-label'>Пароль</label>
                <input
                    className='login__input login__input_type_error'
                    type='password'
                    placeholder='Введите пароль'
                    name='password'
                    id='password'
                    required
                ></input>
                <button className='login__submit-button' type='submit'>Войти</button>
                <div className='login-redirect'>
                    <p className='login-redirect__text'>Ещё не зарегистрированы? </p>
                    <Link to='/signup' className='login-redirect__link'>Регистрация</Link>
                </div>
            </form>
        </div>
    )
}

export default Login