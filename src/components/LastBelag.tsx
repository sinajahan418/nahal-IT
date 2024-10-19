"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SiWordpress } from "react-icons/si";

const LastBelag = () => {
//   const x = window.screen.width;

  return (
    <div className="m-7 mb-11 my-9 pt-5">
      <div className="font-bold flex flex-col mb-8 items-center justify-center m-4 ">
        <h1 className="text-2xl">
          آخرین بلاگ های <em className="text-green-500">نهال آی تی</em>
        </h1>
        <div className=" flex items-center p-1 gap-3 justify-center">
          <div className="h-[2px] w-5 bg-green-500"></div>
          <div className="h-[2px] w-14 bg-green-500"></div>
          <div className="h-[2px] w-5 bg-green-500"></div>
        </div>
      </div>

      <Swiper
        slidesPerView={ 4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex shadow-xl border-[1px]   p-3 rounded-lg border-slate-300 items-center justify-center flex-col">
            <div>
              <span className="text-3xl">
                <SiWordpress />
              </span>
            </div>
            <div className="text-xl font-bold py-3 ">
              <h2>وردپرس چیست؟</h2>
            </div>
            <div className="text-xs font-medium">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله..
              </p>
            </div>
            <button className="flex items-center gap-2 px-3 border-[1px] border-green-500 p-2 text-black font-bold rounded-lg shadow-xl  mt-6 bg-[#c4fdc1]">
              <span>
                <FaArrowLeftLong />
              </span>
              <span className="text-[10px] md:text-[16px]">
                مشاهده ادامه مطلب و ثبت سفارش
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex shadow-xl border-[1px]   p-3 rounded-lg border-slate-300 items-center justify-center flex-col">
            <div>
              <span className="text-3xl">
                <SiWordpress />
              </span>
            </div>
            <div className="text-xl font-bold py-3 ">
              <h2>وردپرس چیست؟</h2>
            </div>
            <div className="text-xs font-medium">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله..
              </p>
            </div>
            <button className="flex items-center gap-2 px-3 border-[1px] border-green-500 p-2 text-black font-bold rounded-lg shadow-xl  mt-6 bg-[#c4fdc1]">
              <span>
                <FaArrowLeftLong />
              </span>
              <span className="text-[10px] md:text-[16px]">
                مشاهده ادامه مطلب و ثبت سفارش
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex shadow-xl border-[1px]   p-3 rounded-lg border-slate-300 items-center justify-center flex-col">
            <div>
              <span className="text-3xl">
                <SiWordpress />
              </span>
            </div>
            <div className="text-xl font-bold py-3 ">
              <h2>وردپرس چیست؟</h2>
            </div>
            <div className="text-xs font-medium">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله..
              </p>
            </div>
            <button className="flex items-center gap-2 px-3 border-[1px] border-green-500 p-2 text-black font-bold rounded-lg shadow-xl  mt-6 bg-[#c4fdc1]">
              <span>
                <FaArrowLeftLong />
              </span>
              <span className="text-[10px] md:text-[16px]">
                مشاهده ادامه مطلب و ثبت سفارش
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex shadow-xl border-[1px]   p-3 rounded-lg border-slate-300 items-center justify-center flex-col">
            <div>
              <span className="text-3xl">
                <SiWordpress />
              </span>
            </div>
            <div className="text-xl font-bold py-3 ">
              <h2>وردپرس چیست؟</h2>
            </div>
            <div className="text-xs font-medium">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله..
              </p>
            </div>
            <button className="flex items-center gap-2 px-3 border-[1px] border-green-500 p-2 text-black font-bold rounded-lg shadow-xl  mt-6 bg-[#c4fdc1]">
              <span>
                <FaArrowLeftLong />
              </span>
              <span className="text-[10px] md:text-[16px]">
                مشاهده ادامه مطلب و ثبت سفارش
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex shadow-xl border-[1px]   p-3 rounded-lg border-slate-300 items-center justify-center flex-col">
            <div>
              <span className="text-3xl">
                <SiWordpress />
              </span>
            </div>
            <div className="text-xl font-bold py-3 text-blue-600">
              <h2>وردپرس چیست؟</h2>
            </div>
            <div className="text-xs font-medium">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله..
              </p>
            </div>
            <button className="flex items-center gap-2 px-3 border-[1px] border-green-500 p-2 text-black font-bold rounded-lg shadow-xl  mt-6 bg-[#c4fdc1]">
              <span>
                <FaArrowLeftLong />
              </span>
              <span className="text-[10px] md:text-[16px]">
                مشاهده ادامه مطلب و ثبت سفارش
              </span>
            </button>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LastBelag;
