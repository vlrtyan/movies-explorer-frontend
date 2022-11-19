import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';
import { validation } from '../../utils/validation';

function Login({ handleLogin }) {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({email: '', password: '' });
    const isValid = errors.email === undefined && errors.password === undefined;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({ ...errors, [name]: validation(name, value) });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(formData);
        setFormData({ email: '', password: '' });
    }

    return (
        <main className='login'>
            <Link className='login__logo' to='/'>
                <img src={logo} alt='Буква С' />
            </Link >
            <p className='login__greeting'>Рады видеть!</p>
            <form className='login__form' onSubmit={handleSubmit}>
                <label className='login__input-label'>E-mail</label>
                <input
                    className={`login__input ${errors.email ? 'login__input_type_error' : ''}`}
                    type='email'
                    placeholder='Введите e-mail'
                    value={formData.email}
                    onChange={handleChange}
                    name='email'
                    id='email'
                    required
                ></input>
                <p className={`login__error-message ${!errors.email ? '' : 'login__error-message_shown'}`}>{errors.email}</p>
                <label className='login__input-label'>Пароль</label>
                <input
                    className={`login__input ${errors.password ? 'login__input_type_error' : ''}`}
                    type='password'
                    placeholder='Введите пароль'
                    value={formData.password}
                    onChange={handleChange}
                    name='password'
                    id='password'
                    required
                ></input>
                <p className={`login__error-message ${!errors.password ? '' : 'login__error-message_shown'}`}>{errors.password}</p>
                <button 
                className={`login__submit-button ${isValid ? 'login__submit-button_enabled' : ''}`} 
                type='submit' 
                onSubmit={handleSubmit} 
                disabled={!isValid}
                >Войти</button>
                <div className='login-redirect'>
                    <p className='login-redirect__text'>Ещё не зарегистрированы? </p>
                    <Link to='/signup' className='login-redirect__link'>Регистрация</Link>
                </div>
            </form>
        </main>
    )
}

export default Login