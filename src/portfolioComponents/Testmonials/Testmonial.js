import React from 'react';
import './Testmonial.css';
import { clients } from './Clients';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

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
