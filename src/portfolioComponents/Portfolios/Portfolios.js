import React from 'react';
import IMG1 from '../../assets/Home/img/second.PNG';
import './Portfolios.css';

const data = [
  {
      id:1,
      image:IMG1,
      title:'crypto currency Dashboard',
      github:'https://github.com/Tadessejemal1/food-menu.git',
      Demo:"'https://tadessejemal1.github.io/Bootstrap-4-UI-project/'"

  },
  {
      id:2,
      image:IMG1,
      title:'crypto currency Dashboard',
      github:'https://githum.com',
      Demo:"'https://tadessejemal1.github.io/Bootstrap-4-UI-project/'"

  },
  {
      id:3,
      image:IMG1,
      title:'crypto currency Dashboard',
      github:'https://githum.com',
      Demo:"'https://tadessejemal1.github.io/Bootstrap-4-UI-project/'"

  },
  {
      id:4,
      image:IMG1,
      title:'crypto currency Dashboard',
      github:'https://githum.com',
      Demo:"'https://tadessejemal1.github.io/Bootstrap-4-UI-project/'"

  },
  {
      id:5,
      image:IMG1,
      title:'crypto currency Dashboard',
      github:'https://githum.com/',
      Demo:"'https://tadessejemal1.github.io/Bootstrap-4-UI-project/'"

  },
  {
      id:6,
      image:'https://tadessejemal1.github.io/Bootstrap-4-UI-project/', 
      title:'crypto currency Dashboard',
      github:'https://githum.com',
      Demo:"'https://tadessejemal1.github.io/Bootstrap-4-UI-project/'"

  }
]
const Portfolios = () => {
  return (
      <div id='portfolios' >
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

          <div className='portfolio-container'>
            {
              data.map(({id,image,title,github,demo}) => {
                return (
                  <article key= {id} className='portfolio-item'>
                    <div className='portfolio-item-image'>
                      <img src={image} alt={title} />
                    </div>
                    <p>{title}</p>
                    <div className='portfolio-item-cta'>
                      <a href={github} className='btn'>Github</a>
                      <a href={demo} className='btn-btn-primary' target='_blank'>Live Demo</a> 
                    </div>
                  </article>
                )
              })
            }
          </div>
      </div>
  )
}

export default Portfolios;