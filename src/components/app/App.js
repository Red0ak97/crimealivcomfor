// src/components/app/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import About from '../../pages/about/About';
import Home from '../../pages/home/Home'; // Импортируем страницы
import License from '../../pages/license/License';
import Works from '../../pages/works/Works';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/license" element={<License />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
