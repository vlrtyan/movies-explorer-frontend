import React from 'react';
import './Techs.css';
import '../AboutProject/AboutProject.css';

function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__header'>Технологии</h2>
            <p className='techs__number'>7 технологий</p>
            <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <>
                <ul className='techs__list'>
                    <li className='tech'>HTML</li>
                    <li className='tech'>CSS</li>
                    <li className='tech'>JS</li>
                    <li className='tech'>React</li>
                    <li className='tech'>Git</li>
                    <li className='tech'>Express.js</li>
                    <li className='tech'>mongoDB</li>
                </ul>
            </>
        </section>
    )
}

export default Techs