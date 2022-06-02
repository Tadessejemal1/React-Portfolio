import React from 'react';
import Typical from 'react-typical';
import './Home.css';


function Home() {
  return (
    <div>
      <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-detail'>
            <div className='colz'>
              <div className='colz-icon'>
                <a href='#'>
                    <li className='fa fa-facebook-square'></li>
                </a>
                <a href='#'>
                    <li className='fa fa-google-plus-square'></li>
                </a>
                <a href='#'>
                    <li className='fa fa-instagram'></li>
                </a>
                <a href='#'>
                    <li className='fa fa-twitter'></li>
                </a>
              </div>  
            </div>
        <div className='profile-detail-name'>
            <span className='primary-text'>{''} 
                Hello, I'm <span className='highlighted-text'>Tadesse</span>
            </span>
        </div>
        <div className='profile-detail-role'>
            <span className='primary-text'>
            {''} 
            </span>
                <h1>
                  {''}
                  <Typical
                  loop ={Infinity}
                  steps={[
                      'Front-End Developer',
                      1000,
                      'React-Developer',
                      1000,
                      'React-Native',
                      1000,
                      'Pyton Developer',
                      1000,
                  ]}
                  />
                </h1>
                <span className='profile-role-tagline'>
                  knack of building application with front end
                </span>
              </div>  
              <div className='profile-options'>
                  <button className='btn primary-btn'>
                    {""}
                    Hire Me{''}
                  </button>
                  <a href = 'resume 1.pdf' download = 'Resume resume 1.pdf'>                    
                    <button className = 'btn highlighted-btn'>Get Resume </button>
                  </a>
              </div>   
            </div>
            <div className='profile-picture'>
              <div className='profile-picture-background'> </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home;
