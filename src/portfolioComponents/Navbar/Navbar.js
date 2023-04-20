/* eslint-disable linebreak-style */
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="app__navbar">
      <nav className="app__navbar">
        <div className="app__navbar_left">
          <h1>Matiyas Yenew</h1>
        </div>
        <ul className="app__navbar-link">
          <li className="p_open"><a href="#home">Home</a></li>
          <li className="p_open"><a href="#about">About</a></li>
          <li className="p_open"><a href="#servies">Services</a></li>
          <li className="p_open"><a href="#portfolios">Portfolios</a></li>
          <li className="p_open"><a href="#testimonial">Testmonials</a></li>
          <li className="p_open"><a href="#contact">Contact</a></li>
        </ul>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" className="small_screen" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscren_overlay flex__center slide-bottom">
              <MdClose color="#fff" className="overlay__close" fontSize={27} onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen-links">
                <li className="p_open"><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li className="p_open"><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                <li className="p_open"><a href="#servies" onClick={() => setToggleMenu(false)}>Services</a></li>
                <li className="p_open"><a href="#portfolios" onClick={() => setToggleMenu(false)}>Portfolios</a></li>
                <li className="p_open"><a href="#testimonial" onClick={() => setToggleMenu(false)}>Testmonial</a></li>
                <li className="p_open"><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
