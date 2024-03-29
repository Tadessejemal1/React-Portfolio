/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import Typical from 'react-typical';
import './Home.css';
import Resume from '../../assets/Home/Resume.pdf';

function Home() {
  return (
    <div>
      <div id="home" className="profile-container">
        <div className="profile-parent">
          <div className="profile-detail">
            <div className="colz">
              <div className="social-media">
                <ul className="element">
                  <li><a href="https://www.facebook.com/tadesse.jemal.1" className="fa fa-facebook" /></li>
                  <li><a href="https://github.com/Tadessejemal1" className="fa fa-github" /></li>
                  <li><a href="https://linkedin.com/in/tadesse-jemal" className="fa fa-linkedin" /></li>
                  <li><a href="https://angel.co/u/tadesse-jemal" className="fa fa-angellist" /></li>
                  <li><a href="https://twitter.com/tadesse" className="fa fa-twitter" /></li>
                </ul>
              </div>
            </div>
            <div className="profile-detail-name">
              <span className="primary-text">

                Hello, I&apos;m
                {' '}
                <span className="highlighted-text">Tadesse</span>
              </span>
            </div>
            <div className="profile-detail-role">
              <span className="primary-text" />
              <h2>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Full-Stack Developer',
                    1000,
                    'React-Developer',
                    1000,
                    'React-Native',
                    1000,
                    'Ruby-Developer',
                    1000,
                    'Ruby on Rails-Developer',
                    1000,
                  ]}
                />
              </h2>
              <div className="profile-role-tagline">
                <p className="card-text">
                  Hi,I can help you build a product , feature or website Look through some of my work and experience!
                </p>
              </div>
            </div>
            <div className="profile-options">
              <a href={Resume} download>
                {' '}
                <button className="btn highlighted-btn">Get Resume </button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/* eslint-enable max-len */
export default Home;
