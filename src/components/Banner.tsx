"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="m-8 rounded-lg shadow-xl">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 1500 }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className=" rounded-lg shadow-lg"
            src="https://set-coffee.com/wp-content/uploads/2023/12/slide.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-lg shadow-lg"
            src="https://set-coffee.com/wp-content/uploads/2021/10/winter-slie.jpg"
            alt="Slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-lg shadow-lg"
            src="https://set-coffee.com/wp-content/uploads/2022/06/fall.jpg"
            alt="Slide"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
