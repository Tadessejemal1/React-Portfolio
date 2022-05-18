import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section>
        <h2>Serviees</h2>
        <div className='servies-container'>
            <article className='servies'>
                <div className='servies-head'>
                    <h1>UI/UX</h1>
                </div>
                <ul className='servies-list'>
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li>  
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
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
                     <p>Lorem,ipsum dolor</p>
                    </li>  
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
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
                     <p>Lorem,ipsum dolor</p>
                    </li>  
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                    <li>  
                     <BiCheck className='servies-list-icons' />
                     <p>Lorem,ipsum dolor</p>
                    </li> 
                </ul>

            </article>

        </div>
    </section>
  )
}

export default Services;
