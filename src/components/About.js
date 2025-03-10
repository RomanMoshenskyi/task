import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div id="about-me" className="about">
         <h2 className="about-theme-title">Трохи про мене та моє місце проживання</h2>
                <div className="about-theme-line"></div>
                <p className="about-theme-text">
                    <span className="first-line"> Наразі я проживаю в Австрії, в маленькому місті що знаходиться недалеко від столиці - <a href="https://g.co/kgs/gqzsD1U" target="_blank" rel="noopener noreferrer"><strong>Баден</strong></a>. Вже два роки живу тут активно вивчаючи німецьку мову на мовних курсах, в той же час підробляючи в місцевому колоритному ресторані австрійської кухні.</span>
                    <span className="second-line">
                    Місто в якому я живу славиться своєю природою та широкими горами навколо, тому у вільний час я дуже люблю гуляти лісами цього краю а також проводити довгі прогулянки на вершини гір.
                    </span>
                </p>
      </div>
      );
     }
 }
 
export default About;