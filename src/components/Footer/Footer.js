import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__name'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='copyright'>
                <p className='copyright__year'>&copy; {new Date().getFullYear()}</p>
                <ul className='copyright__links'>
                    <li className='copyright__link'>
                        <a className='copyright__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                    </li>
                    <li className='copyright__link'>
                        <a className='copyright__link' href='https://github.com/' target='_blank' rel='noreferrer'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer