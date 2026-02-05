// src/components/app/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from '../../pages/about/About';
import Home from '../../pages/home/Home'; // Импортируем страницы
import License from '../../pages/license/License';
import Works from '../../pages/works/Works';
import ContactFormPage from '../../pages/contactForm/ContactForm';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/license" element={<License />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-form" element={<ContactFormPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
