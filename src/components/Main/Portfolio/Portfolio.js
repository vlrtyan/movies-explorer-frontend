import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio'>
            <p className='portfolio__header'>Портфолио</p>
            <div className='project'>
                <p className='project__name'>Статичный сайт</p>
                <a className='project__link' href='https://github.com/vlrtyan/how-to-learn' target='_blank'></a>
            </div>
            <div className='project'>
                <p className='project__name'>Адаптивный сайт</p>
                <a className='project__link' href='https://github.com/vlrtyan/russian-travel' target='_blank'></a>
            </div>
            <div className='project'>
                <p className='project__name'>Одностраничное приложение</p>
                <a className='project__link' href='https://github.com/vlrtyan/react-mesto-api-full' target='_blank'></a>
            </div>
        </div>
    )
}

export default Portfolio