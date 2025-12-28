// src/components/Body.js
import React from 'react';
import AboutCompany from '../aboutCompany/AboutCompany';
import ContactForm from '../contactForm/ContactForm';
import './Body.scss';

const Body = () => {
  return (
    <div className="body">
      
      <div className="content-container">
        <div className="about-company">
          <AboutCompany />
        </div>
        
      </div>
      <ContactForm />
    </div>
  );
};

export default Body;