// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      <Body/>
      <Footer />
    </Router>
  );
};

export default App;
