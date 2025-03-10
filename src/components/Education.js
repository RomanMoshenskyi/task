import React from 'react';

class Education extends React.Component {
    render() {
      return (
        <div id="it-story" className="education">
           <h2 className="education-theme-title">Моя історія в ІТ</h2>
                  <div className="education-theme-rectangle"></div>
                  <p className="education-theme-text">
                      <span className="first-line">Моє знайомство з ІТ почалося ще в школі, коли вчитель інформатики знайомив нас з основами веб-розробки: HTML, CSS та JavaScript. Завдання були простими, але саме тоді я зрозумів, що хочу поглиблено вивчати програмування. Це стало справжнім відкриттям для мене, і я почав самостійно вивчати різні ресурси та розвивати свої навички.</span>
                      <span className="second-line">Після вступу в університет я занурився в програмування на C#, що стало важливим етапом у моєму розвитку. Я здобув знання, які дозволяють мені створювати складніші програми та працювати з великими проектами. Зараз я активно вивчаю Java і здобуваю нові навички через курси в GoIT.</span>
                      <span className="third-line">Окрім цього, я отримав стартові сертифікати від компанії Foxminded. Наразі проходжу практику в Ekreative, працюючи з React, і вдосконалюю свої навички в проектах. Це дає мені можливість навчатися безпосередньо на практиці та поглиблювати знання сучасних технологій.</span>
                  </p>
        </div>
        );
       }
 }
 
export default Education;