import React from 'react';
import Typical from 'react-typical';
import './Home.css';

function Home() {
  return (
    <div>
      <div id='home' className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-detail'>
            <div className='colz'>
              <div className='social-media'>
                <ul class="element">
                  <li><a href="" class="fa fa-facebook"></a></li>
                  <li><a href="https://github.com/Tadessejemal1" class="fa fa-github"></a></li>
                  <li><a href="https://linkedin.com/in/tadesse-jemal" class="fa fa-linkedin"></a></li>
                  <li><a href="https://angel.co/u/tadesse-jemal" class="fa fa-angellist"></a></li>
                  <li><a href="https://twitter.com/tadesse" class="fa fa-twitter"></a></li>  
                </ul>
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
                </h1>
                <div className='profile-role-tagline'>
                  <p class="card-text">
                    I can help you build a product , feature or website Look through some of my work and experience!
                  </p>
                </div>
              </div>  
              <div className='profile-options'>
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
