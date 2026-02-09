// src/pages/contactForm/ContactForm.js
import ContactForm from '../../components/contactForm/ContactForm';
import './ContactForm.scss';

const ContactFormPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Заказать консультацию</h1>
      <p className="contact-intro">
        Оставьте заявку — мы свяжемся с вами и проконсультируем.
      </p>

      <ContactForm />
    </div>
  );
};

export default ContactFormPage;
