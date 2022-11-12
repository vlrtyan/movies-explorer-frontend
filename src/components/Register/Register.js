import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';
import { validation } from '../../utils/validation';

function Register({handleRegistration}) {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = React.useState({name:'', email: '', password: '' });
    const isValid = errors.name === undefined && errors.email === undefined && errors.password === undefined;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({...errors, [name]: validation(name, value)});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration(formData);
        setFormData({ name: '', email: '', password: '' });
    }

    return (
        <main className='register'>
            <img className='register__logo' src={logo} alt='Буква С' />
            <p className='register__greeting'>Добро пожаловать!</p>
            <form className='register__form' onSubmit={handleSubmit}>
                <label className='register__input-label'>Имя</label>
                <input
                    className={`register__input ${errors.name ? 'register__input_type_error' : ''}`}
                    type='text'
                    placeholder='Введите имя'
                    onChange={handleChange}
                    value={formData.name}
                    name='name'
                    id='name'
                    required
                ></input>
                <p className={`register__error-message ${!errors.name ? '' : 'register__error-message_shown'}`}>{errors.name}</p>
                <label className='register__input-label'>E-mail</label>
                <input
                    className={`register__input ${errors.email ? 'register__input_type_error' : ''}`}
                    type='email'
                    placeholder='Введите e-mail'
                    onChange={handleChange}
                    value={formData.email}
                    name='email'
                    id='email'
                    required
                ></input>
                <p className={`register__error-message ${!errors.email ? '' : 'register__error-message_shown'}`}>{errors.email}</p>
                <label className='register__input-label'>Пароль</label>
                <input
                    className={`register__input ${errors.password ? 'register__input_type_error' : ''}`}
                    type='password'
                    placeholder='Введите пароль'
                    onChange={handleChange}
                    value={formData.password}
                    name='password'
                    id='password'
                    required
                ></input>
                <p className={`register__error-message ${!errors.password ? '' : 'register__error-message_shown'}`}>{errors.password}</p>
                <button 
                className={`register__submit-button ${isValid ? 'register__submit-button_enabled' : ''}`}
                type='submit' 
                onSubmit={handleSubmit}
                disabled={!isValid}
                >Зарегистрироваться</button>
                <div className='register-redirect'>
                    <p className='register-redirect__text'>Уже зарегистрированы? </p>
                    <Link to='/signin' className='register-redirect__link'>Войти</Link>
                </div>
            </form>
        </main>
    )
}

export default Register