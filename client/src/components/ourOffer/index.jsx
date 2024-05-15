import style from "./style.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const OurOffer = () => {
  return (
    <div className={style.ourOffer}>
      <div className={style.container}>
        <span>OUR OFFERS</span>
        <h1>Our Offer This Summer</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <Swiper className={style.mySwiper}>
          <SwiperSlide className={style.swiper}>Slide 1</SwiperSlide>
          <SwiperSlide className={style.swiper}>Slide 2</SwiperSlide>
          <SwiperSlide className={style.swiper}>Slide 3</SwiperSlide>
          <SwiperSlide className={style.swiper}>Slide 4</SwiperSlide>
          <SwiperSlide className={style.swiper}>Slide 5</SwiperSlide>
          <SwiperSlide className={style.swiper}>Slide 6</SwiperSlide>
          <SwiperSlide className={style.swiper}>Slide 7</SwiperSlide>
          <SwiperSlide className={style.swiper}>Slide 8</SwiperSlide>
          <SwiperSlide className={style.swiper}>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurOffer;
