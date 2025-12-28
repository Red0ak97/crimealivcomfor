// src/components/header/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // для навигации
import './Header.scss'; // добавляем точку с запятой

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>ООО «КРЫМЖИЛКОМФОРТ»</h1>
        <p>Строительство, реконструкция и реставрация объектов любой сложности</p>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <div className="wrapper">
              <Link to="/" className="button">Главная</Link>
            </div>
          </li>
          <li>
            <div className="wrapper">
              <Link to="/license" className="button">Лицензия</Link>
            </div>
          </li>
          <li>
            <div className="wrapper">
              <Link to="/works" className="button">Наши работы</Link>
            </div>
          </li>
          <li>
            <div className="wrapper">
              <Link to="/contact" className="button">Контакты</Link>
            </div>
          </li>
          <li>
            <div className="wrapper">
              <Link to="/about" className="button">О нас</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;