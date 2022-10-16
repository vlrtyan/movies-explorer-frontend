import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
    // прописать логику
    const name = 'Валерия';
    return (
        <div>
            <Header />
            <section className='profile'>
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
            </section>
        </div>
    )
}

export default Profile