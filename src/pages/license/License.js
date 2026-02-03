// src/pages/License.js
import { useState } from 'react';
import ContactForm from '../../components/contactForm/ContactForm';
import './License.scss';

const License = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="license-page">
      <h1 className="license-title">
        Лицензии и разрешительная документация
      </h1>

      <p className="license-description">
        ООО «КРЫМЖИЛКОМФОРТ» осуществляет строительную деятельность в строгом
        соответствии с действующим законодательством Российской Федерации.
        Компания располагает всеми необходимыми лицензиями, допусками и
        разрешительными документами.
      </p>

      <p className="license-description">
        Ниже представлены официальные документы компании, включая лицензии,
        свидетельства и допуски.
      </p>

      {/* Пакет 1 */}
      <section className="license-section">
        <h2 className="license-section-title">
          Допуски и членство в СРО
        </h2>

        <div className="license-grid">
          {['pack3-1', 'pack3-2', 'pack3-3'].map((img) => (
            <div className="license-card" key={img}>
              <img
                src={`/images/licenses/${img}.jpg`}
                alt="Строительная лицензия"
                onClick={(e) => setActiveImage(e.target.src)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Пакет 2 */}
      <section className="license-section">
        <h2 className="license-section-title">Приказ ГУ МЧС России по Республике Крым</h2>

        <div className="license-grid">
          {['pack2-1', 'pack2-2'].map((img) => (
            <div className="license-card" key={img}>
              <img
                src={`/images/licenses/${img}.jpg`}
                alt="Допуск СРО"
                onClick={(e) => setActiveImage(e.target.src)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Пакет 3 */}
      <section className="license-section">
        <h2 className="license-section-title">
          Лицензии на осуществление строительных работ
        </h2>

        <div className="license-grid">
          {['pack1-1', 'pack1-2', 'pack1-3', 'pack1-4'].map((img) => (
            <div className="license-card" key={img}>
              <img
                src={`/images/licenses/${img}.jpg`}
                alt="Разрешительная документация"
                onClick={(e) => setActiveImage(e.target.src)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Модалка */}
      {activeImage && (
        <div className="image-modal" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Лицензия" />
        </div>
      )}

      {/* Контактная форма */}
      <ContactForm />
    </div>
  );
};

export default License;
