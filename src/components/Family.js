import React from 'react';

class Family extends React.Component {
  render() {
    return (
      <div  id="family" className="family">
        <div className="family-theme-frame">
          <h1 className="family-theme-title">Про мою сімʼю</h1>
          <div className="family-theme-rectangle"></div>
          <div className="family-theme-content">
            <p className="family-theme-text">
              <span className="first-line">Моя сімʼя складається з пʼяти осіб - мама, тато, я, та двоє молодших сестер 4 і 12 років. Ми дуже любимо проводити час разом прогулюючись парками, відвідуючи кінотеатр, роледром та інші види активностей. На жаль війна розділила нашу сімʼї і наразі ми не проживаємо разом так як мої рідні залишились в Україні проте вони намагаються як можна частіше приїжджати до мене в гості в Австрію де ми всі разом гарно проводимо час.</span>
              <span className="second-line">Ось одна з фотографій їх нещодавнього приїзду до мене в Австрію на мій день народження.</span>
            </p>
            <div className="family-photo"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Family;
