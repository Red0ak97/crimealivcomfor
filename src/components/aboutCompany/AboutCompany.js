// src/components/aboutCompany/AboutCompany.js
import React from 'react';
import './AboutCompany.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutCompany = () => {
  return (
    <div className="about-company">
      <h2>ООО «КРЫМЖИЛКОМФОРТ» — Мы имеем многолетний опыт работы и являемся членом СРО.</h2>
      <p>
        <Link to="/about" className="link">
          Узнать больше о компании{' '}<FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </p>

      <h2>Ключевые направления наших работ:</h2>

      <ul>
        <h3>Работы по сохранению объектов культурного наследия:</h3>
        <li>Реставрация</li>
        <li>Консервация</li>
        <li>Воссоздание</li>
        <li>Проектирование</li>
        <li>Приспособление</li>
      </ul>

      <ul>
        <h3>Общие строительные работы:</h3>
        <li>Жилищное строительство</li>
        <li>Гидротехнические сооружения</li>
        <li>Благоустройство</li>
        <li>Инженерные сети и коммуникации</li>
        <li>
          <Link to="/works" className="link">
            Посмотреть наши работы{' '}<FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </li>
      </ul>

      <p>
        <Link to="/license" className="link">
          Лицензии ООО «КРЫМЖИЛКОМФОРТ»{' '}<FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </p>
    </div>
  );
};

export default AboutCompany;
