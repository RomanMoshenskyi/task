import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-theme-icon" onClick={toggleMenu}>
        <div className="menu-theme-line line1"></div>
        <div className="menu-theme-line line2"></div>
        <div className="menu-theme-line line3"></div>
      </div>

      <div className="menu-theme-social-links">
      <button onClick={() => scrollToSection("contacts")} className="menu-theme-link">Контакти</button>
        <button onClick={() => scrollToSection("it-story")} className="menu-theme-link">Моя&nbsp;&nbsp;історія&nbsp;&nbsp;в&nbsp;&nbsp;ІТ</button>
        <button onClick={() => scrollToSection("hobbies")} className="menu-theme-link">Мої&nbsp;&nbsp;хобі</button>
        <button onClick={() => scrollToSection("family")} className="menu-theme-link">Про&nbsp;&nbsp;мою&nbsp;&nbsp;сімʼю</button>
        <button onClick={() => scrollToSection("about-me")} className="menu-theme-link">Про&nbsp;&nbsp;мене</button>
      </div>
    </div>
  );
};

export default Menu;
