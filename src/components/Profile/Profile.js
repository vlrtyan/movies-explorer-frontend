import React from 'react';
import './Profile.css';
import { validation } from '../../utils/validation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ handleEdit, logout }) {
    const user = React.useContext(CurrentUserContext);
    const [formData, setFormData] = React.useState({
        name: user.name,
        email: user.email
    });
    const [errors, setErrors] = React.useState({ name: '', email: '' });
    const isValid =
        ((errors.name === undefined && errors.email === '') ||
            (errors.email === undefined && errors.name === '') ||
            (errors.email === undefined && errors.name === undefined)) &&
        (formData.name !== user.name || formData.email !== user.email)

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
        handleEdit(formData);
        setFormData({ name: formData.name, email: formData.email });
        setErrors({ name: '', email: '' });
    }

    return (
        <main className='profile'>
            <p className='profile__greeting'>{`Привет, ${user.name}`}</p>
            <form className='profile__form' onSubmit={handleSubmit}>
                <label className='profile__input-label' htmlFor='name'>
                    Имя
                    <input
                        className='profile__input'
                        name='name'
                        type='name'
                        value={formData.name}
                        onChange={handleChange}
                        id='name'
                        required
                    ></input>
                </label>
                <label className='profile__input-label' htmlFor='email'>
                    E-mail
                    <input
                        className='profile__input'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        id='email'
                        required
                    ></input>
                </label>
                <button
                    className={`profile__button profile__button_type_edit ${isValid ? 'profile__button_enabled' : ''}`}
                    type='submit'
                    onSubmit={handleSubmit}
                    disabled={!isValid}
                >Редактировать</button>
            </form>
            <button
                className='profile__button profile__button_type_logout'
                onClick={logout}>Выйти из аккаунта</button>
        </main>
    )
}

export default Profile