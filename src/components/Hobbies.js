import React from 'react';

class Hobbies extends React.Component {
    componentDidMount() {
        this.initializeAccordion();
    }

    initializeAccordion() {
        const accordionItems = document.querySelectorAll('.hobbies-theme-accordion-item');

        accordionItems.forEach(item => {
            const title = item.querySelector('.hobbies-theme-accordion-title');

            title.addEventListener('click', () => {
                // Закрити інші елементи, крім поточного
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                // Перемкнути поточний елемент
                item.classList.toggle('active');
            });
        });
    }

    render() {
        return (
            <div id="hobbies" className="hobbies">
                <h2 className="hobbies-theme-title">Мої хобі</h2>
                <div className="hobbies-theme-rectangle"></div>
                <div className="hobbies-theme-accordion-list">
                    <div className="hobbies-theme-accordion-item active">
                        <div className="hobbies-theme-accordion-title">
                            <h3>Катання на роликах і ковзанах</h3>
                            <span></span>
                        </div>
                        <div className="hobbies-theme-accordion-content">
                            <br />Моє основне хобі — це активний відпочинок, зокрема катання на роликах і ковзанах. Це для мене не лише спосіб підтримувати фізичну форму, а й можливість насолоджуватися швидкістю та свободою руху на свіжому повітрі.
                        </div>
                    </div>
                    <div className="hobbies-theme-accordion-item">
                        <div className="hobbies-theme-accordion-title">
                            <h3>Баскетбол</h3>
                            <span></span>
                        </div>
                        <div className="hobbies-theme-accordion-content">
                            <br />Я захоплююся баскетболом — спортом, який вчить командній роботі, стратегії і дає можливість активно провести час. Граючи, я відчуваю справжнє задоволення від кожного моменту на майданчику.
                        </div>
                    </div>
                    <div className="hobbies-theme-accordion-item">
                        <div className="hobbies-theme-accordion-title">
                            <h3>Подорожі</h3>
                            <span></span>
                        </div>
                        <div className="hobbies-theme-accordion-content">
                            <br />Я обожнюю відкривати нові країни та культури. Мої подорожі вже привели мене до таких країн, як Австрія, Словаччина, Польща та Іспанія. У кожній з цих країн я знаходив щось особливе: від чудових архітектурних пам'яток до приголомшливих природних ландшафтів.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hobbies;
