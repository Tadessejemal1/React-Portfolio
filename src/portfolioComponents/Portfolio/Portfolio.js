import React from 'react';
import Product from '../Work/Product';
import './Portfolio.css';
import Img1 from '../../assets/Home/img/portfolios.PNG';;

const products = [
    {
      id: 1,
      img:Img1,
      link: "http://lama.dev",
    },
    {
      id: 2,
      img: Img1,
      link: "http://lama.dev",
    },
    {
      id: 3,
      img: Img1,
      link: "http://lama.dev",
    },
    {
      id: 4,
      img: Img1,
      link: "http://lama.dev",
    },
    {
      id: 5,
      img: Img1,
      link: "../assets/Home/img/profile2.jpg",
    },
    {
      id: 6,
      img: Img1,
      link: "../assets/Home/img/profile2.jpg",
    },
  ];

function Portfolio() {
  return (
    <div className='portfolio'>
    <div className='personal-info'>
    <div className='row'>
      <div className='info-item'>
        <p>Birthday: <span>16 jan 1991</span></p>
      </div>
      <div className='info-item'>
        <p>Age: <span>30</span></p>
      </div>
      <div className='info-item'>
        <p>Website : <span>www.domain.com</span></p>
      </div>
      <div className='info-item'>
        <p>Email: <span>tadessejemal63@gmail.com</span></p>
      </div>
      <div className='info-item'>
        <p>Degree: <span>CS</span></p>
      </div>
      <div className='info-item'>
        <p>City: <span>Addis Ababa</span></p>
      </div>
    </div>
  </div>  
        <div className='p-title'>
            <h1>My work</h1>
              <p className='p-desc'>
                  this is the the work as front end developer in different area with 
                  using different front end technology
              </p>
            
        </div>
        <div className="p-list">
        {products.map((id, img, link) => (
            <Product key={id} img={img} link={link} />
          ))}
          
        </div>
    </div>
  )
}

export default Portfolio;