import React from 'react';

import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutMe(props) {
    return(
        <section className="about-me">
            <SectionTitle
                title='Студент'
            />
            <div className="about-me__info">
                <h2 className="about-me__name">Виталий</h2>
                <p className="about-me__profile">Фронтенд-разработчик, 30 лет</p>
            </div>
        </section>
    )
}

export default AboutMe;