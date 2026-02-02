// src/components/ContactForm.js
import { useState } from 'react';
import './ContactForm.scss'; // добавляем импорт стилей

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const TELEGRAM_BOT_TOKEN = '8330054248:AAHJ92jNE08n9zcxQwNESOz-3tJz7auUp2g';
  const CHAT_ID = '-5083923941';

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Формируем сообщение для Telegram
    const formattedMessage = `
Пользователь отправил заявку:
Имя: ${name}
Телефон: ${phone}
Email: ${email}
Сообщение: ${message}`;

    // Отправляем запрос на Telegram API
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(formattedMessage)}`,
        {
          method: 'POST',
        }
      );

      if (response.ok) {
        alert('Сообщение успешно отправлено!');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Ошибка отправки сообщения.');
      }
    } catch (err) {
      alert('Возникла ошибка при отправке сообщения.');
    }
  };

  return (
    <div className="contact-form">
      <div className="contact-form-container">
        <h2>Закажите консультацию</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Ваше имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Ваш номер телефона:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Сообщение:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="wrapper">
            {' '}
            {/* Добавляем класс "wrapper" для центрирования кнопки */}
            <button type="submit" className="button">
              Отправить
            </button>{' '}
            {/* Используем класс "button" для применения стилей */}
          </div>
        </form>
      </div>
      <div className="contact-info">
        <h2>Контакты</h2>
        <p>
          <strong>Номер телефона:</strong> +7 (978) 663-08-49
        </p>
        <p>
          <strong>Email:</strong> stroymash2015@yandex.ru
        </p>
        <p>
          <strong>Юридический адрес:</strong> 295015, РФ, Республика Крым, г.
          Симферополь, ул. Жуковского,
        </p>
        <p>д. № 19, пом. 9-3</p>
      </div>
    </div>
  );
};

export default ContactForm;
