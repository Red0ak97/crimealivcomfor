// src/components/Home.js
import React from 'react';
import AboutCompany from '../../components/aboutCompany/AboutCompany';
import ContactForm from '../../components/contactForm/ContactForm';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="content-container">
        <div className="about-company">
          <AboutCompany />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Home;
