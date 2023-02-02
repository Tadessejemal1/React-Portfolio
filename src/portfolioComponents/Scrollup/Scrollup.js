/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable linebreak-style */
import React from 'react';
import './Scrollup.css';
import { FaHome } from 'react-icons/fa';

const Scrollup = () => {
  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scrollUp');
    if (this.scroly >= 860) {
      scrollUp.classList.add('show-scroll');
    } else scrollUp.classList.remove('show-scroll');
  // eslint-disable-next-line linebreak-style
  });
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#home" className="scrollUp">
      <FaHome />
    </a>
  // eslint-disable-next-line linebreak-style
  );
};

export default Scrollup;
