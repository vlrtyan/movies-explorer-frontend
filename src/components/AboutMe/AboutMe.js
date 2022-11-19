import React from 'react';
import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__header'>Студентка</h2>
            <div className='about-me__container'>
                <div className='about-me__info'>
                    <p className='about-me__name'>Валерия</p>
                    <p className='about-me__occupation'>Фронтенд-разработчик, 23 года</p>
                    <p className='about-me__bio'>Я живу в Санкт-Петербурге, закончила программу логистики НИУ ВШЭ. Я люблю футбол и фигурное катание. Недавно начала кодить, прошла курс Яндекс Практикума по веб-разаработке и сейчас начинаю карьеру фронтендера.</p>
                    <a className='about-me__github' href='https://github.com/vlrtyan' target='_blank' rel='noreferrer'>Github</a>
                </div>
                <img className='about-me__photo' src={avatar} alt='Валерия Тян' />
            </div>
        </section>
    )
}

export default AboutMe