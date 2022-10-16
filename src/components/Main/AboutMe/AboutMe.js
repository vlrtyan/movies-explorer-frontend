import React from 'react';
import './AboutMe.css';
import '../AboutProject/AboutProject.css';
import avatar from '../../../images/avatar.jpg';

function AboutMe() {
    return (
        <div className='about-project'>
            <h2 className='about-project__header about-me__header'>Студентка</h2>
            <div className='about-me'>
                <div className='about-me__info'>
                    <p className='about-me__name'>Валерия Тян</p>
                    <p className='about-me__occupation'>Фронтенд-разработчик, 23 года</p>
                    <p className='about-me__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className='about-me__github' href='https://github.com/vlrtyan' target='_blank'>Github</a>
                </div>
                <img className='about-me__photo' src={avatar} alt='Валерия Тян' />
            </div>
        </div>
    )
}

export default AboutMe