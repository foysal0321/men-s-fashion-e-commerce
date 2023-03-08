import React from 'react';
import './SliderTes.css'

import { RiDoubleQuotesL } from "react-icons/ri";
//swiper

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper";

const SliderTes = () => {
    return (
        <div className='swiper'>
             <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="">
        <SwiperSlide className=''>       
        <div className="testi">
            <div className="testi-info py-12">
            <h1 className='py-10 '>CLIENT FEEDBACK</h1>
            <p className='text-center comma pb-8'><RiDoubleQuotesL /></p>
          <p className='pera'>This is by far the best suit I ’ve owned, and I’ve owned custom made suits before. The suit from Peter Mason fit like a glove. So did the shirt I ordered. I recommend booking an appointment to get measured properly and to choose your own fabric. You are the best!</p>
          <p className='name py-8'>FRANKIE MORALES</p>
          <hr />
            </div>      
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className="testi">
            <div className="testi-info py-12">
            <h1 className='py-10 '>CLIENT FEEDBACK</h1>
            <p className='text-center comma pb-8'><RiDoubleQuotesL /></p>
          <p className='pera'>This is by far the best suit I ’ve owned, and I’ve owned custom made suits before. The suit from Peter Mason fit like a glove. So did the shirt I ordered. I recommend booking an appointment to get measured properly and to choose your own fabric. You are the best!</p>
          <p className='name py-8'>FRANKIE MORALES</p>
          <hr />
            </div>      
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testi">
            <div className="testi-info py-12">
            <h1 className='py-10 '>CLIENT FEEDBACK</h1>
            <p className='text-center comma pb-8'><RiDoubleQuotesL /></p>
          <p className='pera'>This is by far the best suit I ’ve owned, and I’ve owned custom made suits before. The suit from Peter Mason fit like a glove. So did the shirt I ordered. I recommend booking an appointment to get measured properly and to choose your own fabric. You are the best!</p>
          <p className='name py-8'>FRANKIE MORALES</p>
          <hr />
            </div>      
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testi">
            <div className="testi-info py-12">
            <h1 className='py-10 '>CLIENT FEEDBACK</h1>
            <p className='text-center comma pb-8'><RiDoubleQuotesL /></p>
          <p className='pera'>This is by far the best suit I ’ve owned, and I’ve owned custom made suits before. The suit from Peter Mason fit like a glove. So did the shirt I ordered. I recommend booking an appointment to get measured properly and to choose your own fabric. You are the best!</p>
          <p className='name py-8'>FRACLIENT FEEDBACK</p>
          <hr />
            </div>      
          </div>
        </SwiperSlide>
        </div>
      </Swiper>
        </div>
    );
};

export default SliderTes;