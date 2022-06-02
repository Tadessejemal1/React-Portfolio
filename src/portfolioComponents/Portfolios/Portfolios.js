import React from 'react';
import IMG1 from '../../assets/Home/img/Food.PNG';
import IMG2 from '../../assets/Home/img/tindog.png';
import IMG3 from '../../assets/Home/img/restaurant.png';
import IMG4 from '../../assets/Home/img/Restaurant 2.PNG';
import IMG5 from '../../assets/Home/img/Drum.PNG';
import IMG6 from '../../assets/Home/img/Restaurant 2.PNG';
import './Portfolios.css';

const data = [
  {
      id:1,
      image:IMG1,
      title:'Food Menu',
      github:'https://github.com/Tadessejemal1/food-menu.git',
      demo:"https://62978ef01824af005804eeae--clinquant-kleicha-e9aaba.netlify.app/"

  },
  {
      id:2,
      image:IMG2,
      title:'Tin-Dog',
      github:'https://github.com/Tadessejemal1/Bootstrap-4-UI-project.git',
      demo:"https://tadessejemal1.github.io/Bootstrap-4-UI-project/"

  },
  {
      id:3,
      image:IMG3,
      title:'Restaurant',
      github:'https://github.com/Tadessejemal1/food-menu.git',
      demo:"https://tadessejemal1.github.io/Bootstrap-4-UI-project/"

  },
  {
      id:4,
      image:IMG4,
      title:'Responsive Restaurant Website',
      github:'https://github.com/Tadessejemal1/Restaurant-project-final.git',
      demo:"https://gericht-restaurant.com/"

  },
  {
      id:5,
      image:IMG5,
      title:'Drum Kit',
      github:'https://github.com/Tadessejemal1/Drum-kit-Completed.git',
      demo:"https://tadessejemal1.github.io/Drum-kit-Completed/"

  },
  {
      id:6,
      image:IMG6, 
      title:'Dashboard',
      github:'https://github.com/Tadessejemal1/Dashboard.git',
      demo:"'https://tadessejemal1.github.io/Bootstrap-4-UI-project/'"

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
                      <a href={demo} className='btn' target='_blank'>Live Demo</a> 
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