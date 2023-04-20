/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import Navbar from './portfolioComponents/Navbar/Navbar';
import Home from './portfolioComponents/Home/Home';
import Testmonial from './portfolioComponents/Testmonials/Testmonial';
import About from './portfolioComponents/About/About';
import Portfolios from './portfolioComponents/Portfolios/Portfolios';
import Contacts from './portfolioComponents/Contact/Contacts';
import Services from './portfolioComponents/Services/Services';
import Scrollup from './portfolioComponents/Scrollup/Scrollup';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolios />
      <Testmonial />
      <Contacts />
      <Scrollup />
    </div>
  );
}

export default App;
