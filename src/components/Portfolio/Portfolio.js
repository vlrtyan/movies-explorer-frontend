import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <p className='portfolio__header'>Портфолио</p>
            <ul className='portfolio__list'>
                <a className='project' href='https://github.com/vlrtyan/how-to-learn' target='_blank' rel='noreferrer'>
                    <li className='project__container'>
                        <p className='project__name'>Статичный сайт</p>
                        <p className='project__icon'>&#8599;</p>
                    </li>
                </a>

                <a className='project' href='https://github.com/vlrtyan/russian-travel' target='_blank' rel='noreferrer'>
                    <li className='project__container'>
                        <p className='project__name'>Адаптивный сайт</p>
                        <p className='project__icon'>&#8599;</p>
                    </li>
                </a>
                <a className='project' href='https://github.com/vlrtyan/react-mesto-api-full' target='_blank' rel='noreferrer'>
                    <li className='project__container'>
                        <p className='project__name'>Одностраничное приложение</p>
                        <p className='project__icon'>&#8599;</p>
                    </li>
                </a>
            </ul>
        </section>
    )
}

export default Portfolio