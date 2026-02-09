// src/components/header/Header.js
import { Link } from 'react-router-dom';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-info-block">
          <div className="header-logo-container">
            <img src="/favicon.ico" alt="Логотип" className="header-logo"/>
          </div>
          <div className="header-info">
            <h1>ООО «КРЫМЖИЛКОМФОРТ»</h1>
          </div>
          <div className="header-phones">
            <a href="tel:+79786630849">
              <span className="phone-icon"><FontAwesomeIcon icon={faPhoneAlt}/></span>
              +7 (978) 663-08-49
            </a>
            <a href="tel:+79780669919">

              Пн-Пт 9:00 -- 18:00
            </a>
          </div>
          {/* Контейнер для кнопки "Заказать консультацию" */}
          <div className="cf-link">
            {/* Теперь ссылка принимает дополнительный класс link-with-icon */}
            <Link to="/contact-form" className="link-with-icon">
              <span>Заказать консультацию</span>
              <img src="/images/iconphone.png" alt="Телефонная трубка" style={{width: '48px'}}/>
            </Link>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <ul>
          <li><div className="wrapper"><Link to="/" className="button">Главная</Link></div></li>
          <li><div className="wrapper"><Link to="/license" className="button">Лицензия</Link></div></li>
          <li><div className="wrapper"><Link to="/works" className="button">Наши работы</Link></div></li>
          <li><div className="wrapper"><Link to="/about" className="button">О нас</Link></div></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
