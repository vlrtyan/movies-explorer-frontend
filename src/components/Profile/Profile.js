import React from 'react';
import './Profile.css';

function Profile() {
    const name = 'Валерия';
    return (
        <main className='profile'>
            <p className='profile__greeting'>{`Привет, ${name}`}</p>
            <form className='profile__form'>
                <label className='profile__input-label' htmlFor='name'>
                    Имя
                    <input
                        className='profile__input'
                        name='name'
                        type='name'
                        placeholder={name}
                    ></input>
                </label>
                <label className='profile__input-label' htmlFor='email'>
                    E-mail
                    <input
                        className='profile__input'
                        name='email'
                        type='email'
                        placeholder='test@mail.ru'
                    ></input>
                </label>
            </form>
            <button className='profile__button profile_button_type_edit'>Редактировать</button>
            <button className='profile__button profile_button_type_logout'>Выйти из аккаунта</button>
        </main>
    )
}

export default Profile