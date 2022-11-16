import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__header'>О проекте</h2>
            <div className='description'>
                <div className='description__block'>
                    <p className='description__point'>Дипломный проект включал 5 этапов</p>
                    <p className='description__explanation'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='description__block'>
                    <p className='description__point'>На выполнение диплома ушло 5 недель</p>
                    <p className='description__explanation'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='chart'>
                <div className='chart__element chart__element_color_black'>
                    <p className='chart__duration chart__duration_color_black'>1 неделя</p>
                    <p className='chart__task'>Back&#8209;end</p>
                </div>
                <div className='chart__element chart__element_color_grey'>
                    <p className='chart__duration chart__duration_color_grey'>4 недели</p>
                    <p className='chart__task'>Front&#8209;end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject