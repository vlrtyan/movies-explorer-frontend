import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
    return (
        <main className='register'>
            <img className='register__logo' src={logo} alt='Буква С' />
            <p className='register__greeting'>Добро пожаловать!</p>
            <form className='register__form'>
                <label className='register__input-label'>Имя</label>
                <input
                    className='register__input'
                    type='text'
                    placeholder='Введите имя'
                    name='name'
                    id='name'
                    required
                ></input>
                <label className='register__input-label'>E-mail</label>
                <input
                    className='register__input'
                    type='email'
                    placeholder='Введите e-mail'
                    name='email'
                    id='email'
                    required
                ></input>
                <label className='register__input-label'>Пароль</label>
                <input
                    className='register__input register__input_type_error'
                    type='password'
                    placeholder='Введите пароль'
                    name='password'
                    id='password'
                    required
                ></input>
                <p className='register__error-message'>Что-то пошло не так...</p>
                <button className='register__submit-button' type='submit'>Зарегистрироваться</button>
                <div className='register-redirect'>
                    <p className='register-redirect__text'>Уже зарегистрированы? </p>
                    <Link to='/signin' className='register-redirect__link'>Войти</Link>
                </div>
            </form>
        </main>
    )
}

export default Register