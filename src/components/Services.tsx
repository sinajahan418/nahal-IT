import React from "react";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import img from "../components/img/dashed-line-arrow-Top.jpg";

const Services = () => {
  console.log(img);

  return (
    <>
      <div className="flex  md:flex-row flex-col items-center w-full  gap-10 ">
        <section className=" px-8 w-full  md:w-[50%]">
          <img
            className="rounded-lg shadow-xl"
            src="/_next/static/media/about.2e33cca8.jpg"
            alt=""
          />
        </section>
        <section className="rtl mt-7 p-4 w-full  md:w-[50%]">
          <h2 className="font-bold text-green-500 text-2xl">نهال آی تی</h2>
          <span className="font-bold text-black">
            اولین وبسایت خدماتی فروشگاهی در حوضه آی تی در ایران
          </span>
          <p className="py-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
          </p>
          <hr className="h-[2px]  bg-slate-400" />
          <div className="p-5 flex items-center flex-col md:flex-row justify-center gap-7">
            <button className=" bg-[#24a11d] flex items-center text-white justify-center md:justify-start py-1 rounded-lg gap-1 px-7">
              <span>خدمات ما</span>
            </button>
            <span className="flex items-center justify-center gap-1">
              <MdOutlinePhoneEnabled />
              <span className="text-[12px]">
                پشتیبانی 24 ساعته : 0921 88867940 - 09926553469
              </span>
            </span>
          </div>
        </section>
      </div>
      <div className="md:w-[70%] w-full flex items-center justify-center md:justify-end mr-[5%] ">
        <img
          className="img h-40"
          src='/_next/static/media/dashed-line-arrow-Top.3036d558.jpg'
          alt=""
        />
      </div>

      <div className="mb-16">
        <div className="font-bold flex flex-col items-center justify-center m-4 ">
          <h1 className="text-2xl">
            خدمات <em className="text-green-500">نهال آی تی</em>
          </h1>
          <div className=" flex items-center p-1 gap-3 justify-center">
            <div className="h-[2px] w-5 bg-green-500"></div>
            <div className="h-[2px] w-14 bg-green-500"></div>
            <div className="h-[2px] w-5 bg-green-500"></div>
          </div>
        </div>
        <div className="grid px-[5%] m-8 grid-cols-2 md:grid-cols-4 gap-4">
          <div className=" rounded-lg border-[1px] border-slate-300 shadow-xl flex flex-col items-center justify-center">
            <img
              className="w-32 md:w-44 md:p-5 p-3"
              src="/_next/static/media/about.2e33cca8.jpg"
              alt=""
            />
            <span className="font-bold py-3 md:text-[16px] text-[9px]">
              خدمات طراحی اپ موبایل
            </span>
          </div>
          <div className=" rounded-lg border-[1px] border-slate-300 shadow-xl flex flex-col items-center justify-center">
            <img
              className="w-32 md:w-44 md:p-5 p-3"
              src="/_next/static/media/about.2e33cca8.jpg"
              alt=""
            />
            <span className="font-bold py-3 md:text-[16px] text-[9px]">
              خدمات طراحی اپ موبایل
            </span>
          </div>
          <div className=" rounded-lg border-[1px] border-slate-300 shadow-xl flex flex-col items-center justify-center">
            <img
              className="w-32 md:w-44 md:p-5 p-3"
              src="/_next/static/media/about.2e33cca8.jpg"
              alt=""
            />
            <span className="font-bold py-3 md:text-[16px] text-[9px]">
              خدمات طراحی اپ موبایل
            </span>
          </div>
          <div className=" rounded-lg border-[1px] border-slate-300 shadow-xl flex flex-col items-center justify-center">
            <img
              className="w-32 md:w-44 md:p-5 p-3"
              src="/_next/static/media/about.2e33cca8.jpg"
              alt=""
            />
            <span className="font-bold py-3 md:text-[16px] text-[9px]">
              خدمات طراحی اپ موبایل
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
