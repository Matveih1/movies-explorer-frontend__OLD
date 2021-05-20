import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TextBlock from './TextBlock/TextBlock';

import './AboutProject.css';

function AboutProject(props) {
    return (
        <>
            <section className="about-project">
                <SectionTitle
                    title='О проекте'
                />
                <TextBlock
                    title="Дипломный проект включал 5 этапов"
                    text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
                />
                <TextBlock
                    title="На выполнение диплома ушло 5 недель"
                    text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
                />
            </section>
            <div className='about-project__timeless'>
                <div className='about-project__timeless-item about-project__timeless-first-part'>
                1 неделя
                </div>
                <div className='about-project__timeless-item about-project__timeless-second-part'>
                4 недели
                </div>
                <div className='about-project__timeless-item about-project__timeless-text'>
                Back-end
                </div>
                <div className='about-project__timeless-item about-project__timeless-text'>
                Front-end
                </div>
            </div>
        </>
    )
}

export default AboutProject;
