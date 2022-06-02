import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section className='app_services' id='servies'>
        <h2>Services</h2>
        <div className='servies-container'>
            <article className='servies'>
                <div className='servies-head'>
                    <h1>UI/UX</h1>
                </div>
                <ul className='servies-list'>
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Information Architecture</p>
                    </li>  
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Wireframes</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Design System Dev't</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Sciencesoft delivers</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Build interfaces</p>
                    </li> 
                </ul>

            </article>
            <article className='servies'>
                <div className='servies-head'>
                    <h1>Web Development</h1>
                </div>
                <ul className='servies-list'>
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Drupal web Development</p>
                    </li>  
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>HTML5 web Development</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Responsive Design</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>React.js web Development</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Social Media Management</p>
                    </li> 
                </ul>

            </article>
            <article className='servies'>
                <div className='servies-head'>
                    <h1>Content Creation</h1>
                </div>
                <ul className='servies-list'>
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Blog Posts</p>
                    </li>  
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Intographics</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Content Optimization</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Content Development</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Videos</p>
                    </li> 
                </ul>

            </article>

        </div>
    </section>
  )
}

export default Services;
