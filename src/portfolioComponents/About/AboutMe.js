import React from 'react';
import Profile from '../../assets/Home/profile2.jpg';
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
const AboutMe = () => {
  return (
    <div>
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
                <div className ='abou-text'>
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
    </div>
  )
}

export default AboutMe