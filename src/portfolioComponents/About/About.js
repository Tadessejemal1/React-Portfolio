/* eslint-disable max-len */
import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import Profile from '../../assets/Home/profile2.jpg';

function About() {
  return (
    <div id="about" className="About-main">
      <div className="about">
        <div className="container">
          <h1 className="about-heading">About Me</h1>
          <h2 className="about-heading2">
            I am Tadesse Jemal
            <span className="about-span">Web Developer</span>
          </h2>
          <div className="about-content">
            <div className="about-me">
              <div className="about-image">
                <img src={Profile} alt="profiles" />
              </div>
            </div>
            <div className="right">
              <div className="about-cards">
                <article className="about-card">
                  <FaAward className="about-icon" />
                  <h5>Experience</h5>
                  <small>2+ Years Working</small>
                </article>
                <article className="about-card">
                  <VscFolderLibrary className="about-icon" />
                  <h5>Project</h5>
                  <small>50+</small>
                </article>
              </div>
              <div className="about-text">
                <p>
                  Hello I am a software developer! I can help you build a product ,
                  feature or website Look through some of my work and experience! If
                  you like what you see and have a project you need coded, don&apos;t
                  hesitate to contact me.
                </p>
                <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-info">
          <section id="skill-section">
            <div className="header skill-head">
              <h2>
                My
                <span>Skills</span>
              </h2>
              <p>Here is my skills to represent my Expertise</p>
            </div>
            <div className="skill-main">
              <div className="skill-bar">
                <div className="info">
                  <p>HTML</p>
                  <p>92%</p>
                </div>
                <div className="bar">
                  <span className="html" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>CSS</p>
                  <p>88%</p>
                </div>
                <div className="bar">
                  <span className="css" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>JavaScript</p>
                  <p>80%</p>
                </div>
                <div className="bar">
                  <span className="javascript" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>Bootstrap</p>
                  <p>85%</p>
                </div>
                <div className="bar">
                  <span className="bootstrap" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>React</p>
                  <p>80%</p>
                </div>
                <div className="bar">
                  <span className="react" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>Ruby</p>
                  <p>70%</p>
                </div>
                <div className="bar">
                  <span className="python" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>RAILS</p>
                  <p>90%</p>
                </div>
                <div className="bar">
                  <span className="latex" />
                </div>
              </div>
              <div className="skill-bar">
                <div className="info">
                  <p>POSTGRESQL</p>
                  <p>95%</p>
                </div>
                <div className="bar">
                  <span className="github" />
                </div>
              </div>
            </div>
          </section>
          <div className="sour" />
          <h2 className="qualification">Qualification</h2>
        </div>
        <div className="row">
          <div className="education">
            <h3 className="title">Education</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline-shadow">
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar">2015</i>
                    </h3>
                    <h4 className="timeline-title">Degree</h4>
                    <p className="timeline-text">
                      I am gratuated from mekelle university in Mechanical Engineering
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar">2016-2018</i>
                    </h3>
                    <h4 className="timeline-title">Master</h4>
                    <p className="timeline-text">
                      I am graduated MSC in Thermal Engineering From Bahirdar University
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar">2016-2020</i>
                    </h3>
                    <h4 className="timeline-title">Degree</h4>
                    <p className="timeline-text">
                      I am graduated from Bahirdar University in Computer Science
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar">2022-2023</i>
                    </h3>
                    <h4 className="timeline-title">Full-Stack Developer</h4>
                    <p className="timeline-text">
                      I am graduated from Microverse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="experience">
            <h3 className="title">Experience</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline-shadow">
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar">2015-2016</i>
                    </h3>
                    <h4 className="timeline-title">Assistance Lecturer</h4>
                    <p className="timeline-text">
                      {' '}
                      I have One years Work Experience as Assistance Lecturer Position from DebreTabor University in Mechanical Engineering
                      Department.
                      <br />
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar">2018-present</i>
                    </h3>
                    <h4 className="timeline-title">Lecturer</h4>
                    <p className="timeline-text">
                      I have 4 year&apos;s Work Experience as Lecturer Position from DebreTabor University in Mechanical Engineering
                      Department.
                      {' '}
                      <br />
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot" />
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar">2020-Present</i>
                    </h3>
                    <h4 className="timeline-title">Front End Developer</h4>
                    <p className="timeline-text">
                      I have two years of work experience in the design of Responsive websites using Front End Technology.
                      {' '}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
