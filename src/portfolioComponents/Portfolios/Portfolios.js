import React from 'react';
import IMG1 from '../../assets/Home/img/Capture1.JPG';
import IMG2 from '../../assets/Home/img/Capture5.JPG';
import IMG3 from '../../assets/Home/img/Capture4.JPG';
import IMG4 from '../../assets/Home/img/Capture6.JPG';
import IMG5 from '../../assets/Home/img/Capture8.JPG';
import IMG6 from '../../assets/Home/img/Capture 2.JPG';
import './Portfolios.css';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Conference page',
    github: 'https://github.com/Tadessejemal1/FIRST-CAPSTONE-PROJECT.git',
    demo: 'https://tadessejemal1.github.io/FIRST-CAPSTONE-PROJECT/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Display Movies',
    github: 'https://github.com/Tadessejemal1/JavaScript-Capstone.git',
    demo: 'https://kumilachew-g.github.io/JavaScript-Capstone/dist/',

  },
  {
    id: 3,
    image: IMG3,
    title: 'Leaderboard Web',
    github: 'https://github.com/Tadessejemal1/Leaderboard-web.git',
    demo: 'https://tadessejemal1.github.io/Leaderboard-web/dist/',

  },
  {
    id: 4,
    image: IMG4,
    title: 'Space Travel Hub',
    github: 'https://github.com/Tadessejemal1/Space-Travelers-Hub.git',
    demo: 'https://lokurasrlz.github.io/Space-Travelers/',

  },
  {
    id: 5,
    image: IMG5,
    title: 'Budget App',
    github: 'https://github.com/Tadessejemal1/Budget-App.git',
    demo: 'https://budget-app-project.onrender.com/',

  },
  {
    id: 6,
    image: IMG6,
    title: 'Hotel Booking App',
    github: 'https://github.com/Tadessejemal1/hotel-booking-frontend.git',
    demo: 'https://inspiring-kashata-9d9dfc.netlify.app/',
  },
];
const Portfolios = () => (
  <div id="portfolios">
    <h2>My Recent Works</h2>
    <h5>Portfolio</h5>

    <div className="portfolio-container">
      {
              data.map(({
                id, image, title, github, demo,
              }) => (
                <article key={id} className="portfolio-item">
                  <div className="portfolio-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <p>{title}</p>
                  <div className="portfolio-item-cta">
                    <a href={github} className="btn">Github</a>
                    <a href={demo} className="btn" target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              ))
            }
    </div>
  </div>
);

export default Portfolios;
