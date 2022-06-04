import React from 'react';
import './Testmonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/Home/img/Tibebu Photo.PNG';
import img2 from '../../assets/Home/img/Wossen Photo.PNG';
import img3 from '../../assets/Home/img/Muha Photo.PNG';
import img4 from '../../assets/Home/img/Mula Photo.PNG';
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";


const clients = [
    
  {
      Img:img1,
      review:'Tadesse is a web developer he will do everything with a short period of time i will recommended him for another work in the future thanks for everything ',
      Name: 'Tibebu Eneyew',
      Work:'web developer'

  },
  {
      Img:img2,
      review:'Tadesse did a great job hunting for the requested information. Very reliable, high quality, and fast! ',
      Name: 'Wossen Abebe',
      Work:'web developer'

  },
  {
      Img:img3,
      review:'Tadesse Every single Project Done With the time Frame. I am happy work with Tadesse,and will definitely engage him.',
      Name: 'Muhabawo Amare',
      Work:'Communication Engineer'

  },
  {
      Img:img4,
      review:'Tadesse showed familiarity with the codebase ,and completed it under the time estimated. I am continuing to work with him on other projects',
      Name: 'Mulugeta Worku',
      Work:'Software Engineer'
  }
]
function Testmonial() {
  return (
  
        <div className='t-main' id="testimonial">
          <div className='t-heading'>
            <h1>Testmonials</h1>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
          </div>
          <Swiper
          // install Swiper modules
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={40}
          pagination={{ clickable: true }}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img src={client.Img} alt="" />
                  <span>{client.review}</span>
                  <span>{client.Name}</span>
                  <span>{client.Work} </span>
                </div>
              </SwiperSlide>
            );
          })}
          </Swiper>
        </div>
  )
}

export default Testmonial;
