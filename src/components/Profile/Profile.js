import React from 'react';
import './Profile.css';

function Profile(props) {
    return (
        <main className='profile'>
            {props.loggedIn && <p className='profile__greeting'>{`Привет, ${props.user.name}`}</p>}
            <form className='profile__form'>
                <label className='profile__input-label' htmlFor='name'>
                    Имя
                    <input
                        className='profile__input'
                        name='name'
                        type='name'
                        placeholder={props.user.name}
                        defaultValue={props.user.name}
                    ></input>
                </label>
                <label className='profile__input-label' htmlFor='email'>
                    E-mail
                    <input
                        className='profile__input'
                        name='email'
                        type='email'
                        placeholder={props.user.email}
                        defaultValue={props.user.email}
                    ></input>
                </label>
            </form>
            <button className='profile__button profile_button_type_edit'>Редактировать</button>
            <button className='profile__button profile_button_type_logout' onClick={props.logout}>Выйти из аккаунта</button>
        </main>
    )
}

export default Profile