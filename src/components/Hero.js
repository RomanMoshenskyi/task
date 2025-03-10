import React from 'react';
import Roman from './img/RomanMoshenskyi.jpg';

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-theme-text">
          <h1>Привіт👋<br /> Мене звати Мошенський Роман.</h1>
          <p>Мені 20 років і я з міста Черкаси також я студент<a href="https://cdu.edu.ua/" target="_blank" rel="noopener noreferrer"><strong> Черкаського національного університету імені Бодана Хмельницького.</strong></a> Зараз я навчаюсь на 3 курсі університету на факультеті Інеженерії програмного забеспечення.</p>
        </div>
        <div className="hero-theme-image">
            <img src={Roman} alt="Web" />
        </div>
      </div>
    );
  }
}


export default Hero;