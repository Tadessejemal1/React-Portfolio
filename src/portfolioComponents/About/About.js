import React from 'react';
import "./About.css";
import Profile from '../../assets/Home/profile2.jpg';
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";

function About() {
    return (
      <div className='About-main'>
        <div className="about">
          <div className="container">
            <h1 className="about-heading">About Me</h1>
            <h2 className="about-heading2">I am Tadesse Jemal<span className='about-span'>Web Developer</span></h2>
            <div className="about-content">
              <div className='about-me'>
                <div className="about-image">
                    <img src ={Profile} alt='profiles' />
                </div>
              </div>
              <div className="right">
                <div className="about-cards">
                  <article className='about-card'>
                    <FaAward className='about-icon'/>
                    <h5>Experience</h5>
                    <small>2+ Years Working</small>
                  </article>
                  <article className='about-card'>
                    <FiUsers className='about-icon'/>
                    <h5>Clients</h5>
                    <small>5+</small>
                  </article>
                  <article className='about-card'>
                    <VscFolderLibrary className='about-icon'/>
                    <h5>Project</h5>
                    <small>10+</small>
                  </article>
                </div>
                <div className ='about-text'>
                  <p>
                   I am a highly motivated individual and Innovative Front-End Developer with two years of experience building and maintaining responsive websites.
                   Proficient in :HTML,CSS,jQuery,JavaScript, React; plus, modern libraries and frameworks.I am a multidisciplinary designer.
                    Building stable and maintainable codebase using React.Created user-centric e-commerce sites for small business owners using various web
                   technologies.Collaborating closely with the team to support projects during all phases of delivery.

                  </p>
                  <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
              </div>
            </div>
          </div>
        <div className='container-info'>         
          <section id = 'skill-section' >
            <div className='header skill-head'>
              <h2>My <span>Skills</span></h2>
              <p>Here is my skills to represent my Expertise</p>
            </div>
            <div className='skill-main'>
              <div className='skill-bar'>
                <div className='info'>
                  <p>HTML</p>
                  <p>92%</p>
                </div>
                <div className='bar'>
                  <span className='html'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>CSS</p>
                  <p>88%</p>
                </div>
                <div className='bar'>
                  <span className='css'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>JavaScript</p>
                  <p>80%</p>
                </div>
                <div className='bar'>
                  <span className='javascript'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>Bootstrap</p>
                  <p>85%</p>
                </div>
                <div className='bar'>
                  <span className='bootstrap'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>React</p>
                  <p>80%</p>
                </div>
                <div className='bar'>
                  <span className='react'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>Python</p>
                  <p>70%</p>
                </div>
                <div className='bar'>
                  <span className='python'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>LATEX</p>
                  <p>90%</p>
                </div>
                <div className='bar'>
                  <span className='latex'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>GITHUB</p>
                  <p>95%</p>
                </div>
                <div className='bar'>
                  <span className='github'></span>
                </div>
              </div>
            </div>
          </section>
            <div className='sour'>
              </div>
            </div>
            <div className='row'>
              <div className='education'>
                <h3 className='title'>Education</h3>
                <div className='row'>
                  <div className='timeline-box'>
                    <div className='timeline-shadow'>
                      <div className='timeline-item'>
                        <div className='circle-dot'></div>
                        <h3 className='timeline-date'>
                          <i className='fa fa-calendar'>2015</i>
                        </h3>  
                        <h4 className='timeline-title'>Degree</h4>
                        <p className='timeline-text'> I am gratuated from mekelle university Mechanical Engineering 
                           Department <br></br>
                        </p>
                      </div>
                      <div className='timeline-item'>
                        <div className='circle-dot'></div>
                        <h3 className='timeline-date'>
                          <i className='fa fa-calendar'>2016-2018</i>
                        </h3>  
                        <h4 className='timeline-title'>Master</h4>
                        <p className='timeline-text'>
                          I am gratuated MSC in Thermal Engineering From Bahirdar University
                        </p>
                      </div>
                      <div className='timeline-item'>
                        <div className='circle-dot'></div>
                        <h3 className='timeline-date'>
                          <i className='fa fa-calendar'>2016-2020</i>
                        </h3>  
                        <h4 className='timeline-title'>Degree</h4>
                        <p className='timeline-text'>
                          I am gratuated from Bahirdar University in Computer Science 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='experience'>
                <h3 className='title'>Experience</h3>
                <div className='row'>
                <div className='timeline-box'>
                  <div className='timeline-shadow'>
                    <div className='timeline-item'>
                      <div className='circle-dot'></div>
                      <h3 className='timeline-date'>
                        <i className='fa fa-calendar'>2015-2016</i>
                      </h3>  
                      <h4 className='timeline-title'>Assistance Lecturer</h4>
                      <p className='timeline-text'> I have One years Work Experience as Assistance Lecturer Position from DebreTabor University in Mechanical Engineering 
                         Department. <br></br>
                      </p>
                    </div>
                    <div className='timeline-item'>
                      <div className='circle-dot'></div>
                      <h3 className='timeline-date'>
                        <i className='fa fa-calendar'>2018-present</i>
                      </h3>  
                      <h4 className='timeline-title'>Lecturer</h4>
                      <p className='timeline-text'>
                       I have 4 year's Work Experience as Lecturer Position from DebreTabor University in Mechanical Engineering 
                       Department. <br></br>
                      </p>
                    </div>
                    <div className='timeline-item'>
                      <div className='circle-dot'></div>
                      <h3 className='timeline-date'>
                        <i className='fa fa-calendar'>2020-Present</i>
                      </h3>  
                      <h4 className='timeline-title'>Front End Developer</h4>
                      <p className='timeline-text'>
                       I have two years of work experience in the design of Responsive websites using Front End Technology. <br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            
        </div>
      </div>  
        
    
  )
}

export default About;