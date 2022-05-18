import React from 'react';
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <small>10+</small>
                  </article>
                  <article className='about-card'>
                    <VscFolderLibrary className='about-icon'/>
                    <h5>Project</h5>
                    <small>20+</small>
                  </article>
                </div>
                <div className ='about-text'>
                  <p>
                  There are many variations of passages of Lorem Ipsum available,but the majority have suffered in some form, by injected humour,
                  or randomised words which dont look even slightly believable. If
                  you are going to use a passage of Lorem Ipsum,
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
                  <p>90%</p>
                </div>
                <div className='bar'>
                  <span className='html'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>CSS</p>
                  <p>90%</p>
                </div>
                <div className='bar'>
                  <span className='html'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>JavaScript</p>
                  <p>90%</p>
                </div>
                <div className='bar'>
                  <span className='html'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>Bootstrap</p>
                  <p>90%</p>
                </div>
                <div className='bar'>
                  <span className='html'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>React</p>
                  <p>90%</p>
                </div>
                <div className='bar'>
                  <span className='html'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>Python</p>
                  <p>90%</p>
                </div>
                <div className='bar'>
                  <span className='html'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>LATEX</p>
                  <p>90%</p>
                </div>
                <div className='bar'>
                  <span className='html'></span>
                </div>
              </div>
              <div className='skill-bar'>
                <div className='info'>
                  <p>GITHUB</p>
                  <p>90%</p>
                </div>
                <div className='bar'>
                  <span className='html'></span>
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
                           Department and I am Good competate <br></br>
                        </p>
                      </div>
                      <div className='timeline-item'>
                        <div className='circle-dot'></div>
                        <h3 className='timeline-date'>
                          <i className='fa fa-calendar'>2015-2016</i>
                        </h3>  
                        <h4 className='timeline-title'>Degree</h4>
                        <p className='timeline-text'>
                          I am gratuated from mekelle university Mechanical Engineering Department and I am Good competate 
                        </p>
                      </div>
                      <div className='timeline-item'>
                        <div className='circle-dot'></div>
                        <h3 className='timeline-date'>
                          <i className='fa fa-calendar'>2016</i>
                        </h3>  
                        <h4 className='timeline-title'>Master</h4>
                        <p className='timeline-text'>
                          I am gratuated from mekelle university Mechanical Engineering Department and I am Good competate 
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
                        <i className='fa fa-calendar'>2015</i>
                      </h3>  
                      <h4 className='timeline-title'>Degree</h4>
                      <p className='timeline-text'> I am gratuated from mekelle university Mechanical Engineering 
                         Department and I am Good competate <br></br>
                      </p>
                    </div>
                    <div className='timeline-item'>
                      <div className='circle-dot'></div>
                      <h3 className='timeline-date'>
                        <i className='fa fa-calendar'>2015-2016</i>
                      </h3>  
                      <h4 className='timeline-title'>Degree</h4>
                      <p className='timeline-text'>
                        I am gratuated from mekelle university Mechanical Engineering Department and I am Good competate 
                      </p>
                    </div>
                    <div className='timeline-item'>
                      <div className='circle-dot'></div>
                      <h3 className='timeline-date'>
                        <i className='fa fa-calendar'>2016</i>
                      </h3>  
                      <h4 className='timeline-title'>Master</h4>
                      <p className='timeline-text'>
                        I am gratuated from mekelle university Mechanical Engineering Department and I am Good competate 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className='service'>
                <div className='container'>
                  <div className='row'>
                    <div className='section-title'>
                      <h2>Servies</h2>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='service-item-inner'>
                      <div className='icon'>
                        <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" />
                        <i className='fa fa-laptop-code'></i>
                      </div>
                      <h4>Web Design</h4>
                      <p>Lorem,ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className='service-item-inner'>
                      <div className='icon'>
                        <FontAwesomeIcon icon="fa-solid fa-laptop-code" />
                        <i className='fa fa-laptop-code'></i>
                      </div>
                      <h4>Web Design</h4>
                      <p>Lorem,ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className='service-item-inner'>
                      <div className='icon'>
                        <i className='fa fa-palette'></i>
                      </div>
                      <h4>Web Design</h4>
                      <p>Lorem,ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className='service-item-inner'>
                      <div className='icon'>
                        <i className='fa fa-code'></i>
                      </div>
                      <h4>Web Design</h4>
                      <p>Lorem,ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className='service-item-inner'>
                      <div className='icon'>
                        <i className='fa fa-search'></i>
                      </div>
                      <h4>Web Design</h4>
                      <p>Lorem,ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className='service-item-inner'>
                      <div className='icon'>
                        <i className='fa fa-bullhorn'></i>
                      </div>
                      <h4>Web Design</h4>
                      <p>Lorem,ipsum dolor sit amet consectetur</p>
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