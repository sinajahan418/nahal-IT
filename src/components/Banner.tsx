"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "./img/photo_2024-10-18_00-37-44.jpg";

const Banner = () => {
  console.log(img);

  return (
    <div className="m-2 h-[200px] sm:h-[300px] md:h-[500px]  md:m-8 sm:m-4 p-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000 }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={300}
            height={300}
            className=" rounded-lg shadow-lg"
            src="/_next/static/media/photo_2024-10-18_00-37-32.272aec7f.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={300}
            height={300}
            className=" rounded-lg shadow-lg"
            src="/_next/static/media/photo_2024-10-18_00-37-38.d8417ec7.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={300}
            height={300}
            className=" rounded-lg shadow-lg"
            src="/_next/static/media/photo_2024-10-18_00-37-44.9638d0f2.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
