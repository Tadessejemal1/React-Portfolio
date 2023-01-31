/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
import React from 'react';
import './Testmonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import img1 from '../../assets/Home/img/angel.JPG';
import img2 from '../../assets/Home/img/marco.JPG';
import img3 from '../../assets/Home/img/kuma.JPG';
import img4 from '../../assets/Home/img/matias.JPG';

const clients = [

  {
    Img: img1,
    review: "Tadesse is one of the most excellent Software developers I've ever met, he proved his commitment, determination, and willingness to contribute to teamwork.",
    Name: 'Angel Uray',
    Work: 'web developer',

  },
  {
    Img: img2,
    review: 'Choosing Tadesse will be an excellent choice as every team needs people who complete their work on time and in a professional manner.',
    Name: 'Marco Vincio',
    Work: 'Full-Stack developer',

  },
  {
    Img: img3,
    review: 'Tadesse is attentive to details and undoubtedly a concise person when it comes to dealing with development and technological issues.',
    Name: 'Kumilachew Getie',
    Work: 'IT Engineer',

  },
  {
    Img: img4,
    review: 'Tadesse showed familiarity with the codebase ,and completed it under the time estimated. I am continuing to work with him on other projects.',
    Name: 'Matias Aguirre',
    Work: 'Software Engineer',
  },
];
function Testmonial() {
  return (

    <div id="testimonial" className="t-main">
      <h1 className="heading">Testmonials</h1>
      <div className="t-heading">
        <div className="blur t-blur1" style={{ background: 'var(--purple)' }} />
        <div className="blur t-blur2" style={{ background: 'skyblue' }} />
      </div>
      <Swiper
          // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={40}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.Img} alt="" />
              <span>{client.review}</span>
              <span>{client.Name}</span>
              <span>
                {client.Work}
                {' '}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testmonial;
